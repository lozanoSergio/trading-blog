import dynamic from 'next/dynamic';

import Footer from './footer';
import FabButton from './fab-button';
import Header from './header';

const DynamicCookieAlert = dynamic(() => import('../components/CookiesAlert'));

export default function Layout({ preview, children }) {
    return (
        <>
            <Header />
            <div className='min-h-screen'>
                <main className='my-20'>{children}</main>
            </div>
            {preview && <FabButton />}
            <DynamicCookieAlert />
            <Footer />
        </>
    );
}
