import React from "react";
import "./globals.css"
import Image from "next/image";


const page = () => {
  return (
    <div className="nav text-xl">
        <ul>
            <li>Home</li>
            <li>Tools</li>
            <li>Categories</li>
            <li>Users</li>
        </ul>
                    
            {/* <Image 
            src="https://static.vecteezy.com/system/resources/thumbnails/005/545/335/small/user-sign-icon-person-symbol-human-avatar-isolated-on-white-backogrund-vector.jpg"
            alt="User Image"
            className="userimage"
            height={100}
            width={50}
            /> */}

    </div>
  );
};

export default page;
