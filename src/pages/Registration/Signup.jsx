import GoogleAuth from "../../components/GoogleAuth";
import React, { useState } from "react";
import logoText from "../../assets/logoText.png";
import phoneScreen from "../../assets/phoneScreen.png";
import toast from "react-hot-toast";
import { collapse } from "@material-tailwind/react";
import { data } from "autoprefixer";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { addDoc, collection, doc, onSnapshot, query, setDoc, updateDoc, where } from "firebase/firestore";
import { Link, useNavigate } from "react-router-dom";
import { auth, fireDB } from "../../firebase/firebaseConfig";

function Signup() {
  const navigate = useNavigate()

  const [userSignup, setUserSignup] = useState({
    name: '',
    userName: '',
    email: '',
    password: ''
  })

  const userSignupfunction = async () => {
    if (userSignup.name === '' || userSignup.email === '' || userSignup.password === '' || userSignup.userName === '') {
      return toast.error("All Fields Are Required")

    }



    try {
      const users = await createUserWithEmailAndPassword(auth, userSignup.email, userSignup.password)
      console.log(users);
      updateProfile(users.user, {
        displayName: userSignup.userName,

      })
      await setDoc(doc(fireDB, "users", users.user.uid), {
        name: userSignup.name,
        displayName: userSignup.userName,
        uId: users.user.uid,
        followers: [],
        following: [],
        posts: [],
        date: new Date().toLocaleString("en-US", {
          month: 'short',
          day: '2-digit',
          year: "numeric"
        }),
        profilePicUrl: users.user.photoURL,
        email: users.user.email,


      })
      setUserSignup({
        name: '',
        userName: '',
        email: '',
        password: ''
      })
      navigate("/login")

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
              <div className=" md:border  w-[380px] h-auto pb-2  flex items-center justify-start flex-col">
                <img src={logoText} className="  w-[60%]   " alt="" />

                {/* All input */}

                <div className=" w-[75%]  flex items-center flex-col ">
                  <input className=" w-full ps-2 outline-none rounded-sm border-gray-300 py-1 bg-gray-100 border my-2" type="email" placeholder="Email"
                    value={userSignup.email}
                    onChange={(e) => {
                      setUserSignup({ ...userSignup, email: e.target.value })
                    }}
                  />
                  <input className=" w-full ps-2 outline-none rounded-sm border-gray-300 py-1 bg-gray-100 border my-2" type="text" placeholder="Username"
                    value={userSignup.userName}
                    onChange={(e) => {
                      setUserSignup({ ...userSignup, userName: e.target.value })
                    }}
                  />
                  <input className=" w-full ps-2 outline-none rounded-sm border-gray-300 py-1 bg-gray-100 border my-2" type="text" placeholder="Name"
                    value={userSignup.name}
                    onChange={(e) => {
                      setUserSignup({ ...userSignup, name: e.target.value })
                    }}
                  />
                  <input className=" w-full ps-2 outline-none rounded-sm border-gray-300 py-1 bg-gray-100 border my-2" type="password" placeholder="Password"
                    value={userSignup.password}
                    onChange={(e) => {
                      setUserSignup({ ...userSignup, password: e.target.value })
                    }}
                  />
                  <button className=" w-full bg-blue-300 font-semibold text-white rounded-md p-2 mt-1" onClick={userSignupfunction}>Sign up</button>
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