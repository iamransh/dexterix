import Image from "next/image";
import hero_bg from "../(homepage)/assets/images/hero_bg.png";
import unique from "../(homepage)/assets/images/unique.png";
import graduation from "../(homepage)/assets/images/graduation.png";
import leadership from "../(homepage)/assets/images/leadership.png";
import { Navbar } from "../_components/Navbar";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";


export default function Page() {
  return (
    <div className="w-full flex flex-col items-center">
        <div className="w-full absolute h-screen">
          {/* <Image src={hero_bg.src} alt="alt" objectFit="cover" layout="fill" /> */}
        </div>
        <div className="w-full h-screen relative bg-[#00000099] flex flex-col justify-center items-center">
          <Navbar />
          <div className="flex flex-col gap-20 w-[90%] max-w-[800px] items-center justify-center h-full">
              
            <h1 className="text-black text-center font-bold md:text-6xl text-5xl">
            Become a Guiding Star with Mentra            
            </h1>
            <div className="flex justify-center w-full">
              <Button
                asChild
                className="text-xl rounded-full bg-secondary text-white px-4 font-normal py-1 sm:w-72 w-3/4 max-w-[300px] h-fit"
              >
                <Link href={"/mentor/sign-up"}>Register now !</Link>
              </Button>
            </div>
          </div>
        </div>
      <div className="w-full flex flex-col-reverse md:flex-row my-20 px-6 lg:px-20 items-center justify-between">
        <div className="md:w-[50%] w-full flex flex-col gap-6 px-0 md:px-5">
          <div className="text-black text-4xl font-bold md:block hidden">At Mentra</div>
          <div className="md:block hidden">We empower university students like you to share your journey and insights with those just embarking on theirs. As a mentor, you are more than a guide; you are a motivator, a strategist, and the catalyst for a student&apos;s dream to study at a top university. This is an opportunity to earn a substantial income, making every day a chance to grow your earnings while you contribute to shaping futures. <br/><br/> Treat Mentra as your entrepreneurial venture – a side hustle that fits perfectly into the busy life of a university student. With flexible hours and a direct connection to those in need, you have the power to earn on your terms and make a tangible difference.</div>
        </div>
        <div className="md:max-w-[40%] w-full md:px-0 md:my-0 my-10 md:min-w-[400px] md:flex items-center hidden h-full relative">
          <Image src={unique.src} objectFit="cover" alt="alt" layout="responsive" width={600} height={600} />
        </div>
        <div className="md:w-[50%] w-full flex flex-col gap-6 md:px-5 md:hidden">
          <div className="text-black text-4xl font-bold md:hidden block">At Mentra</div>
          <div className="md:w-[40%] w-full md:px-0 my-0 md:min-w-[450px] h-full relative">
          <Image src={unique.src} objectFit="cover" alt="alt" layout="responsive" width={600} height={600} />
        </div>
          <div className="md:hidden block">
          {"We empower university students like you to share your journey and insights with those just embarking on theirs. As a mentor, you are more than a guide; you are a motivator, a strategist, and the catalyst for a student's dream to study at a top university. This is an opportunity to earn a substantial income, making every day a chance to grow your earnings while you contribute to shaping futures."} <br/><br/> {"Treat Mentra as your entrepreneurial venture – a side hustle that fits perfectly into the busy life of a university student. With flexible hours and a direct connection to those in need, you have the power to earn on your terms and make a tangible difference."}
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col-reverse md:flex-row-reverse my-10 px-6 lg:px-20 items-center justify-between">
        <div className="md:w-[50%] w-full flex flex-col gap-6 px-0 md:px-5">
          <div className="text-black text-4xl font-bold md:block hidden">Mentra Ensures</div>
          <div className="md:block hidden">A seamless connection with students, an easy-to-use interface for managing your services, and a reliable payment system that rewards your dedication with proper compensation.<br/><br/> Join us at Mentra, where you can transform your university experience into an enriching mentorship that pays.</div>
          <div className="md:flex hidden justify-start w-full">
              <Button
                asChild
                className="text-xl rounded-full bg-secondary text-white px-4 font-normal py-1 sm:w-72 w-3/4 max-w-[300px] h-fit"
              >
                <Link href={"/mentor/sign-up"}>Start Mentoring Today !</Link>
              </Button>
            </div>
        </div>
        <div className="md:max-w-[40%] w-full md:px-0 md:my-0 my-10 md:min-w-[400px] md:flex items-center hidden h-full relative">
          <Image src={unique.src} objectFit="cover" alt="alt" layout="responsive" width={600} height={600} />
        </div>
        <div className="md:w-[50%] w-full flex flex-col gap-6 md:px-5 md:hidden">
          <div className="text-black text-4xl font-bold md:hidden block">Mentra Ensures</div>
            <div className="md:w-[40%] w-full md:px-0 my-0 md:min-w-[450px] h-full relative">
                <Image src={unique.src} objectFit="cover" alt="alt" layout="responsive" width={600} height={600} />
            </div>
          <div className="md:hidden block">
          A seamless connection with students, an easy-to-use interface for managing your services, and a reliable payment system that rewards your dedication with proper compensation.<br/><br/> Join us at Mentra, where you can transform your university experience into an enriching mentorship that pays.
          </div>
          <div className="md:hidden flex justify-start w-full">
              <Button
                asChild
                className="text-xl rounded-full bg-secondary text-white px-4 font-normal py-1 sm:w-72 w-3/4 max-w-[300px] min-w-fit h-fit"
              >
                <Link href={"/mentors"}>Start Mentoring Today !</Link>
              </Button>
            </div>
        </div>
      </div>
      
    </div>
  );
}
