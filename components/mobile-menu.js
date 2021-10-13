import cn from 'classnames';
import Link from 'next/link';
import useDelayedRender from 'use-delayed-render';
import { useState, useEffect } from 'react';

import styles from '../styles/mobile-menu.module.css';

export default function MobileMenu() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { mounted: isMenuMounted, rendered: isMenuRendered } = useDelayedRender(isMenuOpen, {
        enterDelay: 20,
        exitDelay: 300,
    });

    function toggleMenu() {
        if (isMenuOpen) {
            setIsMenuOpen(false);
            document.body.style.overflow = '';
        } else {
            setIsMenuOpen(true);
            document.body.style.overflow = 'hidden';
        }
    }

    useEffect(() => {
        return function cleanup() {
            document.body.style.overflow = '';
        };
    }, []);

    return (
        <>
            <button
                className={cn(styles.burger, 'visible md:hidden')}
                aria-label='Toggle menu'
                type='button'
                onClick={toggleMenu}
            >
                <MenuIcon data-hide={isMenuOpen} />
                <CrossIcon data-hide={!isMenuOpen} />
            </button>
            {isMenuMounted && (
                <ul
                    className={cn(
                        styles.menu,
                        'flex flex-col absolute bg-gray-100 dark:bg-gray-900',
                        isMenuRendered && styles.menuRendered,
                    )}
                >
                    <li
                        className='border-b border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100 text-sm font-semibold'
                        style={{ transitionDelay: '150ms' }}
                    >
                        <Link href='/'>
                            <a className='flex w-auto pb-4'>Inicio</a>
                        </Link>
                    </li>
                    <li
                        className='border-b border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100 text-sm font-semibold'
                        style={{ transitionDelay: '175ms' }}
                    >
                        <Link href='/blog'>
                            <a className='flex w-auto pb-4'>Blog</a>
                        </Link>
                    </li>
                    <li
                        className='border-b border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100 text-sm font-semibold'
                        style={{ transitionDelay: '200ms' }}
                    >
                        <Link href='/contacto'>
                            <a className='flex w-auto pb-4'>Contacto</a>
                        </Link>
                    </li>
                </ul>
            )}
        </>
    );
}

function MenuIcon(props) {
    return (
        <svg
            className='h-5 w-5 absolute text-gray-900'
            viewBox='0 0 24 24'
            width='24'
            height='24'
            stroke='currentColor'
            strokeWidth='0.5'
            strokeLinecap='round'
            strokeLinejoin='round'
            shapeRendering='geometricPrecision'
            {...props}
        >
            <path d='M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z' />
        </svg>
    );
}

function CrossIcon(props) {
    return (
        <svg
            className='h-5 w-5 absolute text-gray-900'
            viewBox='0 0 24 24'
            width='24'
            height='24'
            stroke='currentColor'
            strokeWidth='0.5'
            strokeLinecap='round'
            strokeLinejoin='round'
            shapeRendering='geometricPrecision'
            {...props}
        >
            <path d='M23 20.168l-8.185-8.187 8.185-8.174-2.832-2.807-8.182 8.179-8.176-8.179-2.81 2.81 8.186 8.196-8.186 8.184 2.81 2.81 8.203-8.192 8.18 8.192z' />
        </svg>
    );
}
