import React, { useContext, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { MyContext } from "../context/MyContext";

function ProtectedRoutesForHome({children}) {

    const {currentUser}=useContext(MyContext)
    const navigate=useNavigate()
    console.log(currentUser);
    useEffect(() => {
     if (!currentUser) {
        navigate("/login")
     }
     else{
        navigate("/")
     }
    }, [currentUser,navigate])

    return currentUser?children:null
    
}
  

export default ProtectedRoutesForHome