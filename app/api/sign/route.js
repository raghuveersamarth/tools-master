import prisma from "@/lib/prisma"
import { NextResponse } from "next/server"

const handler = async function(req)  {
    if(req.method === "POST"){
        
        const {username, password} = await req.json()
        try{
            
            const existingUser = await prisma.user.findUnique({
                where: {username},
            });
           
            if (existingUser){
                return Response.json({message: "Log in"})
            }
            else{
                let newId = 1;
                for (let i = 0; i < users.length; i++) {
                  if (users[i].id !== i + 1) {
                    newId = i + 1;
                    break;
                  }
                }
                if (newId === 1 && users.length > 0) newId = users.length + 1;

                const newUser = await prisma.user.create({
                    data:{id:newId,password:password,username:username},
                })
                return Response.json({message: `User ${username} created`})
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