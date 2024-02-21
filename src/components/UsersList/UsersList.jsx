import React from 'react'
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import useFollower from "@/hooks/useFollower";


const UserList = ({ user, setUser }) => {
    
    const { isFollowing, isUpdating, handleFollowUser } = useFollower(user.uid);
    const dispatch = useDispatch();
    const authUser = useSelector(state => state.user);

    const onFollowUser = async () => {
        await handleFollowUser();

        dispatch(
            setUser({
                ...user,
                followers: isFollowing
                    ? user.followers.filter((follower) => follower.uid !== authUser.uid)
                    : [...user.followers, authUser],
            })
          );
    };

    return (
        <div className="flex justify-between items-center w-full">
            <div className="flex items-center space-x-2">
                <Link to={`/${user.username}`}>
                    <img src={user.profilePicURL} alt='p' className="w-10 h-10 rounded-full" />
                </Link>
                <div className="flex flex-col">
                    <Link to={`/${user.username}`}>
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
                    onClick={onFollowUser}
                    disabled={isUpdating}
                >
                    {isFollowing ? "Unfollow" : "Follow"}
                </button>
            )}
        </div>
    );
};

export default UserList;
