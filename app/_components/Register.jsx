"use client";

import { useRouter } from "next/navigation";
import { baseUrl } from "../page";
function Register() {
  const navigate = useRouter();
  function handleSubmit(e) {
    e.preventDefault();
    var newUser = {
      name: e.target.name.value,
      email: e.target.email.value,
      password: e.target.password.value,
    };
    fetch(baseUrl + "/api/auth/register", {
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(newUser),
      method: "post",
    })
      .then((res) => res.json())
      .then((json) => {
        if (json.status === "success") {
          navigate.replace("/login");
        }
      })
      .catch((e) => console.log(e));
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Username</label>
        <input type="text" name="name" required />
      </div>
      <div className="form-group">
        <label>email</label>
        <input type="email" name="email" required />
      </div>
      <div className="form-group">
        <label>Username</label>
        <input type="password" name="password" required />
      </div>
      <input type="submit" />
    </form>
  );
}

export default Register;
