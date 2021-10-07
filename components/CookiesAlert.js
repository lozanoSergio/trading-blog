import CookieConsent from 'react-cookie-consent';

export default function CookiesAlert() {
    return (
        <CookieConsent
            buttonText='Aceptar'
            declineButtonText='Rechazar'
            containerClasses='max-w-screen-lg mx-auto fixed bg-white inset-x-5 p-5 mb-5 rounded-lg shadow-2xl flex gap-4 flex-wrap md:flex-nowrap text-center md:text-left items-center justify-center md:justify-between'
            buttonClasses='ml-5 p-2 pl-5 pr-5 text-white text-lg rounded-lg transition-colors duration-700 transform bg-gray-800 hover:bg-gray-900 focus:border-4 focus:border-gray-800'
            declineButtonClasses='p-2 pl-5 pr-5 text-gray-900 text-lg focus:outline-none hover:underline'
            contentClasses='text-lg mb-5 md:m-0'
            disableStyles
            enableDeclineButton
            cookieName='hide_cookie_notice'
            debug={process.env.NODE_ENV !== 'production'}
        >
            Esta página utiliza cookies para tener un mejor seguimiento de sus artículos.
        </CookieConsent>
    );
}
