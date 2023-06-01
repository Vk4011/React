import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  const [data,setdata] = useState(null);

const fetchdata =async  ()=>{
    console.log("\n\t Button is clicked")
   
      const res =await fetch('https://jsonplaceholder.typicode.com/todos/1');      
      console.log(res);
      const data = await res.text();
      setdata(data)
      console.log(data);

   
  }
  const click = ()=>{
    console.log("\n\t Button is clicked")
  }
  

  return (
    <>
      
     <div className="container">
     <div className='display'>{data}</div>
      <div className='btn'>
       <button className='h' onClick={fetchdata}>Fetch</button>
      <button className='h' onClick={click}>JSON</button>
      </div>
     </div>
    </>
  )
}

export default App
