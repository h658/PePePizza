"use client"
import Link from "next/link";
import { useCallback } from "react";

export default function Header() {

    const scroll = useCallback((id) => {
        const element = document.getElementById(id)
        if (!element) return;
        element.scrollIntoView({ behavior: 'smooth' })
    }, [])

    return (
        <>
       
            <header className="flex items-center  flex-wrap md:justify-between">

                <div className="flex "> <img src="chefu.png" alt="logo" className=" h-28 mt-0" /> <p className="mt-9 ml-7 text-2xl font-semibold text-red-600">PePe Pizza</p> </div><br/>

      
            
                <nav className="flex  text-gray-500 gap-7 md:font-semibold md:gap-20 -ml-12 " >
          
                    <Link href={'/'}>Home</Link>
                    <span onClick={() => { scroll('menu') }} className="cursor-pointer">Menu</span>
                    <span onClick={() => { scroll('about') }} className="cursor-pointer"> About </span>
                    <span onClick={() => { scroll('contact') }} className="cursor-pointer">Contact</span>
  
                  </nav>
            <nav className="flex gap-4">
     <Link href={'/login'} className=" px-6 py-2 -mt-2 font-semibold text-gray-500">Login</Link>
     <Link href={'/register'} className="bg-red-600 text-white rounded-full px-6 py-2 -mt-2  ">Register</Link>
                
            </nav>

            </header>
            {/* <div className="mt-5 ml-28 md:hidden"> 
            <Link href={''} className="bg-red-600 text-white rounded-full px-6 py-2  ">Login</Link>
            </div> */}
        </>

    );
}