"use client"
import React, { useEffect } from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const { data: session, status } = useSession();
  useEffect(() => {
    if (!session) {
      router.push("/signup")
    }
    console.log(session)
  }, [session, router]);
  
  
  return (
    <div className="m-auto h-40 w-full flex flex-col bg-[#ffff] justify-center border-2 items-center">
      <h1 className="text-4xl text-slate-400 font-mono font-bold mb-4">Tools-master</h1> 
      {session?<h2 className="text-2xl text-slate-400 font-mono font-bold mb-4">Welcome,{session.user.username}</h2>:<h2 className="text-2xl text-slate-400 font-mono font-bold mb-4">Welcome, Guest</h2>}
    </div>
  );
}
