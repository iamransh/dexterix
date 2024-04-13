import Image from "next/image";
import hero_bg from "../(homepage)/assets/images/hero_bg.png";
import unique from "../(homepage)/assets/images/unique.png";
import graduation from "../(homepage)/assets/images/graduation.png";
import leadership from "../(homepage)/assets/images/leadership.png";
import { Navbar } from "../_components/Navbar";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";
import { mymentors } from "../mentors/lib/utils";
import { Mentor_grid } from "../mentors/_components/Mentor_grid";
import { AccordionDemo } from "./_components/Accordian";
import Footer from "../_components/Footer";
import { CardHoverEffectDemo } from "./_components/Card";
import Colleges from "./_components/Colleges";

export default function Home() {
  return (
    <div className="w-full font-lato flex flex-col items-center">
        <div className="w-full absolute h-screen">
          <Image src={hero_bg.src} alt="alt" objectFit="cover" layout="fill" />
        </div>
        <div className="w-full h-screen relative bg-[#00000099] flex flex-col justify-center items-center">
          <Navbar />
          <div className="flex flex-col w-[90%] max-w-[800px] items-center justify-end h-full">
            <div className="flex flex-col items-center justify-center gap-10">
              
            <h1 className="text-[#55DC93] text-center lg:text-6xl md:text-5xl text-4xl font-estrella">
              Your Affordable Pathway To Top College Acceptance
            </h1>
            <p className="text-[#ffffff] text-center md:text-2xl text-xl ">
              Expert Support for Your College Dreams!
            </p>
            <div className="flex justify-center sm:mt-10 mt-4 sm:gap-6 gap-2 flex-wrap h-max-content">
              <Button
                asChild
                className="text-xl w-36 rounded-full bg-gradient-to-r from-primary to-secondary px-4 font-normal py-1 h-fit"
              >
                <Link href={"/mentors"}>Book a call</Link>
              </Button>
              <Button asChild className="w-36 rounded-full text-xl bg-transparent bg-gradient-to-r from-primary to-secondary px-4 font-normal py-1 h-fit">
                <Link href={"/sign-in"}>Login/Signup</Link>
              </Button>
            </div>
            <div className="w-full flex sm:mt-20 mt-8 mb-4 justify-center cursor-pointer">
              <IoIosArrowDown color="gray" size={'30px'}/>
            </div>
            </div>
          </div>
        </div>
      <div className="w-full flex flex-col-reverse lg:flex-row my-20 px-6 sm:px-20 items-center justify-between">
        <div className="lg:w-[50%] w-full flex flex-col gap-16 px-0 lg:px-5">
          <div className="text-[#046289] text-4xl font-bold lg:block hidden">Find Your Perfect International Study Opportunity with Mentra&apos;s Personalized Approach</div>
          <div className="lg:block hidden">We understand that every student is unique and we are here to guide you in finding the right study abroad program that suits your needs and aspirations.</div>
          <div className="w-full flex flex-col sm:flex-row items-center sm:items-start justify-between">
            <div className="sm:w-[45%] w-full my-3 sm:my-0 flex flex-col gap-4">
              <div className="flex flex-col items-center sm:items-start">
                <div className="w-[50px] h-[50px] relative mb-2 ">
                  <Image src={graduation.src} objectFit="cover" alt="alt" fill />
                </div>
                <div className="text-[#046289] text-xl font-bold">Why Choose Us</div>
              </div>
              <div className="text-center sm:text-start">Extensive network of partner universities around the world</div>
            </div>
            <div className="sm:w-[45%] w-full my-3 sm:my-0 flex flex-col gap-4">
              <div className="flex flex-col items-center sm:items-start">
                <div className="w-[50px] h-[50px] relative mb-2 ">
                  <Image src={leadership.src} objectFit="cover" alt="alt" fill />
                </div>
                <div className="text-[#046289] text-xl font-bold">We Focus On</div>
              </div>
              <div className="text-center sm:text-start">Personalized guidance throughout the application process</div>
            </div>
          </div>
        </div>
        <div className="lg:w-[40%] w-full lg:px-0 lg:my-0 my-10 lg:min-w-[450px] h-full relative">
          <Image src={unique.src} objectFit="cover" alt="alt" layout="responsive" width={600} height={600} />
        </div>
        <div className="lg:w-[50%] w-full flex flex-col gap-16 lg:px-5 lg:hidden">
          <div className="text-[#046289] text-4xl font-bold lg:hidden block">Find Your Perfect International Study Opportunity with Mentra&apos;s Personalized Approach</div>
          <div className="lg:hidden block">We understand that every student is unique and we are here to guide you in finding the right study abroad program that suits your needs and aspirations.</div>
        </div>
      </div>
      <div className="w-full flex lg:flex-row flex-col my-10 px-5 sm:px-20">
        <div className="w-full lg:w-[60%] lg:px-5 text-[#33C693] font-estrella text-4xl my-2">Unlock Your Study Abroad Potential with Mentra&apos;s customised Services</div>
        <div className="w-full lg:w-[40%] lg:min-w-[450px] my-2">Here, affordability meets reliability. We understand the college application process is a monumental step, and it shouldn&apos;t come with a monumental price tag. At Mentra, high school students gain access to indispensable advice from university students who have recently navigated the same path.</div>
      </div>
      <div className="flex flex-col max-w-[1000px] my-10 justify-center items-center">
        <CardHoverEffectDemo/>
        <Button
            asChild
            className="text-xl w-36 rounded-full bg-gradient-to-r from-primary to-secondary px-4 font-normal py-2 h-fit"
          >
            <Link href={"/mentors"}>Book a call</Link>
        </Button>
      </div>
      <div className="w-full flex flex-col items-center gap-3 my-5 px-5">
        <div className="text-center">From acceptance letters to scholarships</div>
        <div className="text-4xl font-bold text-center">Learn from those who have done it</div>
        <Colleges/>
      </div>
      <div className="w-full flex flex-col items-center gap-3 my-5 px-5">
        <div className="text-center font-bold">FAQ&apos;s</div>
        <div className="text-4xl font-estrella text-center text-[#33C693]">Frequently Asked Questions</div>
        <div className="w-full flex flex-wrap px-5 sm:px-20 justify-evenly mb-10">
          <AccordionDemo question={'What is Mentra?'} answer={'Answer'} />
          <AccordionDemo question={'What is Mentra?'} answer={'Answer'} />
          <AccordionDemo question={'What is Mentra?'} answer={'Answer'} />
          <AccordionDemo question={'What is Mentra?'} answer={'Answer'} />
        </div>
        <Button
            asChild
            className="text-lg rounded-2xl bg-gradient-to-r from-primary to-secondary px-8 py-1 h-fit"
          >
            <Link href={"/mentors"}>View All FAQs</Link>
        </Button>
      </div>
      <Footer/>
    </div>
  );
}
