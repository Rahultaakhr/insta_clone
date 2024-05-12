import PageLayout from "../../components/PageLayout";
import React, { useContext, useEffect, useState } from "react";
import { Button, Spinner } from "@material-tailwind/react";
import { updateProfile } from "firebase/auth";
import { collection, doc, getDoc, getDocs, onSnapshot, orderBy, query, updateDoc, where } from "firebase/firestore";
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from "firebase/storage";
import { v4 as uuid } from "uuid";
import { MyContext } from "../../context/MyContext";
import { fireDB, storage } from "../../firebase/firebaseConfig";

function ProfilePage({ user }) {
    const { currentUser, currentUserForProtectedRoutes, searchUserProfile, currentUserProfile } = useContext(MyContext)

    const [file, setFile] = useState(
        {
            photoFile: ""
        }
    )
    const [userPosts, setUserPosts] = useState([]);
    const [unsubscribe, setUnsubscribe] = useState(null);

    const getPosts = async () => {
        try {
            const postsRef = collection(fireDB, "users");
            const userQuery = query(postsRef, where("uId", "==", currentUserForProtectedRoutes.uid));

            const unsubscribeSnapshot = onSnapshot(userQuery, (snapshot) => {
                const posts = [];
                snapshot.forEach((doc) => {
                    const userData = doc.data();
                    if (userData.posts) {
                        userData.posts.forEach((post) => {
                            posts.push(post);
                        });
                    }
                });
                setUserPosts(posts.reverse());
            });

            setUnsubscribe(() => unsubscribeSnapshot); // Save the unsubscribe function
        } catch (error) {
            console.log("Error fetching user posts:", error);
        }
    };

    const uploadImg = async () => {
        if (!file.photoFile) return;

        try {
            const storageRef = ref(storage, currentUserForProtectedRoutes.uid);
            const uploadTask = uploadBytesResumable(storageRef, file.photoFile);

            uploadTask.on(
                "state_changed",
                null,
                (error) => {
                    console.log("Error uploading image:", error);
                },
                async () => {
                    const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
                    await updateProfile(currentUserForProtectedRoutes, {
                        photoURL: downloadURL,
                    });
                    await updateDoc(doc(fireDB, "users", currentUserForProtectedRoutes.uid), {
                        profilePicUrl: downloadURL,
                    })
                    window.location.reload();
                }
            );
        } catch (error) {
            console.log("Error uploading image:", error);
        }
    };

    useEffect(() => {
        getPosts();

        return () => {
            if (unsubscribe) {
                unsubscribe(); // Unsubscribe from the Firestore listener when the component unmounts
            }
        };

    }, [currentUserForProtectedRoutes.uid]); // Fetch posts when user ID changes


    return (

        <PageLayout>
            <div className="  w-full h-screen  overflow-y-scroll   scrollbar-thin ">

                <div className=" w-full md:w-[80%] mx-auto h-full">

                    <div className=" flex items-center flex-col sm:flex-row xl:justify-center md:px-16 pt-5   gap-5">
                        <div className="  rounded-full overflow-hidden ">
                            <input type="file" name="" id="file" onChange={(e) => { setFile({ ...file, photoFile: e.target.files[0] }) }} hidden />
                            <label htmlFor="file">
                                <img className=" w-[90px]  md:w-[130px] h-[90px] md:h-[130px]" src={currentUser.profilePicUrl ? currentUser.profilePicUrl : 'https://www.pngitem.com/pimgs/m/150-1503945_transparent-user-png-default-user-image-png-png.png'} alt="" />
                            </label>
                        </div>

                        <div className="  w-auto max-w-[400px] overflow-hidden  h-auto max-h-[300px]  md:p-7 p-3">
                            <div className=" flex justify-between"> <h1 className=" font-bold">{
                                currentUser?.displayName
                            }</h1>

                                <Button className=" bg-black py-1 px-4" onClick={uploadImg}>Edit</Button></div>

                            <div className="  py-3 gap-3 flex">
                                <p><span className=" font-bold">{userPosts?.length}</span> Posts</p>
                                <p><span className=" font-bold">{currentUser.followers?.length}</span> Followers</p>
                                <p><span className=" font-bold">{currentUser.following?.length}</span> Following</p>

                            </div>
                            <div className=" font-medium ">{currentUser.name}</div>
                            <div className="overflow-hidden">Bio </div>
                        </div>
                    </div>

                    <div className=" w-full h-auto  px-5  ">
                        <div className="  border-t py-5 w-full">
                            <h2 className=" text-center py-2 font-semibold">POSTS</h2>

                            <div className=" flex flex-wrap">

                                {userPosts ? userPosts.map((post, index) => {
                                    return (
                                        <div key={index} className=" border h-[350px] md:h-auto  w-full sm:w-[90%] md:w-auto overflow-hidden  m-1">
                                            <img src={post?.postImage} className=" w-full  h-[300px]   md:w-[300px] md:h-[300px]" alt="" />

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

export default ProfilePage