import React, { useRef } from 'react';
import { Fragment } from "react";
import { useState } from "react";
import { HiPhotograph } from "react-icons/hi"; 
import { useSelector } from 'react-redux';
import useUpdateProfile from '@/hooks/useUpdateProfile';
import usePreviewImg from '@/hooks/usePreviewImg';
import EditProfileItem from './EditProfileItem';
import EditProfileBtn from './EditProfileBtn';
import { HiOutlineCog } from "react-icons/hi";
import ChangePassword from '../UserAuth/ChangePassword';

const EditProfile = ({ isOpen ,onClose  }) => {
    const [inputs, setInputs] = useState({
        username: "",
        bio: "",
    });
	const [isClose , setIsClose] = useState(isOpen);
    const authUser = useSelector((state) => state.user); 
    const fileRef = useRef(null);
    const { handleImageChange, selectedFile, setSelectedFile } = usePreviewImg();
    const { isUpdating, editProfile } = useUpdateProfile();

	const [isPasswordOpen , setIsPasswordOpen]  = useState(false);

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
                    <div className="fixed inset-0 transition-opacity" aria-hidden="true" onClick={onClose}>
                        <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                    </div>

                    <div className="relative bg-white rounded-lg w-96 max-w-md mx-auto shadow-xl z-50 overflow-hidden">
                    <div className="absolute top-4 right-4">
                    <button className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 focus:outline-none"
                            onClick={()=>{setIsPasswordOpen(!isPasswordOpen)}}>
                            <HiOutlineCog className="w-6 h-6 text-gray-600 hover:text-red-500" /></button>
                    </div>
                    
                    {!isPasswordOpen? 
                     (<div className="p-6">
                        <div className="flex items-center justify-center">
                            <div className="relative mt-1">
                                 <img src={selectedFile || authUser.profilePicURL}
                                      alt=""
                                      className="w-24 h-24 mx-auto bg-gray-300 rounded-full"/>
                                 <button
                                      type="button"
                                      className="absolute inset-0 flex items-center justify-center w-full h-full rounded-full bg-black bg-opacity-50 focus:outline-none"
                                      onClick={() => fileRef.current.click()}>
                                      <HiPhotograph className="w-8 h-8 text-white" /> </button>
                                </div>
                                <input
                                    type="file"
                                    hidden
                                    ref={fileRef}
                                    onChange={handleImageChange}/>
                            </div>
                            <div className="mt-4 space-y-6">
                            <EditProfileItem text='Username' placeholder={authUser.username} value={inputs.username} onChange={(e) => setInputs({ ...inputs, username: e.target.value })}/>
                            <EditProfileItem text='bio' placeholder={authUser.bio} value={inputs.bio} onChange={(e) => setInputs({ ...inputs, bio: e.target.value })}/>
                            <EditProfileBtn  onClick={{ onClose, handleEditProfile }} isUpdating={isUpdating}/>
                            </div>
                        </div> ) 
                        : <ChangePassword onClose={() => setIsPasswordOpen(false)} /> }
   
                    </div>
                </div>
            </div>

        </Fragment>
    );
};

export default EditProfile;
