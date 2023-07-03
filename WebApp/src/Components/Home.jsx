import React from 'react'
import { useState } from 'react'

const Home = () => {
 const [count,setCount] = useState("0");
 const  [name,setName] = useState("Home");
const c = ()=>{setName("Hello world!")}

  return (
    <div>
      <h1>{name}</h1>
      <h1>{count}</h1>
    <button onClick={c}>Change</button>
    <button onClick={()=>setCount(count+1)}>count</button>
    </div>
  )
}

export default Home
