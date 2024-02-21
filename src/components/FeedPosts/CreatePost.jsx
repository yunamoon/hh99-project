import React, { useState } from 'react';
import {auth, db, storage} from '@/firebase/firebase';
import { BsFillImageFill } from 'react-icons/bs';
import useCreatePost from '../../hooks/useCreatePost';
import { useNavigate } from 'react-router-dom'
function CreatePost() {
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const [modal , setModal] = useState(false);
  const navigate = useNavigate();
  const { createPost , loading, error } = useCreatePost();
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await createPost(content, image);

    if (result.success) {
        setContent('');
        setImage(null);
        setPreviewImage(null);
        alert('게시글이 성공적으로 등록되었습니다.');
        navigate('/');
      } else {
        alert('게시글을 등록하는 중 오류가 발생했습니다.');
      }
  };

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    setImage(selectedImage);

    const reader = new FileReader();
    reader.onload = () => {
      setPreviewImage(reader.result);
    };
    reader.readAsDataURL(selectedImage);
  };


  return (
    <div className="text-black w-full bg-white rounded-lg p-10 shadow-md m-10">
    <h2 className="text-xl font-bold mb-4 text-sm">Create Post</h2>
    <form onSubmit={handleSubmit} className="space-y-4">
      {previewImage && (
        <img src={previewImage} alt="이미지 미리보기" className="max-w-full mb-4" />
      )}
      <textarea
        className="border border-black rounded-lg p-2 w-full bg-transparent"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="게시글 내용을 입력하세요"
        required
      ></textarea>
      <label className="flex items-center justify-center text-black rounded-md cursor-pointer hover:bg-gray-600 w-10 py-2">
        <BsFillImageFill/>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="hidden"
          required
        />
      </label>
      <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 w-full block">
          Post
        </button>
    </form>
  </div>
  );
}

export default CreatePost;
