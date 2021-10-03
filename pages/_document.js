import Document, { Html, Head, Main, NextScript } from 'next/document';
import { getCookieConsentValue } from 'react-cookie-consent';

export default class MyDocument extends Document {
    render() {
        return (
            <Html lang='es'>
                <Head>
                    <script
                        async
                        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
                    />
                    <script
                        dangerouslySetInnerHTML={{
                            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('consent', 'default', {
                'analytics_storage': 'denied'
            });
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
          `,
                        }}
                    />
                </Head>
                <body className='h-screen bg-gray-100'>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}
