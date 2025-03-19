"use client"
import React from "react";
import "./globals.css"
import { useSession } from "next-auth/react";

const page = () => {
  return (
    <div className="container mx-auto  my-25 w-250 rounded-2xl cardlog pb-10">
        <div className="text-3xl p-5 bg-gray-300 rounded-t-2xl">
        <h1 className="">Log In/Sign In</h1>
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
                <div className="links mt-5 m-3 mb-0">
                    <a href="" className="text-blue-800 hover:underline">Forgot your Password?</a>
                </div>
            </form>
        </div>
    </div>  
  );
};

export default page;
