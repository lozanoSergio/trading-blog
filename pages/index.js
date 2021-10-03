import Container from '../components/container';
import MoreStories from '../components/more-stories';
import HeroPost from '../components/hero-post';
import Intro from '../components/intro';
import Layout from '../components/layout';
import PostSkeleton from '../components/post-skeleton';
import NewsLetter from '../components/newsletter';
import { getAllPostsForHome } from '../lib/api';
import Head from 'next/head';
import { CMS_NAME } from '../lib/constants';

export default function Index({ allPosts, preview }) {
    const heroPost = allPosts[0];
    const morePosts = allPosts.slice(1);

    return (
        <>
            <Layout preview={preview}>
                <Head>
                    <title>{CMS_NAME} | Aprende la forma de hacer trading </title>
                </Head>
                <Container>
                    <div className='flex flex-col justify-start items-start'>
                        <Intro />
                        {heroPost ? (
                            <HeroPost
                                title={heroPost.title}
                                coverImage={heroPost.coverImage}
                                date={heroPost.date}
                                summary={heroPost.summary}
                                slug={heroPost.slug}
                            />
                        ) : (
                            <div className='h-52 sm:mx-4 rounded-xl bg-gray-200 animate-pulse'></div>
                        )}
                        {morePosts.length ? (
                            <MoreStories posts={morePosts} />
                        ) : (
                            <div className='grid grid-cols-1 md:grid-cols-3 md:col-gap-16 lg:col-gap-32 row-gap-28 md:row-gap-32 mb-10 md:mb-35 mt-8'>
                                {Array(6)
                                    .fill(undefined)
                                    .map((_item, index) => (
                                        <PostSkeleton key={`skeleton-${index}`} />
                                    ))}
                            </div>
                        )}
                        <NewsLetter />
                    </div>
                </Container>
            </Layout>
        </>
    );
}

export async function getStaticProps({ preview = false }) {
    const allPosts = await getAllPostsForHome(preview);
    return {
        props: { allPosts, preview },
        revalidate: 1,
    };
}
