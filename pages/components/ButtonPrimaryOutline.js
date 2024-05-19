const ButtonPrimaryOutline = ({ children, ...props }) => {
    return (
        <div className='cursor-pointer text-md lg:text-xl text-primary bg-primary/10 border border-primary px-8 py-3 rounded-full hover:bg-primary hover:text-text-primary' {...props}>{children}</div>
    )
}

export default ButtonPrimaryOutline