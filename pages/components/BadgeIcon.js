import Image from 'next/image'
const BadgeIcon = ({ icon, children, size, className }) => {
    return (
        <div className={`${className ?? ''} ${size == 'small' ? 'px-3 py-1 font-semibold' : 'font-bold'} flex gap-2 items-center px-6 py-3 rounded-full bg-white/80 text-secondary-light hover:bg-white/90 hover:transform hover:scale-105 animation ease-linear duration-200`}>
            <Image
                className={`${size == 'small' ? 'h-3 md:h-5' : 'h-4 md:h-6'} w-auto`}
                src={`/images/icon-${(icon ?? children)}.svg`}
                alt="icon"
                width={0}
                height={0}
                objectFit="contain"
            />
            <p className={`${size == 'small' ? 'text-xs md:text-xs lg:text-sm xl:text-md' : 'text-xs md:text-sm lg:text-md xl:text-lg'} capitalize`}>{children}</p>
        </div>
    )
}

export default BadgeIcon