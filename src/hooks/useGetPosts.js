import React  from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { db } from '@/firebase/firebase'; // Firebase 연결 설정
import { setPosts } from '@/store/post.slice';


const useGetPosts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = db.collection("posts").onSnapshot((snapshot) => {
      const posts = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      dispatch(setPosts(posts));
    });

    return () => {
      unsubscribe(); 
    };
  }, [dispatch]);

  return null; 
};

export default useGetPosts;