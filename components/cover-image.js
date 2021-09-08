import cn from 'classnames';
import Link from 'next/link';
import { imageBuilder } from '../lib/sanity';
import LazyLoad from 'react-lazyload';

export default function CoverImage({ title, imageObject, slug, hero }) {
    const image = (
        <img
            width={hero ? 1496 : 1240}
            height={540}
            alt={`Imágen de portada de ${title}`}
            className={cn('shadow-small', {
                'hover:shadow-medium transition-shadow duration-200': slug,
            })}
            src={imageBuilder(imageObject)
                .width(hero ? 1496 : 1240)
                .height(540)
                .url()}
        />
    );

    return (
        <div className='-mx-5 sm:mx-0'>
            {slug ? (
                <Link as={`/posts/${slug}`} href='/posts/[slug]'>
                    <a aria-label={title}>
                        <LazyLoad height={540} offset={100}>
                            {image}
                        </LazyLoad>
                    </a>
                </Link>
            ) : (
                image
            )}
        </div>
    );
}
