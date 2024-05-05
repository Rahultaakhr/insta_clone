import React, { useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { auth, fireDB } from "../firebase/firebaseConfig";
import { MyContext } from "./MyContext";

function MyState({ children }) {
    const [currentUser, setCurrentUser] = useState({})
    const [currentUserForProtectedRoutes, setCurrentUserForProtectedRoutes] = useState({})
    const [searchUserProfile,setSearchUserProfile]=useState(null)
    const [currentUserProfile,setCurrentUserProfile]=useState(null)

    const userLogoutFuntion = () => {
        try {
            signOut(auth)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        const unsub = onAuthStateChanged(auth, async (user) => {
            setCurrentUserForProtectedRoutes(user)
         if (user) {
            const docRef = doc(fireDB, "users", user?.uid);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                setCurrentUser(docSnap.data())
                return null
            }

         }

        })
        return unsub
    }, [])

    return (
        <MyContext.Provider value={{ currentUser, userLogoutFuntion,currentUserForProtectedRoutes,searchUserProfile,setSearchUserProfile,currentUserProfile,setCurrentUserProfile }}>
            {children}
        </MyContext.Provider>
    )
}

export default MyState