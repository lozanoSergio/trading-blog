export default function resolveProductionUrl(doc) {
    const previewUrl = new URL(process.env.NEXT_PUBLIC_URL);

    previewUrl.pathname = `/api/preview`;
    previewUrl.searchParams.append(`secret`, process.env.SANITY_PREVIEW_SECRET);
    previewUrl.searchParams.append(`slug`, doc?.slug?.current ?? `/`);

    return previewUrl.toString();
}
