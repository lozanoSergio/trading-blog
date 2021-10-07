import { useRouter } from 'next/router';
import { useEffect } from 'react';
import ReactGA from 'react-ga';
import { getCookieConsentValue } from 'react-cookie-consent';

export const initGA = () => {
    ReactGA.initialize(process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS);
};

export const logPageView = (url) => {
    ReactGA.set({ page: url });
    ReactGA.pageview(url);
};

export const logEvent = (category = '', action = '') => {
    if (category && action) {
        ReactGA.event({ category, action });
    }
};

export const logException = (description = '', fatal = false) => {
    if (description) {
        ReactGA.exception({ description, fatal });
    }
};

export const useAnalytics = () => {
    const router = useRouter();

    const cookieConsent = getCookieConsentValue('hide_cookie_notice');

    useEffect(() => {
        if (typeof window === undefined) return;

        const handleRouteChange = (url) => {
            logPageView(url);
        };

        if (!window.GA_INITIALIZED && cookieConsent) {
            initGA();
            window.GA_INITIALIZED = true;
        }

        router.events.on('routeChangeComplete', handleRouteChange);

        return () => {
            if (typeof window === undefined) return;
            router.events.off('routeChangeComplete', handleRouteChange);
        };
    }, [cookieConsent, router.events]);
};
