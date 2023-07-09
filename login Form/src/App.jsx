import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Login from "./Common/Login";
import { Routes,Route } from "react-router-dom";
import SignUp from "./Common/SignUp";

function App() {
 

  return (
    <>
    <Routes>
      <Route path="/login" Component={Login} />
      <Route path="signup" Component={SignUp} />
  
    </Routes>

    </>
  );
}

export default App;
