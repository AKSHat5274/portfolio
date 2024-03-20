import Link from "next/link";
import React from "react";
import { socialLinks } from "@/constants";

const Navbar = () => {
  return (
    <header className="header">
      <Link
        href="/"
        className="w-10 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md m-2 "
      >
        {/* <img src={logo} alt='logo' className='w-18 h-18 object-contain' /> */}
        <p className="blue-gradient_text">AS</p>
      </Link>
      <nav className="flex text-lg font-medium m-2 gap-7">
        <Link
          href="/about"
          className={({ isActive }) =>
            isActive ? "text-blue-600" : "text-black"
          }
        >
          About
        </Link>
        <Link
          href="/projects"
          className={({ isActive }) =>
            isActive ? "text-blue-600" : "text-black"
          }
        >
          Projects
        </Link>
        {socialLinks?.map((social,index) => (
          <Link href={social.link} alt={social.name} key={index}>
            <img
              src={social.iconUrl.src}
              alt={social.name}
              className="w-6 h-6 min-h-4 min-w-4 items-center justify-center flex
               shadow-md "
            />
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Navbar;
