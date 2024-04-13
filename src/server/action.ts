"use server";
import { error } from "console";
import {
  UserType,
  UserSchema,
} from "../../schema/schemaTypes";
import prisma from "../lib/prisma";

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