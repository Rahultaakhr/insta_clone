import React, { useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";
import { MyContext } from "./MyContext";

function MyState({ children }) {
    const [currentUser, setCurrentUser] = useState({})

    const userLogoutFuntion=()=>{
        try {
            signOut(auth)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
     const unsub= onAuthStateChanged(auth,(user)=>{
        setCurrentUser(user)

      })
      return unsub
    }, [])
    
    return (
        <MyContext.Provider value={{currentUser,userLogoutFuntion}}>
            {children}
        </MyContext.Provider>
    )
}

export default MyState