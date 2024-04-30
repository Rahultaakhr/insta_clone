import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../context/MyContext";

function ProtectedRoutesForProfile({children}) {
    const {currentUser}=useContext(MyContext)
    const navigate=useNavigate()
    console.log(currentUser);
    useEffect(() => {
     if (!currentUser) {
        navigate("/login")
     }
     else{
        navigate("/profile")
     }
    }, [currentUser,navigate])

    return currentUser?children:null
    
}

export default ProtectedRoutesForProfile