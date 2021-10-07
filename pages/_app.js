import { useAnalytics } from '../lib/analytics';
import '../styles/index.css';

function MyApp({ Component, pageProps }) {
    useAnalytics();

    return <Component {...pageProps} />;
}

export default MyApp;
