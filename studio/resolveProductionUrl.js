export default function resolveProductionUrl(doc) {
    const previewUrl = new URL(process.env.VERCEL_URL ?? 'http://localhost:3000');

    previewUrl.pathname = `/api/preview`;
    previewUrl.searchParams.append(`secret`, '5otkU30CV9UiX0M35g1MzEC4pQtgHSCL');
    previewUrl.searchParams.append(`slug`, doc?.slug?.current ?? `/`);

    return previewUrl.toString();
}
