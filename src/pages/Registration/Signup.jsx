import GoogleAuth from "../../components/GoogleAuth";
import GoogleButton from "react-google-button";
import React from "react";
import google from "../../assets/google.png";
import logoText from "../../assets/logoText.png";
import phoneScreen from "../../assets/phoneScreen.png";
import { Link } from "react-router-dom";

function Signup() {
  return (
    <div>

      <div className=" h-screen w-full bg-gray-50">
        <div className=" w-full h-full  flex justify-center sm:items-center">

          <div className=" flex items-center">
            {/* Photo Sec */}
            <img src={phoneScreen} className=" hidden md:block" alt="" />


            {/* Account sec */}
            <div className=" ">
              {/* upper  */}
              <div className=" md:border  w-[380px] h-[450px]  flex items-center justify-start flex-col">
                <img src={logoText} className=" w-[65%]   " alt="" />

                {/* All input */}

                <div className=" w-[75%]  flex items-center flex-col ">
                  <input className=" w-full ps-2 outline-none rounded-sm border-gray-300 py-1 bg-gray-100 border my-2" type="email" placeholder="email" />
                  <input className=" w-full ps-2 outline-none rounded-sm border-gray-300 py-1 bg-gray-100 border my-2" type="text" placeholder="username" />
                  <input className=" w-full ps-2 outline-none rounded-sm border-gray-300 py-1 bg-gray-100 border my-2" type="password" placeholder="password" />
                  <button className=" w-full bg-blue-300 font-semibold text-white rounded-md p-2 mt-1">Sign up</button>
                </div>

                {/* seperator */}

                <div className=" w-[75%] flex items-center  justify-between py-2">
                  <div className=" w-[40%] border border-gray-300"></div>
                  <p>OR</p>
                  <div className=" w-[40%] border border-gray-300"></div>
                </div>

                <GoogleAuth />




              </div>
              {/* lowwer */}
              <div className=" w-full md:border mt-3 py-3 text-center">
                Don't have an account? <Link className=" font-semibold" to={"/login"}>Login</Link>

              </div>

            </div>

          </div>

        </div>
      </div>


    </div>
  )
}

export default Signup