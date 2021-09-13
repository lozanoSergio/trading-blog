import { useState } from 'react';
import Layout from '../components/layout';
import Container from '../components/container';
import MoreStories from '../components/more-stories';
import PostSkeleton from '../components/post-skeleton';
import { getAllPostsForHome } from '../lib/api';

function Blog({ allPosts }) {
    const [searchValue, setSearchValue] = useState('');
    const filteredBlogPosts = allPosts.filter((post) => post.title.toLowerCase().includes(searchValue.toLowerCase()));
    return (
        <Layout>
            <Container>
                <div className='flex justify-center flex-col my-32'>
                    {filteredBlogPosts.length ? (
                        <MoreStories posts={filteredBlogPosts} />
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
