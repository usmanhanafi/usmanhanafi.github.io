import Image from "next/image";
// import { Inter } from "next/font/google";

import { ButtonPrimary, ButtonPrimaryOutline } from "./components/Button";

// const inter = Inter({ subsets: ["latin"] });
export default function Home() {
  return (
    <main
    >
      <section className={`relative bg-hero min-h-screen text-center p-4 pt-60 md:pt-32 lg:p-24`}>
        {/* <section className={`flex min-h-screen flex-col items-center justify-between p-24`}> */}
        <h1 className="lg:text-[64px] font-bold text-white"> <span>icon</span> Hello! I'm <span className="text-primary">Usman Hanafi</span></h1>
        <p className="text-white font-semibold lg:text-2xl mt-4">A FullStack Developer | Project Manager</p>
        <p className="text-white lg:text-xl font-regular mt-3">With <span className="text-primary font-semibold bg-secondary-light px-3 py-1 rounded-full">2+ Years</span> Experience</p>
        <div className="flex gap-4 items-center justify-center mt-10">
          <ButtonPrimaryOutline>Resume</ButtonPrimaryOutline>
          <ButtonPrimary>Hire Me</ButtonPrimary>
        </div>
        <Image
          className="absolute right-0 left-0 bottom-0 px-4 lg:px-[26vw]"
          src="/images/my-short-profile.png"
          alt="tholib-usman-hanafi-profile"
          layout="responsive"
          width={0}
          height={0}
          objectFit="contain"
          priority
        />
      </section>
      <section className="my-10">
        <h2 className="lg:text-[56px] text-primary font-bold text-center">About Me</h2>
        <div className="grid grid-cols-2 items-center">
          <div className="">
            <div className="flex gap-3 items-center">
              <Image
                className="p-1 border border-primary rounded-full"
                src="/images/foto-jas.png"
                alt="tholib-usman-hanafi-profile"
                width={60}
                height={60}
                objectFit="cover"
                priority
              />
              <p className="lg:text-3xl text-primary font-bold">I Love</p>
            </div>
            <div className="flex gap-3 flex-wrap mt-5 w-[50%]">
              <div className="flex gap-2 px-6 py-3 rounded-full bg-white/80 font-bold text-secondary-light">
                sd
                <p>Travelling</p>
              </div>
              <div className="flex gap-2 px-6 py-3 rounded-full bg-white/80 font-bold text-secondary-light">
                sd
                <p>Watching Movie</p>
              </div>
              <div className="flex gap-2 px-6 py-3 rounded-full bg-white/80 font-bold text-secondary-light">
                sd
                <p>Work With You</p>
              </div>
              <div className="flex gap-2 px-6 py-3 rounded-full bg-white/80 font-bold text-secondary-light">
                sd
                <p>U</p>
              </div>
            </div>
          </div>
          <div className="flex gap-5 mt-5">
            <div className="bg-secondary-light rounded-[5rem] p-12 text-center">
              <p className="text-[80px] text-primary font-bold">2.0 +</p>
              <p className="text-[60px] text-white font-medium ">Years</p>
              <p className="text-[60px] text-white font-medium mt-[-32px]">Experience</p>
            </div>
            <div className="bg-secondary-light rounded-[5rem] p-12 text-center">
              <p className="text-[80px] text-primary font-bold">10 +</p>
              <p className="text-[60px] text-white font-medium ">Project</p>
              <p className="text-[60px] text-white font-medium mt-[-32px]">Completed</p>
            </div>
          </div>
        </div>
        <div className="bg-secondary-light rounded-[3rem] p-10 text-center mt-8">
          <p className="text-xl text-white/80">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
        <div className="flex justify-center my-10"><ButtonPrimaryOutline>Contact Me</ButtonPrimaryOutline></div>
      </section>
      <section id='education' className="my-20">
        <h2 className="lg:text-[56px] text-primary font-bold text-center">Education</h2>
        <div className="flex gap-4 justify-center items-center mt-5">
          <div className="flex flex-col items-center text-center">
            <p className="px-3 py-2 bg-secondary-light rounded-full text-primary font-semibold">2021</p>
            <p className="text-white max-w-[400px] mt-3">Graduated from SMK Negeri 2 Depok Sleman majoring in computer and network engineering</p>
          </div>
          <div className="w-10 rounded-full bg-primary h-1" />
          <div className="flex flex-col items-center text-center">
            <p className="px-3 py-2 bg-secondary-light rounded-full text-primary font-semibold">2022</p>
            <p className="text-white max-w-[400px] mt-3">Entering lectures at UTDI undergraduate level majoring in information systems</p>
          </div>
        </div>
      </section>
      <section id='Experience' className="my-20">
        <h2 className="lg:text-[56px] text-primary font-bold text-center">Experience</h2>
        <div className="grid grid-cols-2 mt-5">
          <div className="bg-white rounded-3xl p-5">
            <div className="flex justify-between items-center">
              <div className="bg-secondary rounded-full flex items-center">
                <Image
                  className="p-1 border border-primary rounded-full"
                  src="/images/foto-jas.png"
                  alt="tholib-usman-hanafi-profile"
                  width={60}
                  height={60}
                  objectFit="cover"
                  priority
                />
                <div className="ps-5 pe-8">
                  <p className="text-primary font-semibold">PT Istana Mesin Laundry</p>
                  <p className="text-white/80">Sleman, Yogyakarta.</p>
                </div>
              </div>
              <div className="bg-primary-light text-secondary font-medium rounded-full py-1 px-4">June 2023 - Present</div>
            </div>
            <div className="flex gap-4 items-center my-5">
              <Image
                className="p-1 border border-primary rounded-full"
                src="/images/foto-jas.png"
                alt="tholib-usman-hanafi-profile"
                width={40}
                height={40}
                objectFit="cover"
                priority
              />
              <p className="text-secondary font-bold text-2xl">FrontEnd Developer</p>
            </div>
            <p className="text-secondary font-medium text-lg">FrontEnd Developer</p>
          </div>
        </div>
      </section>
      <section id='skills' className="my-10">
        <h2 className="lg:text-[56px] text-primary font-bold text-center">Skills</h2>
        <h3 className="lg:text-[36px] text-primary font-bold text-center mt-10 mb-5">Design Tools I Use</h3>
        <div className="flex gap-4 justify-center items-center">
          <div className="flex gap-2 px-6 py-3 rounded-full bg-white/80 font-bold text-secondary-light">
            sd
            <p>Travelling</p>
          </div>
          <div className="flex gap-2 px-6 py-3 rounded-full bg-white/80 font-bold text-secondary-light">
            sd
            <p>Travelling</p>
          </div>
        </div>
        <h3 className="lg:text-[36px] text-primary font-bold text-center mt-10 mb-5">Design Tools I Use</h3>
        <div className="flex gap-4 justify-center items-center">
          <div className="flex gap-2 px-6 py-3 rounded-full bg-white/80 font-bold text-secondary-light">
            sd
            <p>Travelling</p>
          </div>
          <div className="flex gap-2 px-6 py-3 rounded-full bg-white/80 font-bold text-secondary-light">
            sd
            <p>Travelling</p>
          </div>
        </div>
        <h3 className="lg:text-[36px] text-primary font-bold text-center mt-10 mb-5">Technologies I Use</h3>
        <div className="flex gap-4 justify-center items-center">
          <div className="flex gap-2 px-6 py-3 rounded-full bg-white/80 font-bold text-secondary-light">
            sd
            <p>Travelling</p>
          </div>
          <div className="flex gap-2 px-6 py-3 rounded-full bg-white/80 font-bold text-secondary-light">
            sd
            <p>Travelling</p>
          </div>
        </div>
        <h3 className="lg:text-[36px] text-primary font-bold text-center mt-10 mb-5">Development & Productivity Tools I Use</h3>
        <div className="flex gap-4 justify-center items-center">
          <div className="flex gap-2 px-6 py-3 rounded-full bg-white/80 font-bold text-secondary-light">
            sd
            <p>Travelling</p>
          </div>
          <div className="flex gap-2 px-6 py-3 rounded-full bg-white/80 font-bold text-secondary-light">
            sd
            <p>Travelling</p>
          </div>
        </div>
      </section>
    </main>
  );
}
