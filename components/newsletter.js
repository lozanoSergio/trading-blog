import { useState, useRef } from 'react';
import Link from 'next/link';
import useSWR from 'swr';

import SuccessMessage from '../components/success-message';
import ErrorMessage from '../components/error-message';
import LoadingSpinner from '../components/loader';

import fetcher from '../lib/fetcher';
import * as ga from '../lib/ga';

export default function NewsLetter() {
    const [form, setForm] = useState({ state: 'initial' });
    const inputEl = useRef(null);
    const { data } = useSWR('/api/subscribers', fetcher);
    const subscriberCount = new Number(data?.count);

    const subscribe = async (e) => {
        e.preventDefault();
        setForm({ state: 'loading' });

        const res = await fetch('/api/subscribe', {
            body: JSON.stringify({
                email: inputEl.current.value,
            }),
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'POST',
        });

        const { error } = await res.json();
        if (error) {
            const errorText = error.includes('email address was not confirmed yet')
                ? 'Este correo aún no ha sido confirmado.'
                : 'Se ha producido un error prueba de nuevo más tarde.';
            setForm({
                state: 'error',
                message: errorText,
            });
            return;
        }

        ga.event({
            action: 'newsletter',
            params: { event_category: 'suscripcion', event_label: 'blog', value: '0' },
        });

        inputEl.current.value = '';
        setForm({
            state: 'success',
            message: `¡Ya estas en la lista! Ahora recibirás un aviso cada vez que publique un nuevo artículo`,
        });
    };

    return (
        <div className='border border-indigo-200 rounded p-6 my-4 w-full bg-indigo-50'>
            <p className='text-lg md:text-xl font-bold text-gray-900'>Subscribete a la newsletter</p>
            <p className='my-1 text-gray-800'>
                Recibe publicaciones sobre análisis de mercado, trading y acceso anticipado a nuevos artículos.
            </p>
            <form className='relative my-4' onSubmit={subscribe}>
                <input
                    ref={inputEl}
                    aria-label='Email para la newsletter'
                    placeholder='satoshi@nakamoto.com'
                    type='email'
                    autoComplete='email'
                    required
                    className='px-4 py-5 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full border-gray-300 rounded-md bg-white text-gray-900'
                />
                <button
                    className='flex items-center justify-center absolute top-2.5 right-4 p-2 pl-5 pr-5 text-white text-lg rounded-lg transition-colors duration-700 transform bg-gray-800 hover:bg-gray-900 focus:border-4 focus:border-gray-800'
                    type='submit'
                >
                    {form.state === 'loading' ? <LoadingSpinner /> : 'Subscribete'}
                </button>
            </form>
            {form.state === 'error' ? (
                <ErrorMessage>{form.message}</ErrorMessage>
            ) : form.state === 'success' ? (
                <SuccessMessage>{form.message}</SuccessMessage>
            ) : (
                <p className='text-sm text-gray-800'>
                    {`${subscriberCount > 0 ? subscriberCount.toLocaleString() : '-'} subscriptores – `}
                </p>
            )}
        </div>
    );
}
