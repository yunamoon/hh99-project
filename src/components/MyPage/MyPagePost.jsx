import React, { useState } from "react";
import { FaTrashAlt, FaHeart, FaComment, FaEdit } from "react-icons/fa"; // 폰트 어썸 아이콘으로 대체
import { useSelector } from "react-redux";
import { MdClose } from "react-icons/md";
import PostContents from '../FeedPosts/PostContents';
import { db ,storage } from '@/firebase/firebase';
import { deleteDoc, doc } from "firebase/firestore";
import { deleteObject, ref } from "firebase/storage";
import EditPostForm from "@/components/EditPostForm/EditPostForm.jsx";


const MyPagePost = ({ post }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isDeleting, setIsDeleting] = useState(false); 
    const [isEditing, setIsEditing] = useState(false);
    const authUser = useSelector((state) => state.user);
    const userProfile = useSelector((state) => state.Profile.profile);

	const handleDeletePost = async () => {
		if (!window.confirm("해당 포스트를 삭제하시겠습니까?")) return; 
		if (isDeleting) return; 
	
		try {
			// Firestore에서 게시물 삭제
			await deleteDoc(doc(db, "posts", post.id));
	
			// Storage에서 이미지 삭제
			await deleteObject(ref(storage, post.img));

		} catch (error) {
			console.error("Error deleting post:", error);
		} finally {
			setIsDeleting(false); 
		}
	};

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleEditButtonClick = () => {
        setIsEditing(true);
    };

    return (
        <>
            <div className="relative cursor-pointer border border-white-300 overflow-hidden rounded" onClick={() => setIsModalOpen(true)}>
                <img src={post.img} alt="profile post" className="w-full h-60" />
            </div>
            
            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-20" onClick={closeModal}>
                    <div className="max-w-3xl mx-auto bg-white rounded-lg overflow-hidden" onClick={(e) => e.stopPropagation()}>
                        <div className="flex">
                            <div className="w-1/2">
                                <img src={post.img} alt="profile post" className="object-cover h-full w-full" />
                            </div>
                            <div className="w-1/2 p-6">
                                <div className="flex justify-between items-center">
                                    <div className="flex items-center">
                                        {userProfile.profilePicURL? 
                                         <img src={userProfile.profilePicURL} alt="profile" className="w-10 h-10 rounded-full object-cover" />
                                        :
                                        <img src='src/assets/user-solid.svg' alt="profile" className="w-10 h-10 rounded-full object-cover" />}
                               
                                        <span className="font-bold text-black ml-2">{userProfile.username}</span>
                                    </div>
                                    <div className="flex items-center">
                                        {authUser?.uid === userProfile.uid && (
                                            <>
                                                <button className="text-red-600 hover:bg-white-300 hover:text-white-300 rounded-full p-1" onClick={handleDeletePost}>
                                                    <FaTrashAlt size={20} />
                                                </button>
                                                <button className="text-black hover:bg-white-300 hover:text-white-300 rounded-full ml-2" onClick={handleEditButtonClick}>
                                                    <FaEdit size={20} />
                                                </button>
                                            </>
                                        )}
                                        <button className="text-black hover:bg-white-300 hover:text-white-300 rounded-full ml-2" onClick={closeModal}>
                                            <MdClose size={24} />
                                        </button>
                                    </div>
                                </div>
     
                                <div className="border-t border-gray-300 my-4"></div>
                                <PostContents isProfilePage={false} post={post} />
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {isEditing && (
                <EditPostForm isOpen={isEditing} onClose={() => setIsEditing(false)} post={post} />
            )}
        </>
    );
};

export default MyPagePost;
