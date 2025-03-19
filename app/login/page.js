"use client";
import React from "react";
import { useState } from "react";

const LoginPage = () => {
  return (
<<<<<<< HEAD
    
    <div className="container mx-auto  my-25 w-250 rounded-2xl cardlog pb-10">
        <div className="text-3xl p-5 bg-gray-300 rounded-t-2xl">
<<<<<<< HEAD
<<<<<<< HEAD
        <h1 className="">Log In/Sign In1</h1>
=======
        <h1 className="">Log In/Sign In</h1>
>>>>>>> 50152559c41d42a60fc6f6b593070409cd4aa9be
=======
        <h1 className="">Log In/Sign In1</h1>
>>>>>>> 32c2d05 (commit test)
        </div>
        
        <hr />
        <div className="form-controls bg-white">
            <form action="" className="formgroup ms-3">
                <div className="  rounded-lg overflow-hidden"> 
                    <p className="mt-10 m-3 text-xl">Email</p>
                    <input type="text" className="w-100 px-3 py-2 focus:outline-none rounded-lg ms-2" placeholder="Enter email"/>
                </div>
                <div className="rounded-lg overflow-hidden ">
                    <p className="mt-10 m-3 text-xl">Password</p>
                    <input type="text" name="" id=""className="w-100 py-2 px-3 focus:outline-none rounded-lg ms-2" placeholder="Enter password" />
                </div>
                <div className="">
                    <input type="button" value="Log in" className="rounded-xl px-3 py-2 m-2 mt-5 "/>
                </div>
                <div className="links mt-5 m-3 mb-0">
                    <a href="" className="text-blue-800 hover:underline">Forgot your Password?</a>
                </div>
                
            </form>
=======
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

        <div className="mt-7 flex flex-col gap-2">
          <button className="inline-flex cursor-pointer h-10 w-full items-center justify-center gap-2 rounded border border-slate-300 bg-white p-2 text-sm font-medium text-black outline-none focus:ring-2 focus:ring-[#333] focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-60">
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="Google"
              className="h-[18px] w-[18px]"
            />
            Continue with Google
          </button>
>>>>>>> 53dda0581d1fc1912f4d6dcf43aabeee19bd497f
        </div>

        <div className="flex w-full items-center gap-2 py-6 text-sm text-slate-600">
          <div className="h-px w-full bg-slate-200"></div>
          OR
          <div className="h-px w-full bg-slate-200"></div>
        </div>

        <form className="w-full">
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
            <a
              href="/forgot-password"
              className="text-blue-800 hover:text-blue-600"
            >
              Reset your password?
            </a>
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
          <a href="/signup" className="font-medium text-[#4285f4]">
            Sign up
          </a>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
