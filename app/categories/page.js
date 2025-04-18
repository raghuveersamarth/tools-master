"use client"
import React from "react";
import { useEffect, useState } from "react";
import Link from "next/link";
import "../categories/styles.css"

const page = () => {

  const [ctg, setCtg] = useState([])

  useEffect(()=>{
    const fetchCtg = async ()=>{
      try{
        const response = await fetch("/api/category")
        if(!response.ok){
          throw new Error("failed to fetch users")
        }
        const data = await response.json()
        setCtg(data)
      }
      catch(err){
        console.log(err)
      }
    }
    fetchCtg()
  },[])

  return (<div>
    <h2 className='m-4 text-3xl'>Categories</h2>

    <table className='table-auto mx-10'>
        <thead>
          <tr>  
            <th>Name</th>
            <th colSpan={2}></th>
          </tr>
        </thead>
        <tbody>
          {ctg.map((ctg, index)=>{
            return(
              <tr key={index}>
                <td>{ctg.name}</td>
                <td><Link href={""}><button className="px-3 py-2 rounded bg-[#0046fe] text-white">Edit</button></Link></td>
                <td><Link href={""}><button className="px-3 py-2 rounded bg-red-600 text-white">Delete</button></Link></td>
              </tr>
            )
          })}
          <tr>
            <td colSpan={3} className="text-[#0046fe] addtoolrow">+ Add Category</td>
          </tr>
        </tbody>
      </table>
  </div>);
};

export default page;


