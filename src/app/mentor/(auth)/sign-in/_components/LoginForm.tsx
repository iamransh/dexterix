"use client"

import { useState } from "react";
import { useSignIn } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
 
export default function SignInForm() {
  const { isLoaded, signIn, setActive } = useSignIn();
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  // start the sign In process.
  const handleSubmit = async (e:any) => {
    e.preventDefault();
    if (!isLoaded) {
      return;
    }
 
    try {
      const result = await signIn.create({
        identifier: emailAddress,
        password,
      });
 
      if (result.status === "complete") {
        console.log(result);
        await setActive({ session: result.createdSessionId });
        router.push("/")
      }
      else {
        /*Investigate why the sign-in hasn't completed */
        console.log(result);
      }
 
    } catch (err: any) {
      console.error("error", err.errors[0].longMessage)
    }
  };
 
  return (
    <div className="w-full">
      <form className="w-full flex flex-col gap-6 items-center">
        <div className="w-full">
          <input onChange={(e) => setEmailAddress(e.target.value)} className="p-2 w-full text-black rounded-xl px-3" id="email" name="email" type="email" placeholder="Email" />
        </div>
        <div className="w-full">
          <input onChange={(e) => setPassword(e.target.value)} className="p-2 w-full text-black rounded-xl px-3" id="password" name="password" type="password" placeholder="Password"/>
        </div>
        <Button className="bg-secondary rounded-xl font-bold w-3/4" onClick={handleSubmit}>Login</Button>
      </form>
    </div>
  );
}