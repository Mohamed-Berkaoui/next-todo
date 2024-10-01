import { getCookie } from "cookies-next";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { baseUrl } from "../page";
import Box from "../_components/Box";

export default async function Home() {
  const user = getCookie("user", { cookies });

  if (!user) {
    redirect("/login");
  }
  const res =await fetch(baseUrl + "/api/todos", {
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${user}`,
    },
  })

 const json =await res.json()

 if(json.status!=="success")throw new Error("somthing went wrong")

  return <div>

    {json.data.map(ele=><Box key={ele.id} todo={ele} user={user}/>)}
  </div>;
}
