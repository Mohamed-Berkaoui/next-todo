import { getCookie } from "cookies-next";
import { cookies } from "next/headers";
import { baseUrl } from "../page";
import { redirect } from "next/navigation";
import "../register/register.css";

function page() {

  const user=getCookie("user", { cookies })

  if(!user) redirect('/login')
  async function handleSubmit(formData) {
    "use server";

    const res = await fetch(baseUrl + "/api/todos", {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${user}`,
      },
      body: JSON.stringify({ todo: formData.get("todo") }),
      method: "post",
    });
    const json = await res.json();

     if(json.status !=="success") throw new Error("message from throw")
    redirect("/todo");
  }
  return (
    <div className="register-container">
      <h2>add todo</h2>
      <form action={handleSubmit}>
        <div className="form-group">
          <label>todo</label>
          <input type="text" name="todo" required />
        </div>
        <input type="submit" />
      </form>
    </div>
  );
}

export default page;
