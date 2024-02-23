import React from 'react';
import useGetUserPosts from "@/hooks/useGetUserPosts";
import MyPagePost from "./MyPagePost";
import NoPostsFound from "./NoPostsFound";
import { useSelector } from 'react-redux';

const MyPageFeedPosts = ({uid}) => {
	const { isLoading } = useGetUserPosts(uid);
	const { posts } = useSelector((state) => state.posts);
	
	const noPostsFound = !isLoading && posts.length === 0;
	if (noPostsFound) return <NoPostsFound />;

	return (
		<div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-2">
			{isLoading ? (
				[...Array(3)].map((_, idx) => (
					<div key={idx} className="flex flex-col items-start space-y-4">
						<div className="w-full">
							<div className="bg-gray-300 w-full h-80"></div>
						</div>
					</div>
				))
			) : (
				<>
					{posts && posts.map((post) => (
						<MyPagePost post={post} key={post.id} />
					))}
				</>
			)}
		</div>
	);
};

export default MyPageFeedPosts;

