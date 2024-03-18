import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <header className='header'>
    <Link href='/' className='w-10 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md '>
      {/* <img src={logo} alt='logo' className='w-18 h-18 object-contain' /> */}
      <p className='blue-gradient_text'>AS</p>
    </Link>
    <nav className='flex text-lg gap-7 font-medium'>
      <Link href='/about' className={({ isActive }) => isActive ? "text-blue-600" : "text-black" }>
        About
      </Link>
      <Link href='/projects' className={({ isActive }) => isActive ? "text-blue-600" : "text-black"}>
        Projects
      </Link>
    </nav>
  </header>
  )
}

export default Navbar