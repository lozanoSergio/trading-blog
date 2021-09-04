import markdownStyles from './markdown-styles.module.css';
import BlockContent from '@sanity/block-content-to-react';

export default function PostBody({ content }) {
    return (
        <div className='mb-40 pr-10 max-w-screen-xl'>
            <BlockContent
                blocks={content}
                projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
                dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
                className={markdownStyles.markdown}
            />
        </div>
    );
}
