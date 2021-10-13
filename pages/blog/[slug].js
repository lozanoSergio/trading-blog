import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import Container from '../../components/container';
import PostBody from '../../components/post-body';
import MoreStories from '../../components/more-stories';
import Header from '../../components/header';
import PostHeader from '../../components/post-header';
import Comments from '../../components/comments';
import SectionSeparator from '../../components/section-separator';
import Layout from '../../components/layout';
import PostTitle from '../../components/post-title';
import CommentForm from '../../components/comment-form';
import NewsLetter from '../../components/newsletter';
import Meta from '../../components/meta';
import { getAllPostsWithSlug, getPostAndMorePosts } from '../../lib/api';
import { CMS_NAME } from '../../lib/constants';

export default function Post({ post, morePosts, preview }) {
    const router = useRouter();
    if (!router.isFallback && !post?.slug) {
        return <ErrorPage statusCode={404} />;
    }

    return (
        <Layout preview={preview}>
            <Header />
            <Container>
                {router.isFallback ? (
                    <PostTitle>Loading…</PostTitle>
                ) : (
                    <div className='bg-white border rounded-lg border-gray-300 mt-20 md:max-w-4xl'>
                        <article>
                            <Meta
                                title={`${post.title} | ${CMS_NAME}`}
                                image={post.ogImage}
                                description={post.summary}
                            />
                            <PostHeader
                                title={post.title}
                                coverImage={post.coverImage}
                                date={post.date}
                                author={post.author}
                            />
                            <PostBody content={post.body} />
                        </article>
                        <div className='px-8 md:px-16'>
                            <Comments comments={post.comments} />
                            <CommentForm _id={post._id} />
                            <SectionSeparator />
                            <NewsLetter />
                            <SectionSeparator />
                            {morePosts.length > 0 && <MoreStories posts={morePosts} />}
                        </div>
                    </div>
                )}
            </Container>
        </Layout>
    );
}

export async function getStaticProps({ params, preview = false }) {
    const data = await getPostAndMorePosts(params.slug, preview);

    return {
        props: {
            preview,
            post: data?.post || null,
            morePosts: data?.morePosts || null,
        },
        revalidate: 1,
    };
}

export async function getStaticPaths() {
    const allPosts = await getAllPostsWithSlug();
    return {
        paths:
            allPosts?.map((post) => ({
                params: {
                    slug: post.slug,
                },
            })) || [],
        fallback: true,
    };
}
