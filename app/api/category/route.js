import prisma from "@/lib/prisma"

const handler = async(req) =>{
    if(req.method === "GET"){
        try{
            const categories = await prisma.category.findMany()

            return new Response(JSON.stringify(categories),{status:200})
        }
        catch(err){
            return Response.json({message: `${err} occured`},{status: 400})
        }
    }
    else{
        return Response.json({message: "Method not supported"},{status:400})
    }
}

export {handler as GET}