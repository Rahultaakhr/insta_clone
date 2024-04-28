import Home from "./pages/Home/Home";
import Login from "./pages/Registration/Login";
import Signup from "./pages/Registration/Signup";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Routes>

      <Route path="/" element={<Home/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/login" element={<Login/>}/>
    </Routes>
    
    </BrowserRouter>
    
    </>
  )
}

export default App
