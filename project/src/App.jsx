import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className="sun"></div>
     <div className="sunt 1 "></div>
     
    <div className="container">
      <div className="animated-background">
       <button className="btn">HOVER</button>
      </div>
      </div>
      <Card/>
    </>
  )
}

export default App
