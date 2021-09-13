import Link from 'next/link';
import Image from 'next/image';
import favIcon from '../public/favicon/android-chrome-192x192.png';

export default function Header() {
    return (
        <header className='flex w-screen justify-center fixed bg-white tracking-tight md:tracking-tighter leading-tight p-5 top-0 shadow-sm border border-gray-300 z-50'>
            <nav className='flex w-full max-w-screen-xl items-center justify-between'>
                <Link href='/'>
                    <>
                        <Image
                            src={favIcon}
                            className='cursor-pointer'
                            alt='Trading Bitácora Logo'
                            width={32}
                            height={32}
                        />
                    </>
                </Link>
                <div>
                    <Link href='/contacto'>
                        <a className='p-4'>Contacto</a>
                    </Link>
                    <Link href='/blog'>
                        <a className='p-4'>Blog</a>
                    </Link>
                    <Link href='/'>
                        <a className='p-4'>Inicio</a>
                    </Link>
                </div>
            </nav>
        </header>
    );
}
