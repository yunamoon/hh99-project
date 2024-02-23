import React from 'react';
import { Link } from "react-router-dom";
import useFollower from "@/hooks/useFollower.js";
import { timeAgo } from "@/utils/timeAgo";
import { useSelector } from 'react-redux';

const PostProfile = ({ post, creatorProfile }) => {
	const authUser = useSelector(state => state.user);
	const { handleFollowUser, isFollowing, isUpdating } = useFollower(post.createdBy);

	return (
		<div className="flex justify-between items-center w-full mt-3 mb-4">
			<div className="flex items-center space-x-2">
				{creatorProfile ? (
					<Link to={`/${creatorProfile.email}`}>
						{creatorProfile.profilePicURL? 
						<img src={creatorProfile.profilePicURL} alt='user profile pic' className="w-10 h-10 rounded-full" />
						:<img src='https://firebasestorage.googleapis.com/v0/b/hh99-ac7ee.appspot.com/o/default%2Fuser-solid.svg?alt=media&token=4a5732d4-1aea-4bf5-8b21-53fbf21acf68' alt="profile" className="w-10 h-10 rounded-full border border-gray-300 p-1" />
						}
						
					</Link>
				) : (
					<div className="animate-pulse w-8 h-8 rounded-full bg-gray-200"></div>
				)}

				<div className="flex flex-col text-xs font-bold space-y-1">
					{creatorProfile ? (
						<Link to={`/${creatorProfile.email}`}>{creatorProfile.username}</Link>
					) : (
						<div className="animate-pulse w-20 h-4 bg-gray-200"></div>
					)}

					<span className="text-gray-500">• {timeAgo(post.createdAt)}</span>
				</div>
			</div>
			<div>
				<button
					className="bg-transparent text-blue-500 font-bold text-xs hover:text-white transition duration-200 ease-in-out"
					onClick={handleFollowUser}
					disabled={isUpdating}
				>
					
					{authUser.uid !== post.createdBy ?  
					(isFollowing ? "Unfollow" : "Follow") : <i className="fa fa-check"></i>}
				</button>
			</div>
		</div>
	);
};

export default PostProfile;
