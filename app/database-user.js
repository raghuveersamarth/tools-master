import prisma from "../lib/prisma"
import React from "react"

export default async function handler(user){
    try{
        const existingUser = await prisma.user.findUnique({
            where: { email },
          });
        if (existingUser){
            return "User already exists"
        }
        else{
            const newUser = await prisma.user.create({
                data: {name, email, password}
            })
            return "User created"
        }
    }
    catch(error){
        return error
    }
}