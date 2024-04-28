import React from "react";
import google from "../assets/google.png";

function GoogleAuth() {
  return (
    <button className=" w-[75%] rounded-lg  p-2 px-5  bg-black text-white justify-evenly flex items-center"> <img  className=" w-[35px] h-[35px]" src={google} alt="" /> Continue With Google</button>

  )
}

export default GoogleAuth