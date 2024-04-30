import Home from "./pages/Home/Home";
import Login from "./pages/Registration/Login";
import MyState from "./context/MyState";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import ProtectedRoutesForHome from "./ProtectedRoutes/ProtectedRoutesForHome";
import ProtectedRoutesForProfile from "./ProtectedRoutes/ProtectedRoutesForProfile";
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
   <MyState>
   <BrowserRouter>
    <Routes>

      <Route path="/" element={<ProtectedRoutesForHome>
        <Home/>
      </ProtectedRoutesForHome>}/>

      <Route path="/profile" element={<ProtectedRoutesForProfile>
        <ProfilePage/>
      </ProtectedRoutesForProfile>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/login" element={<Login/>}/>
    </Routes>
    
    </BrowserRouter>
    
   </MyState>
    </>
  )
}

export default App
