import prisma from "@/lib/prisma"
import { NextResponse } from "next/server"

const handler = async (req)=>{
    if(req.method === "GET"){
        const {id} = await req.json()
        try{
            const user = await prisma.user.findUnique({
                where: {id: id}
            })

            if(user){
                return new Response(JSON.stringify(user),{
                    status:200,
                    headers: {"Content-Type":"application/json"}
                })
            }
        }
        catch(err){
            return Response.json({"message":`${err}occured`}, {status:400})
        }
    }
}

export {handler as GET}