"use client"

import { useState,FormEvent, use } from "react";
import { useSignIn } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { GetUser } from "@/server/action";
 
export default function SignInForm() {
  const [loading, setLoading] = useState(false);
  const { isLoaded, signIn, setActive } = useSignIn();
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  // start the sign In process.
  const handleSubmit = async (e:FormEvent<HTMLFormElement>)=>{
    try {
      e.preventDefault();
      if (!isLoaded) {
        return;
      }
      setLoading(true);
      const user = await GetUser(emailAddress);
      if(!user.status){
        console.log(user.message);
        return;
      }
      if(user.data?.isAdmin){
      const result = await signIn.create({
        identifier: emailAddress,
        password,
      });
      if (result.status === "complete") {
        console.log(result);
        await setActive({ session: result.createdSessionId });
        router.push("/admin/dashboard");
      }
      else {
        /*Investigate why the sign-in hasn't completed */
        console.log(result);
      }
    }else{
      console.log("User is not a mentor or not accepted");
    }
    } catch (err: any) {
      console.error("error", err.errors[0].longMessage)
    }finally{
      setLoading(false);
    }
  };
 
  return (
    <div className="w-full">
      <form onSubmit={handleSubmit} className="w-full flex flex-col gap-6 items-center">
        <div className="w-full">
          <input onChange={(e) => setEmailAddress(e.target.value)} className="p-2 w-full text-black rounded-xl px-3" id="email" name="email" type="email" placeholder="Email" />
        </div>
        <div className="w-full">
          <input onChange={(e) => setPassword(e.target.value)} className="p-2 w-full text-black rounded-xl px-3" id="password" name="password" type="password" placeholder="Password"/>
        </div>
        <Button className={`bg-secondary rounded-xl font-bold w-3/4 ${loading?'disabled':''}`} type="submit">{loading?'Logging In....':'Login'}</Button>
      </form>
    </div>
  );
}