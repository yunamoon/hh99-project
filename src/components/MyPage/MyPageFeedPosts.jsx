import React from 'react';
import useGetUserPosts from "@/hooks/useGetUserPosts";
import MyPagePost from "./MyPagePost";
import NoPostsFound from "./NoPostsFound";

const MyPageFeedPosts = () => {
	const { isLoading, posts } = useGetUserPosts();
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
					{posts.map((post) => (
						<MyPagePost post={post} key={post.id} />
					))}
				</>
			)}
		</div>
	);
};

export default MyPageFeedPosts;

