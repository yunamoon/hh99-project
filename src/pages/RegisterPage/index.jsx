
import React, { useState } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore'; 
import 'firebase/compat/storage'; 
import styles from '@/pages/RegisterPage/Register.module.css';

const db = firebase.firestore();
const storage = firebase.storage();

function PostForm() {
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const userId = firebase.auth().currentUser.uid; // 현재 사용자의 UID
      // 이미지를 Storage에 업로드
      const storageRef = storage.ref(`images/${userId}/${image.name}`);
      await storageRef.put(image);
      // Storage에 업로드된 이미지의 URL 가져오기
      const imageUrl = await storageRef.getDownloadURL();

      // 게시글 데이터 생성
      const postData = {
        userId: userId,
        img: imageUrl,
        content: content,
        commentCount: 0,
        likeCount: 0,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        updatedAt: firebase.firestore.FieldValue.serverTimestamp()
      };

      // 게시글 데이터 Firestore에 저장
      await db.collection('posts').add(postData);
      
      // 폼 초기화
      setContent('');
      setImage(null);
      setPreviewImage(null);

      alert('게시글이 성공적으로 등록되었습니다.');
    } catch (error) {
      console.error('게시글 등록 오류:', error);
      alert('게시글을 등록하는 중 오류가 발생했습니다.');
    }
  };

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    setImage(selectedImage);

    // FileReader를 사용하여 이미지 파일을 읽고 미리보기를 생성
    const reader = new FileReader();
    reader.onload = () => {
      setPreviewImage(reader.result); // 미리보기 이미지 설정
    };
    reader.readAsDataURL(selectedImage); // 이미지 파일을 Data URL로 읽음
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>게시글 작성</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        {previewImage && (
          <img src={previewImage} alt="이미지 미리보기" className={styles.previewImage} />
        )}
        <textarea
          className={styles.textarea}
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="게시글 내용을 입력하세요"
          required
        ></textarea>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          required
        />
        <button type="submit" className={styles.submitButton}>
          게시
        </button>
      </form>
    </div>
  );
}

export default PostForm;
