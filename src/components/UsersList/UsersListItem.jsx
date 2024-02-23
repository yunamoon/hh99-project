import React from 'react'
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import useFollower from "@/hooks/useFollower";
import { setUser } from '@/store/user.sliec.jsx';

const UserListItem = ({ user }) => {
    const authUser = useSelector(state => state.user);
    const { isFollowing, isUpdating, handleFollowUser } = useFollower(user.uid);
    
    return (
        <div className="flex justify-between items-center w-full bg-white rounded-lg p-4 shadow-md m-10">
        <div className="flex items-center space-x-2 ">
            <Link to={`/${user.email}`}>
                {user.profilePicURL ? (
                    <img src={user.profilePicURL} alt='p' className="w-10 h-10 rounded-full" />
                ) : (
                    <img src='https://firebasestorage.googleapis.com/v0/b/hh99-ac7ee.appspot.com/o/default%2Fuser-solid.svg?alt=media&token=4a5732d4-1aea-4bf5-8b21-53fbf21acf68' alt="profile" className="w-10 h-10 rounded-full border border-gray-300 p-1" />
                )}
            </Link>
            <div className="flex flex-col">
                <Link to={`/${user.email}`}>
                    <p className="text-sm font-semibold">{user.username}</p>
                </Link>
                <p className="text-xs text-gray-500">{user.followers.length} followers</p>
            </div>
        </div>
        {authUser.uid !== user.uid && (
            <button
                className={`text-sm font-medium ${
                    isFollowing ? "text-blue-400" : "text-gray-500 hover:text-blue-400"
                }`}
                onClick={handleFollowUser}
                disabled={isUpdating}
            >
                {isFollowing ? "Unfollow" : "Follow"}
            </button>
        )}
    </div>
    );
};

export default UserListItem;
