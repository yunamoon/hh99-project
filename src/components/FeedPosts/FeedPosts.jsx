import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Post from '@/components/FeedPosts/Post.jsx';
import useGetPosts from '@/hooks/useGetPosts';

const FeedPosts = () => {
  const { posts } = useSelector((state) => state.posts);
  useGetPosts();
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [pageSize] = useState(5); 
  const [sortedPosts, setSortedPosts] = useState([]);

  useEffect(() => {
    setSortedPosts([...posts].sort((a, b) => b.createdAt - a.createdAt));
  }, [posts]);

  const loadMorePosts = () => {
    setIsLoading(true);
    setPage(page + 1);
  };

  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
      if (scrollTop + clientHeight >= scrollHeight - 20 && !isLoading) {
        loadMorePosts();
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isLoading]);

  useEffect(() => {
    if (isLoading) {
      // 새로운 페이지의 데이터를 가져오는 비동기 작업을 수행합니다.
      // 비동기 작업이 완료된 후에 setIsLoading(false)를 호출하여 로딩 상태를 해제합니다.
      // 이후 가져온 데이터를 sortedPosts에 추가합니다.
    }
  }, [isLoading]);

  return (
    <div className="m-10">
      <ul>
        {sortedPosts.slice(0, page * pageSize).map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </ul>
      {isLoading && (
        <div className="flex justify-center items-center mt-4">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-nomal py-2 px-4 rounded">
            Loading...
          </button>
        </div>
      )}
    </div>
  );
};

export default FeedPosts;
