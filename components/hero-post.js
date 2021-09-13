import Date from '../components/date';
import CoverImage from '../components/cover-image';
import Link from 'next/link';

export default function HeroPost({ title, coverImage, date, summary, slug }) {
    return (
        <section className='grid grid-cols-1 md:grid-cols-3 md:my-8'>
            <div className='mb-8 md:mr-10 col-span-2'>
                <CoverImage slug={slug} imageObject={coverImage} title={title} url={coverImage} height={880} card />
            </div>
            <div className='mb-20 md:mb-28'>
                <div>
                    <div className='mb-4 text-sm italic font-semibold text-gray-500'>
                        <Date dateString={date} />
                    </div>
                    <h3 className='mb-8 text-3xl font-semibold lg:text-4xl leading-tight'>
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
