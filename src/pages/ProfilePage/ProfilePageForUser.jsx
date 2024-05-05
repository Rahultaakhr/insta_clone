import PageLayout from "../../components/PageLayout";
import React, { useContext, useEffect, useState } from "react";
import { Button, Spinner } from "@material-tailwind/react";
import { updateProfile } from "firebase/auth";
import { arrayRemove, arrayUnion, collection, doc, getDoc, getDocs, onSnapshot, orderBy, query, updateDoc, where } from "firebase/firestore";
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from "firebase/storage";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { v4 as uuid } from "uuid";
import { MyContext } from "../../context/MyContext";
import { fireDB, storage } from "../../firebase/firebaseConfig";
import { followUser, setFollowing, unfollowUser } from "../../redux/userSlice";

function ProfilePageForUser() {
    const { currentUserForProtectedRoutes, searchUserProfile, setSearchUserProfile, currentUser } = useContext(MyContext)

    const currentUsers = useSelector((state) => state.user);
    const dispatch = useDispatch()
    const { id } = useParams()


    const handleSearch = async () => {
        try {
            const q = query(collection(fireDB, "users"), where("displayName", "==", id));
            const querySnapshot = await getDocs(q);

            querySnapshot.forEach((doc) => {
                if (doc.data().uId !== currentUserForProtectedRoutes.uid) {
                    setSearchUserProfile(doc.data())

                }
                else {
                    setSearchUserProfile(null)
                }
            });

        } catch (error) {
            console.log("Error searching users:", error);
        }
    };
    const handleFollow = async (user) => {
        dispatch(followUser(user));

        const userDocRef = doc(fireDB, 'users', currentUserForProtectedRoutes.uid);
        await updateDoc(userDocRef, {
            following: [...currentUsers.follows, user]
        });

        await updateDoc(doc(fireDB, "users", user.uId), {
            followers: arrayUnion(currentUser)
        })
    };

    const handleUnfollow = async (user) => {
        dispatch(unfollowUser(user));

        const userDocRef = doc(fireDB, 'users', currentUserForProtectedRoutes.uid);
        const updatedFollowing = currentUsers.follows.filter((u) => u.uId !== user.uId);
        await updateDoc(userDocRef, {
            following: updatedFollowing
        });

        await updateDoc(doc(fireDB, "users", user.uId), {
            followers: arrayRemove(currentUser)
        })
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
        handleSearch()

    }, [id, currentUserForProtectedRoutes.uid]); // Fetch posts when user ID changes


    return (

        <PageLayout>
            <div className="  w-full h-screen  overflow-y-scroll   scrollbar-thin ">

                <div className=" w-full md:w-[80%] mx-auto h-full">

                    <div className=" flex items-center flex-col sm:flex-row xl:justify-center md:px-16 pt-5   gap-5">
                        <div className="  rounded-full overflow-hidden ">
                            {/* <input type="file" name="" id="file" onChange={(e) => { setFile({ ...file, photoFile: e.target.files[0] }) }} hidden /> */}
                            <label htmlFor="file">
                                <img className=" w-[90px]  md:w-[130px] h-[90px] md:h-[130px]" src={searchUserProfile?.profilePicUrl ? searchUserProfile?.profilePicUrl : 'https://www.pngitem.com/pimgs/m/150-1503945_transparent-user-png-default-user-image-png-png.png'} alt="" />
                            </label>
                        </div>

                        <div className="  w-auto max-w-[400px] overflow-hidden  h-auto max-h-[300px]  md:p-7 p-3">
                            <div className=" flex justify-between"> <h1 className=" font-bold">{
                                searchUserProfile?.displayName
                            }</h1>

                                {/* <Button className=" bg-black py-1 px-4" >Edit</Button> */}
                                {currentUsers.follows.some((u) => u.uId === searchUserProfile?.uId) ? (
                                    <Button className="bg-black py-1 px-4" onClick={() => handleUnfollow(searchUserProfile)}>
                                        Unfollow
                                    </Button>
                                ) : (
                                    <Button className="bg-black py-1 px-4" onClick={() => handleFollow(searchUserProfile)}>
                                        Follow
                                    </Button>
                                )}
                            </div>



                            <div className="  py-3 gap-3 flex">
                                <p><span className=" font-bold">{searchUserProfile?.posts?.length}</span> Posts</p>
                                <p><span className=" font-bold">{searchUserProfile?.followers?.length}</span> Followers</p>
                                <p><span className=" font-bold">{searchUserProfile?.following?.length}</span> Following</p>

                            </div>
                            <div className=" font-medium ">{searchUserProfile?.name}</div>
                            <div className="overflow-hidden">Bio </div>
                        </div>
                    </div>

                    <div className=" w-full h-auto  px-5  ">
                        <div className="  border-t py-5 w-full">
                            <h2 className=" text-center py-2 font-semibold">POSTS</h2>

                            <div className=" flex flex-wrap">

                                {searchUserProfile?.posts ? searchUserProfile?.posts?.map((post, index) => {
                                    return (
                                        <div key={index} className=" border  w-full  m-1">
                                            <img src={post?.postImage} className="   md:w-[300px] md:h-[300px]" alt="" />

                                        </div>
                                    )
                                }) : null}


                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </PageLayout>

    )
}

export default ProfilePageForUser