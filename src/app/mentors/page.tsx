import React from 'react'
import { Navbar } from '../_components/Navbar'
import { mymentors } from './lib/utils'
import { Mentor_grid } from './_components/Mentor_grid'
import { DropdownMenuRadioGroup } from '@/components/ui/dropdown-menu'
import { ComboboxDemo, DropdownMenuCheckboxes, SelectScrollable } from './_components/DropDownMenu'

function page() {
  return (
    <div className='flex flex-col w-full h-screen'>
        <Navbar/>
        <div className="w-full bg-gray-300 text-center h-[35%] flex items-center justify-center">
            image component
        </div>
        <div className="flex flex-col items-center w-full h-[65%] justify-center">

            <div className="w-full px-4 overflow-y-scroll no-scrollbar h-full flex justify-center">

            <div className="flex flex-row max-w-[1000px] h-fit py-8 flex-wrap justify-center items-center gap-6">
            <div className="w-full justify-center flex-wrap flex gap-8">
                {/* <DropdownMenuRadioGroupDemo/> */}
                <SelectScrollable/>
                {/* <DropdownMenuCheckboxes/> */}
                <ComboboxDemo/>
            </div>
                {mymentors.map((mentor, index)=>{
                    return (
                        <Mentor_grid linkto={mentor.linkto} key={index} name = {mentor.name} imageUrl = {mentor.imageUrl} university={mentor.university} job={mentor.job}/>
                    )
                })}
            </div>
            </div>
        </div>
    </div>
  )
}

export default page
