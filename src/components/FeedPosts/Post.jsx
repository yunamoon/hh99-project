import React from 'react';
import useGetUserProfileById from "@/hooks/useGetUserProfileById";
import PostProfile from '@/components/FeedPosts/PostProfile.jsx';
import PostContents from '@/components/FeedPosts/PostContents';

const Post = ({ post }) => {

	const { userProfile } = useGetUserProfileById(post.createdBy);

	return (
		<>
			<PostProfile post={post} creatorProfile={userProfile} />
			<div className="my-2 p-4 border-2 border-gray-200 rounded-md">
				<img src={post.img} alt={"FEED POST IMG"} className="w-full" />
			</div>
			<PostContents post={post} creatorProfile={userProfile} />
		</>
	);
};

export default Post;
