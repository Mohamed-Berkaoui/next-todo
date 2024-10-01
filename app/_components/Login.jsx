"use client"
import { useRouter } from 'next/navigation';
import React from 'react'
import { baseUrl } from '../page';
import { setCookie } from 'cookies-next';

function Login() {
    const navigate = useRouter();
    function handleSubmit(e) {
      e.preventDefault();
      var user = {
        email: e.target.email.value,
        password: e.target.password.value,
      };
      fetch(baseUrl + "/api/auth/login", {
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(user),
        method: "post",
      })
        .then((res) => res.json())
        .then((json) => {
          if (json.status === "success") {
            console.log("navigate")
            setCookie('user',json.data)
            navigate.push("/todo");
          } else throw new Error(json.message);
        })
   
    }
  return (
    <form onSubmit={handleSubmit}>
     
    <div className="form-group">
      <label>email</label>
      <input type="email" name="email" required />
    </div>
    <div className="form-group">
      <label>Username</label>
      <input type="password" name="password" required />
    </div>
    <input type="submit"/>
  </form>
  )
}

export default Login