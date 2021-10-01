export default function Container({ children }) {
    return (
        <div className='flex flex-col container mx-auto px-5 md:max-w-8xl mb-20 mt-20 justify-center items-center'>
            {children}
        </div>
    );
}
