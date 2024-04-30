import React from "react";

function TimeLine({ className }) {
  const arr = [
    {
      img: 'https://cdn.123telugu.com/content/wp-content/uploads/2024/02/OG-2.jpg',
      name: 'rahul'
    },
    {
      img: 'https://cdn.123telugu.com/content/wp-content/uploads/2024/02/OG-2.jpg',
      name: 'rahul'
    },
    {
      img: 'https://cdn.123telugu.com/content/wp-content/uploads/2024/02/OG-2.jpg',
      name: 'rahul'
    },
    {
      img: 'https://cdn.123telugu.com/content/wp-content/uploads/2024/02/OG-2.jpg',
      name: 'rahul'
    },
    {
      img: 'https://cdn.123telugu.com/content/wp-content/uploads/2024/02/OG-2.jpg',
      name: 'rahul'
    },
    {
      img: 'https://cdn.123telugu.com/content/wp-content/uploads/2024/02/OG-2.jpg',
      name: 'rahul'
    },
    {
      img: 'https://cdn.123telugu.com/content/wp-content/uploads/2024/02/OG-2.jpg',
      name: 'rahul'
    },
    {
      img: 'https://cdn.123telugu.com/content/wp-content/uploads/2024/02/OG-2.jpg',
      name: 'rahul'
    },
    {
      img: 'https://cdn.123telugu.com/content/wp-content/uploads/2024/02/OG-2.jpg',
      name: 'rahul'
    },
  ]
  return (
    <div className={`${className} flex justify-center   `}>
      <div className=" md:pl-5 w-[85%]     h-screen  ">


        <div className=" w-full  ">
          <div className=" w-full flex flex-col items-center">
            {arr.map((list, index) => (
              <div key={index} className=" my-3 h-[500px] flex flex-col w-full sm:w-[70%]   ">

                <div className=" h-[50px] w-full bg-black flex items-center gap-3">

                  <img className="w-[40px] h-[40px] rounded-full" src="https://cdn.123telugu.com/content/wp-content/uploads/2024/02/OG-2.jpg" alt="" />

                  <div className=" text-white  flex gap-2"><h2 className=" font-semibold">rahu_l_hr</h2> <span className=" text-gray-300 font-normal ">2h ago</span></div>
                </div>
                <div className=" w-full flex-1 h-full">
                <img className=" w-full  h-full" src="https://images.hindustantimes.com/img/2021/11/01/1600x900/aryan_khan__1635758389942_1635758397831.png" alt="" />


                </div>
              </div>
            ))}
          </div>
        </div>


      </div>
    </div>
  )
}

export default TimeLine