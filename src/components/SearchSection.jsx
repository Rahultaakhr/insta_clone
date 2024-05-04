import React, { useContext, useEffect, useState } from "react";
import { Button, Dialog, DialogBody, DialogFooter, DialogHeader } from "@material-tailwind/react";
import { arrayUnion, collection, doc, onSnapshot, query, updateDoc, where } from "firebase/firestore";
import { useDispatch, useSelector } from "react-redux";
import { MyContext } from "../context/MyContext";
import { fireDB } from "../firebase/firebaseConfig";
import { followUser, unfollowUser } from "../redux/userSlice";

function SearchSection() {
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(!open);
    const [userSearch, setUserSearch] = useState('')
    const [userList, setUserList] = useState([])
    const { currentUser, currentUserForProtectedRoutes } = useContext(MyContext)
    const [followUsers, setFollowUsers] = useState([])

    const currentUsers = useSelector((state) => state.user); // Assuming user slice is under 'user'
    const dispatch = useDispatch();



    const handleFollow = async (user) => {
        dispatch(followUser(user));

        setFollowUsers(...currentUsers.follows)
       

        await updateDoc(doc(fireDB, "users", currentUserForProtectedRoutes.uid), {
            following: (currentUsers.follows)
        })
        console.log();
    };

    const handleUnfollow = async (user) => {
        dispatch(unfollowUser(user));

        setFollowUsers(...currentUsers.follows )
        console.log(followUsers);

        await updateDoc(doc(fireDB, "users", currentUserForProtectedRoutes.uid), {
            following: (currentUsers.follows)
        })




        // Dispatch unfollowUser action with user ID
    };


    const handleSearch = () => {
        try {

            const q = query(
                collection(fireDB, "users"),
                where('name', '==', userSearch)

            )
            const data = onSnapshot(q, (querySnapshot) => {
                let userList2 = []
                querySnapshot.forEach((doc) => {
                    userList2.push(doc.data())
                    // console.log(doc.data());
                })
                setUserList(userList2)
                console.log(userList);
            })

        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {

    }, [])




    return (
        <div className=" bg-transparent ">
            <Button
                type="button"
                onClick={handleOpen}
                className="  text-black"
            >
                <li className="  text-[20px] font-medium"><i className="  text-[25px] mr-2 fa-solid fa-magnifying-glass"></i> <span className=" hidden xl:inline-block">Search</span></li>

            </Button>
            <Dialog open={open} handler={handleOpen} className=" max-w-[400px] mx-auto ">
                <DialogBody className="">
                    <div className="mb-3">
                        <input
                            type="text"
                            name="name"
                            placeholder='Enter your name'
                            value={userSearch}
                            onChange={(e) => {
                                setUserSearch(e.target.value)
                            }}


                            className='bg-pink-50 border border-pink-200 px-2 py-2 w-full rounded-md outline-none text-pink-600 placeholder-pink-300'
                        />
                    </div>





                    <div className="">
                        <Button
                            onClick={() => {
                                handleSearch()
                                setUserSearch("")

                            }}

                            className="w-full px-4 py-3 text-center text-gray-100 bg-purple-500 border border-transparent dark:border-gray-700 rounded-lg"
                        >
                            Search
                        </Button>
                    </div>


                    {
                        userList ? userList.map((user, index) => {
                            return (
                                <div key={index} className=" flex items-center border rounded-lg border-black my-1 p-1">
                                    <div className="  flex items-center gap-3   w-full my-1 h-[60px] rounded-lg  py-1">
                                        <img src={user.profilePicUrl} className=" border border-black w-[50px] h-[50px] rounded-full" alt="" />
                                        <h1 className=" font-bold">{user.name}</h1>

                                    </div>
                                    <div>

                                        {/* {isFollowing ? (
                                              <button className=" text-black font-bold" onClick={() => {
                                                handleUnfollow(user)
                                            }}>Follow</button>
                                        ) : (
                                            <button className=" text-black font-bold" onClick={() => {
                                                handleFollow(user)
                                            }}>Follow</button>
                                        )} */}


                                        {currentUsers.follows.includes(user) ?

                                            <button className=" text-black font-bold" onClick={() => {
                                                handleUnfollow(user)
                                                console.log(currentUsers.follows);

                                            }}>Unfollow</button> :

                                            <button className=" text-black font-bold" onClick={async () => {
                                                await handleFollow(user)
                                                console.log(currentUsers.follows)

                                            }}>Follow</button>

                                        }


                                    </div>
                                </div>
                            )
                        }) : null

                    }
                </DialogBody>
            </Dialog>
        </div>
    )
}

export default SearchSection