import React from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex w-full justify-between bg-[#6d6e70] h-11">
      <div className="nav text-xl">
        <ul className="justify-center flex gap-10 items-center">
          <Link href="/">
            <li className="hover:scale-103 transition-transform duration-1000">
              Home
            </li>
          </Link>
          <Link href={"/Tools"}>
            <li className="hover:scale-103 transition-transform duration-1000">
              Tools
            </li>
          </Link>
          <li className="hover:scale-103 transition-transform duration-1000">
            Categories
          </li>
          <Link href="/users">
            <li className="hover:scale-103 transition-transform duration-1000">
              Users
            </li>
          </Link>
        </ul>
      </div>
      <div className="flex">
        <div className="flex items-center">
          </div>
          <Image
            src="/userimg.png"
            alt="User Image"
            className="userimage ms-auto me-3 my-auto "
            height={100}
            width={50}
          />
      </div>
    </nav>
  );
};

export default Navbar;
