"use client"
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "../users/styles.css"

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
    <h3 className="text-2xl font-medium m-3">Users</h3>
    <table className="table-auto mx-auto ">
      <thead className="">
        <tr className="border border-grey-300">
          <th className="py-2">ID</th>
          <th className="py-2">Username</th>
          <th className="py-2">Password</th>
          <th className="py-2">Role</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user)=>{
          return (
            <tr className="">
              <td className="px-3 py-2">{user.id}</td>
              <td className="px-3 py-2">{user.name}</td>
              <td className="px-3 py-2">{user.password}</td>
              <td className="px-3 py-2">{user.role}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
    
  </div>);
};

export default page;
