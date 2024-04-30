import React, { useContext } from "react";
import logoText from "../assets/logoText.png";
import reelsIcon from "../assets/reelsIcon.png";
import { Button } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../context/MyContext";

function SideBar({className}) {
    const navigate=useNavigate()
    const {userLogoutFuntion}=useContext(MyContext)
    return (
        <div className={`${className}  `}>
            <div className=" relative w-[60px]  sm:w-[80px]  md:sticky top-0  flex items-center flex-col   xl:w-full h-screen  border-r border-black  ">
                <div className=" flex justify-center" onClick={()=>{navigate('/')}}> <img src={logoText} className=" hidden xl:inline-block w-[50%]" alt="" /><i className=" xl:hidden py-7 text-[45px] fa-brands fa-instagram"></i></div>
                <div className=" flex flex-col items-start relative">
                    <ul className=" flex xl:inline-block   items-center flex-col">
                        <li className=" py-3 text-[20px] font-medium" onClick={()=>{navigate("/")}}><i className="  text-[25px] mr-2 fa-solid fa-house"></i> <span className=" hidden xl:inline-block">Home</span></li>
                        <li className=" py-3 text-[20px] font-medium"><i className="  text-[25px] mr-2 fa-solid fa-magnifying-glass"></i> <span className=" hidden xl:inline-block">Search</span></li>
                        <li className=" py-3 text-[20px] font-medium"><i className="  text-[25px] mr-2 fa-regular fa-compass"></i> <span className=" hidden xl:inline-block">Explore</span></li>
                        <li className=" py-3 text-[20px] font-medium items-center flex"> <span><img className=" mr-3 w-[28px]" src={reelsIcon} alt="" /> </span><span className=" hidden xl:inline-block">Reels</span></li>
                        <li className=" py-3 text-[20px] font-medium"><i className="  text-[25px] mr-2 fa-brands fa-facebook-messenger"></i> <span className=" hidden xl:inline-block">Messages</span></li>
                        <li className=" py-3 text-[20px] font-medium"><i className="  text-[25px] mr-2 fa-regular fa-heart"></i> <span className=" hidden xl:inline-block">Notifications</span></li>
                        <li className=" py-3 text-[20px] font-medium"><i className="  text-[25px] mr-2 fa-regular fa-square-plus"></i> <span className=" hidden xl:inline-block">Notifications</span></li>
                        <li className=" py-3 text-[20px] font-medium" onClick={()=>{navigate("/profile")}}><i className="  text-[25px] mr-2 fa-regular fa-circle-user"></i> <span className=" hidden xl:inline-block">Profile</span></li>
                    </ul>

                    <Button onClick={()=>{
                        userLogoutFuntion()
                    }} className=" mt-20 bg-gray-200 text-black p-2 gap-3   w-full justify-center  flex items-center text-[22px]"> <i className="  fa-regular fa-circle-left"></i> <span className=" pb-2  xl:block hidden">Logout</span></Button>
                </div>


             
            </div>
        </div>
        // <div>Side bar</div>
    )
}

export default SideBar