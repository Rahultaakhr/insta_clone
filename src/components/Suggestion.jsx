import React, { useContext, useEffect, useState } from "react";
import { Button } from "@material-tailwind/react";
import { signOut, updateProfile } from "firebase/auth";
import { doc, updateDoc } from "firebase/firestore";
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from "firebase/storage";
import { MyContext } from "../context/MyContext";
import { auth, fireDB, storage } from "../firebase/firebaseConfig";

function Suggestion({ className }) {
 

  const { userLogoutFuntion, currentUser,currentUserForProtectedRoutes } = useContext(MyContext)


 

  return (
    <div className={`${className} `}>
      <div className=" w-[70%]">
        <div className="     flex items-center justify-between p-4">
          <div className=" flex items-center gap-3">
           
      
              <img className=" w-[60px] h-[60px] rounded-full" src="https://i.pinimg.com/736x/30/a9/bd/30a9bdea0a3019bf01f5b5576b983874.jpg" alt="" />
        
            <div>
              <h2 className=" font-semibold">{currentUserForProtectedRoutes.displayName}</h2>
              <p>Rahul</p>
            </div>
          </div>

          <Button onClick={userLogoutFuntion} className="  p-3  bg-black">Logout</Button>
        </div>


      </div>



    </div>
  )
}

export default Suggestion