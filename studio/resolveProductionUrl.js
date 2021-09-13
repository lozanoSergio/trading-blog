const previewSecret = process.env.SANITY_STUDIO_PREVIEW_SECRET;

export default function resolveProductionUrl(document) {
    return `${process.env.SANITY_STUDIO_PREVIEW_URL}/api/preview?secret=${previewSecret}&slug=${document.slug.current}`;
}
