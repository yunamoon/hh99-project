import React from 'react';
import useGetUserProfileById from "@/hooks/useGetUserProfileById";
import PostProfile from '@/components/FeedPosts/PostProfile.jsx';
import PostContents from '@/components/FeedPosts/PostContents';

const Post = ({ post }) => {

	const { profile } = useGetUserProfileById(post.createdBy);

	return (

		
			<div className="my-10 p-7 w-full bg-white rounded-lg p-4  shadow-md">
			<PostProfile post={post} creatorProfile={profile} />
				<img src={post.img} alt={"FEED POST IMG"} className="w-full" />
				<PostContents post={post} creatorProfile={profile} />
			</div>
			

	);
};

export default Post;
