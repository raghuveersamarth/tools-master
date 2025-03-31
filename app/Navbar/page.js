import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav>
    <div className="nav text-xl h-20">
      <ul>
          <Link href="/"><li className="hover:scale-103 transition-transform duration-1000">Home</li></Link>
          <Link href={"/Tools"}><li className="hover:scale-103 transition-transform duration-1000">Tools</li></Link>
          <li className="hover:scale-103 transition-transform duration-1000">Categories</li>
          <Link href="/users"><li className="hover:scale-103 transition-transform duration-1000">Users</li></Link>
      </ul>           
      <Image 
      src="/userimg.png"
      alt="User Image"
      className="userimage ms-auto me-3 my-auto "
      height={100 }
      width={50}
      />
    </div>
  </nav>
  )
}

export default Navbar
