import React, { Fragment } from 'react';

const Modal = ({ children, onCancel }) => {
    return (
        <Fragment>
            <div
                className='text-gray-500 flex items-center justify-center overflow-auto z-50 fixed inset-0 w-full h-full bg-black bg-opacity-50'
                aria-labelledby='modal-image'
                role='modal'
                aria-modal='true'
                onClick={onCancel}
            >
                <div className='flex flex-col'>
                    <div className='relative mt-10 z-50'>
                        <button onClick={onCancel} className='float-right pr-5 bg-transparent rounded-full mouse'>
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                width='24'
                                height='24'
                                fill='#ffffff'
                                viewBox='0 0 24 24'
                            >
                                <path d='M23 20.168l-8.185-8.187 8.185-8.174-2.832-2.807-8.182 8.179-8.176-8.179-2.81 2.81 8.186 8.196-8.186 8.184 2.81 2.81 8.203-8.192 8.18 8.192z' />
                            </svg>
                        </button>
                    </div>
                    <figure className='m-auto px-5 md:px-10'>{children}</figure>
                </div>
            </div>
        </Fragment>
    );
};

export default Modal;
