import React, { useState, useCallback } from 'react';
import LazyLoad from 'react-lazyload';
import { imageBuilder } from '../lib/sanity';
import Modal from './modal';

export function Image({ src, alt, style, ...props }) {
    const { onClick, isFocused, shouldAnimate, isImageGroupExpanded, transitionMs, ...rest } = props;

    const [showModal, setShowModal] = useState(false);
    const handleShowModal = useCallback(() => {
        setShowModal(!showModal);
    }, [showModal]);
    const handleCloseModal = useCallback(() => {
        setShowModal(false);
    }, []);

    return (
        <div {...rest}>
            <div onClick={handleShowModal}>
                <LazyLoad height='100%' offset={100}>
                    <img className='cursor-zoom-in' src={imageBuilder(src).url()} alt={alt} style={style} />
                </LazyLoad>
            </div>
            {showModal && (
                <Modal onCancel={handleCloseModal}>
                    <img src={imageBuilder(src).url()} alt={alt} style={style} />
                </Modal>
            )}
        </div>
    );
}
