import PostPreview from '../components/post-preview';

export default function MoreStories({ posts }) {
    return (
        <section>
            <h2 className='mb-8 text-6xl md:text-7xl font-bold tracking-tighter leading-tight'>
                Tutoriales de Trading
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-3 md:col-gap-16 lg:col-gap-32 row-gap-28 md:row-gap-32 mb-10 md:mb-35'>
                {posts.map((post) => (
                    <PostPreview
                        key={post.slug}
                        title={post.title}
                        coverImage={post.coverImage}
                        date={post.date}
                        slug={post.slug}
                        summary={post.summary}
                    />
                ))}
            </div>
        </section>
    );
}
