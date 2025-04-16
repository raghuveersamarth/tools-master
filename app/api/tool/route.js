import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
import { put } from "@vercel/blob";

export const config = {
    runtime: "edge"
}

const handler = async (req)=>{
    if(req.method==="POST"){
        const {tool_no, name, size, specification, used_for_component, image} = await req.json()
        const imgstr = "tools/"+Date.now()+"-"+image.name
        const imgbuffer = Buffer.from(image)

        const {url} = await put(imgstr,imgbuffer,{access: "public"})
        try{
            const tools = await prisma.tool.findMany()

            const existingTool = await prisma.tool.findFirst({
                where: {tool_no:tool_no}
            })

            if(existingTool){
                return Response.json({message: "Tool already exists"}, {status:400})
            }
            else{
                let newId = 1;
                for (let i = 0; i < tools.length; i++) {
                  if (tools[i].id !== i + 1) {
                    newId = i + 1;
                    break;
                  }
                }
                if (newId === 1 && tools.length > 0) newId = tools.length + 1;

                const newTool = await prisma.tool.create({
                    data:{id:newId, tool_no:tool_no, name:name, size:size, specification:specification, used_for_component:used_for_component,imageUrl: url}
                })
                return Response.json({message:`Tool ${name} created`}, {status:200})
            }
        }
        catch(err){
            console.log(`Error : ${err}`)
            return Response.json({message: `${err} occured`}, {status:400})
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

