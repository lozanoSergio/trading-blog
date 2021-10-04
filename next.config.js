module.exports = {
    experimental: {
        esmExternals: true,
        swcMinify: false,
    },
    reactStrictMode: true,

    async headers() {
        return [
            {
                source: '/(.*)',
                headers: securityHeaders,
            },
        ];
    },
    webpack: (config, { dev, isServer }) => {
        // Replace React with Preact only in client production build
        if (!dev && !isServer) {
            Object.assign(config.resolve.alias, {
                react: 'preact/compat',
                'react-dom/test-utils': 'preact/test-utils',
                'react-dom': 'preact/compat',
            });
        }

        return config;
    },
};

// https://securityheaders.com
const ContentSecurityPolicy = `
    default-src 'self';
    script-src 'self' 'unsafe-eval' 'unsafe-inline' *.youtube.com *.t.me *.twitter.com *.googletagmanager.com cdn.sanity.io;
    child-src *.youtube.com *.google.com *.twitter.com *.sanity.io;
    style-src 'self' 'unsafe-inline' cdn.sanity.io;
    img-src * blob: data:;
    media-src 'none';
    connect-src *;
    font-src 'self';
`;

const securityHeaders = [
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP
    {
        key: 'Content-Security-Policy',
        value: ContentSecurityPolicy.replace(/\n/g, ''),
    },
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referrer-Policy
    {
        key: 'Referrer-Policy',
        value: 'origin-when-cross-origin',
    },
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options
    {
        key: 'X-Frame-Options',
        value: 'DENY',
    },
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Content-Type-Options
    {
        key: 'X-Content-Type-Options',
        value: 'nosniff',
    },
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-DNS-Prefetch-Control
    {
        key: 'X-DNS-Prefetch-Control',
        value: 'on',
    },
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Strict-Transport-Security
    {
        key: 'Strict-Transport-Security',
        value: 'max-age=31536000; includeSubDomains; preload',
    },
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Feature-Policy
    // Opt-out of Google FLoC: https://amifloced.org/
    {
        key: 'Permissions-Policy',
        value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()',
    },
];
