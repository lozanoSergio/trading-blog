import dynamic from 'next/dynamic';

import Footer from './footer';
import FabButton from './fab-button';
import Header from './header';
import Meta from './meta';

const DynamicCookieAlert = dynamic(() => import('./cookies-alert'));

export default function Layout({ preview, children }) {
    return (
        <>
            <Header />
            <Meta />
            <div className='min-h-screen'>
                <main className='my-20'>{children}</main>
            </div>
            {preview && <FabButton />}
            <DynamicCookieAlert />
            <Footer />
        </>
    );
}
