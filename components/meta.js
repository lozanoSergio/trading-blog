import Head from 'next/head';
import { CMS_NAME, DESCRIPTION, HOME_OG_IMAGE_URL } from '../lib/constants';

export default function Meta({ title, description, image }) {
    const defaultTitle = `${CMS_NAME} | Aprende la forma de hacer trading`;
    return (
        <Head>
            <link rel='manifest' href='/site.webmanifest' />
            <link rel='apple-touch-icon' sizes='180x180' href='/favicon/apple-touch-icon.png' />
            <link rel='icon' type='image/png' sizes='32x32' href='/favicon/favicon-32x32.png' />
            <link rel='icon' type='image/png' sizes='16x16' href='/favicon/favicon-16x16.png' />
            <link rel='mask-icon' href='/favicon/safari-pinned-tab.svg' color='#000000' />
            <link rel='shortcut icon' href='/favicon/favicon.ico' />
            <link
                rel='preload'
                href='/fonts/ibm-plex-sans-var.woff2'
                as='font'
                type='font/woff2'
                crossOrigin='anonymous'
            />
            <meta name='msapplication-TileColor' content='#ffffff' />
            <meta name='msapplication-config' content='/favicon/browserconfig.xml' />
            <meta name='theme-color' content='#ffffff' />
            <link rel='alternate' type='application/rss+xml' href='/feed.xml' />
            <title>{title ?? defaultTitle}</title>
            <meta name='description' content={description ?? DESCRIPTION} />
            <meta property='og:image' content={image ?? HOME_OG_IMAGE_URL} />
        </Head>
    );
}
