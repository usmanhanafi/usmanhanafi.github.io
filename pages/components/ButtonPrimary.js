const ButtonPrimary = ({ children, ...props }) => {
    return (
        <button className='cursor-pointer text-md lg:text-xl font-semibold bg-primary px-8 py-3 rounded-full hover:bg-primary-dark' {...props}>{children}</button>
    )
}

export default ButtonPrimary