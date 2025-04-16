"use client"
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "../users/styles.css"
import Link from "next/link";
import { useSession } from "next-auth/react";

const page = () => {
  const {data: session} = useSession()

  const [users, setUsers] = useState([])

  useEffect(()=>{
    const fetchUsers = async ()=>{
      try{
        const response = await fetch("/api/sign")
        if(!response.ok){
          throw new Error("failed to fetch users")
        }
        const data = await response.json()
        setUsers(data)
      }
      catch(err){
        console.log(err)
      }
    }
    fetchUsers()
  },[])
  
  return (<div>
    <h2 className="text-3xl ">Users</h2>
    
    <table className="table-auto mx-auto">
      <thead className="">
        <tr className="">
          <th className="">ID</th>
          <th className="">Username</th>
          <th className="">Role</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {users.map((user,index)=>{
          if(user.username !== session.user.username){
            return (
              <tr className="" key={index} >
              <td className="">{index+1}</td>
              <td className="">{user.username}</td>
              <td className="">{user.role}</td>
              <td className=""><Link href={`/changerole?username=${user.username}&role=${user.role}`}><input type="button" value="Change Role" className="rounded-full  " /></Link></td>
            </tr>
          )
        }
        else{
          null
        }
        })}
      </tbody>
    </table>
    
  </div>);
};

export default page;
