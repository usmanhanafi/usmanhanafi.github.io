const ButtonPrimary = ({ children, ...props }) => {
    return (
        <div className='cursor-pointer text-md lg:text-xl font-semibold bg-primary px-8 py-3 rounded-full hover:bg-primary-dark' {...props}>{children}</div>
    )
}

export default ButtonPrimary