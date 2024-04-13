"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React, { useEffect, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Tailwindconnect from "@/components/ui/tailwindcss-buttons/tailwind-connect";
import { usePathname } from "next/navigation";
import { useUser } from "@clerk/nextjs";
import { useClerk } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { IoMenu } from "react-icons/io5";
import mentra_logo from "../../../public/assets/images/mentra_nav_logo.png";
import Image from "next/image";
import { navlist } from "./NavList";
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";

export function Navbar() {
  const router = useRouter()
  const {signOut} = useClerk()
  const { user } = useUser();
  console.log(user);
  const [isUser, setisUser] = useState(false);
  useEffect(() => {
    if (user != null) {
      setisUser(true);
    }
  }, [user]);

  const pathname = usePathname();
  return (
    <div className="z-50 lg:w-[85%] w-[95%] font-lato bg-[#ffffffA6] flex justify-between items-center rounded-full p-2 px-4 fixed top-4 backdrop-blur-md py-4 shadow-xl left-1/2 translate-x-[-50%]">
      <div
        className={`flex gap-2 items-center justify-start lg:w-[50%] md:w-[55%]`}
      >
        <Image
          src={mentra_logo.src}
          alt="mentra"
          width={"100"}
          height={"100"}
          onClick={() => router.push("/")}
          className="cursor-pointer"
        />
        <div className="md:flex items-center hidden justify-around w-full lg:w-[65%] md:w-[60%]">
          {navlist.map((e, id) => {
            return (
              <Link className="lg:text-md text-sm" href={e.to} key={id}>
                <p
                  className={`lg:inline hidden ${
                    e.to == pathname ? "font-bold" : "font-normal"
                  }`}
                >
                  {e.name}
                </p>
                <p
                  className={`lg:hidden inline ${
                    e.to == pathname ? "font-bold" : "font-normal"
                  }`}
                >
                  {e.name2}
                </p>
              </Link>
            );
          })}
        </div>
      </div>
      <div className="flex items-center justify-end lg:gap-4 md:gap-2 gap-2">
        <Button
          asChild
          className="sm:flex justify-center items-center hidden rounded-full bg-gradient-to-r lg:w-36 md:w-32 w-[140px] from-primary to-secondary px-4 font-normal py-2 h-fit"
        >
          <Link href={"/mentors"}>Book a call</Link>
        </Button>
        <Button
          asChild
          className={`${
            !isUser
              ? "sm:flex justify-center items-center w-[140px] lg:w-36 md:w-32 hidden rounded-full bg-transparent bg-gradient-to-r from-primary to-secondary px-4 font-normal py-2 h-fit"
              : "hidden"
          }`}
        >
          <Link href={"/sign-in"}>Login/Signup</Link>
        </Button>
        <Button
          asChild
          className={`${
            !isUser
              ? "sm:flex justify-center items-center w-[140px] lg:w-36 md:w-32 hidden rounded-full bg-transparent bg-gradient-to-r from-primary to-secondary px-4 font-normal py-2 h-fit"
              : "hidden"
          }`}
        >
          <Link href={"/mentor/sign-in"}>Mentor login</Link>
        </Button>

        {isUser && (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Avatar className="cursor-pointer">
                <AvatarImage src={user?.imageUrl} />
                <AvatarFallback>U</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-36 mt-4">
              <DropdownMenuGroup>
                <DropdownMenuItem className="cursor-pointer">
                  <Link href={""} className="w-full">
                    <p className="text-center w-full">Scheduled Calls</p>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="cursor-pointer" onClick={()=>signOut(() => {
                setisUser(false)
                router.push("/")
              })}>
                  <p className="text-center w-full text-red-600">Logout</p>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        )}

        <Sheet>
          <SheetTrigger className="md:hidden sm:mr-0 mr-3" asChild>
            <IoMenu className="cursor-pointer" size={"30px"} color="gray" />
          </SheetTrigger>
          <SheetContent className="bg-[#ffffff50] backdrop-blur-sm sm:w-[40%] w-[80%]">
            <SheetHeader>
              {/* <SheetTitle>Edit profile</SheetTitle>
              <SheetDescription>
                Make changes to your profile here. Click save when youre done.
              </SheetDescription> */}
            </SheetHeader>
            <div className="flex flex-col gap-4 items-center justify-start">
              {navlist.map((item, index) => {
                return (
                  <div
                    className={`rounded-full w-3/4 p-2 text-center ${
                      pathname == item.to
                        ? "bg-[#0C0C39] text-white"
                        : "bg-transparent text-[#0C0C39] hover:bg-gray-50"
                    }`}
                    key={index}
                  >
                    <Link href={item.to}>{item.name}</Link>
                  </div>
                );
              })}
            </div>
            <SheetFooter>
              {/* <SheetClose asChild>
                <Button type="submit">Save changes</Button>
              </SheetClose> */}
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
}
