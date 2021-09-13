import SanityClient from './sanity-client';

export default async function viewCounter(req, res) {
    if (process.env.NODE_ENV === 'development') return;
    const { postId } = JSON.parse(req.body);
    try {
        await SanityClient.patch(postId).inc({ views: 1 }).commit();
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: `Couldn't count view`, err });
    }
    return res.status(200).json({ message: 'View incremented' });
}
