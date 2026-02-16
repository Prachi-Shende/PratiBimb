export default function PlaceholderImage({ src, alt, className }) {
    return (
        <div className={`${className} bg-gray-600 flex items-center justify-center overflow-hidden`}>
            <img src={src} alt={alt} className="w-full h-full object-cover opacity-50" onError={(e) => {
                e.currentTarget.style.display = 'none';
                e.currentTarget.parentElement?.classList.add('animate-pulse');
            }} />
            <span className="absolute text-xs text-white opacity-0 hover:opacity-100">{alt}</span>
        </div>
    );
}
