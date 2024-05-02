import React, { useState } from "react";

function TimeLine({ className }) {
  const [like, setLike] = useState(false)
  const [likeCount, setLikeCount] = useState(200)
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
              <div key={index} className=" my-3 h-[550px] flex flex-col w-full sm:w-[70%]   ">

                <div className=" h-[50px] w-full bg-black flex items-center gap-3">

                  <img className="w-[40px] h-[40px] rounded-full" src="https://cdn.123telugu.com/content/wp-content/uploads/2024/02/OG-2.jpg" alt="" />

                  <div className=" text-white  flex gap-2"><h2 className=" font-semibold">rahu_l_hr</h2> <span className=" text-gray-300 font-normal ">• 2d</span></div>
                </div>
                <div className=" w-full flex-1 h-full">
                  <img className=" w-full  h-full" src="https://images.hindustantimes.com/img/2021/11/01/1600x900/aryan_khan__1635758389942_1635758397831.png" alt="" />


                </div>

                {/* like section */}
                <div className=" flex  flex-col  p-1 text-[22px]">
                  {like ? <i className="fa-regular fa-heart" onClick={() => {
                    setLike(false)
                    setLikeCount(() => (likeCount + 1))

                  }}></i> : <i className="fa-solid fa-heart"
                    onClick={() => {
                      setLike(true)
                      setLikeCount(() => (likeCount - 1))
                    }}
                  ></i>}
                  <p className=" text-[16px] font-medium">{likeCount} likes</p>
                </div>

                {/* caption section */}

                <div className=" flex ">
                  <h1 className="font-semibold">rahu_l_hr</h1>
                  <p className=" px-1">Caption</p>
                </div>

                <div className=" mt-2 border border-gray-200">
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