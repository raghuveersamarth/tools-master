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
    else if(req.method === "GET"){
        try{
            const users = await prisma.user.findMany();

            return new Response(JSON.stringify(users),{
                status: 200,
                headers : {"Content-Type": "application/json"}
        });
        }
        catch(error){
            return Response.json({message: `Error occured ${error}`},{status:400})
        }
    }
    else{
        return Response.json({message: "Method not defined"},{status: 300})
    }
}
export {handler as GET,handler as POST}