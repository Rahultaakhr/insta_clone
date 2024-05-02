import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../context/MyContext";

function ProtectedRoutesForProfile({children}) {
    const {currentUserForProtectedRoutes}=useContext(MyContext)
    const navigate=useNavigate()
    console.log(currentUserForProtectedRoutes);
    useEffect(() => {
     if (!currentUserForProtectedRoutes) {
        navigate("/login")
     }
     else{
        navigate("/profile")
     }
    }, [currentUserForProtectedRoutes,navigate])

    return currentUserForProtectedRoutes?children:null
    
}

export default ProtectedRoutesForProfile