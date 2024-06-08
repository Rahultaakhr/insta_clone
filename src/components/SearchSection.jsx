import ProfilePage from "../pages/ProfilePage/ProfilePage";
import React, { useContext, useEffect, useState } from "react";
import { Button, Dialog, DialogBody } from "@material-tailwind/react";
import { arrayRemove, arrayUnion, collection, doc, getDoc, getDocs, query, setDoc, updateDoc, where } from "firebase/firestore";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../context/MyContext";
import { fireDB } from "../firebase/firebaseConfig";
import { followUser, setFollowing, unfollowUser } from "../redux/userSlice";

function SearchSection() {
    const [open, setOpen] = useState(false);
    const [userSearch, setUserSearch] = useState('');
    const [userList, setUserList] = useState([]);
    const { currentUserForProtectedRoutes, currentUser,setSearchUserProfile } = useContext(MyContext);
    const currentUsers = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const navigate=useNavigate()

    const handleOpen = () => setOpen(!open);

    // const handleFollow = async (user) => {
    //     dispatch(followUser(user));

    //     const userDocRef = doc(fireDB, 'users', currentUserForProtectedRoutes.uid);
    //     await updateDoc(userDocRef, {
    //         following: [...currentUsers.follows, user]
    //     });

    //     await updateDoc(doc(fireDB, "users", user.uId), {
    //         followers: arrayUnion(currentUser)
    //     })
    // };

    // const handleUnfollow = async (user) => {
    //     dispatch(unfollowUser(user));

    //     const userDocRef = doc(fireDB, 'users', currentUserForProtectedRoutes.uid);
    //     const updatedFollowing = currentUsers.follows.filter((u) => u.uId !== user.uId);
    //     await updateDoc(userDocRef, {
    //         following: updatedFollowing
    //     });

    //     await updateDoc(doc(fireDB, "users", user.uId), {
    //         followers: arrayRemove(currentUser)
    //     })
    // };

    const handleSearch = async () => {
        try {
            const q = query(collection(fireDB, "users"), where("name", "==", userSearch));
            const querySnapshot = await getDocs(q);
            const userList2 = [];
            querySnapshot.forEach((doc) => {
                if (doc.data().uId !== currentUserForProtectedRoutes.uid) {
                    userList2.push(doc.data());
                    console.log(doc.data());
                }
            });
            setUserList(userList2);
            console.log(userList);
        } catch (error) {
            console.log("Error searching users:", error);
        }
    };

    useEffect(() => {
        const fetchFollowing = async () => {
            try {
                const uid = currentUserForProtectedRoutes?.uid;
                if (uid) {
                    const userDocRef = doc(fireDB, 'users', uid);
                    const userDocSnap = await getDoc(userDocRef);
                    if (userDocSnap.exists()) {
                        const followingList = userDocSnap.data().following || [];
                        dispatch(setFollowing(followingList));
                    }
                } else {
                    console.log("User UID not available.");
                }
            } catch (error) {
                console.log("Error fetching following list:", error);
            }
        };


        fetchFollowing();
    }, [currentUserForProtectedRoutes.uid, dispatch]);

    return (
        <div className="bg-transparent">
            <Button
                type="button"
                onClick={handleOpen}
                className="text-black"
            >
                <li className="text-[20px] font-medium">
                    <i className="text-[25px] mr-2 fa-solid fa-magnifying-glass"></i>
                    <span className="hidden xl:inline-block">Search</span>
                </li>
            </Button>
            <Dialog open={open} handler={handleOpen} className="max-w-[400px] mx-auto">
                <DialogBody className="">
                    <div className="mb-3">
                        <input
                            type="text"
                            name="name"
                            placeholder="Enter user's name"
                            value={userSearch}
                            onChange={(e) => setUserSearch(e.target.value)}
                            className="bg-pink-50 border border-pink-200 px-2 py-2 w-full rounded-md outline-none text-pink-600 placeholder-pink-300"
                        />
                    </div>
                    <div className="">
                        <Button
                            onClick={handleSearch}
                            className="w-full px-4 py-3 text-center text-gray-100 bg-purple-500 border border-transparent dark:border-gray-700 rounded-lg"
                        >
                            Search
                        </Button>
                    </div>
                    {userList.map((user, index) => (
                        <div key={index} className="flex items-center border rounded-lg border-black my-1 p-1">
                            <div className="flex items-center gap-3 w-full my-1 h-[60px] rounded-lg py-1" onClick={()=>{
                                setSearchUserProfile(user)
                                navigate(`/profile/${user.displayName}`)

                            }}>
                                <img src={user.profilePicUrl} className="border border-black w-[50px] h-[50px] rounded-full" alt="" />
                                <h1 className="font-bold">{user.name}</h1>
                            </div> 
                            {/* <div>
                                {currentUsers.follows.some((u) => u.uId === user.uId) ? (
                                    <button className="text-black font-bold" onClick={() => handleUnfollow(user)}>
                                        Unfollow
                                    </button>
                                ) : (
                                    <button className="text-black font-bold" onClick={() => handleFollow(user)}>
                                        Follow
                                    </button>
                                )}
                            </div> */}
                        </div>
                    ))}
                </DialogBody>
            </Dialog>
        </div>
    );
}

export default SearchSection;
