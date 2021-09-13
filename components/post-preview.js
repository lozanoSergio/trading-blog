import Date from '../components/date';
import CoverImage from './cover-image';
import Link from 'next/link';
import { imageBuilder } from '../lib/sanity';

export default function PostPreview({ title, coverImage, date, summary, slug }) {
    return (
        <div className='m-0 mb-12 md:mr-5 lg:mr-15 md:mb-10'>
            <div className='mb-5'>
                <CoverImage
                    slug={slug}
                    title={title}
                    imageObject={coverImage}
                    url={imageBuilder(coverImage).url()}
                    card
                    height={800}
                />
            </div>
            <div className='text-sm italic font-semibold mb-4 text-gray-500'>
                <Date dateString={date} />
            </div>
            <h3 className='text-xl mb-3 leading-snug font-semibold'>
                <Link as={`/blog/${slug}`} href='/blog/[slug]'>
                    <a className='hover:underline'>{title}</a>
                </Link>
            </h3>
            <p className='mt-4 text-gray-600'>{summary}</p>
        </div>
    );
}
