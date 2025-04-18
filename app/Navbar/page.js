"use client";
import { signOut, useSession } from "next-auth/react";
import Sessionwrapper from "../components/sessionwrapper";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import "../Navbar/styles.css";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const { data: session } = useSession();
  const router = useRouter();
  useEffect(() => {
    if (!session) {
      // router.push("/signup")
    }
    console.log(session)
  }, [session, router]);
  

  return (
    <nav className="flex w-full justify-between h-11">
      <div className="nav text-xl ">
        <ul className="justify-center flex gap-10 items-center">
          <Link href="/">
            <li className="hover:scale-103 transition-transform duration-1000">
              Home
            </li>
          </Link>
          <Link href={"/tools"}>
            <li className="hover:scale-103 transition-transform duration-1000">
              Tools
            </li>
          </Link>
          <Link href={"/categories"}>
          <li className="hover:scale-103 transition-transform duration-1000">
            Categories
          </li>
          </Link>
          {
            // only show this link if the user is an admin and session is not null
            session && session.user.role === "admin" &&
            <Link href="/users">
              <li className="hover:scale-103 transition-transform duration-1000">
                Users
              </li>
            </Link>
          }
        </ul>
      </div>
      <div className="flex">
        <div className="flex items-center"></div>
        <Image
          src="/userimg.png"
          alt="User Image"
          className="userimage ms-auto me-3 my-auto "
          height={100}
          width={50}
        />
        {session ? (
          <button
            className="bg-[#0046fe] rounded text-white cursor-pointer px-2 my-1 me-1"
            onClick={() => signOut()}
          >
            Sign Out
          </button>
        ) : (
          <Link href="/signup">
            <button className="bg-[#0046fe] cursor-pointer text-white px-2 rounded my-1 me-1">
              Sign Up
            </button>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
