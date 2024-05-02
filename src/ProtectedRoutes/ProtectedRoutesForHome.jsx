import React, { useContext, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { MyContext } from "../context/MyContext";

function ProtectedRoutesForHome({children}) {

    const {currentUserForProtectedRoutes}=useContext(MyContext)
    const navigate=useNavigate()
    console.log(currentUserForProtectedRoutes);
    useEffect(() => {
     if (!currentUserForProtectedRoutes) {
        navigate("/login")
     }
     else{
        navigate("/")
     }
    }, [currentUserForProtectedRoutes,navigate])

    return currentUserForProtectedRoutes?children:null
    
}
  

export default ProtectedRoutesForHome