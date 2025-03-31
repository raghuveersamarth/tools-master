"use client"
import React from "react";

const getUsers = async () => {
  const res = await fetch("/api/sign");
  if (!res.ok) throw new Error("Failed to fetch users");
  return await res.json();
};
const users = getUsers()

const page = () => {
  
  return (<div>
    <ul>
      {}
    </ul>
    
  </div>);
};

export default page;
