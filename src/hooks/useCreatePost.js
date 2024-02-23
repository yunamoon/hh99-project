import React, { useState } from 'react';
import {auth, db, storage} from '@/firebase/firebase';
import { generateRandomString } from '@/utils/imgName';


const useCreatePost = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const createPost = async (content, image) => {
    setLoading(true);
    setError(null);

    try {
        const userId = auth.currentUser.uid;
        const imageName = generateRandomString(10); // 예시: 10자리 랜덤 문자열
        const storageRef = storage.ref(`images/${userId}/${imageName}`);
        await storageRef.put(image);
        const imageUrl = await storageRef.getDownloadURL();
  
        const postData = {
          createdBy: userId,
          img: imageUrl,
          content: content,
          commentCount: 0,
          likeCount: 0,
          createdAt: Date.now(),
          updatedAt: Date.now(),
        };

        await db.collection('posts').add(postData);
        setLoading(false);
        return { success: true };
        
    } catch (error) {
      console.error('게시글 등록 오류:', error);
      setLoading(false);
      setError(error);
      return { success: false, error };
    }
  };

  return { createPost , loading, error };
};

export default useCreatePost;
