import { useEffect, useState } from "react";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { db } from "@/firebase/firebase";
import { setPosts } from '@/store/post.slice';
import { useDispatch } from "react-redux";

const useGetUserPosts = (uid) => {
    const [isLoading, setIsLoading] = useState(true);
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchUserPosts = async () => {
            if (!uid) {
                setIsLoading(false);
                return;
            }

            try {
                const q = query(collection(db, "posts"), where("createdBy", "==", uid));
                const unsubscribe = onSnapshot(q, (snapshot) => {
                    const posts = [];
                    snapshot.forEach((doc) => {
                        posts.push({ ...doc.data(), id: doc.id });
                    });
                    posts.sort((a, b) => b.createdAt - a.createdAt);
                    dispatch(setPosts(posts));
                    setIsLoading(false);
                });

                return () => {
                    unsubscribe();
                };
            } catch (error) {
                console.error("Error fetching user posts:", error);
                setIsLoading(false);
            }
        };

        fetchUserPosts();
    }, [uid, dispatch]);

    return { isLoading };
};

export default useGetUserPosts;
