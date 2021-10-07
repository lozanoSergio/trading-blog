import Avatar from '../components/avatar';
import Date from '../components/date';
import CoverImage from '../components/cover-image';
import PostTitle from '../components/post-title';

export default function PostHeader({ title, coverImage, date, author }) {
    return (
        <>
            <div className='rounded-lg'>
                <CoverImage title={title} imageObject={coverImage} url={coverImage} />
            </div>
            <div className='px-8 md:px-16'>
                <PostTitle>{title}</PostTitle>

                <div className='flex place-items-center mb-14'>
                    <div className='hidden md:block'>
                        <Avatar name={author?.name} picture={author?.picture} size='medium' />
                    </div>
                    <div className='block md:hidden'>
                        <Avatar name={author?.name} picture={author?.picture} size='medium' />
                    </div>
                    <div className='mt-1 ml-4 text-sm italic font-semibold text-gray-700'>
                        <Date dateString={date} />
                    </div>
                </div>
            </div>
        </>
    );
}
