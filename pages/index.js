import Container from '../components/container';
import MoreStories from '../components/more-stories';
import HeroPost from '../components/hero-post';
import Intro from '../components/intro';
import Layout from '../components/layout';
import NewsLetter from '../components/newsletter';
import { getAllPostsForHome } from '../lib/api';

export default function Index({ heroPost, morePosts, preview }) {
    return (
        <>
            <Layout preview={preview}>
                <Container>
                    <div className='flex flex-col justify-start items-start'>
                        <Intro />
                        {heroPost && (
                            <HeroPost
                                title={heroPost.title}
                                coverImage={heroPost.coverImage}
                                date={heroPost.date}
                                summary={heroPost.summary}
                                slug={heroPost.slug}
                            />
                        )}
                        {morePosts.length > 0 && <MoreStories posts={morePosts} />}
                        <NewsLetter />
                    </div>
                </Container>
            </Layout>
        </>
    );
}

export async function getStaticProps({ preview = false }) {
    const allPosts = await getAllPostsForHome(preview);
    const heroPost = allPosts[0];
    const morePosts = allPosts.slice(1);
    return {
        props: { heroPost, morePosts, preview },
        revalidate: 1,
    };
}
