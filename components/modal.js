import React, { Fragment, useEffect } from 'react';

const Modal = ({ children, onCancel }) => {
    useEffect(() => {});
    return (
        <Fragment>
            <div
                className='modal text-gray-500 flex items-center justify-center overflow-auto z-50'
                aria-labelledby='modal-image'
                role='modal'
                aria-modal='true'
                onClick={onCancel}
            >
                <div className='flex h-screen'>
                    <figure className='m-auto p-5 md:p-10'>{children}</figure>
                    <div className='flex absolute top-14 right-0 md:top-20 md:right-10 z-50'>
                        <button onClick={onCancel} className='p-0 w-14 h-14 bg-transparent rounded-full mouse'>
                            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='white'>
                                <g data-name='Layer 2'>
                                    <g data-name='close'>
                                        <rect width='24' height='24' transform='rotate(180 12 12)' opacity='0' />
                                        <path d='M13.41 12l4.3-4.29a1 1 0 1 0-1.42-1.42L12 10.59l-4.29-4.3a1 1 0 0 0-1.42 1.42l4.3 4.29-4.3 4.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l4.29-4.3 4.29 4.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42z' />
                                    </g>
                                </g>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default Modal;
