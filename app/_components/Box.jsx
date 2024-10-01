import React from 'react'
import { baseUrl } from '../page'
import { revalidatePath } from 'next/cache'

function Box({todo,user}) {

    async function handleDelete(){
        'use server'
            const res=await fetch(baseUrl+"/api/todos/"+todo._id,{method:"DELETE" ,  headers: {
                "Content-type": "application/json",
                Authorization: `Bearer ${user}`,
              },})
              const json=await res.json()
              console.log("🚀 ~ handleDelete ~ json:", json)
              revalidatePath('/todo')
    }
  return (
    <div>

        <h2>{todo.todo}</h2>
        <p>{todo.status}</p>
       <form action={handleDelete}><button type='submit'> delete</button></form>
    </div>
  )
}

export default Box