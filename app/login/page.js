"use client";
import React, { useEffect } from "react";
import { signOut, useSession } from "next-auth/react";
import { signIn } from "next-auth/react";
import Link from "next/link";

const LoginPage = () => {
  const { data: session } = useSession();
  const handlesubmit = async (e) => {
    let ndata = Object.fromEntries(e);
    console.log(ndata)
    const response = await fetch("/api/sign",{
      method: "POST",
      body:JSON.stringify({name: ndata.name,email: ndata.email,password: ndata.password,}),
      headers: {
        "Content-Type": "application/json",
      },
    })
    const data = await response.json();
    console.log(data.message)
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center p-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow p-6">
        <div className="text-center">
          <p className="mb-3 text-2xl font-semibold leading-5 text-slate-900">
            Login to your account
          </p>
          <p className="mt-2 text-sm leading-4 text-slate-600">
            You must be logged in to perform this action.
          </p>
        </div>
    {session?<p>signed in with {session.user.email}</p>:""}
        <div className="mt-7 flex flex-col gap-2">


          <button onClick={()=>signIn("google")} className="inline-flex cursor-pointer h-10 w-full items-center justify-center gap-2 rounded border border-slate-300 bg-white p-2 text-sm font-medium text-black outline-none focus:ring-2 focus:ring-[#333] focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-60">
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="Google"
              className="h-[18px] w-[18px]"
            />
            Continue with Google
          </button>
          <button onClick={()=>signOut("google")} className="inline-flex cursor-pointer h-10 w-full items-center justify-center gap-2 rounded border border-slate-300 bg-white p-2 text-sm font-medium text-black outline-none focus:ring-2 focus:ring-[#333] focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-60">
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="Google"
              className="h-[18px] w-[18px]"
            />
            Sign out
          </button>

        </div>
        <div className="flex w-full items-center gap-2 py-6 text-sm text-slate-600">
          <div className="h-px w-full bg-slate-200"></div>
          OR
          <div className="h-px w-full bg-slate-200"></div>
        </div>

        <form className="w-full" action={handlesubmit}>
          <label htmlFor="email" className="sr-only">
            Email address
          </label>
          <input
            name="email"
            type="email"
            autoComplete="email"
            required
            className="block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1"
            placeholder="Email Address"
          />
          <label htmlFor="password" className="sr-only">
            Password
          </label>
          <input
            name="password"
            type="password"
            autoComplete="current-password"
            required
            className="mt-2 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1"
            placeholder="Password"
          />
          <p className="mb-3 mt-2 text-sm text-gray-500">
            <Link href="/forgot-password" className="text-blue-800 hover:text-blue-600">
              Reset your password?
            </Link>
          </p>
          <button
            type="submit"
            className="inline-flex w-full items-center justify-center rounded-lg bg-black p-2 py-3 text-sm font-medium text-white outline-none focus:ring-2 focus:ring-black focus:ring-offset-1 disabled:bg-gray-400"
          >
            Continue
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-slate-600">
          Don't have an account?
          <Link href="/signup" className="font-medium text-[#4285f4]">
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;