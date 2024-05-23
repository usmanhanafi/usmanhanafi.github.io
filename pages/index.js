import Image from "next/image";
// import { Inter } from "next/font/google";

import ButtonPrimary from "./components/ButtonPrimary";
import ButtonPrimaryOutline from "./components/ButtonPrimaryOutline";
import BadgeIcon from "./components/BadgeIcon";
import CardExperience from "./components/CardExperience";
import Link from "next/link";
import Navbar from "./components/Navbar";

// const inter = Inter({ subsets: ["latin"] });
export default function Home() {
  return (
    <main className="">
      <div className="z-[-1] h-[100vh] absolute">
        <Image
          className="h-full w-full"
          src="/images/bg-hero.png"
          alt="tholib-usman-hanafi-profile"
          layout="responsive"
          width={0}
          height={0}
          objectFit="cover"
          priority
        />
      </div>
      <section id='hero' className={`md:pt-32 lg:p-24`}>
        <div className="flex flex-col justify-center pb-[10vh] items-center relative min-h-screen text-center">
          <div className="container mx-auto p-4">
            <h1 className="text-3xl sm:mt-[-15vh] md:mt-[-40vh] lg:mt-[-50vh] lg:text-5xl xl:text-[56px] font-bold text-white pt-12"> <span> </span> Hello! I'm <span className="text-primary">Usman Hanafi</span></h1>
            <p className="text-white font-semibold lg:text-xl xl:text-2xl mt-4">A FullStack Developer | Project Manager</p>
            <p className="text-white lg:text-xl xl:text-xl font-regular mt-3">With <span className="text-primary font-semibold bg-secondary-light px-3 py-1 rounded-full">2+ Years</span> Experience</p>
            <div className="flex gap-4 items-center justify-center mt-10 mb-[20vh] md:mb-0 ">
              <Link href='/docs/resume-tholib-usman-hanafi.pdf' download="resume-tholib-usman-hanafi.pdf" target="_blank">
                <ButtonPrimaryOutline>Resume</ButtonPrimaryOutline>
              </Link>
              <Link href='mailto:usmanhanafit@gmail.com'>
                <ButtonPrimary>Hire Me</ButtonPrimary>
              </Link>
            </div>
            <div className="absolute bottom-0 right-0 left-0 hidden md:block">
              <Image
                className="px-4 px-[10vw] lg:px-[16vw]"
                src="/images/my-short-profile.png"
                alt="tholib-usman-hanafi-profile"
                layout="responsive"
                width={0}
                height={0}
                objectFit="contain"
              />
            </div>
          </div>
          <div className="absolute bottom-0 right-0 left-0  md:hidden">
            <Image
              className="sm:px-16"
              src="/images/my-short-profile-mobile.png"
              alt="tholib-usman-hanafi-profile"
              layout="responsive"
              width={0}
              height={0}
              objectFit="contain"
            />
          </div>
        </div>
      </section>
      <section id='about' className="container mx-auto p-4 my-10">
        <h2 className="lg:text-[56px] text-primary font-bold text-center">About Me</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center mt-5">
          <div className="">
            <div className="flex gap-3 items-center">
              <Image
                className="p-1 border border-primary rounded-full"
                src="/images/foto-jas.png"
                alt="tholib-usman-hanafi-profile"
                width={60}
                height={60}
                objectFit="cover"
              />
              <p className="lg:text-3xl text-primary font-bold">I Love</p>
            </div>
            <div className="flex gap-3 flex-wrap mt-5 lg:w-[70%] ">
              <BadgeIcon icon='travel'>Travelling</BadgeIcon>
              <BadgeIcon icon='movie'>Watching Movie</BadgeIcon>
              <BadgeIcon icon='sport'>Sport</BadgeIcon>
              <BadgeIcon icon='money'>Money</BadgeIcon>
            </div>
          </div>
          <div className="flex gap-3 md:gap-5 mt-5">
            <div className="bg-secondary-light rounded-[2rem] lg:rounded-[4rem] p-4 md:p-12 text-center w-full lg:w-auto">
              <p className="text-2xl md:text-[50px] lg:text-[60px] text-primary font-bold">2.0 +</p>
              <p className="text-md lg:text-[32px] text-white font-medium mt-3 lg:mt-8">Years</p>
              <p className="text-md lg:text-[32px] text-white font-medium md:mt-2">Experience</p>
            </div>
            <div className="bg-secondary-light rounded-[2rem] lg:rounded-[4rem] p-4 md:p-12 text-center w-full xl:w-auto">
              <p className="text-2xl md:text-[50px] lg:text-[60px] text-primary font-bold">10 +</p>
              <p className="text-md lg:text-[32px] text-white font-medium mt-3 lg:mt-8">Project</p>
              <p className="text-md lg:text-[32px] text-white font-medium md:mt-2">Completed</p>
            </div>
          </div>
        </div>
        <div className="bg-secondary-light rounded-2xl lg:rounded-[3rem] p-4 lg:p-10 text-center mt-4 md:mt-8 w-full">
          <p className="txt-md lg:text-lg xl:text-xl text-white/80">I am a seasoned <strong>Fullstack Developer with over 2 years</strong> of experience, initially in UI/UX design during a 4-month internship. After completing my SMK, I worked as a Frontend Developer at a Yogyakarta software house. Currently pursuing further education, I engage in freelance projects, showcasing my proficiency as a Fullstack Developer. I specialize in React.js and have a proven track record in developing responsive web applications. My diverse skills, ranging from UI/UX to Fullstack development, make me a dynamic and adaptable professional <strong>ready to contribute to challenging projects</strong> <br /><strong>I am particularly interested in the field of technology</strong>, especially software development. <strong>My goal is to become a software engineer at a top company</strong>, where I can leverage my skills and experience to contribute to innovative and impactful projects..
          </p>
        </div>
        <div className="flex justify-center my-3 md:my-10"><ButtonPrimaryOutline>Contact Me</ButtonPrimaryOutline></div>
      </section>
      <section id='education' className="container mx-auto p-4 my-10 md:my-20">
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
      <section id='experience' className="container mx-auto p-4 my-10 md:my-20">
        <h2 className="lg:text-[56px] text-primary font-bold text-center">Experience</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 md:gap-4 mt-5">
          <CardExperience
            image='solusi247'
            place='PT Solusi Dua Empat Tujuh'
            address='Umbulharjo, Yogyakarta.'
            date='2020 (4 month)'
            job_title='Internship UI Designer'
            description="Redesigned the user interface of Solusi247's company profiles website, focusing on improving website flow and incorporating additional components. Created prototypes for the redesigned web interface and effectively communicated design concepts with supervisors. Assumed control over the design implementation process, collaborating closely with the Frontend development team to ensure the seamless integration of the new design elements."
          />
          <CardExperience
            image='techorigin'
            place='Techorigin - Software House'
            address='Gamping, Sleman, Yogyakarta.'
            date='2021-2022 (12 month)'
            job_title='Frontend Developer'
            description="I am a member of the Engineer Team, along with three other people. I am in charge of creating an interface design that is both user-friendly and consistent with the company's brand. I also assist the team with frontend development, particularly in the creation of design systems and UI components with React."
          />
          <CardExperience
            image='istana-mesin-laundry'
            place='PT Istana Mesin Laundry'
            address='Seyegan, Sleman, Yogyakarta.'
            date='2021-2023 (12 month)'
            job_title='Fullstack Developer'
            description="I contributed significantly to PT Istana Mesin Laundry by developing a cashier application and integrating it with IoT-enabled laundry machines. This collaborative software streamlined operations, enhancing the overall efficiency of the laundry management ecosystem."
          />
        </div>
      </section>
      <section id='skills' className="container mx-auto p-4 my-3 md:my-10">
        <h2 className="lg:text-[56px] text-primary font-bold text-center">Skills</h2>
        <h3 className="lg:text-[36px] text-primary font-bold text-center mt-10 mb-5">Design Tools I Use</h3>
        <div className="flex flex-wrap gap-4 justify-center items-center">
          <BadgeIcon icon='figma'>figma</BadgeIcon>
          <BadgeIcon icon='adobe-xd'>adobe xd</BadgeIcon>

        </div>
        <h3 className="lg:text-[36px] text-primary font-bold text-center mt-10 mb-5">Techologies I Use</h3>
        <div className="flex flex-wrap lg:w-[80%] mx-auto gap-4 justify-center items-center">
          <BadgeIcon>html</BadgeIcon>
          <BadgeIcon>css</BadgeIcon>
          <BadgeIcon icon='js'>javascript</BadgeIcon>
          <BadgeIcon>jquery</BadgeIcon>
          <BadgeIcon icon='react'>react js</BadgeIcon>
          <BadgeIcon icon='react'>react native</BadgeIcon>
          <BadgeIcon icon='react-query'>react query</BadgeIcon>
          <BadgeIcon icon='nextjs'>next js</BadgeIcon>
          <BadgeIcon>firebase</BadgeIcon>
          <BadgeIcon icon='scss'>SCSS</BadgeIcon>
          <BadgeIcon>bootstrap</BadgeIcon>
          <BadgeIcon icon='styled-component'>styled component</BadgeIcon>
          <BadgeIcon icon='tailwindcss'>tailwind CSS</BadgeIcon>
          <BadgeIcon icon='material-ui'>material ui</BadgeIcon>
          <BadgeIcon icon='chakraui'>chakra ui</BadgeIcon>
          <BadgeIcon icon='antdesign'>ant design</BadgeIcon>
          <BadgeIcon >git</BadgeIcon>
          <BadgeIcon >frammer</BadgeIcon>
        </div>
        <h3 className="lg:text-[36px] text-primary font-bold text-center mt-10 mb-5">Development & Productivity Tools I Use</h3>
        <div className="flex flex-wrap gap-4 justify-center items-center">
          <BadgeIcon icon='vscode' >Visual Studio Code</BadgeIcon>
          <BadgeIcon>gitlab</BadgeIcon>
          <BadgeIcon>github</BadgeIcon>
          <BadgeIcon>notion</BadgeIcon>
          <BadgeIcon>trello</BadgeIcon>
          <BadgeIcon>postman</BadgeIcon>
        </div>

      </section>
      <section id='projects' className="my-10 container mx-auto p-4">
        <h2 className="lg:text-[56px] text-primary font-bold text-center">Projects I've Worked On</h2>
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 mt-5 md:mt-10">
          <div className="bg-white/10 p-4 rounded-3xl flex flex-col items-start">
            <Image
              className="rounded-3xl bg-black"
              src="/images/laundry.png"
              alt="portfolio-images"
              layout="responsive"
              width={0}
              height={0}
              objectFit="cover"
            />
            <h3 className="lg:text-3xl text-white font-bold mt-3 md:mt-5">Laundry Ecosystem</h3>
            <p className="text-white/80 text-md font-medium mt-3 md:mt-5 mb-3">Worked on</p>
            <div className="flex gap-4 items-center">
              <div className="px-4 py-2 bg-white/15 rounded-full"><p className="text-white font-medium"> Website</p></div>
              <div className="px-4 py-2 bg-white/15 rounded-full"><p className="text-white font-medium"> Application</p></div>
            </div>
            <p className="text-white/80 text-md font-medium mt-3 md:mt-5 mb-3">Techologies I have used</p>
            <div className="flex gap-3 items-center flex-wrap mb-5">
              <BadgeIcon size='small' className='opacity-90'>html</BadgeIcon>
              <BadgeIcon size='small' className='opacity-90'>css</BadgeIcon>
              <BadgeIcon icon='js' size='small' className='opacity-90'>javascript</BadgeIcon>
              <BadgeIcon icon='react' size='small' className='opacity-90'>react js</BadgeIcon>
              <BadgeIcon icon='react' size='small' className='opacity-90'>react native</BadgeIcon>
              <BadgeIcon size='small' className='opacity-90'>laravel</BadgeIcon>
              <BadgeIcon size='small' className='opacity-90'>bootstrap</BadgeIcon>
              <BadgeIcon icon='tailwindcss' size='small' className='opacity-90'>tailwind css</BadgeIcon>
              <BadgeIcon icon='nextjs' size='small' className='opacity-90'>next js</BadgeIcon>
            </div>
            <Link className="self-end mt-3 md:mt-5" href='/'>
              <ButtonPrimaryOutline color='white'>Go to Laundryan</ButtonPrimaryOutline>
            </Link>
          </div>
          <div>
            <div className="flex gap-4 flex-col md:flex-row bg-white/10 p-4 rounded-3xl">
              <Image
                className="rounded-3xl h-full w-full md:h-[45%] md:w-[45%]"
                src="/images/avantinemua.png"
                alt="portfolio-images"
                width={300}
                height={300}
                objectFit="contain"
              />
              <div className="flex flex-col w-full justify-between">
                <div>
                  <h3 className="lg:text-3xl text-white font-bold mt-3 md:mt-5">AVANTINE MUA</h3>
                  <p className="text-white/80 text-md font-medium mt-3 md:mt-5 mb-3">Worked on</p>
                  <div className="flex gap-4 items-center">
                    <div className="px-4 py-2 bg-white/15 rounded-full"><p className="text-white font-medium">Website</p></div>
                  </div>
                  <p className="text-white/80 text-md font-medium mt-3 md:mt-5 mb-3">Techologies I have used</p>
                  <div className="flex gap-3 items-center flex-wrap mb-5">
                    <BadgeIcon className='opacity-90 mx-[-12px] my-[-4px] font-semibold scale-75'>html</BadgeIcon>
                    <BadgeIcon className='opacity-90 mx-[-12px] my-[-4px] font-semibold scale-75'>css</BadgeIcon>
                    <BadgeIcon icon='js' className='opacity-90 mx-[-12px] my-[-4px] font-semibold scale-75'>javascript</BadgeIcon>
                  </div>
                </div>
                <Link href='https://awantinamua.com/' target="_blank" className="self-end">
                  <ButtonPrimaryOutline color='white'>Go To Avantinemua</ButtonPrimaryOutline>
                </Link>
              </div>
            </div>
            <div className="flex gap-4 flex-col md:flex-row bg-white/10 p-4 rounded-3xl mt-4">
              <Image
                className="rounded-3xl h-full w-full md:h-[45%] md:w-[45%]"
                src="/images/diwebin.png"
                alt="portfolio-images"
                width={300}
                height={300}
                objectFit="contain"
              />
              <div className="flex flex-col w-full justify-between">
                <div>
                  <h3 className="lg:text-3xl text-white font-bold mt-3 md:mt-5">DIWEBIN Website Builder</h3>
                  <p className="text-white/80 text-md font-medium mt-3 md:mt-5 mb-3">Worked on</p>
                  <div className="flex gap-4 items-center">
                    <div className="px-4 py-2 bg-white/15 rounded-full"><p className="text-white font-medium">Website</p></div>
                  </div>
                  <p className="text-white/80 text-md font-medium mt-3 md:mt-5 mb-3">Techologies I have used</p>
                  <div className="flex gap-3 items-center flex-wrap mb-5">
                    <BadgeIcon className='opacity-90 mx-[-12px] my-[-4px] font-semibold scale-75'>html</BadgeIcon>
                    <BadgeIcon className='opacity-90 mx-[-12px] my-[-4px] font-semibold scale-75'>css</BadgeIcon>
                    <BadgeIcon icon='js' className='opacity-90 mx-[-12px] my-[-4px] font-semibold scale-75'>javascript</BadgeIcon>
                    <BadgeIcon className='opacity-90 mx-[-12px] my-[-4px] font-semibold scale-75'>jquery</BadgeIcon>
                  </div>
                </div>
                <Link href='https://diwebin.com/' target="_blank" className="self-end">
                  <ButtonPrimaryOutline color='white'>Go To Diwebin</ButtonPrimaryOutline>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
