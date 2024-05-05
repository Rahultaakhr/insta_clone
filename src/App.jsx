import Home from "./pages/Home/Home";
import Login from "./pages/Registration/Login";
import MyState from "./context/MyState";
import NoPage from "./pages/NoPage/NoPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import ProfilePageForUser from "./pages/ProfilePage/ProfilePageForUser";
import ProtectedRoutesForHome from "./ProtectedRoutes/ProtectedRoutesForHome";
import ProtectedRoutesForProfile from "./ProtectedRoutes/ProtectedRoutesForProfile";
import Signup from "./pages/Registration/Signup";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { useState } from "react";
import { Toaster } from "react-hot-toast";
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
              <Home />
            </ProtectedRoutesForHome>} />

            <Route path="profile/:id" element={
              <ProfilePageForUser />
            } />
            <Route path="/profile" element={<ProtectedRoutesForProfile>
              <ProfilePage />
            </ProtectedRoutesForProfile>} />
            <Route path="/*" element={<NoPage />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
          </Routes>
          <Toaster />
        </BrowserRouter>

      </MyState>
    </>
  )
}

export default App
