import Date from '../components/date';
import CoverImage from '../components/cover-image';
import Link from 'next/link';

export default function HeroPost({ title, coverImage, date, summary, slug }) {
    return (
        <section className='flex flex-col md:flex-row mb-20'>
            <div className='mb-8 md:mr-10 col-span-2'>
                <CoverImage
                    slug={slug}
                    imageObject={coverImage}
                    title={title}
                    url={coverImage}
                    width={640}
                    height={360}
                    card
                />
            </div>
            <div className='md:mb-28 md:ml-5 md:max-w-xs'>
                <div>
                    <div className='mb-4 text-sm italic font-semibold text-gray-500'>
                        <Date dateString={date} />
                    </div>
                    <h3 className='mb-4 text-3xl font-semibold lg:text-4xl leading-tight'>
                        <Link as={`/blog/${slug}`} href='/blog/[slug]'>
                            <a className='hover:underline'>{title}</a>
                        </Link>
                    </h3>
                    <p className='text-gray-600'>{summary}</p>
                </div>
            </div>
        </section>
    );
}
