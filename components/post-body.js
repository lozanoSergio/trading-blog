import markdownStyles from './markdown-styles.module.css';
import BlockContent from '@sanity/block-content-to-react';
import { Image } from './image';

export default function PostBody({ content }) {
    const serializers = {
        types: {
            image: (props) => <Image src={props.node.asset} />,
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
