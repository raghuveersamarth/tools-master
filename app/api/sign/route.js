import prisma from "@/lib/prisma"
import { NextResponse } from "next/server"

const handler = async function(req)  {
    if(req.method === "POST"){
        
        const {name, email, password} = await req.json()
        try{
            
            const existingUser = await prisma.user.findUnique({
                where: {email},
            });
           
            if (existingUser){
                return Response.json({message: "Log in"})
            }
            else{
                const newUser = await prisma.user.create({
                    data:{name, email, password},
                })
                return Response.json({message: `User ${name} created`})
            }
        }
        catch(error){
            console.error("Error :",error)
            return NextResponse.json({message: `Error occured ${error}`},{status:400})
        }
    }
    else{
        return Response.json({message:"this is get method"})
    }
}
export {handler as GET,handler as POST}