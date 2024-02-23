import { useState, useEffect } from "react";
import { useSelector } from 'react-redux';
import { arrayRemove, arrayUnion, doc, updateDoc } from "firebase/firestore";
import { db } from "@/firebase/firebase";

const useLike = (post) => {
    const authUser = useSelector((state) => state.user);

    const initialLikes = post.likes || []; 
    const [isUpdating, setIsUpdating] = useState(false);
    const [likes, setLikes] = useState(initialLikes.length);
	const [isLiked, setIsLiked] = useState(initialLikes.includes(authUser?.uid));

    useEffect(() => {
    }, [likes, isLiked]);

    const handleLike = async () => {
        if (isUpdating) return;
        if (!authUser) return;
       
        setIsUpdating(true);

        try {
            const postRef = doc(db, "posts", post.id);
            console.log(authUser.uid)
            await updateDoc(postRef, {
                likes: isLiked ? arrayRemove(authUser.uid) : arrayUnion(authUser.uid),
            });

            setIsLiked(!isLiked);
			isLiked ? setLikes(likes - 1) : setLikes(likes + 1);

        } catch (error) {
            console.log(error);
        } finally {
            setIsUpdating(false);
        }
    };

    return { isLiked, likes, handleLike, isUpdating };
};

export default useLike;
