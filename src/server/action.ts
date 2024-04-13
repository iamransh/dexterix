"use server";
import { error } from "console";
import {
  UserType,
  UserSchema,
} from "../../schema/schemaTypes";
import prisma from "../lib/prisma";
import { clerkClient } from "@clerk/nextjs";

export async function CreateUser(data: UserType) {
    const validation = UserSchema.safeParse(data);
    if (!validation.success) {
    throw new Error("Validation error");
    }
    const { email } = data;
    const user = await prisma?.user.findUnique({
    where: {
        email,
    },
    });
    if (user) {
        const newUser = await prisma?.user.update({
            where: {
                email,
            },
            data: {
                status: "ACCEPTED",
            },
        });
        return {
            status: true,
            message: "User updated",
        };
    }
    const newUser = await prisma?.user.create({
    data:{
        email,
    }
    });
    if(!newUser){
        return {
            status: false,
            message: "User not created",
            data: undefined
        };
    }
    console.log(newUser);
    return {
        status: true,
        message: "User created",
        data: newUser
    };
}

export async function MentorSignUp(data: UserType){
    const validation = UserSchema.safeParse(data);
    if (!validation.success) {
    throw new Error("Validation error");
    }
    const { email, name, phone, password, about, profession, experience   } = data;
    const user = await prisma?.user.findUnique({
    where: {
        email,
    },
    });
    if (user) {
        return {
            status: false,
            message: "User already exists",
            data: user
        };
    }
    const newUser = await prisma?.user.create({
    data:{
        email,
        name,
        phone,
        password,
        about,
        profession,
        experience,
        isMentor: true,
    }
    });
    if(!newUser){
        return {
            status: false,
            message: "User not created",
            data: undefined
        };
    }
    console.log(newUser);
    return {
        status: true,
        message: "User created",
        data: newUser
    };
}

export async function GetUser(email: string){
    const user = await prisma?.user.findUnique({
        where: {
            email,
        },
    });
    if(!user){
        return {
            status: false,
            message: "User not found",
            data: undefined
        };
    }
    return {
        status: true,
        message: "User found",
        data: user
    };
}

export async function AdminSignUp(data: UserType){
    const validation = UserSchema.safeParse(data);
    if (!validation.success) {
    throw new Error("Validation error");
    }
    const { email, password } = data;
    const user = await prisma?.user.findUnique({
    where: {
        email,
    },
    });
    if (user) {
        return {
            status: false,
            message: "Admin already exists",
            data: user
        };
    }
    const newUser = await prisma?.user.create({
    data:{
        email,
        password,
        isAdmin: true,
    }
    });
    if(!newUser){
        return {
            status: false,
            message: "Admin not created",
            data: undefined
        };
    }
    console.log(newUser);
    return {
        status: true,
        message: "Admin created",
        data: newUser
    };
}

export async function getMentors(){
    const mentors = await prisma?.user.findMany({
        where:{
            isMentor: true
        }
    })
    return {
        status: "success",
        message: "mentors fetched successfully",
        data: mentors
    }
}

export async function getMentor(id:string){
    const mentor = await prisma?.user.findUnique({
        where:{
            id
        }
    })
    return {
        status: "success",
        message: "mentor fetched successfully",
        data: mentor
    }
}

export async function approve(email:string, password: string){

    try{
        try {
            const user = await clerkClient.users.createUser({
                emailAddress: [email],
                password
            }) 
        } catch (error:any) {
            return {
                status: 'failed',
                message: "error creating user in clerk",
                data: error.message
            }
        }
        const mentor = await prisma?.user.update({
            where: {
                email
            },
            data:{
                status: 'ACCEPTED'
            }
        })
        return {
            status: "success",
            message: "user approved successfully",
            data: mentor
        }

    }catch(e:any){
        return {
            status: 'failed',
            message: 'error approving user',
            data: e.message 
        }
    }

}