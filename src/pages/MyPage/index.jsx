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
import UserNotFound from '@/components/MyPage/UserNotFound';
import useGetUserProfileByEmail from '@/hooks/useGetUserProfileByEmail';

const MyPage = () => {
	const { email } = useParams();
	const isLoading = useAuthState(auth); 
	const { profile } = useGetUserProfileByEmail(email);

	useEffect(() => {
	}, [email]);

	const userNotFound = !isLoading && !profile;
	if (userNotFound) return <UserNotFound />;

	return (


		<div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
		<div className="container m-10 bg-white col-span-2 rounded-lg p-5 shadow-md">
		<div className="flex flex-col py-10 px-4 md:px-10">
			{isLoading && profile && <MyPageHeader email={email} />}
			{!isLoading && <MyPageHeaderSkeleton />}
		</div>
		<div className="flex px-2 sm:px-4 max-w-full mx-auto border-t border-white-300 flex-col">
			<MyPageTabs />
			<MyPageFeedPosts uid={profile.uid}/>
		</div>
	</div>
	</div>


		
	
	);
};


export default  MyPage;
