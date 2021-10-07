import { useEffect } from 'react';
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
import { getAllPostsWithSlug, getPostAndMorePosts } from '../../lib/api';
import PostTitle from '../../components/post-title';
import Head from 'next/head';
import { CMS_NAME, HOME_OG_IMAGE_URL } from '../../lib/constants';
import CommentForm from '../../components/comment-form';
import NewsLetter from '../../components/newsletter';

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
                            <Head>
                                <title>
                                    {post.title} | {CMS_NAME}
                                </title>
                                <meta property='og:image' content={post.ogImage ?? HOME_OG_IMAGE_URL} />
                                <meta name='description' content={post.summary ?? ''} />
                            </Head>
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
