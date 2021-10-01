import { superClient, picoClient, previewClient } from './sanity';

const getUniquePosts = (posts) => {
    const slugs = new Set();
    return posts.filter((post) => {
        if (slugs.has(post.slug)) {
            return false;
        } else {
            slugs.add(post.slug);
            return true;
        }
    });
};

const postFields = `
  _id,
  title,
  summary,
  views,
  'date': publishedAt,
  'slug': slug.current,
  'coverImage': mainImage,
  'author': author->{name, 'picture': image.asset->url},
`;

const getClient = (preview) => (preview ? previewClient : picoClient);

export async function getPreviewPostBySlug(slug) {
    const data = await getClient(true).fetch(
        `*[_type == "post" && slug.current == $slug] | order(publishedAt desc){
      ${postFields}
      body
    }`,
        { slug },
    );
    return data[0];
}

export async function getAllPostsWithSlug() {
    const data = await picoClient.fetch(
        `*[_type == "post" && dateTime(publishedAt) < dateTime(now())]{ 'slug': slug.current }`,
    );
    return data;
}

export async function getAllPostsForHome(preview) {
    const query = preview ? '_type == "post"' : '_type == "post" && dateTime(publishedAt) < dateTime(now())';
    const results = await getClient(preview).fetch(`*[${query}] | order(publishedAt desc){
      ${postFields}
    }`);
    return getUniquePosts(results);
}

export async function getPostAndMorePosts(slug, preview) {
    const query = preview ? '_type == "post"' : '_type == "post" && dateTime(publishedAt) < dateTime(now())';
    const curClient = getClient(preview);
    const [post, morePosts] = await Promise.all([
        curClient
            .fetch(
                `*[${query} && slug.current == $slug] | order(_updatedAt desc) {
        ${postFields}
        body,
        'comments': *[
                      _type == "comment" && 
                      post._ref == ^._id && 
                      approved == true] {
          _id, 
          name, 
          email, 
          comment, 
          _createdAt
        }
      }`,
                { slug },
            )
            .then((res) => res?.[0]),
        curClient.fetch(
            `*[${query} && slug.current != $slug] | order(publishedAt desc, _updatedAt desc){
        ${postFields}
        body,
      }[0...2]`,
            { slug },
        ),
    ]);

    if (post && process.env.NODE_ENV === 'production' && !preview) {
        try {
            await superClient.patch(post._id).inc({ views: 1 }).commit();
        } catch (err) {
            console.error(err);
        }
    }

    return { post, morePosts: getUniquePosts(morePosts) };
}
