import { useState } from "react";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import { db } from "@/firebase/firebase";
import { addComment } from '@/store/post.slice'; // 수정된 부분
import { useSelector } from 'react-redux'; // 수정된 부분

const useCreateComment = () => {
    const [isCommenting, setIsCommenting] = useState(false);
    const authUser = useSelector((state) => state.user); // 수정된 부분

    const handlePostComment = async (postId, comment) => {
        if (isCommenting) return;
        if (!authUser) return;
        setIsCommenting(true);
     
        const newComment = {
            comment,
            createdAt: Date.now(),
            createdBy: authUser.uid,
            postId,
        };
     
        try {
            await updateDoc(doc(db, "posts", postId), {
                comments: arrayUnion(newComment),
            });
            addComment({ postId, comment: newComment }); // 수정된 부분
        } catch (error) {
            console.log(error)

        } finally {
            setIsCommenting(false);
        }
    };

    return { isCommenting, handlePostComment };
};

export default useCreateComment;
