import React from "react";
import useGetUserProfileById from "@/hooks/useGetUserProfileById";
import { Link } from "react-router-dom";
import { timeAgo } from "@/utils/timeAgo";
import CommentSkeleton from "@/components/Comments/CommentSkeleton.jsx";

const Comment = ({ comment }) => {
    const { profile, isLoading } = useGetUserProfileById(comment.createdBy);

    if (isLoading) return <CommentSkeleton />;
    return (
        <div className="flex gap-4">
            <Link to={`/${profile.username}`}>
                {profile.profilePicURL? 
                <img src={profile.profilePicURL} alt="profile" className="w-8 h-8 rounded-full border border-gray-300 p-1" /> :
                <img src='./user-solid.svg' alt="profile" className="w-8 h-8 rounded-full border border-gray-300 p-1" />
                }

            </Link>
            <div className="flex flex-col justify-items-start">
                <div className="flex gap-2 items-center">
                    <Link to={`/${profile.username}`}>
                        <p className="font-bold text-sm">
                            {profile.username}
                        </p>
                    </Link>
                    <p className="text-base">{comment.comment}</p>
                </div>
                <p className="text-sm text-gray-500 text-left">
                    {timeAgo(comment.createdAt)}
                </p>
            </div>
        </div>
    );
};

export default Comment;


