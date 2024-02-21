import React, { useRef, useState } from "react";
import { useSelector } from "react-redux"; // 수정된 부분
import { timeAgo } from "@/utils/timeAgo"; // timeAgo 유틸리티 가져오기
import CommentsModal from "@/components/Comments/CommentsModal.jsx"; // 댓글 모달 컴포넌트 가져오기
import useLike from "@/hooks/useLike"; // 좋아요 훅 가져오기
import useCreateComment from "@/hooks/useCreateComment";

const PostContents = ({ post, creatorProfile, isProfilePage }) => {
  const authUser = useSelector((state) => state.user); // 인증된 사용자 가져오기
  
  const { isCommenting, handlePostComment } = useCreateComment(); // 댓글 작성 훅 사용
  const [comment, setComment] = useState(""); // 댓글 상태 관리
  
  const { handleLikePost, isLiked, likes } = useLike(post); // 포스트 좋아요 관련 훅 사용
  const commentRef = useRef(null); // 댓글 입력 참조 설정
  const [isModalOpen, setIsModalOpen] = useState(false); // 댓글 모달 오픈 상태 관리

  // 댓글 제출 핸들러
  const handleSubmitComment = async () => {
    await handlePostComment(post.id, comment);
    setComment("");
  };

  return (
    <div className="mb-10 mt-auto">

      {/* 좋아요 및 댓글 버튼 */}
      <div className="flex items-center gap-4 pt-0 mb-2 mt-4">
        <div onClick={handleLikePost} className="cursor-pointer text-2xl">
  
        {isLiked ? (
                    <i className="fas fa-regular fa-heart text-black cursor-pointer"></i>
                ) : (
                    <i className="fas fa-heart text-red-500 cursor-pointer"></i>
                )}
        </div>

        <div className="cursor-pointer text-2xl"
          onClick={() => commentRef.current.focus()}>
          Comment
        </div>
      </div>
      {/* 좋아요 수 표시 */}
      <div className="font-semibold text-sm">{likes} likes</div>
      <p>{post.content}</p>
     
        <div className="text-sm text-gray-500">
        {timeAgo(post.createdAt)}
        </div>
      

      {/* 프로필 페이지가 아닌 경우 작성자와 캡션 표시 */}
      {!isProfilePage && (
        <>
          <div className="font-semibold text-sm">
            {creatorProfile?.username}{" "}
            <span className="font-normal">{post.caption}</span>
          </div>
          {/* 댓글 수가 있는 경우 모달 열기 버튼 표시 */}
          {post.comments > 0 && (
            <div
              className="text-sm text-gray-500 cursor-pointer"
              onClick={() => setIsModalOpen(true)}
            >
              View all {post.comments} comments
            </div>
          )}
          {/* 댓글 모달 */}
          {isModalOpen && (
            <CommentsModal
              isOpen={isModalOpen}
              onClose={() => setIsModalOpen(false)}
              post={post}
            />
          )}
        </>
      )}

      {/* 인증된 사용자인 경우 댓글 입력란 및 제출 버튼 표시 */}
      {authUser && (
        <div className="flex items-center justify-between">
          <input
            type="text"
            placeholder="Add a comment..."
            className="border-b border-gray-300 focus:outline-none w-full px-1 py-2"
            onChange={(e) => setComment(e.target.value)}
            value={comment}
            ref={commentRef}
          />
          <button
            className="text-blue-500 font-semibold cursor-pointer hover:text-white bg-transparent py-2 px-4"
            onClick={handleSubmitComment}
            disabled={isCommenting}
          >
            {isCommenting ? "Posting..." : "Post"}
          </button>
        </div>
      )}
    </div>
  );
};

export default PostContents;
