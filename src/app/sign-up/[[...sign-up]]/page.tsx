import { SignUp } from "@clerk/nextjs";
import mentra_logo from '../../../../public/assets/images/mentra_nav_logo.png'
import Image from "next/image";
import "./login.css"
export default function Page() {
  return (
    <div className="flex w-full h-screen">
      <div className="w-[60%] bg-gray-100 md:flex hidden items-center justify-center relative">image content</div>
      <Image src={mentra_logo.src} className="absolute bottom-4 left-4" alt="alt" width={150} height={150} />
      <div className="bg-primary md:w-[40%] w-full min-w-fit flex flex-col gap-6 justify-center items-center">
        <h1 className="text-white font-bold text-4xl">Sign Up</h1>
        <p className="text-white">with an email account</p>
        <SignUp/></div>    </div>
)
}