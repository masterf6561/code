import React from "react";
import Link from "next/link";
export const Navbar = () => {

  return (
    <nav className="text-black bg-white p-4">
      <ul className="flex flex-row p-4 center h-[60px] justify-center font-[16px + 2vh]">
        <li className="mr-4">
          <Link href="/" className="hover:underline">
            Home
          </Link>
        </li>
        <li className="mr-4">
          <Link href="/about" className="hover:underline">
            About
          </Link>
        </li>
        <li className="mr-4">
          <Link href="/photography" className="hover:underline">
            Photography 
          </Link>
        </li>
      </ul>
    </nav>
  )
}
