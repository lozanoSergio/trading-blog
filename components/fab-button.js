export default function FabButton() {
    return (
        <div className='flex fixed bottom-0 right-0 m-10'>
            <button
                onClick={() => window.location.reload()}
                className='p-0 w-14 h-14 bg-green-500 rounded-full hover:bg-green-600 active:shadow-lg mouse shadow transition ease-in duration-200 focus:outline-none'
            >
                <svg viewBox='0 0 24 24' enableBackground='new 0 0 24 24' className='w-8 h-6 inline-block'>
                    <path
                        fill='#FFFFFF'
                        d='M13.5 2c-5.621 0-10.211 4.443-10.475 10h-3.025l5 6.625 5-6.625h-2.975c.257-3.351 3.06-6 6.475-6 3.584 0 6.5 2.916 6.5 6.5s-2.916 6.5-6.5 6.5c-1.863 0-3.542-.793-4.728-2.053l-2.427 3.216c1.877 1.754 4.389 2.837 7.155 2.837 5.79 0 10.5-4.71 10.5-10.5s-4.71-10.5-10.5-10.5z'
                    />
                </svg>
            </button>
        </div>
    );
}
