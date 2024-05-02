import React, { useContext, useEffect, useState } from "react";
import SearchSection from "./SearchSection";
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
           
      
              <img className=" w-[60px] h-[60px] rounded-full" src={currentUser.profilePicUrl ? currentUser.profilePicUrl:'https://www.pngitem.com/pimgs/m/150-1503945_transparent-user-png-default-user-image-png-png.png'} alt="" />
        
            <div>
              <h2 className=" font-semibold">{currentUserForProtectedRoutes.displayName}</h2>
              <p>{currentUser.name}</p>
            </div>
          </div>

          <Button onClick={userLogoutFuntion} className="  p-3  bg-black">Logout</Button>
         
        </div>


      </div>



    </div>
  )
}

export default Suggestion