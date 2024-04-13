"use server";
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
        return newUser;
    }
    const newUser = await prisma?.user.create({
    data:{
        email,
    }
    });
    if(!newUser){
        return undefined;
    }
    console.log(newUser);
    return newUser;
}