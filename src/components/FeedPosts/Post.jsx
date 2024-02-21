import React from 'react';
import useGetUserProfileById from "@/hooks/useGetUserProfileById";
import PostProfile from '@/components/FeedPosts/PostProfile.jsx';
import PostContents from '@/components/FeedPosts/PostContents';

const Post = ({ post }) => {

	const { userProfile } = useGetUserProfileById(post.createdBy);

	return (

		
			<div className="my-2 p-4 border-2 border-gray-200 rounded-md">
			<PostProfile post={post} creatorProfile={userProfile} />
				<img src={post.img} alt={"FEED POST IMG"} className="w-full" />
				<PostContents post={post} creatorProfile={userProfile} />
			</div>
			

	);
};

export default Post;
