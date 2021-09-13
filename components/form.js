import { useState } from 'react';
import { useForm } from 'react-hook-form';

export default function Form({ _id }) {
    const [formData, setFormData] = useState();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [hasSubmitted, setHasSubmitted] = useState(false);
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();
    const onSubmit = async (data) => {
        setIsSubmitting(true);
        let response;
        setFormData(data);
        try {
            response = await fetch('/api/createComment', {
                method: 'POST',
                body: JSON.stringify(data),
                type: 'application/json',
            });
            setIsSubmitting(false);
            setHasSubmitted(true);
        } catch (err) {
            setFormData(err);
        }
    };

    if (isSubmitting) {
        return <h3>Subiendo comentario…</h3>;
    }
    if (hasSubmitted) {
        return (
            <>
                <h3>¡Gracias por tu comentario!</h3>
                <ul>
                    <li>
                        Nombre: {formData.name} <br />
                        Email: {formData.email} <br />
                        Comentario: {formData.comment}
                    </li>
                </ul>
            </>
        );
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className='w-full max-w-lg' disabled>
            <input {...register('_id')} type='hidden' name='_id' value={_id} />
            <label className='block mb-5'>
                <span className='text-gray-700'>Nombre</span>
                <input
                    name='name'
                    {...register('name', { required: true })}
                    className='shadow border rounded py-2 px-3 form-input mt-1 block w-full'
                    placeholder='Nombre o nickname'
                />
            </label>
            <label className='block mb-5'>
                <span className='text-gray-700'>Email</span>
                <input
                    name='email'
                    type='email'
                    {...register('email', { required: true })}
                    className='shadow border rounded py-2 px-3 form-input mt-1 block w-full'
                    placeholder='tu@email.com'
                />
            </label>
            <label className='block mb-5'>
                <span className='text-gray-700'>Commentario</span>
                <textarea
                    {...register('comment', { required: true })}
                    name='comment'
                    className='shadow border rounded py-2 px-3  form-textarea mt-1 block w-full'
                    rows='8'
                    placeholder='Comenta que te ha parecido...'
                ></textarea>
            </label>
            {/* errors will return when field validation fails  */}
            {errors.exampleRequired && <span>This field is required</span>}
            <input
                type='submit'
                className='shadow bg-gray-900 hover:bg-gray-800 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded'
            />
        </form>
    );
}
