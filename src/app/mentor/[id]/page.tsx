import { Navbar } from "@/app/_components/Navbar";
import React from "react";
import ServiceCards from "./_components/ServiceCards";
import { mymentors } from "@/app/mentors/lib/utils";
import Image from "next/image";
import { IoBriefcaseOutline } from "react-icons/io5";
import { LiaGraduationCapSolid } from "react-icons/lia";
import { FaUserGraduate } from "react-icons/fa";
import { LuSchool2 } from "react-icons/lu";

const serviceCardData = [
  {
    title: "Service Name Displayed Here",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et. dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.",
  },
  {
    title: "Service Name Displayed Here",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et. dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.",
  },
  {
    title: "Service Name Displayed Here",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et. dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.",
  },
  {
    title: "Service Name Displayed Here",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et. dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.",
  },
];

function page() {
  return (
    <div className="w-full h-screen">
      <Navbar />
      <div className="w-full bg-gray-300 text-center h-[35%] flex items-center justify-center">
        image component
      </div>
      <div className="flex flex-row flex-wrap min-h-[65%] z-10">
        <div className="bg-primary sm:w-1/3 w-full flex sm:flex-row flex-col relative">
          <div className="h-32 w-32 bg-gray-200 ring-2 ring-white absolute rounded-full -top-20 left-8">
            <img
              src={mymentors[0].imageUrl}
              alt=""
              className="object-cover rounded-full h-full w-full"
            />
          </div>
          <div className="flex text-white flex-col gap-2 pt-14 pb-4 md:px-8 px-4">
            <p className="font-bold text-[32px]">{mymentors[0].name}</p>
            <span className="font-normal text-white text-sm flex gap-2 items-center">
              <IoBriefcaseOutline color="white" size={"15px"} />
              <p className="">{mymentors[0].university}</p>
            </span>
            <span className="font-normal text-white text-sm flex gap-2 items-center">
              <LiaGraduationCapSolid color="white" size={"15px"} />
              <p className="">{mymentors[0].job}</p>
            </span>
            <span className="font-normal text-white text-sm flex gap-2 items-center">
              <FaUserGraduate color="white" size={"15px"} />
              <p className="">Scholarships: {mymentors[0].scholarships}</p>
            </span>
            <span className="font-normal text-white text-sm flex gap-2 items-center">
              <LuSchool2 color="white" size={"15px"} />
              <p className="">University Acceptances: {mymentors[0].university_acceptances}</p>
            </span>
            <p className="font-bold text-[15px] mt-4">About me</p>
            <p className="">{mymentors[0].about}</p>
          </div>
        </div>
        <div className="bg-white sm:w-2/3 w-full flex-wrap flex justify-start lg:gap-8 gap-4 py-8 sm:px-8 px-4 overflow-y-scroll no-scrollbar h-[470px]">
          {serviceCardData.map((data, index) => {
            return (
              <ServiceCards
                key={index}
                title={data.title}
                description={data.description}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default page;
