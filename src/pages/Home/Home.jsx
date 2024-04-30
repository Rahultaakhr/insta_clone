import PageLayout from "../../components/PageLayout";
import React, { useEffect } from "react";
import SideBar from "../../components/SideBar";
import Suggestion from "../../components/Suggestion";
import TimeLine from "../../components/TimeLine";
import { Spinner } from "@material-tailwind/react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase/firebaseConfig";

function Home() {
  return (


    // <PageLayout>
    //     <div className=" flex w-full h-screen ">
    //     <div className=" w-full scrollbar-none overflow-y-scroll flex">
    //       <TimeLine className={"  h-[200vh] w-full xl:w-[60%] "} />
    //       <Suggestion className={'flex-1 hidden xl:block'} />
    //     </div>

    // </div>
    //   </PageLayout>

    <PageLayout>
      <div className=" w-full  flex">
        <TimeLine className={" xl:w-[60%] "} />
        <Suggestion className={'flex-1 hidden xl:block  py-2'} />
      </div>
    </PageLayout>




  )
}

export default Home