import Link from 'next/link';
import BlockContent from '@sanity/block-content-to-react';
import { Image } from './image';
import markdownStyles from './markdown-styles.module.css';

export default function PostBody({ content }) {
    const serializers = {
        types: {
            image: (props) => <Image src={props.node.asset} alt={props.node.alt} />,
        },
        marks: {
            internalLink: ({ mark, children }) => {
                const { slug = {} } = mark;
                const href = `/blog/${slug.current}`;
                return (
                    <Link href={href}>
                        <a>{children}</a>
                    </Link>
                );
            },
            link: ({ mark, children }) => {
                const { blank, href } = mark;
                return blank ? (
                    <a className='break-words' href={href} target='_blank' rel='noopener noreferrer'>
                        {children}
                    </a>
                ) : (
                    <a className='break-words' href={href}>
                        {children}
                    </a>
                );
            },
        },
    };

    return (
        <div className='mb-20 px-8 md:px-16 prose lg:prose-2xl'>
            <BlockContent
                blocks={content}
                projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
                dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
                className={markdownStyles.markdown}
                serializers={serializers}
            />
        </div>
    );
}
