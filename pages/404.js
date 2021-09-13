import Link from 'next/link';
import Image from 'next/image';
import bg from '../public/images/bg-404.svg';

export default function Custom404() {
    return (
        <div className='bg-indigo-900 relative overflow-hidden h-screen'>
            <Image src={bg} layout='fill' quality={100} className='absolute h-full w-full object-cover' />
            <div className='inset-0 bg-black opacity-25 absolute'></div>
            <div className='container mx-auto px-6 md:px-12 relative z-10 flex items-center py-32 xl:py-40'>
                <div className='w-full font-mono flex flex-col items-center relative z-10'>
                    <h1 className='font-extrabold text-5xl text-center text-white leading-tight mt-4'>
                        Has apuntado demasiado alto...
                    </h1>
                    <Link href='/'>
                        <a className='text-white cursor-pointer p-4 mt-8 border border-white hover:bg-white hover:text-black'>
                            Bajar a la tierra
                        </a>
                    </Link>
                    <p className='font-extrabold text-8xl my-40 text-white animate-bounce'>404</p>
                </div>
            </div>
        </div>
    );
}
