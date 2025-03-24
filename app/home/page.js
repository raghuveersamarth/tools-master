import React from "react";
import "./globals.css"
import Image from "next/image";


const page = () => {
  return (
    <div className="nav text-xl">
        <ul>
            <li className="hover:scale-103 transition-transform duration-1000">Home</li>
            <li className="hover:scale-103 transition-transform duration-1000">Tools</li>
            <li className="hover:scale-103 transition-transform duration-1000">Categories</li>
            <li className="hover:scale-103 transition-transform duration-1000">Users</li>
        </ul>
                    
            <Image 
            src="/userimg.png"
            alt="User Image"
            className="userimage ms-auto me-3 my-auto "
            height={100 }
            width={60}
            />

    </div>
  );
};

export default page;
