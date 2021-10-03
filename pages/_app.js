import { useEffect } from 'react';
import { useRouter } from 'next/router';
import CookieConsent, { getCookieConsentValue } from 'react-cookie-consent';

import * as ga from '../lib/ga';
import '../styles/index.css';

function MyApp({ Component, pageProps }) {
    const router = useRouter();

    useEffect(() => {
        const cookieConsent = getCookieConsentValue();
        if (cookieConsent) {
            ga.consent();
            const handleRouteChange = (url) => {
                ga.pageview(url);
            };
            //When the component is mounted, subscribe to router changes
            //and log those page views
            router.events.on('routeChangeComplete', handleRouteChange);

            // If the component is unmounted, unsubscribe
            // from the event with the `off` method

            return () => {
                router.events.off('routeChangeComplete', handleRouteChange);
            };
        }
    }, [router.events]);

    return (
        <>
            <Component {...pageProps} />
            <CookieConsent
                buttonText='Aceptar'
                declineButtonText='Rechazar'
                containerClasses='max-w-screen-lg mx-auto fixed bg-white inset-x-5 p-5 mb-5 rounded-lg drop-shadow-2xl flex gap-4 flex-wrap md:flex-nowrap text-center md:text-left items-center justify-center md:justify-between'
                buttonClasses='ml-5 p-2 pl-5 pr-5 text-white text-lg rounded-lg transition-colors duration-700 transform bg-gray-800 hover:bg-gray-900 focus:border-4 focus:border-gray-800'
                declineButtonClasses='p-2 pl-5 pr-5 text-gray-900 text-lg focus:outline-none hover:underline'
                contentClasses='text-lg mb-5 md:m-0'
                disableStyles
                enableDeclineButton
                debug={process.env.NODE_ENV !== 'production'}
            >
                Esta página utiliza cookies para tener un mejor seguimiento de sus artículos.
            </CookieConsent>
        </>
    );
}

export default MyApp;
