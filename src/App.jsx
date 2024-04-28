import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { useState } from "react";

// import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className=" text-purple-600 bg-pink-500">{import.meta.env.VITE_KEY}</h1>
    </>
  )
}

export default App
