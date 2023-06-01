import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import url from'./Components/api.json'

function App() {
  
  const [data,setdata] = useState(null);

const fetchdata =async  ()=>{
    console.log("\n\t Button is clicked")
   
      const res =await fetch(' ');      
      console.log(res);
      const data = await res.text();
      setdata(data)
      console.log(data);

   
  }
  const [d,sd]= useState("HELLO CODERS !");
  const click =async ()=>{
    console.log("\n\t Button is clicked")
    // try{
    
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1 ');
    console.log(response);
    const dataJson = await response.text();
    console.log(dataJson);
    sd(dataJson);
    // }
    // catch (error){
    //   console.log("\n\t",error,"!");
    //   sd(error);

    // }




  }
  

  return (
    <>
      
     <div className="container">
     <div className='display'>{data}</div>
     <div className='display'>{d}</div>
      <div className='btn'>
       <button className='h' onClick={fetchdata}>Fetch</button>
      <button className='h' onClick={click}>JSON</button>
      </div>
     </div>
    </>
  )
}

export default App
