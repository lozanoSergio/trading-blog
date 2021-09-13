import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
    render() {
        return (
            <Html lang='es'>
                <Head />
                <body className='h-screen bg-gray-100'>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}
