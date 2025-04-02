"use client"
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "../users/styles.css"
import Link from "next/link";

const page = () => {

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
          <th className="">Password</th>
          <th className="">Role</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {users.map((user,index)=>{
          return (
            <tr className="" key={index} >
              <td className="">{user.id}</td>
              <td className="">{user.username}</td>
              <td className="">{user.password}</td>
              <td className="">{user.role}</td>
              <td className=""><Link href={`/changerole?username=${user.username}&role=${user.role}`}><input type="button" value="Change Role" className="rounded-full  " /></Link></td>
            </tr>
          )
        })}
      </tbody>
    </table>
    
  </div>);
};

export default page;
