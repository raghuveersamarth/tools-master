"use client"
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";


const page = () => {
    const router = useRouter()
    const searchParams = useSearchParams()
    const toolId = searchParams.get("tool_id")
    const [tool, setTool] = useState({
      name: "",
      imageUrl: ""
    })

    useEffect(()=>{
       const fetchTool = async ()=>{
         try{
           const response = await fetch(`/api/viewtool`,{
            method: "POST",
            body: JSON.stringify({id : toolId}),
            headers: {"Content-Type": "application/json"}
           })
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
        <div className="grid grid-cols-8 gap-2">
          <img src={tool.imageUrl || null} alt={tool.name || null} className="h-75 w-120 rounded m-5 col-start-1 col-span-2 aspect-[9/16]" />
          <div className=" col-start-4 col-span-3 mt-5">
            <p className="text-lg my-5">Name: {tool.name}</p>
            <p className="text-lg my-5">Size: {tool.size}</p>
            <p className="text-lg my-5">Specification: {tool.specification}</p>
            <p className="text-lg my-5">Used for Component: {tool.used_for_component}</p>
          </div>
        </div>
    </div>
    
  </div>);
};

export default page;
