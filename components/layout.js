import Footer from './footer';
import Meta from './meta';
import FabButton from './fab-button';
import Header from './header';

export default function Layout({ preview, children }) {
    return (
        <>
            <Meta />
            <Header />
            <div className='min-h-screen'>
                <main className='my-20'>{children}</main>
            </div>
            {preview && <FabButton />}
            <Footer />
        </>
    );
}
