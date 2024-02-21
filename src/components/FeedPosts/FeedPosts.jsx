import React from 'react';
import { useEffect } from 'react'; // React에서 useEffect 훅을 가져옵니다.
import { useDispatch, useSelector } from 'react-redux'; // React Redux에서 useDispatch 및 useSelector 훅을 가져옵니다.
import { subscribeToPosts } from '@/store/post.slice.jsx'; // post.slice.jsx 파일에서 fetchPosts 비동기 thunk를 가져옵니다.
import Post from '@/components/FeedPosts/Post.jsx';

const FeedPosts = () => {
  const dispatch = useDispatch(); // 액션을 디스패치하기 위해 useDispatch 훅을 초기화합니다.
  const { posts } = useSelector((state) => state.posts); // Redux 스토어에서 게시글, 상태 및 오류를 추출합니다.

  useEffect(() => {
    // useEffect 훅을 사용하여 컴포넌트가 마운트되거나 업데이트될 때 게시글을 가져옵니다.
    dispatch(subscribeToPosts()); // 서버에서 게시글을 가져오기 위해 fetchPosts 액션을 디스패치합니다.
  }, [dispatch]); // dispatch를 의존성으로 가지는 의존성 배열로, dispatch가 변경될 때만 useEffect가 실행되도록 합니다.

  return (
    <div>
        <ul>
        {!posts.length == 0? 
          <>{posts.map((post) => (
            <Post key={post.id} post={post} />
          ))}</>
          :<h1 className="py-10 text-center text-xl font-bold text-gray-600 mt-8">
          등록된 post가 없습니다.
          <span role="img" aria-label="angry" className="text-red-500 text-2xl ml-2">😡</span>
        </h1>} 
        </ul>

    </div>
  );
};

export default FeedPosts;
