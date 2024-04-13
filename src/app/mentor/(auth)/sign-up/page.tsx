'use client'
import { useEffect, useState } from "react";
import mentra_logo from "../../../../../public/assets/images/mentra_nav_logo.png";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SignedIn, SignedOut, SignOutButton, useClerk } from "@clerk/nextjs";
import SignInForm from "./_components/LoginForm";
import SignUpForm from "./_components/SignUpForm";

export default function Page() {
  const clerk = useClerk()
  
  const [step, setstep] = useState(0);

  
  const nextStep = ()=>{
    setstep(step+1)
  }
  return (
    <div className="flex w-full h-screen">
      <div className="w-[60%] bg-gray-100 md:flex hidden items-center justify-center relative">
        image content
      </div>
      <Image
        src={mentra_logo.src}
        className="absolute bottom-4 left-4"
        alt="alt"
        width={150}
        height={150}
      />
      <div className="bg-primary text-white md:w-[40%] w-full md:min-w-[400px] p-16 flex flex-col gap-6 justify-between items-center">
        {step==0 && <div className="w-2/3 mt-10 flex flex-col items-center gap-16 min-w-[250px]">
          <h1 className="font-bold text-3xl text-center">Become a Guiding Star with Mentra</h1>
          <Button className="bg-secondary rounded-xl font-bold w-3/4" onClick={()=>{nextStep()}}>Sign Up</Button>
          </div>}
        {step==1 && <div className="w-2/3 flex flex-col items-center no-scrollbar gap-6 min-w-[250px] overflow-y-scroll">
          <h1 className="font-bold text-3xl text-center">Sign Up</h1>
          <p className="text-center">Please fill in the following details below and we will contact you for an interview.</p>
          <SignUpForm/>
          </div>}
      </div>
    </div>
  );
}
