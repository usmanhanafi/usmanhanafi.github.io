import Image from 'next/image'

const Navbar = () => {
    return (
        <nav className='fixed z-10 w-full px-4'>
            <div className='flex justify-between items-center bg-white/80 backdrop-blur-sm px-3 md:px-5 py-2 mt-3 rounded-full container mx-auto p-4'>
                <div className='flex gap-2 md:gap-3 items-center'>
                    <Image
                        className="h-8 w-8 md:h-12 md:w-12 rounded-full"
                        src="/images/logo.svg"
                        alt="logo-usmanhanafi"
                        width={0}
                        height={0}
                        objectFit="cover"
                        priority
                    />
                    <p className='text-secondary font-bold text-sm md:text-xl'>Usman Hanafi</p>
                </div>
                <div className=''>
                    dark
                </div>
            </div>
        </nav>
    )
}

export default Navbar