import React, { useState } from "react";
import useGetUserProfileById from "@/hooks/useGetUserProfileById";
import CommentSkeleton from "@/components/Comments/CommentSkeleton.jsx";
import useDeleteComment from "@/hooks/useDeleteComment";
import { Link } from "react-router-dom";
import { timeAgo } from "@/utils/timeAgo";
import { FaTrashAlt, FaEdit } from 'react-icons/fa'; // 수정 버튼 추가
import { useSelector } from "react-redux";
import useUpdateComment from '@/hooks/useUpdateComment';

const Comment = ({ comment }) => {
    const { profile, isLoading } = useGetUserProfileById(comment.createdBy);
    const { isDeleting, handleDeleteComment } = useDeleteComment();
    const authUser = useSelector((state) => state.user);
    const [isEditing, setIsEditing] = useState(false); // 수정된 부분
    const [editedComment, setEditedComment] = useState(comment.comment); // 수정된 부분
    const { updateComment } = useUpdateComment(); 

    const onDeleteComment = () => {
        handleDeleteComment(comment.postId, comment.commentId);
    };

    const onEditComment = () => {
        setIsEditing(true); // 수정된 부분
    };

    const onSaveEditComment = () => {
        // 수정된 내용을 처리하는 함수 추가
        console.log("Save edited comment:", editedComment);
        updateComment(comment.postId, comment.commentId, editedComment);
        setIsEditing(false); // 수정된 부분
    };

    

    if (isLoading) return <CommentSkeleton />;
    return (
        <div className="flex gap-4 w-full justify-between items-start">
            <div className="flex-grow"> 
                <div className="flex items-start">
                    <Link to={`/${profile.email}`}>
                        {profile.profilePicURL? 
                        <img src={profile.profilePicURL} alt="profile" className="w-8 h-8 rounded-full border border-gray-300 p-1" /> :
                        <img src='./user-solid.svg' alt="profile" className="w-8 h-8 rounded-full border border-gray-300 p-1" />
                        }
                    </Link>
                    <div className="flex flex-col justify-items-start ml-3 w-full">
    <div className="flex gap-2 items-center">
        <Link to={`/${profile.email}`}>
            <p className="font-bold text-sm">
                {profile.username}
            </p>
        </Link>
        {!isEditing ? (
            <p className="text-base">{comment.comment}</p>
        ) : (
            <input 
                type="text" 
                placeholder="Comment" 
                className="border-b border-gray-300 focus:outline-none px-1 py-2 w-4/5" // 수정된 부분
                value={editedComment}
                onChange={(e) => setEditedComment(e.target.value)}
            />
        )}
    </div>
    <p className="text-sm text-gray-500 text-left">
        {timeAgo(comment.createdAt)}
    </p>
</div>
                </div>
            </div>
            {authUser && authUser.uid === comment.createdBy && (
                <div className="flex items-center">
                    {isEditing ? ( // 수정된 부분
                        <button
                            onClick={onSaveEditComment}
                            className="text-blue-600 hover:bg-white-300 hover:text-white-300 rounded-full p-1 mr-2"
                        >
                            Save
                        </button>
                    ) : (
                        <button
                            onClick={onEditComment} 
                            className="text-blue-600 hover:bg-white-300 hover:text-white-300 rounded-full p-1 mr-2"
                        >
                            <FaEdit size={16} />
                        </button>
                    )}
                    <button
                        onClick={onDeleteComment} 
                        disabled={isDeleting}
                        className="text-red-600 hover:bg-white-300 hover:text-white-300 rounded-full p-1"
                    >
                        <FaTrashAlt size={16} />
                    </button>
                </div>
            )}
        </div>
    );
};

export default Comment;
