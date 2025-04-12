"use client"
import React from "react";
import "../changerole/styles.css"
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

const page = () => {
    const router = useRouter()
    const searchParams = useSearchParams()
    const username = searchParams.get("username");
    const role = searchParams.get("role");
    const [newRole, setNewRole] = useState(role);

    const handlingchangeindropdown = async(e)=>{await setNewRole(e.target.value)}

    const handlingsubmitinform = async()=>{
        if(newRole !== role){

            const response = await fetch("/api/sign",{
                method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({username: username, role: newRole})
            })

            const data = await response.json()
            console.log(data.message)

            router.push("/users")


        }
        else{
            router.push("/users")
        }
    }   

  return(
    <div className="flex flex-col w-xs con border border-gray-300 ">
      <h1 className="text-3xl  mb-4">Edit Role</h1>
      <div className="text-lg my-4 ">
      <p>Username:&nbsp; <span className="inline font-semibold">{username}</span></p>
      <p>Current Role:&nbsp; <span className="inline font-semibold">{role}</span></p>
      </div>
      <select
        className="border p-2 rounded mt-2"
        value={newRole}
        onChange={handlingchangeindropdown}
      >
        <option value="view">View</option>
        <option value="create">Create</option>
        <option value="update">Update</option>
        <option value="admin" className="">Admin</option>
      </select>
      <button
        className="bg-[#0046fe] text-white px-4 py-2 rounded mt-4"
        onClick={handlingsubmitinform}
      >
        Save Role
      </button>
    </div>
  );
};

export default page;
