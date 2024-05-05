import React, { useContext, useEffect, useState } from "react";
import { Button, Dialog, DialogBody } from "@material-tailwind/react";
import { formatDistanceToNow } from "date-fns";
import { Timestamp, arrayUnion, doc, updateDoc } from "firebase/firestore";
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from "firebase/storage";
import { v4 as uuid } from "uuid";
import { MyContext } from "../context/MyContext";
import { fireDB } from "../firebase/firebaseConfig";

const PostEditor = () => {
    const { currentUserForProtectedRoutes, currentUser } = useContext(MyContext);
    const [open, setOpen] = useState(false);
    const [postCaption, setPostCaption] = useState('');
    const [imageFile, setImageFile] = useState(null);
    const [imageUrl, setImageUrl] = useState('');

    const handleOpen = () => setOpen(!open);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setImageFile(file);
            setImageUrl(URL.createObjectURL(file));
        }
    };

    const uploadPost = async () => {
        try {
            const storage = getStorage();
            const storageRef = ref(storage, uuid());
            const uploadTask = uploadBytesResumable(storageRef, imageFile);

            uploadTask.on('state_changed',
                null,
                (error) => {
                    console.log(error);
                },
                () => {
                    getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
                        const newPost = {
                            postImage: downloadURL,
                            postCaption: postCaption,
                            createdAt: new Date().toLocaleString("en-US", { month: "short", day: '2-digit', year: 'numeric' }),
                            uId: currentUserForProtectedRoutes.uid,
                            Dp: currentUserForProtectedRoutes.photoURL,
                            userName: currentUser.displayName
                        };

                        await updateDoc(doc(fireDB, "users", currentUserForProtectedRoutes.uid), {
                            posts: arrayUnion(newPost)
                        });

                        // Reset state after successful upload
                        setPostCaption('');
                        setImageFile(null);
                        setImageUrl('');
                        setOpen(false);
                    });
                }
            );
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <Button onClick={handleOpen} className="text-black">
                <li className="text-[20px] font-medium"><i className="text-[25px] mr-2 fa-regular fa-square-plus"></i> <span className="hidden xl:inline-block">Add Post</span></li>
            </Button>

            <Dialog open={open} handler={handleOpen}>
                <DialogBody>
                    <div className="bg-white shadow p-4 py-8">
                        <div className="heading text-center font-bold text-2xl m-5 text-gray-800 bg-white">New Post</div>
                        <div className="editor mx-auto w-10/12 flex flex-col text-gray-800 border border-gray-300 p-4 shadow-lg max-w-2xl">
                            <input
                                className="title bg-gray-100 border border-gray-300 p-2 mb-4 outline-none"
                                spellCheck="false"
                                placeholder="Caption"
                                type="text"
                                value={postCaption}
                                onChange={(e) => setPostCaption(e.target.value)}
                            />

                            <div className="icons flex text-gray-500 m-2">
                                <label htmlFor="select-image">
                                    <svg className="mr-2 cursor-pointer hover:text-gray-700 border rounded-full p-1 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                                    </svg>
                                    <input hidden type="file" id="select-image" multiple onChange={handleFileChange} />
                                </label>
                                <div className="count ml-auto text-gray-400 text-xs font-semibold">0/300</div>
                            </div>
                            <div className="max-w-[300px] max-h-[300px] p-4">
                                {imageUrl && <img src={imageUrl} alt="" />}
                            </div>

                            <div className="buttons flex justify-end">
                                <div className="btn border border-indigo-500 p-1 px-4 font-semibold cursor-pointer text-gray-200 ml-2 bg-indigo-500" onClick={uploadPost}>Post</div>
                            </div>
                        </div>
                    </div>
                </DialogBody>
            </Dialog>
        </>
    );
};

export default PostEditor;
