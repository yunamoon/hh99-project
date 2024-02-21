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
      unsubscribe(); // cleanup 함수에서 구독을 취소합니다.
    };
  }, [dispatch]);

  return null; // 실제로는 상태를 반환하지 않으므로 null을 반환합니다.
};

export default useGetPosts;