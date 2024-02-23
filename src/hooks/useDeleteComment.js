import React, { useState } from "react";
import { db } from "@/firebase/firebase";

const useDeleteComment = () => {
    const [isDeleting, setIsDeleting] = useState(false);

    const handleDeleteComment = async (postId, commentId) => {
        if (isDeleting) return;

        setIsDeleting(true);

        try {
            const postRef = db.collection("posts").doc(postId);
            const postSnapshot = await postRef.get();

            if (postSnapshot.exists) {
                const postData = postSnapshot.data();
                const updatedComments = postData.comments.filter(c => c.commentId !== commentId);

                await postRef.update({
                    comments: updatedComments
                });

            } else {
                console.error("해당 포스트 없음");
            }
        } catch (error) {
            console.error("Error", error);
        } finally {
            setIsDeleting(false);
        }
    };

    return { isDeleting, handleDeleteComment };
};

export default useDeleteComment;
