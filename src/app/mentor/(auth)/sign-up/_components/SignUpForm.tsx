import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import Link from 'next/link'
import React, { FormEvent } from 'react'

function SignUpForm() {
    const handleSubmit = (e:FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        const target = e.target as typeof e.target & {
            email: {value: string};
            password: {value: string}
        }
        const formData = {
            email: target.email.value,
            password: target.password.value
        }
        console.log(formData);
        
        
    }
  return (
    <div className='flex w-full flex-col h-full font-lato'>
        <form className="w-full flex flex-col gap-3 text-black items-center" onSubmit={handleSubmit}>
          <input className="p-2 w-full rounded-xl px-3" id="fullname" name="fullname" type="text" placeholder="Full Name" />        
          <input className="p-2 w-full rounded-xl px-3" id="mobile" name="mobile" type="tel" placeholder="Mobile No."/>        
          <input className="p-2 w-full rounded-xl px-3" id="email" name="email" type="email" placeholder="Email"/>        
          <input className="p-2 w-full rounded-xl px-3" id="password" name="password" type="password" placeholder="Preferred Password"/>
          <Textarea className='rounded-xl mt-6' rows={5} placeholder='A little about you (in 100 words or less)'/>
          <input className="p-2 w-full rounded-xl px-3" id="university" name="university" type="text" placeholder="Current University"/>        
          <input className="p-2 w-full rounded-xl px-3" id="course" name="course" type="text" placeholder="Course"/>        
          <input className="p-2 w-full rounded-xl px-3" id="acceptances" name="acceptances" type="text" placeholder="University Acceptances"/>        
          <input className="p-2 w-full rounded-xl px-3" id="scholarships" name="scholarships" type="text" placeholder="Scholarships"/>        
          <input className="p-2 w-full rounded-xl px-3" id="score" name="score" type="text" placeholder="SAT/ACT Score (if any)"/>        
          <Button className="bg-secondary rounded-xl font-bold w-3/4 my-4" type='submit'>Submit</Button>
      </form>
      <div className="flex w-full md:justify-between justify-center mt-8 gap-4 flex-wrap">
           <p className="text-center">Already have an account?</p>
          <Link className="underline font-bold text-center" href={"/mentor/sign-in"}>Login</Link>
        </div>
    </div>
  )
}

export default SignUpForm
