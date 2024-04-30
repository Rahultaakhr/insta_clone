import React from "react";
import google from "../assets/google.png";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth, provider } from "../firebase/firebaseConfig";

function GoogleAuth() {
  const navigate = useNavigate()

  const handleGoogleAuth = async () => {
    try {
      const user = await signInWithPopup(auth, provider)
      console.log(user);
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