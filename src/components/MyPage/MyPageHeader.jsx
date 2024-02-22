import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { auth } from "@/firebase/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import useGetUserProfileById from '@/hooks/useGetUserProfileById';
import EditProfile from "@/components/MyPage/EditProfile.jsx";

const MyPageHeader = () => {
	const authUser = useSelector((state) => state.user);
	const { profile } = useGetUserProfileById(authUser.uid);
	const [isOpen , setIsOpen]  = useState(false);


	useEffect(() => {

	}, []);

	const visitingOwnProfileAndAuth = authUser && authUser.username === profile.username;
	const visitingAnotherProfileAndAuth = authUser && authUser.username !== profile.username;

	const handleFollowUser = () => {
		// 팔로우 또는 언팔로우 로직을 구현하세요.
	};

	return (
		<div className="flex gap-4 py-10 flex-wrap">
			<div className="rounded-full overflow-hidden bg-gray-200">
			{profile.profilePicURL ? 
                <img src={profile.profilePicURL} alt='As a programmer logo' className="w-24 h-24 object-cover" />:
                <img src='./user-solid.svg' alt="profile" className="w-24 h-24 rounded-full border border-gray-300 p-1" />
                }		
			</div>

			<div className="flex flex-col flex-1 mx-auto items-start mt-4 md:mt-0 pl-4">
				<div className="flex gap-4 justify-center md:justify-start w-full items-center">
					<p className="text-sm md:text-lg font-medium">{profile.username}</p>
					{visitingOwnProfileAndAuth && (
						<div className="flex gap-4 items-center justify-center">
							<button
								className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-white-800"
								onClick={()=>{setIsOpen(!isOpen)}}
							>
								Edit Profile
							</button>
						</div>
					)}
					{visitingAnotherProfileAndAuth && (
						<div className="flex gap-4 items-center justify-center">
							<button
								className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
								onClick={handleFollowUser}
							>
								{true ? "Unfollow" : "Follow"}
							</button>
						</div>
					)}
				</div>

				<div className="flex items-center gap-4 mt-2">
					{profile.posts && (<p className="text-xs md:text-sm font-normal">{profile.posts.length} Posts</p>) }
					{profile.followers && (<p className="text-xs md:text-sm font-normal">{profile.followers.length} Followers</p>) }
					{profile.following && (<p className="text-xs md:text-sm font-normal">{profile.following.length} Following</p>) }
				</div>
				<p className="text-sm mt-2">{profile.bio}</p>
			</div>
			{isOpen && <EditProfile isOpen={isOpen} />}
		</div>
	);
};

export default MyPageHeader;
