import { useState } from "react";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import { db } from "@/firebase/firebase";
import {  useSelector } from 'react-redux'; // 수정된 부분

const usePostComment= () => {
    const [isCommenting, setIsCommenting] = useState(false);
    const authUser = useSelector((state) => state.user); // 수정된 부분

    const handlePostComment = async (postId, comment) => {
        if (isCommenting) return;
        if (!authUser) return;
        setIsCommenting(true);
     
        const newCommentRef = doc(db.collection("posts").doc(postId).collection("comments")).doc(); // post 내의 comments 컬렉션에 대한 참조
        const newCommentId = newCommentRef.id;

        const newComment = {
            commentId: newCommentId,
            comment,
            createdAt: Date.now(),
            createdBy: authUser.uid,
            postId,
        };
     
        try {
            await updateDoc(doc(db, "posts", postId), {
                comments: arrayUnion(newComment),
            });

        } catch (error) {
            console.log(error)

        } finally {
            setIsCommenting(false);
        }
    };

    return { isCommenting, handlePostComment };
};

export default usePostComment;
