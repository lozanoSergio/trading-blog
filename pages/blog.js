import Head from 'next/head';
import Layout from '../components/layout';
import Container from '../components/container';
import MoreStories from '../components/more-stories';
import PostSkeleton from '../components/post-skeleton';
import { getAllPostsForHome } from '../lib/api';
import { CMS_NAME } from '../lib/constants';
import NewsLetter from '../components/newsletter';

function Blog({ allPosts }) {
    return (
        <Layout>
            <Head>
                <title>{CMS_NAME} | Aprende paso a paso </title>
            </Head>
            <Container>
                <div className='flex justify-center flex-col my-20'>
                    {allPosts.length ? (
                        <MoreStories posts={allPosts} />
                    ) : (
                        <div className='grid grid-cols-1 md:grid-cols-3 md:col-gap-16 lg:col-gap-32 row-gap-28 md:row-gap-32 mb-10 md:mb-35 mt-8'>
                            {Array(6)
                                .fill(undefined)
                                .map((_item, index) => (
                                    <PostSkeleton key={`skeleton-${index}`} />
                                ))}
                        </div>
                    )}
                </div>
                <NewsLetter />
            </Container>
        </Layout>
    );
}

export async function getStaticProps({ preview = false }) {
    const allPosts = await getAllPostsForHome(preview);
    return {
        props: { allPosts, preview },
        revalidate: 1,
    };
}

export default Blog;
