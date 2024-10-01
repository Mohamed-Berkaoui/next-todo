"use client"

import { deleteCookie, getCookie, getCookies } from "cookies-next";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";


function Navbar() {
  const location=usePathname()
  const navgate=useRouter()
  console.log("🚀 ~ Navbar ~ navigate:", location)
  const [state,setState]=useState(false)
  var user=getCookies("user") ;
useEffect(()=>{
   user=getCookies("user") ;
},[location])

function handleLogout(e){
  e.preventDefault()
  deleteCookie('user')
  setState(!state)
  navgate.push('/')
}

console.log(user)

  return (
    <div className="nav">
      <h2>logo</h2>
      <div>
        <Link href={"/"}>
          <p>home</p>
        </Link>
        {user.user ? (
          <div>
            <Link href={"/addtodo"}>
              <p>addtodo</p>
            </Link>
            <Link href={"/todo"}>
              <p>todos</p>
            </Link>
         <form onSubmit={handleLogout}>    <button type="submit">logout</button></form>
          </div>
        ) : (
          <div>
            <Link href={"/login"}>
              <p>login</p>
            </Link>
            <Link href={"/register"}>
              <p>register</p>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
