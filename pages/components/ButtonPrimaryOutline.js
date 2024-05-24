const ButtonPrimaryOutline = ({ children, color, ...props }) => {
    return (
        <buttib className={`${color ? 'border-white/60 text-white hover:bg-secondary hover:text-text-white bg-secondary/30' : 'border-primary text-primary hover:bg-primary hover:text-text-primary bg-primary/10'} cursor-pointer text-md lg:text-xl border  px-8 py-3 rounded-full`} {...props}>{children}</buttib>
    )
}

export default ButtonPrimaryOutline