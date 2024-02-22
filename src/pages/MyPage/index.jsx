import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import MyPageHeader from "../../components/MyPage/MyPageHeader";
import MyPageFeedPosts from "../../components/MyPage/MyPageFeedPosts";
import MyPageHeaderSkeleton from "../../components/MyPage/MyPageHeaderSkeleton";
import MyPageTabs from "../../components/MyPage/MyPageTabs";
import { useSelector } from "react-redux";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from '@/firebase/firebase';

const MyPage = () => {
	const { username } = useParams();
	const isLoading = useAuthState(auth); // Assuming isLoading is set properly in your hook
	const userProfile = useSelector((state)=> state.Profile);  // Assuming userProfile is set properly in your hook

	useEffect(() => {
		// You can fetch user profile data here using username
	}, [username]);

	const userNotFound = !isLoading && !userProfile;

	return (
		<div className="container mx-auto py-5">
			<div className="flex flex-col py-10 px-4 md:px-10">
				{isLoading && userProfile && <MyPageHeader />}
				{!isLoading && <MyPageHeaderSkeleton />}
			</div>
			<div className="flex px-2 sm:px-4 max-w-full mx-auto border-t border-white-300 flex-col">
				<MyPageTabs />??
				<MyPageFeedPosts />
			</div>
		</div>
	);
};


export default  MyPage;
