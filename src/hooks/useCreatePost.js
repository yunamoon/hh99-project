import React, { useState } from 'react';
import {auth, db, storage} from '@/firebase/firebase';


const useCreatePost = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const createPost = async (content, image) => {
    setLoading(true);
    setError(null);

    try {
        const userId = auth.currentUser.uid;
        const storageRef = storage.ref(`images/${userId}/${image.name}`);
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
