import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';
import NextLink from 'next/link';
import cn from 'classnames';
import MobileMenu from './mobile-menu';

import favIcon from '../public/favicon/android-chrome-192x192.png';

function NavItem({ href, text }) {
    const router = useRouter();
    const isActive = router.asPath === href;

    return (
        <NextLink href={href}>
            <a
                className={cn(
                    isActive
                        ? 'font-semibold text-gray-800 dark:text-gray-200'
                        : 'font-normal text-gray-600 dark:text-gray-400',
                    'hidden md:inline-block p-1 sm:px-3 sm:py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-all',
                )}
            >
                <span className='capsize'>{text}</span>
            </a>
        </NextLink>
    );
}

export default function Header() {
    return (
        <header className='flex w-screen justify-center fixed bg-white tracking-tight md:tracking-tighter leading-tight p-5 top-0 shadow-sm border border-gray-300 z-50'>
            <nav className='flex w-full max-w-screen-xl items-center justify-between'>
                <Link href='/'>
                    <a>
                        <Image
                            src={favIcon}
                            className='cursor-pointer'
                            alt='Trading Bitácora Logo'
                            width={32}
                            height={32}
                        />
                    </a>
                </Link>
                <div>
                    <MobileMenu />
                    <NavItem href='/' text='Inicio' />
                    <NavItem href='/contacto' text='Contacto' />
                    <NavItem href='/blog' text='Blog' />
                </div>
            </nav>
        </header>
    );
}
