import Image from 'next/image'
function replaceSpacesWithHyphens(str) {
    return str.replace(/\s+/g, '-');
  }
const BadgeIcon = ({icon, children}) => {
  
    return (
        <div className="flex gap-2 items-center px-6 py-3 rounded-full bg-white/80 font-bold text-secondary-light hover:bg-white/90 hover:transform hover:scale-105 animation ease-linear duration-200">
            <Image
            className='h-4 md:h-6 w-auto'
                src={`/images/icon-${replaceSpacesWithHyphens(icon ?? children)}.svg`}
                alt="icon"
                width={0}
                height={0}
                objectFit="contain"
            />
            <p className='capitalize text-xs md:text-sm lg:text-md xl:text-lg'>{children}</p>
        </div>
    )
}

export default BadgeIcon