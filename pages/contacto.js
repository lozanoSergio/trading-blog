import Image from 'next/image';
import Head from 'next/head';
import Layout from '../components/layout';
import Human from '../public/images/sergio.webp';
import { CMS_NAME } from '../lib/constants';

function About() {
    return (
        <Layout>
            <Head>
                <title>{CMS_NAME} | Contacto </title>
            </Head>
            <div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
                <div className='grid gap-10 lg:grid-cols-2'>
                    <div className='lg:pr-10'>
                        <h5 className='mb-4 text-4xl font-extrabold leading-none'>Hola soy Sergio Lozano</h5>
                        <p className='mb-6 text-gray-900'>
                            El objetivo de este blog es que otras personas, incluido yo mismo, logren sus objetivos
                            financieros. Durante los últimos años me he espcializado en trading de crypto monedas, pero
                            lo que explico en este pequeño blog puede aplicarse prácticamente en cualquier mercado.
                            <br />
                            <br /> Si tienes cualquier duda o consulta ponte en contacto conmigo a través de
                            <strong> sergio@tradingbitacora.com</strong> o las redes sociales que te dejo justo debajo.
                            <br /> <br />
                            Recuerda si lo que aquí escribo te ha sido de utilidad, a otras personas también puede.
                            Comparte este blog con aquellas personas que busquen conseguir mejores resultado mediante el
                            trading, no te costará nada y a mi me permitirá seguir creando contenido. Muchas gracias y
                            ¡continua creciendo!
                        </p>
                        <hr className='mb-5 border-gray-300' />
                        <div className='flex items-center space-x-4'>
                            <a
                                href='/'
                                className='text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400'
                            >
                                <svg viewBox='0 0 24 24' fill='currentColor' className='h-5'>
                                    <path d='M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z' />
                                </svg>
                            </a>
                            <a
                                href='/'
                                className='text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400'
                            >
                                <svg viewBox='0 0 24 24' fill='currentColor' className='h-5'>
                                    <path d='m9.417 15.181-.397 5.584c.568 0 .814-.244 1.109-.537l2.663-2.545 5.518 4.041c1.012.564 1.725.267 1.998-.931l3.622-16.972.001-.001c.321-1.496-.541-2.081-1.527-1.714l-21.29 8.151c-1.453.564-1.431 1.374-.247 1.741l5.443 1.693 12.643-7.911c.595-.394 1.136-.176.691.218z' />
                                </svg>
                            </a>
                            <a
                                href='/'
                                className='text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400'
                            >
                                <svg viewBox='0 0 24 24' fill='currentColor' className='h-6'>
                                    <path d='M23.8,7.2c0,0-0.2-1.7-1-2.4c-0.9-1-1.9-1-2.4-1C17,3.6,12,3.6,12,3.6h0c0,0-5,0-8.4,0.2 c-0.5,0.1-1.5,0.1-2.4,1c-0.7,0.7-1,2.4-1,2.4S0,9.1,0,11.1v1.8c0,1.9,0.2,3.9,0.2,3.9s0.2,1.7,1,2.4c0.9,1,2.1,0.9,2.6,1 c1.9,0.2,8.2,0.2,8.2,0.2s5,0,8.4-0.3c0.5-0.1,1.5-0.1,2.4-1c0.7-0.7,1-2.4,1-2.4s0.2-1.9,0.2-3.9v-1.8C24,9.1,23.8,7.2,23.8,7.2z M9.5,15.1l0-6.7l6.5,3.4L9.5,15.1z' />
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div>
                        <Image
                            className='object-cover w-full h-56 rounded shadow-lg sm:h-96'
                            src={Human}
                            alt='Imágen de contacto'
                        />
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default About;
