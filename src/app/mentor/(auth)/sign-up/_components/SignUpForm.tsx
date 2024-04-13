'use client'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { MentorSignUp } from '@/server/action'
import Link from 'next/link'
import React, { FormEvent } from 'react'
import { useRouter } from 'next/navigation'

function SignUpForm() {
  const [loading, setLoading] = React.useState(false)
  const router = useRouter()
    const handleSubmit = async (e:FormEvent<HTMLFormElement>)=>{
      try{
        e.preventDefault()
        setLoading(true)
        const target = e.target as typeof e.target & {
            email: {value: string};
            password: {value: string};
            fullname: {value: string};
            mobile: {value: string};
            about: {value: string};
            profession: {value: string};
            experience: {value: string};
        }
        const formData = {
            email: target.email.value,
            password: target.password.value,
            name: target.fullname.value,
            phone: target.mobile.value,
            about: target.about.value,
            profession: target.profession.value,
            experience: target.experience.value
        }
        const res = await MentorSignUp(formData);
        if(res.status){
          router.push('/mentor/sign-in')
        }
        else{
          alert(res.message)
        }
      }catch(e){
        console.log(e);
      }finally{
        setLoading(false)
      }
    }
  return (
    <div className='flex w-full flex-col h-full font-lato'>
        <form className="w-full flex flex-col gap-3 text-black items-center" onSubmit={handleSubmit}>
          <input className="p-2 w-full rounded-xl px-3" id="fullname" name="fullname" type="text" placeholder="Full Name" />        
          <input className="p-2 w-full rounded-xl px-3" id="mobile" name="mobile" type="tel" placeholder="Mobile No."/>        
          <input className="p-2 w-full rounded-xl px-3" id="email" name="email" type="email" placeholder="Email"/>        
          <input className="p-2 w-full rounded-xl px-3" id="password" name="password" type="password" placeholder="Preferred Password"/>
          <Textarea className='rounded-xl mt-6' rows={5} placeholder='A little about you (in 100 words or less)' name='about' id='about' />
          <input className="p-2 w-full rounded-xl px-3" id="profession" name="profession" type="text" placeholder="Profession" />        
          <input className="p-2 w-full rounded-xl px-3" id="experience" name="experience" type="text" placeholder="Experience" />        
          <Button className={`bg-secondary rounded-xl font-bold w-3/4 my-4 ${loading?'disabled':''}`} type='submit'>
            {loading?'Loading...':'Submit'}
          </Button>
      </form>
      <div className="flex w-full md:justify-between justify-center mt-8 gap-4 flex-wrap">
           <p className="text-center">Already have an account?</p>
          <Link className="underline font-bold text-center" href={"/mentor/sign-in"}>Login</Link>
        </div>
    </div>
  )
}

export default SignUpForm
