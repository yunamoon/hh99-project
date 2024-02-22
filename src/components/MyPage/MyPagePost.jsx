import React, { useState } from "react";
import { FaTrashAlt, FaHeart, FaComment } from "react-icons/fa"; // 폰트 어썸 아이콘으로 대체

const MyPagePost = ({ post }) => {
	const [isOpen, setIsOpen] = useState(false);
	const [isDeleting, setIsDeleting] = useState(false);

	const handleDeletePost = async () => {
		if (!window.confirm("Are you sure you want to delete this post?")) return;
		if (isDeleting) return;

		try {
			// 삭제 로직을 구현하세요.
		} catch (error) {
			console.error(error);
		} finally {
			setIsDeleting(false);
		}
	};

	return (
		<>
			<div
				className="relative cursor-pointer border border-white-300 overflow-hidden rounded"
				onClick={() => setIsOpen(true)}
			>
				{isOpen && (
					<div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 z-10">
						<div className="text-white text-lg">Modal Content</div>
					</div>
				)}
				<img src={post.imageURL} alt="profile post" className="w-full h-auto" />
			</div>

			{/* Modal */}
			{isOpen && (
				<div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-20">
					<div className="bg-black pb-5 w-11/12 sm:w-3/4 md:w-3/5 lg:w-2/5 xl:w-1/3 rounded-lg overflow-hidden">
						<button className="absolute top-3 right-3 text-white" onClick={() => setIsOpen(false)}>
							&times;
						</button>
						<div className="flex justify-between items-center p-4 border-b border-white-300">
							{/* User Profile Image and Name */}
							<div className="flex items-center gap-4">
								{/* Avatar */}
								<img
									src={userProfile.profilePicURL}
									alt="profile"
									className="w-10 h-10 rounded-full object-cover"
								/>
								<span className="font-bold">{userProfile.username}</span>
							</div>

							{/* Delete Button */}
							{authUser?.uid === userProfile.uid && (
								<button
									className="text-red-600 hover:bg-white-300 hover:text-white-300 rounded-full p-1"
									onClick={handleDeletePost}
									disabled={isDeleting}
								>
									<FaTrashAlt size={20} />
								</button>
							)}
						</div>

						{/* Comments */}
						<div className="p-4">
							{/* Caption */}
							{post.caption && <Caption post={post} />}
							{/* Comments */}
							{post.comments.map((comment) => (
								<Comment key={comment.id} comment={comment} />
							))}
						</div>

						{/* Post Footer */}
						<PostFooter isProfilePage={true} post={post} />
					</div>
				</div>
			)}
		</>
	);
};

export default MyPagePost;
