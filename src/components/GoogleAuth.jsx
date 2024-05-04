import React from "react";
import google from "../assets/google.png";
import { signInWithPopup } from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { auth, fireDB, provider } from "../firebase/firebaseConfig";

function GoogleAuth() {
  const navigate = useNavigate()
  

  const handleGoogleAuth = async () => {
    try {
      const user = await signInWithPopup(auth, provider)
     
      const q =doc(fireDB,"users",user.user.uid)

      const querySnapshot = await getDoc(q);
      if (querySnapshot.exists()) {
       console.log("Exists");
      }
      else{
        await setDoc(doc(fireDB, "users", user.user.uid), {
          name: user.user.displayName,
          displayName:user.user.email.split('@')[0] ,
          uId: user.user.uid,
          followers: [],
          following: [],
          posts: [],
          date: new Date().toLocaleString("en-US", {
            month: 'short',
            day: '2-digit',
            year: "numeric"
          }),
          profilePicUrl: user.user.photoURL,
          email: user.user.email,
  
  
        })
      }
      
      navigate("/")

    } catch (error) {
      console.log(error);
    }
  }
  return (
    <button className=" w-[75%] rounded-lg  p-2 px-5  bg-black text-white justify-evenly flex items-center"
      onClick={handleGoogleAuth}> <img className=" w-[35px] h-[35px]" src={google} alt="" /> Continue With Google</button>

  )
}

export default GoogleAuth