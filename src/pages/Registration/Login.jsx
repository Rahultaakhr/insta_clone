import GoogleAuth from "../../components/GoogleAuth";
import React, { useState } from "react";
import logoText from "../../assets/logoText.png";
import phoneScreen from "../../assets/phoneScreen.png";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebase/firebaseConfig";

function Login() {
  const navigate=useNavigate()
  const [userLogin, setUserLogin] = useState(
    {
      email:'',
      password:''
    }
  )
  const userLoginFunction=async()=>{
    try {
      const users=await signInWithEmailAndPassword(auth,userLogin.email,userLogin.password)
      console.log(users);
      setUserLogin({
        email:'',
        password:''
      })
      navigate("/")
    } catch (error) {
      console.log(error);
    }
  }
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
                  <input className=" w-full ps-2 outline-none rounded-sm border-gray-300 py-1 bg-gray-100 border my-2" type="email" placeholder="email"
                  value={userLogin.email}
                  onChange={(e)=>{
                    setUserLogin({...userLogin,email:e.target.value})
                  }}
                  />
                  <input className=" w-full ps-2 outline-none rounded-sm border-gray-300 py-1 bg-gray-100 border my-2" type="password" placeholder="password"
                    value={userLogin.password}
                    onChange={(e)=>{
                      setUserLogin({...userLogin,password:e.target.value})
                    }}
                  />
                  <button className=" w-full bg-blue-300 font-semibold text-white rounded-md p-2 mt-1"
                  onClick={userLoginFunction}>Login</button>
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
                Don't have an account? <Link className=" font-semibold" to={"/signup"}>Sign up</Link>

              </div>

            </div>

          </div>

        </div>
      </div>


    </div>
  )
}

export default Login