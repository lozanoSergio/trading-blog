import cn from 'classnames';
import Link from 'next/link';
import { imageBuilder } from '../lib/sanity';
import LazyLoad from 'react-lazyload';

export default function CoverImage({ title, imageObject, slug, card, width, height }) {
    const image = (
        <img
            width={width ?? 1240}
            height={height ?? 640}
            alt={`Imágen de portada de ${title}`}
            className={cn(`${card ? 'rounded-lg shadow-md' : 'rounded-t-lg'}`, {
                'hover:shadow-medium transition-shadow duration-200': slug,
            })}
            src={imageBuilder(imageObject)
                .width(width ?? 1240)
                .height(height ?? 640)
                .url()}
        />
    );

    return (
        <>
            {slug ? (
                <Link as={`/blog/${slug}`} href='/blog/[slug]'>
                    <a aria-label={title}>
                        <LazyLoad height={height ?? 640} offset={100}>
                            {image}
                        </LazyLoad>
                    </a>
                </Link>
            ) : (
                image
            )}
        </>
    );
}
