import { Button } from '@/components/ui/button'
import React from 'react'

function ServiceCards({title, description}: {title:string, description: string}) {
  return (
    <div className='rounded-xl border border-[#C1C1C1] shadow-lg p-4 flex flex-col gap-2 lg:w-[40%] md:w-[48%] h-fit'>
      <p className="font-bold text-xl">{title}</p>
      <p className="">{description}</p>
      <Button className='w-full bg-secondary text-white text-center rounded-full mt-4'>Schedule Call</Button>
    </div>
  )
}

export default ServiceCards
