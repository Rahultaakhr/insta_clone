import React, { useEffect, useState } from "react";
import { collection, onSnapshot, query } from "firebase/firestore";
import { fireDB } from "../firebase/firebaseConfig";

function TimeLine({ className }) {
  const [like, setLike] = useState(false)
  const [likeCount, setLikeCount] = useState(200)
  const [arr, setArr] = useState([])
  const [allPosts, setAllPosts] = useState([])

  const getUsersList = async () => {
    const q = query(collection(fireDB, 'users'))
    const data = onSnapshot(q, (QuerySnapshot) => {
      let userList = []
      let postList = []
      QuerySnapshot.forEach((doc) => {
        userList.push(doc.data())
        postList.push(doc.data().posts)
      })
     
      setArr(userList)
      const shuffledPosts = shuffleArray(postList.flat(Infinity));
      setAllPosts(shuffledPosts);
     
    })
    return data

  }
  useEffect(() => {
    getUsersList()

  }, [])

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
    return array;
  };

  return (
    <div className={`${className} flex justify-center   `}>
      <div className=" md:pl-5 w-[85%]     h-screen  ">


        <div className=" w-full  ">
          <div className=" w-full flex flex-col items-center">
          {allPosts.map((post,index)=>{
                  return(
                    <div key={index} className=" my-3 h-[550px] flex flex-col w-full sm:w-[70%]   ">

                    <div className=" h-[50px] w-full bg-black flex items-center gap-3">
  
                      <img className="w-[40px] h-[40px] rounded-full" src={post.Dp} alt="" />
  
                      <div className=" text-white  flex gap-2"><h2 className=" font-semibold">{post.userName}</h2> <span className=" text-gray-300 font-normal ">• {post.createdAt}</span></div>
                    </div>
                    <div className=" w-full flex-1 h-full overflow-hidden">
                      <img className=" w-full  h-full object-fill" src={post.postImage}  alt="" />
  
  
                    </div>
  
  
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
  
  
  
                    <div className=" flex ">
                      <h1 className="font-semibold">{post.userName}</h1>
                     {post.postCaption &&  <p className=" px-1">{   post.postCaption}</p>}
                    </div>
  
                    <div className=" mt-2 border border-gray-200">
                    </div>
                  </div>
                  )
                })}
          </div>
        </div>


      </div>
    </div>
  )
}

export default TimeLine