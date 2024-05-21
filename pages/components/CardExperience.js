import Image from "next/image"

const CardExperience = (props) => {
    return (
        <div className="bg-white/95 rounded-3xl p-2 md:p-5">
            <div className="flex flex-col justify-between items-center">
                <div className="bg-secondary rounded-full flex items-center w-full">
                    <Image
                        className="p-1 border border-primary rounded-full"
                        src={`/images/${props.image}.png`}
                        alt="tholib-usman-hanafi-profile"
                        width={60}
                        height={60}
                        objectFit="cover"
                        priority
                    />
                    <div className="ps-2 md:ps-5 pe-3 md:pe-8">
                        <p className="text-sm md:text-md lg:text-lg text-primary font-semibold">{props.place}</p>
                        <p className="text-xs md:text-sm lg:text-md text-white/80">{props.address}</p>
                    </div>
                </div>
                <div className="text-sm md:text-lg self-end mt-2 bg-primary-light text-secondary font-medium rounded-full py-1 px-4">{props.date}</div>
            </div>
            <div className="flex gap-4 items-center my-2 md:my-5">
                <Image
                    className="p-1 border border-primary rounded-full"
                    src="/images/foto-jas.png"
                    alt="tholib-usman-hanafi-profile"
                    width={40}
                    height={40}
                    objectFit="cover"
                />
                <p className="text-secondary font-bold text-lg md:text-2xl">{props.job_title}</p>
            </div>
            <p className="text-secondary text-sm pb-3 px-2 md:text-lg">{props.description}</p>
        </div>
    )
}

export default CardExperience