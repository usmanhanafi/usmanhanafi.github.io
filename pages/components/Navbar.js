import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { useState } from 'react'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    function onChangeWindow() {
        setIsOpen(!isOpen)
    }
    return (
        <nav className='fixed z-10 w-full px-4'>
            <div className='flex flex-col md:flex-row justify-between md:items-center bg-white/80 backdrop-blur-sm px-3 md:px-5 py-2 mt-3 rounded-3xl md:rounded-full container mx-auto p-4 '>
                <div className='flex justify-between items-center'>
                    <Link href='/' className='flex gap-2 md:gap-3 items-center'>
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
                    </Link>
                    <div className='flex md:hidden'>
                        {!isOpen ? (
                            <button onClick={() => onChangeWindow()} className='px-3' >
                                <Image
                                    src="/images/icon-bar.svg"
                                    alt="logo-usmanhanafi"
                                    width={32}
                                    height={32}
                                    objectFit="cover"
                                />
                            </button>
                        ) : (
                            <button onClick={() => onChangeWindow()} className='px-3 py-3' >
                                <Image
                                    src="/images/icon-times.svg"
                                    alt="logo-usmanhanafi"
                                    width={32}
                                    height={32}
                                    objectFit="cover"
                                />
                            </button>
                        )}
                    </div>
                </div>
                <ul className={`gap-3 ${isOpen ? 'flex flex-col mt-5 md:flex-row md:mt-0' : 'hidden'} md:flex`}>
                    <li className='px-4 py-2 font-semibold capitalize hover:bg-secondary/30 rounded-full'>
                        <Link className='md:flex hidden' href='/#about'><p>about</p></Link>
                        <Link className='flex md:hidden' onClick={() => onChangeWindow()} href='/#about'><p>about</p></Link>
                    </li>
                    <li className='px-4 py-2 font-semibold capitalize hover:bg-secondary/30 rounded-full'>
                        <Link className='md:flex hidden' href='/#skills'><p>skills</p></Link>
                        <Link className='flex md:hidden' onClick={() => onChangeWindow()} href='/#skills'><p>skills</p></Link>
                    </li>
                    <li className='px-4 py-2 font-semibold capitalize hover:bg-secondary/30 rounded-full'>
                        <Link className='md:flex hidden' href='/#experience'><p>experiences</p></Link>
                        <Link className='flex md:hidden' onClick={() => onChangeWindow()} href='/#experience'><p>experiences</p></Link>
                    </li>
                    <li className='px-4 py-2 font-semibold capitalize hover:bg-secondary/30 rounded-full'>
                        <Link className='md:flex hidden' href='/#projects'><p>projects</p></Link>
                        <Link className='flex md:hidden' onClick={() => onChangeWindow()} href='/#projects'><p>projects</p></Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar