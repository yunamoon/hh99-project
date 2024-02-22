import React, { useRef } from 'react';
import { Fragment } from "react";
import { useState } from "react";
import { HiPhotograph } from "react-icons/hi"; 
import { useSelector } from 'react-redux';
import useUpdateProfile from '@/hooks/useUpdateProfile';
import usePreviewImg from '@/hooks/usePreviewImg';

const EditProfile = ({ isOpen }) => {
    const [inputs, setInputs] = useState({
        username: "",
        bio: "",
    });
	const [isClose , setIsClose] = useState(isOpen);
    const authUser = useSelector((state) => state.user); 
    const fileRef = useRef(null);
    const { handleImageChange, selectedFile, setSelectedFile } = usePreviewImg();
    const { isUpdating, editProfile } = useUpdateProfile();

    const handleEditProfile = async () => {
        try {
            await editProfile(inputs, selectedFile);
            setSelectedFile(null);
            onClose();
        } catch (error) {
            console.log("Error", error.message, "error");
        }
    };

    return (
        <Fragment>
            <div className={`fixed inset-0 z-50 overflow-y-auto ${isClose ? 'block' : 'hidden'}`}>
                <div className="flex items-center justify-center min-h-screen">
                    <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                        <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                    </div>

                    <div className="relative bg-white rounded-lg w-96 max-w-md mx-auto shadow-xl z-50 overflow-hidden">
                        <div className="p-6">
                            <div className="flex items-center justify-center">
                                <div className="relative mt-1">
                                    <img
                                        src={selectedFile || authUser.profilePicURL}
                                        alt=""
                                        className="w-24 h-24 mx-auto bg-gray-300 rounded-full"
                                    />
                                    <button
                                        type="button"
                                        className="absolute inset-0 flex items-center justify-center w-full h-full rounded-full bg-black bg-opacity-50 focus:outline-none"
                                        onClick={() => fileRef.current.click()}
                                    >
                                        <HiPhotograph className="w-8 h-8 text-white" />
                                    </button>
                                </div>
                                <input
                                    type="file"
                                    hidden
                                    ref={fileRef}
                                    onChange={handleImageChange}
                                />
                            </div>

                            <div className="mt-4 space-y-6">
                                <div className="flex flex-col space-y-1">
                                    <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                                        Username
                                    </label>
                                    <input
                                        type="text"
                                        name="username"
                                        id="username"
                                        className="block w-full px-3 py-2 text-gray-700 bg-gray-200 border border-transparent rounded-md focus:ring-blue-500 focus:border-blue-500"
                                        placeholder="Username"
                                        value={inputs.username || authUser.username}
                                        onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
                                    />
                                </div>

                                <div className="flex flex-col space-y-1">
                                    <label htmlFor="bio" className="block text-sm font-medium text-gray-700">
                                        Bio
                                    </label>
                                    <input
                                        type="text"
                                        name="bio"
                                        id="bio"
                                        className="block w-full px-3 py-2 text-gray-700 bg-gray-200 border border-transparent rounded-md focus:ring-blue-500 focus:border-blue-500"
                                        placeholder="Bio"
                                        value={inputs.bio || authUser.bio}
                                        onChange={(e) => setInputs({ ...inputs, bio: e.target.value })}
                                    />
                                </div>

                                <div className="flex items-center justify-between space-x-4">
                                    <button
                                        type="button"
                                        className="flex-1 px-4 py-2 text-sm font-medium text-black bg-red-400 border border-transparent rounded-md focus:ring-2 focus:ring-offset-2 focus:ring-red-500 hover:bg-red-500 focus:outline-none focus:ring-offset-gray-200"
                                        onClick={()=>{setIsClose(!isClose)}}
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type="button"
                                        className="flex-1 px-4 py-2 text-sm font-medium text-white bg-blue-400 border border-transparent rounded-md focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 hover:bg-blue-500 focus:outline-none focus:ring-offset-gray-200"
                                        onClick={handleEditProfile}
                                        disabled={isUpdating}
                                    >
                                        {isUpdating ? "Updating..." : "Submit"}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default EditProfile;
