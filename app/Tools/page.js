"use client"
import React from 'react'
import "./styles.css"
import { useEffect } from 'react'
import { useState } from 'react'
import { GET } from '../api/sign/route'
import { useRouter } from 'next/navigation'

const Tools = () => {
  const router = useRouter()
  const addtoolrouting = async() =>{
    await router.push("/addtool")
  }
  const toolrouting = async(id)=>{
    await router.push(`/tool?tool_id=${id}`)
  }

   const [tools, setTools] = useState([])
  
    useEffect(()=>{
      const fetchTools = async ()=>{
        try{
          const response = await fetch("/api/tool")
          if(!response.ok){
            throw new Error("failed to fetch users")
          }
          const data = await response.json()
          setTools(data)
        }
        catch(err){
          console.log(err)
        }
      }
      fetchTools()
    },[])

  return (
    <div>
      <h2 className='m-4 text-3xl'>Tools</h2>

      <table className='table-auto mx-auto'>
        <thead>
          <tr>
            <th>ID</th>
            <th>Image</th>
            <th>Tool Number</th>
            <th>Name</th>
            <th>Size</th>
            <th>Specifications</th>
            <th>Used for Component</th>
            
          </tr>
        </thead>
        <tbody>
          {tools.map((tool)=>{
            return(
              <tr key={tool.id} onClick={async()=>{await toolrouting(tool.id)}}>
                <td>{tool.id}</td>
                {tool.imageUrl && (
                  <td>
                    <img
                    src={tool.imageUrl}
                    alt={tool.name}
                    className="object-cover rounded w-25 h-20"
                    />
                  </td>
                )}
                <td>{tool.tool_no}</td>
                <td>{tool.name}</td>
                <td>{tool.size}</td>
                <td>{tool.specification}</td>
                <td>{tool.used_for_component}</td>
              
              </tr>
            )
          })}
          <tr onClick={addtoolrouting}>
            <td colSpan={7} className="text-[#0046fe] addtoolrow">+ Add Tool</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Tools
