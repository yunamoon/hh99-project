import { useEffect, useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "@/firebase/firebase";
import { setPosts } from '@/store/post.slice';
import { useSelector } from 'react-redux'; 

const useGetUserPosts = () => {
	const [isLoading, setIsLoading] = useState(true);
	const { userProfile }  = useSelector((state) => state.Profile);
	const { posts } = useSelector((state) => state.posts);

	useEffect(() => {
		const getPosts = async () => {

			if (!userProfile) {
				setIsLoading(false); // userProfile이 없는 경우 로딩 상태를 변경합니다.
				return;
			}
			setIsLoading(true);
			setPosts([]);

			try {
				const q = query(collection(db, "posts"), where("createdBy", "==", userProfile.uid));
				const querySnapshot = await getDocs(q);

				const posts = [];
				querySnapshot.forEach((doc) => {
					posts.push({ ...doc.data(), id: doc.id });
				});

				posts.sort((a, b) => b.createdAt - a.createdAt);
				setPosts(posts);
			} catch (error) {
				setPosts([]);
			} finally {
				setIsLoading(false);
			}
		};

		getPosts();
	}, [setPosts, userProfile]);

	return { isLoading, posts };
};

export default useGetUserPosts;
