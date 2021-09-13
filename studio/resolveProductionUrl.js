const previewSecret =
    'skFdgLcvqZEqaVVg0X5u0QcOrvOpHLgWn2CFy9GMasHrRblIKST1FkhuYnMRgefpSHp1WAWFJyJqwWE3sTCShksgQ3sr5Pwvzx5YZyOAJnywynNdsDAAP3zmf4rkfIo1mK8V4lOtHDSQfkKXdJUCQ2T3p42WDe1JAyISNNlldIDdzOl0ZXIC';

// Replace with your deployed studio when you go live
const remoteUrl = `https://your-studio.sanity.studio`;
const localUrl = `http://localhost:3000`;

export default function resolveProductionUrl(doc) {
    const baseUrl = window.location.hostname === 'localhost' ? localUrl : remoteUrl;

    const previewUrl = new URL(baseUrl);

    previewUrl.pathname = `/api/preview`;
    previewUrl.searchParams.append(`secret`, previewSecret);
    previewUrl.searchParams.append(`slug`, doc?.slug?.current ?? `/`);

    return previewUrl.toString();
}
