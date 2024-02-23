import React, { useState } from "react";
import { FaTrashAlt, FaHeart, FaComment } from "react-icons/fa"; // 폰트 어썸 아이콘으로 대체
import { useSelector } from "react-redux";
import { MdClose } from "react-icons/md";

const MyPagePost = ({ post }) => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [isOpen, setIsOpen] = useState(false); // 모달 창이 열려 있는지 여부를 상태로 관리합니다.
	const [isDeleting, setIsDeleting] = useState(false); // 게시물 삭제 중인지 여부를 상태로 관리합니다.
	const authUser = useSelector((state)=> state.user);
	const userProfile = useSelector((state)=> state.Profile.profile);
	console.log(post)
	const handleDeletePost = async () => {
		if (!window.confirm("Are you sure you want to delete this post?")) return; // 사용자에게 삭제 확인을 요청하는 팝업이 뜹니다.
		if (isDeleting) return; // 이미 삭제 중인 경우 더 이상의 작업을 수행하지 않습니다.

		try {
			// 삭제 로직을 구현하세요. (아래에서 구현되어야 함)
		} catch (error) {
			console.error(error);
		} finally {
			setIsDeleting(false); // 삭제 작업이 완료되면 삭제 중인 상태를 false로 변경합니다.
		}
	};

	return (
		<>
			<div className="relative cursor-pointer border border-white-300 overflow-hidden rounded" onClick={() => setIsModalOpen(true)}>
				<img src={post.img} alt="profile post" className="w-full h-60" />
			</div>

			{/* 모달 */}
			{isModalOpen && (
				<div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-20">
					 {/* 왼쪽: 게시물 이미지 */}
					 <div className="w-1/3">
					<img src={post.img} alt="profile post" className="h-500 object-cover rounded-lg overflow-hidden" />
					</div>

					<div className="bg-black pb-5 w-1/3 h-500 rounded-lg overflow-hidden">
						<button className="absolute top-3 right-3 text-white" onClick={() => setIsModalOpen(false)}>
							<MdClose size={24} />
						</button>
						<div className="p-4">
							{/* 게시물 정보 표시 */}
							<div className="flex justify-between items-center border-b border-white-300">
								
								{/* 사용자 정보 */}
								<div className="flex items-center gap-4">
									{/* 프로필 이미지 */}
									<img src={userProfile.profilePicURL} alt="profile" className="w-10 h-10 rounded-full object-cover" />
									<span className="font-bold text-white">{userProfile.username}</span>
								</div>
								
								{/* 삭제 버튼 */}
								{authUser?.uid === userProfile.uid && (
									<button className="text-red-600 hover:bg-white-300 hover:text-white-300 rounded-full p-1" onClick={handleDeletePost}>
										<FaTrashAlt size={20} />
									</button>
								)}
							</div>

							{/* 게시물 내용 */}
							{/* <div className="p-4">
		
								{post.caption && <p>{post.caption}</p>}
					
								<div className="flex flex-col gap-2 mt-4">
									{post.comments.map((comment, index) => (
										<div key={index} className="flex gap-2">
					
											<span>{comment}</span>
										</div>
									))}
								</div>
							</div> */}

							{/* 게시물 하단 */}
							{/* <div className="flex justify-between items-center p-4 border-t border-white-300">
		
								<div className="flex items-center gap-2">
									<FaHeart size={20} />
									<span>{post.likes}</span>
								</div>
					
								<div className="flex items-center gap-2">
									<FaComment size={20} />
									<span>{post.comments.length}</span>
								</div>
							</div> */}
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default MyPagePost;
