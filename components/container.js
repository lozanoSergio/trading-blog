export default function Container({ children }) {
    return (
        <div className='flex flex-col container mx-auto px-8 md:px-10 max-w-screen-xl mb-20 mt-20 justify-center items-center'>
            {children}
        </div>
    );
}
