import Image from 'next/image'
import React from 'react'
import mentra_logo from "../../../public/assets/images/logo.png";
import facebook from '../_assets/facebook-logo.png'
import linkedin from '../_assets/linkedin-logo.png'
import insta from '../_assets/insta-logo.png'

function Footer() {
  return (
    // <div className='w-full flex flex-wrap justify-evenly bg-[#0C0C39] p-10 pt-20'>
    //     <div className='flex flex-col gap-40'>
    //         <Image src={mentra_logo.src} alt="mentra" width={300} height={300} />
    //         <div className='w-full flex flex-col'>
    //           <div className='text-white text-xl font-bold' >Stay Connected</div>
    //           <div className='flex relative gap-5 mt-2'>
    //             <Image src={facebook.src} alt="facebook" width={30} height={30} />
    //             <Image src={linkedin.src} alt="linkedin" width={30} height={30} />
    //             <Image src={insta.src} alt="instagram" width={30} height={30} />
    //           </div>
    //         </div>
    //     </div>
    //     <div className='flex flex-col '>
    //       <div className='text-white text-xl font-bold'>Book 1:1 calls with students who have secured offers from leading universities.</div>
    //       <div className='text-[#33C693] text-4xl font-bold mt-3'>Ready to embark on your college journey?</div>
    //       <div className='w-full flex mt-20 justify-between'>
    //         <div className='flex flex-col gap-2'>
    //           <div className='text-white text-xl font-bold'>Mentor</div>
    //           <div className='text-[#33C693]'>Book a Call</div>
    //           <div className='text-[#33C693]'>Become a Mentor</div>
    //         </div>
    //         <div className='flex flex-col gap-2'>
    //           <div className='text-white text-xl font-bold'>Resources</div>
    //           <div className='text-[#33C693]'>Blog</div>       
    //         </div>
    //         <div className='flex flex-col gap-2'>
    //           <div className='text-white text-xl font-bold'>Company</div>
    //           <div className='text-[#33C693]'>Jobs</div>
    //           <div className='text-[#33C693]'>Terms and Conditions</div>
    //           <div className='text-[#33C693]'>Privacy Policy</div>
    //           <div className='text-[#33C693]'>Contact Us</div>
    //         </div>
    //       </div>
    //     </div>
    // </div>
    <div className='w-full flex flex-col bg-[#0C0C39] pt-20 p-5 sm:pt-16 sm:p-10 '>
      <div className='flex flex-wrap justify-evenly'>
        <div className='w-[300px] min-w-[200px] relative'>
          <Image src={mentra_logo.src} alt="mentra" width={300} height={300} />
          <div className='w-full min-w-[200px] flex flex-col items-center lg:items-start mb-8'>
            <div className='text-white text-xl font-bold'>Stay Connected</div>
            <div className='flex relative gap-5 mt-2'>
              <Image src={facebook.src} alt="facebook" width={30} height={30} />
              <Image src={linkedin.src} alt="linkedin" width={30} height={30} />
              <Image src={insta.src} alt="instagram" width={30} height={30} />
            </div>
          </div>
        </div>
        <div className='flex flex-col'>
          <div className='text-white text-xl font-bold text-center'>Book 1:1 calls with students who have secured offers from leading universities.</div>
          <div className='text-[#33C693] text-4xl font-bold mt-3 text-center'>Ready to embark on your college journey?</div>
          <div className='w-full flex flex-wrap mt-10 lg:mt-20 justify-center lg:justify-between'>
            <div className='flex flex-col items-center lg:items-start gap-2 min-w-[200px] mb-8'>
              <div className='text-white text-xl font-bold'>Mentor</div>
              <div className='text-[#33C693]'>Book a Call</div>
              <div className='text-[#33C693]'>Become a Mentor</div>
            </div>
            <div className='flex flex-col items-center lg:items-start gap-2 min-w-[200px] mb-8'>
              <div className='text-white text-xl font-bold'>Resources</div>
              <div className='text-[#33C693]'>Blog</div>       
            </div>
            <div className='flex flex-col items-center lg:items-start gap-2 min-w-[200px] mb-8'>
              <div className='text-white text-xl font-bold'>Company</div>
              <div className='text-[#33C693]'>Jobs</div>
              <div className='text-[#33C693]'>Terms and Conditions</div>
              <div className='text-[#33C693]'>Privacy Policy</div>
              <div className='text-[#33C693]'>Contact Us</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer