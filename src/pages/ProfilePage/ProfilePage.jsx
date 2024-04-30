import PageLayout from "../../components/PageLayout";
import React from "react";
import { Button } from "@material-tailwind/react";

function ProfilePage() {
    return (

        <PageLayout>
            <div className="  w-full h-screen  overflow-y-scroll   scrollbar-thin ">

                <div className=" w-full md:w-[80%] mx-auto h-full">

                    <div className=" flex items-center flex-col sm:flex-row xl:justify-center md:px-16 pt-5   gap-5">
                        <div className="  rounded-full overflow-hidden ">
                            <img className=" w-[90px] border border-blue-400 md:w-[130px] h-[90px] md:h-[130px]" src="https://i.etsystatic.com/25311599/c/1315/1315/393/511/il/037c84/5023686087/il_300x300.5023686087_gzbq.jpg" alt="" />

                        </div>
                        <div className="  w-auto max-w-[400px] overflow-hidden  h-auto max-h-[300px]  md:p-7 p-3">
                            <div className=" flex justify-between"> <h1 className=" font-bold">rahu_l_hr</h1>

                                <Button className=" bg-black py-1 px-4">Edit</Button></div>

                            <div className="  py-3 gap-3 flex">
                                <p><span className=" font-bold">6</span> Posts</p>
                                <p><span className=" font-bold">500</span> Followers</p>
                                <p><span className=" font-bold">10</span> Following</p>

                            </div>
                            <div className=" font-medium ">Rahul</div>
                            <div className="overflow-hidden">Bio </div>
                        </div>
                    </div>

                    <div className=" w-full h-auto  px-5  ">
                        <div className="  border-t py-5 w-full">
                            <h2 className=" text-center py-2 font-semibold">POSTS</h2>

                            <div className=" flex flex-wrap">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW4AdHQ5lVM_cFZYu4TogVtmEfYH4iHSGwYQ&s" className=" w-full sm:w-[100%] md:w-[320px] h-[300px] m-1" alt="" />
                             
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW4AdHQ5lVM_cFZYu4TogVtmEfYH4iHSGwYQ&s" className=" w-full sm:w-[100%] md:w-[320px] h-[300px] m-1" alt="" />
                             
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW4AdHQ5lVM_cFZYu4TogVtmEfYH4iHSGwYQ&s" className=" w-full sm:w-[100%] md:w-[320px] h-[300px] m-1" alt="" />
                             
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW4AdHQ5lVM_cFZYu4TogVtmEfYH4iHSGwYQ&s" className=" w-full sm:w-[100%] md:w-[320px] h-[300px] m-1" alt="" />
                             
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW4AdHQ5lVM_cFZYu4TogVtmEfYH4iHSGwYQ&s" className=" w-full sm:w-[100%] md:w-[320px] h-[300px] m-1" alt="" />
                             
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW4AdHQ5lVM_cFZYu4TogVtmEfYH4iHSGwYQ&s" className=" w-full sm:w-[100%] md:w-[320px] h-[300px] m-1" alt="" />
                             
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW4AdHQ5lVM_cFZYu4TogVtmEfYH4iHSGwYQ&s" className=" w-full sm:w-[100%] md:w-[320px] h-[300px] m-1" alt="" />
                             
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW4AdHQ5lVM_cFZYu4TogVtmEfYH4iHSGwYQ&s" className=" w-full sm:w-[100%] md:w-[320px] h-[300px] m-1" alt="" />
                             
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW4AdHQ5lVM_cFZYu4TogVtmEfYH4iHSGwYQ&s" className=" w-full sm:w-[100%] md:w-[320px] h-[300px] m-1" alt="" />
                             
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW4AdHQ5lVM_cFZYu4TogVtmEfYH4iHSGwYQ&s" className=" w-full sm:w-[100%] md:w-[320px] h-[300px] m-1" alt="" />
                             
                             
                               

                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </PageLayout>

    )
}

export default ProfilePage