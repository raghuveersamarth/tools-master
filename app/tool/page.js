"use client"
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";


const page = () => {
    const router = useRouter()
    const searchParams = useSearchParams()
    const toolId = searchParams.get("tool_id")
    const [tool, setTool] = useState()

    useEffect(()=>{
       const fetchTool = async ()=>{
         try{
           const response = await fetch("/api/tool",{
            body: {id: toolId}
           }
           )
           if(!response.ok){
             throw new Error("failed to fetch users")
           }
           const data = await response.json()
           setTool(data)
         }
         catch(err){
           console.log(err)
         }
       }
       fetchTool()
     },[])

  return (<div>
    <div className="border border-gray-300">
        <h2 className="text-2xl">Tool ID : {toolId}</h2>
        <p>{tool}</p>
    </div>
  </div>);
};

export default page;
