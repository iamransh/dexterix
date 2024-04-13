'use client'
import { useState } from "react";
import mentra_logo from "../../../../../public/assets/images/mentra_nav_logo.png";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SignedIn, SignedOut, SignOutButton } from "@clerk/nextjs";
import SignInForm from "./_components/LoginForm";

export default function Page() {
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
        <div className="w-2/3 mt-10 flex flex-col items-center gap-6 min-w-[250px]">
          <h1 className="font-bold text-3xl text-center">Admin Login</h1>
          <div className="w-full" id="sign-in">
            <SignedOut>
              <SignInForm/>
            </SignedOut>
            <SignedIn>
              <p className="text-center">You are already signed in</p>
              <SignOutButton/>
            </SignedIn>
          </div>
          </div>
        <div className="flex w-full md:justify-between justify-center gap-4 flex-wrap">

          <p className="text-center">Dont have an account?</p>
          <Link className="underline font-bold text-center" href={"/mentor/sign-up"}>Register Now</Link>
        </div>
      </div>
    </div>
  );
}
