import React  from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchPosts } from '../store/postSlice';

const useFetchPosts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const loadPosts = async () => {
      try {
        dispatch(fetchPosts()); // 게시글 목록을 가져오는 비동기 액션 호출
      } catch (error) {
        console.error('게시글 가져오기 실패:', error);
      }
    };

    loadPosts();

    return () => {
      // Cleanup 함수
    };
  }, [dispatch]);

  return null; // 실제로는 상태를 반환하지 않으므로 null 반환
};

export default useFetchPosts;
