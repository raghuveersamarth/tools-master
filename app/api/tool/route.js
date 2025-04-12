import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

const handler = async (req)=>{
    if(req.method==="POST"){
        const {tool_id, name, size, specification, used_for_component} = await req.json()
        try{

            const existingTool = await prisma.tool.findUnique({
                where: {tool_id}
            })

            if(existingTool){
                return Response.json({message: "Tool already exists"}, {status:400})
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

                const newTool = prisma.tool.create({
                    data:{id:newId, name:name, size:size, specification:specification, used_for_component:used_for_component}
                })
                return Response.json({message:`Tool ${name} created`}, {status:200})
            }
        }
        catch(err){
            console.log(`Error : ${err}`)
            return Response.json({message: "Error occured"}, {status:400})
        }
    }
    else if(req.method === "GET"){
        try{
            
            const tools = await prisma.tool.findMany()

            return new Response(JSON.stringify(tools),{
                status: 200,
                headers : {"Content-Type": "application/json"}
        });
        }
        catch(error){
            return Response.json({message: `Error occured ${error}`},{status:400})
        }
    }
    else{
        return Response.json({message:"Method not supported"}, {status:400})
    }
}

export {handler as POST, handler as GET}

