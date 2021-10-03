// log the pageview with their URL
export const pageview = (url) => {
    return window.gtag('config', process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS, {
        page_path: url,
    });
};

export const event = ({ action, params }) => {
    return window.gtag('event', action, params);
};

export const consent = () => {
    return window.gtag('consent', 'update', {
        analytics_storage: 'granted',
    });
};
