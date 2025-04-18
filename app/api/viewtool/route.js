import prisma from "@/lib/prisma";

const handler = async (req) => {
    if(req.method === "POST"){
        const {id} = await req.json()
        const newId = parseInt(id)

        try{
            const tool = await prisma.tool.findUnique({
                where: {id: newId}
            })

            if (tool){
                return new Response(JSON.stringify(tool),{status: 200})
            }
        }
        catch(err){
            return Response.json({message: `${newId}${err} occured`}, {status: 400})
        }
    }
    else{
        return Response.json({message: `unsupported method`}, {status: 400})
    }
}

export {handler as POST}