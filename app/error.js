"use client"
import React from 'react'

function error({error,reset}) {

  return (
    <div>
        <h1>{error.message}</h1>
    <button onClick={reset} >reset</button>
    </div>

  )
}

export default error