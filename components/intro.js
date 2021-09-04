import { CMS_NAME, CMS_URL } from '../lib/constants';

export default function Intro() {
    return (
        <section className='flex-col md:flex-row flex items-center mt-16 mb-16 md:mb-12 align-bottom'>
            <h1 className='text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8'>Trading Blog.</h1>
            <h4 className='text-center md:text-left text-lg mb-4 md:pl-8 self-end'>
                Aprende la manera de hacer trading de forma consciente y efectiva.{' '}
            </h4>
        </section>
    );
}
