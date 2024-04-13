import React from 'react'
import Marquee from "react-fast-marquee"
import college1 from '../assets/images/college1.png'
import college2 from '../assets/images/college2.png'
import college3 from '../assets/images/college3.png'
import college4 from '../assets/images/college4.png'
import college5 from '../assets/images/college5.png'
import college6 from '../assets/images/college6.png'
import college7 from '../assets/images/college7.png'
import college8 from '../assets/images/college8.png'
function Colleges() {
    const marquee1 = [college1, college2, college3, college4, college5]
    const marquee2 = [college6, college7, college8]
  return (
    <div className='w-full flex flex-col gap-3 my-4'>
      <Marquee pauseOnHover autoFill={true}>
        {marquee1.map((img, ind)=>{
            return (
                <img className='mx-4 sm:w-[300px] w-[250px]' key={ind} src={img.src} alt=""/>
            )
        })}
      </Marquee>
      <Marquee pauseOnHover autoFill={true}>
        {marquee2.map((img, ind)=>{
            return (
                <img className='mx-4 sm:w-[300px] w-[250px]' key={ind} src={img.src} alt=""/>
            )
        })}
      </Marquee>
    </div>
  )
}

export default Colleges
