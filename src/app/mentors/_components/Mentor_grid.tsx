"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";
import { IoBriefcaseOutline } from "react-icons/io5";
import { LiaGraduationCapSolid } from "react-icons/lia";

type mentorCardType = {
    name: string,
    imageUrl: string,
    job: string,
    university: string,
    linkto: string
}
export function Mentor_grid(props: mentorCardType) {
  const imageUrl = props.imageUrl;
  return (
    // <div className="relative flex items-center justify-center">
      <DirectionAwareHover imageUrl={imageUrl} linkto={props.linkto}>
        <p className="font-bold text-white text-xl">{props.name}</p>
        <span className="font-normal text-white text-sm flex gap-2 items-center">
            <IoBriefcaseOutline color="white" size={'15px'}/>
            <p className="">{props.university}</p>
        </span>
        <span className="font-normal text-white text-sm flex gap-2 items-center">
            <LiaGraduationCapSolid color="white" size={'15px'}/>
            <p className="">{props.job}</p>
        </span>
      </DirectionAwareHover>
    // </div>
  );
}