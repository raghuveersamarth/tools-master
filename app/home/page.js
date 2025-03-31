"use client"
import React from "react";
import "../globals.css"
import Image from "next/image";
import Link from "next/link";
import { useSession } from "next-auth/react";


const page = () => {
  const {data: session} = useSession()
  return (
    <div className="">
      <p>{session.user.email}</p>
      <p>Home</p>
    </div>
    
  );
};

export default page;
