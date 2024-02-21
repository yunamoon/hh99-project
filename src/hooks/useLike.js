import { useState } from "react";
import { useSelector } from 'react-redux'; // 수정된 부분
import { arrayRemove, arrayUnion, doc, updateDoc } from "firebase/firestore";
import { db } from "@/firebase/firebase";

const useLike = ( {post}) => {

    const [isUpdating, setIsUpdating] = useState(false);
    const authUser = useSelector((state) => state.user);
    const [likes, setLikes] = useState(post);
    const [isLiked, setIsLiked] = useState(post);

    const handleLikePost = async () => {
        if (isUpdating) return;
        if (!authUser) return;
        setIsUpdating(true);

        try {
            const postRef = doc(db, "posts", post.id);
            await updateDoc(postRef, {
                likes: isLiked ? arrayRemove(authUser.uid) : arrayUnion(authUser.uid),
            });

            // 함수형 업데이트를 사용하여 이전 상태를 기반으로 likes 상태를 업데이트
            setLikes(prevLikes => isLiked ? prevLikes - 1 : prevLikes + 1);
            setIsLiked(!isLiked);
        } catch (error) {
            // 에러 처리
        } finally {
            setIsUpdating(false);
        }
    };

    return { isLiked, likes, handleLikePost, isUpdating };
};

export default useLike;
