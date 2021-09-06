export default function Avatar({ name, picture, size }) {
    const sizeClass = size === 'small' ? 'w-6 h-6 mr-2' : size === 'medium' ? 'w-8 h-8 mr-2' : 'w-12 h-12 mr-4';
    const textClass = size === 'small' ? 'text-base' : size === 'medium' ? 'text-lg' : 'text-xl';
    return (
        <div className='flex items-center'>
            <img src={picture} className={`${sizeClass} rounded-full`} alt={name} />
            <div className={`${textClass} font-bold`}>{name}</div>
        </div>
    );
}
