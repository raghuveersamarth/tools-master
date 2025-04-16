"use client"
import React from "react";
import "../addtool/styles.css"
import { useState } from "react";
import { useRouter } from "next/navigation";

const page = () => {
    const router = useRouter()

    const [formData, setFormData] = useState({
        num: "",
        name: "",
        size: "",
        spec: "",
        comp: ""
    })

    const handleChange = (e)=>{
        const {id, value} = e.target
        setFormData((prev)=>({...prev, [id]: value}))
    }

    const handleSubmit = async (e)=>{
        e.preventDefault()

        if(formData.num !== "" && formData.name !== "" && formData.size !== "" && formData.spec !== "" &&  formData.comp !== ""  ){
            const response = await fetch("/api/tool",{
                method: "POST",
                headers:{
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    tool_no: parseInt(formData.num),
                    name: formData.name,
                    size: formData.size,
                    specification: formData.spec,
                    used_for_component: formData.spec
                })
            })

            const data = await response.json()
            console.log(data)

            router.push("/tools")
        }
        else{
            console.error("All fields need to filled")
        }

    }

  return (<div className="border border-gray-300 con">
    <h2 className="text-3xl head">Add Tool</h2>
    <hr />
    <div className="tool-common">
        <form action="" onSubmit={handleSubmit}>
            <div className="flex items-center mt-7">
                <label htmlFor="num" className="text-xl w-54">Tool Number</label>
                <input type="number" name="" id="num" className="px-3 py-1 border border-gray-300 rounded w-75" onChange={handleChange}/>    
            </div>
            <div className="flex items-center mt-7">
                <label htmlFor="name" className="text-xl w-54">Name</label>
                <input type="text" name="" id="name" className="px-3 py-1 border border-gray-300 rounded w-75" onChange={handleChange}/>    
            </div>
            <div className="flex items-center mt-7">
                <label htmlFor="size" className="text-xl w-54">Size</label>
                <input type="text" name="" id="size" className="px-3 py-1 border border-gray-300 rounded w-75" onChange={handleChange}/>    
            </div>
            <div className="flex items-center mt-7">
                <label htmlFor="spec" className="text-xl w-54">Specification</label>
                <input type="text" name="" id="spec" className="px-3 py-1 border border-gray-300 rounded w-75" onChange={handleChange}/>    
            </div>
            <div className="flex items-center mt-7">
                <label htmlFor="comp" className="text-xl w-54">Used for Component</label>
                <input type="text" name="" id="comp" className="px-3 py-1 border border-gray-300 rounded w-75" onChange={handleChange}/>    
            </div>
            <input type="submit" value="Add" className="submitbtn  rounded mt-7" />
        </form>
    </div>
  </div>);
};

export default page;
