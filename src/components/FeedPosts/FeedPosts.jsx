import React from 'react';
import { useSelector } from 'react-redux'; // React Redux에서 useDispatch 및 useSelector 훅을 가져옵니다.
import Post from '@/components/FeedPosts/Post.jsx';
import useGetPosts from '@/hooks/useGetPosts';

const FeedPosts = () => {
  const { posts } = useSelector((state) => state.posts); // Redux 스토어에서 게시글, 상태 및 오류를 추출합니다.
  useGetPosts();

  return (
    <div className="m-10">
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
