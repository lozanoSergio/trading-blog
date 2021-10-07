import Document, { Html, Head, Main, NextScript } from 'next/document';
import Meta from '../components/meta';

export default class MyDocument extends Document {
    render() {
        return (
            <Html lang='es'>
                <Head>
                    <Meta />
                </Head>
                <body className='h-screen bg-gray-100'>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}
