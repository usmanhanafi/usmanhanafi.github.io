import Image from "next/image"
import BadgeIcon from "../components/BadgeIcon"
import ButtonPrimaryOutline from "../components/ButtonPrimaryOutline"
import Link from "next/link"
import ButtonPrimary from "../components/ButtonPrimary"

const Project = () => {
    return (
        <main>
            <section id="banner" className="container mx-auto p-4 py-32">
                <div className="p-4 bg-white/15 rounded-3xl">
                    <Image
                        className="rounded-3xl"
                        src="/images/laundry.png"
                        alt="tholib-usman-hanafi-profile"
                        layout='responsive'
                        width={0}
                        height={0}
                        objectFit="cover"
                        priority
                    />
                    <h1 className="lg:text-5xl text-white font-bold mt-3 md:mt-5">LAUNDRY ECOSYSTEM</h1>
                    <p className="text-white/80 text-md font-medium mt-3 md:mt-5 mb-3">Worked on</p>
                    <div className="flex gap-4 items-center">
                        <div className="px-4 py-2 bg-white/15 rounded-full"><p className="text-white font-medium">Website</p></div>
                        <div className="px-4 py-2 bg-white/15 rounded-full"><p className="text-white font-medium">Application</p></div>
                    </div>
                    <div className="bg-secondary rounded-3xl p-4 grid grid-cols-1 lg:grid-cols-3 gap-5 mt-3 md:mt-5 w-full">
                        <Image
                            className="rounded-3xl"
                            src="/images/laundry.png"
                            alt="tholib-usman-hanafi-profile"
                            layout='responsive'
                            width={0}
                            height={0}
                            objectFit="cover"
                            priority
                        />
                        <div className="w-full col-span-2">
                            <h3 className="text-lg lg:text-3xl text-white font-bold mt-3 md:mt-0">Siip Laundry Website</h3>
                            <p className="text-white/80 text-md font-medium mt-3 md:mt-5 mb-3">Techologies I have used</p>
                            <div className="flex gap-3 items-center flex-wrap mb-5">
                                <BadgeIcon>html</BadgeIcon>
                                <BadgeIcon>css</BadgeIcon>
                                <BadgeIcon icon='js'>javascript</BadgeIcon>
                                <BadgeIcon>php</BadgeIcon>
                                <BadgeIcon>laravel</BadgeIcon>
                            </div>
                            <Link className="self-end flex mt-5" href='https://siiplaundryindonesia.com' target="_blank">
                                <ButtonPrimary >Go to Siip Laundry</ButtonPrimary>
                            </Link>
                        </div>
                    </div>
                    <div className="bg-secondary rounded-3xl p-4 grid grid-cols-1 lg:grid-cols-3 gap-5 mt-3 md:mt-5 w-full">
                        <Image
                            className="rounded-3xl"
                            src="/images/laundry.png"
                            alt="tholib-usman-hanafi-profile"
                            layout='responsive'
                            width={0}
                            height={0}
                            objectFit="cover"
                            priority
                        />
                        <div className="w-full col-span-2">
                            <h3 className="text-lg lg:text-3xl text-white font-bold mt-3 md:mt-0">Siip Laundry Application</h3>
                            <p className="text-white/80 text-md font-medium mt-3 md:mt-5 mb-3">Techologies I have used</p>
                            <div className="flex gap-3 items-center flex-wrap mb-5">
                                <BadgeIcon>html</BadgeIcon>
                                <BadgeIcon>css</BadgeIcon>
                                <BadgeIcon>scss</BadgeIcon>
                                <BadgeIcon icon='js'>javascript</BadgeIcon>
                                <BadgeIcon icon='react'>react native</BadgeIcon>
                                <BadgeIcon >laravel</BadgeIcon>
                            </div>
                            <Link className="self-end flex gap-3 mt-5" href='https://play.google.com/store/apps/details?id=com.tholush.testdeployapk' target="_blank">
                                <div className={`flex gap-2 items-center px-6 py-3 rounded-full bg-primary text-secondary hover:bg-white/90 hover:transform hover:scale-105 animation ease-linear duration-200`}>
                                    <Image
                                        src={`/images/icon-playstore.svg`}
                                        alt="icon"
                                        width={32}
                                        height={32}
                                        objectFit="contain"
                                    />
                                    <p className={`font-semibold text-sm md:text-md lg:text-xl xl:text-xl capitalize`}>Go to Playstore</p>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Project