import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Inline from "./Common/Inline";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Home from "./Components/Home";
import { Routes, Route } from "react-router-dom";
import Fetch from "./Components/Fetch";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <Inline />
      <Login />
      <Signup /> */}
      <Routes>
      <Route exact  path="/" Component={Home} />
      <Route exact  path="/Signup" Component={Signup}/>
      <Route exact  path="/Login" Component={Login}/>
      <Route exact path="/Fetch" Component={Fetch}/>
      </Routes>
    </>
  );
}

export default App;
