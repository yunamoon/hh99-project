import React, { useEffect, useRef } from "react";
import Comment from "@/components/Comments/Comment.jsx";
import usePostComment from "@/hooks/usePostComment";

const CommentsModal = ({ isOpen, onClose, post }) => {
   
    const { handlePostComment, isCommenting } = usePostComment();
    const commentRef = useRef(null);
    const commentsContainerRef = useRef(null);

    const handleSubmitComment = async (e) => {
        e.preventDefault();
        await handlePostComment(post.id, commentRef.current.value);
        commentRef.current.value = "";
    };

    useEffect(() => {
        if (isOpen) {
            setTimeout(() => {
                commentsContainerRef.current?.scrollTo(0, commentsContainerRef.current.scrollHeight);
            }, 100);
        }
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className={`fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full ${!isOpen && 'hidden'}`} onClick={onClose}>
            <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white" onClick={e => e.stopPropagation()}>
                <div className="mt-3 text-center">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">Comments</h3>
                    <div className="mt-2">
                        <div className="flex flex-col max-h-60 overflow-y-auto" ref={commentsContainerRef}>

                        {post.comments && post.comments.map((comment, idx) => (
                                <Comment key={idx} comment={comment} />
                            ))}
                    
                        </div>
                        <form onSubmit={handleSubmitComment} className="mt-4">
                            <input 
                                type="text" 
                                placeholder="Comment" 
                                className="border-b border-gray-300 focus:outline-none w-full px-1 py-2"
                                ref={commentRef}
                            />
                            <div className="mt-4 flex justify-end">
                                <button
                                    type="submit"
                                    className={`inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white ${isCommenting ? "bg-gray-500" : "bg-blue-500 hover:bg-blue-700"} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
                                    disabled={isCommenting}
                                >
                                    Post
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CommentsModal;
