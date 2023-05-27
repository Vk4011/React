import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './Components/Data.txt'


function App() {
  const [btnText,setbtnText]=useState("Fetch")
  const [data,setdataText]=useState("Hello world!")
  const [url,seturl] = useState('')
 const Event=async ()=>{
  console.log("\n\t Button Clicked !")
  const promiseObj=await fetch('http://localhost:3000/image')  
  console.log(promiseObj)
  
  if(data!==''){
    seturl(promiseObj.url)
    setdataText('')
  }

 }

//   const v = ()=>{
//     console.log("\n\t Fetching....!")
//     // btnText.textContent = "Wait..!";
//     // btnE.style.color="black" ;
//     setbtnText("Wait..!")

//     fetch('API1.txt').then((response)=>{
//         // if(!response.ok){
//         //     throw Error(response.statusText)
//         // }
//         console.log(response);
//         return response.text()
//     }).then((data)=>{
//         console.log(data)
//     }).catch((error)=>{console.log(error)})
// }
const v=()=>{
  setbtnText("Wait..!")
  fetch('https://jsonplaceholder.typicode.com/todos/1').then((res)=>{
      if(!res.ok){
      throw Error(res.statusText) 
      }
      console.log(res);
      return res.text()
  }).then((data)=>{
      console.log(data)
      if(url!==''){
        seturl('')
        setdataText(data)
      }
      setbtnText('Fetched')

      
  })
}



  return (
  
     
  <div className="display" id="Asyncdata" >
    <div class="content"id="divdata" >{data}

    <img src={url} alt="" />

    </div>
    
    <div className='BS'>
    <button id="btn" onClick={Event}>
      Submit
    </button>
    <button id="Fetch" onClick={v}>{btnText}</button>
    </div>
  </div>


  )
}

export default App
