import React from "react";
import SideBar from "./SideBar";

function PageLayout({children}) {
  return (
    <div className=" w-full overflow-y-scroll scrollbar-none  flex">
         <SideBar className={" sticky top-0 w-[15%]"} />
         {children}
    </div>
  )
}

export default PageLayout