import { useState } from 'react';
import { useSelector } from 'react-redux';
import { updateDoc, doc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage';
import { db, storage } from '@/firebase/firebase';
import { generateRandomString } from '@/utils/imgName';

const useUpdatePost = () => {
    const authUser = useSelector((state) => state.user);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleUpdatePost = async (postId, content, image) => {
        setLoading(true);
        setError(null);
        try {
            let imgUrl = null;

            // 이미지 파일이 변경되었을 경우
            if (image) {
                // 이전 이미지 삭제
                const oldPostRef = doc(db, 'posts', postId);
                const oldPostDoc = await oldPostRef.get();
                const oldImgUrl = oldPostDoc.data().img;
                const oldImgRef = ref(storage, oldImgUrl);
                await deleteObject(oldImgRef);

                // Storage에 새 이미지 업로드
                const imageName = generateRandomString(10);
                const storageRef = ref(storage, `images/${authUser.uid}/${imageName}`);
                await uploadBytes(storageRef, image);

                // 업로드한 이미지의 다운로드 URL 가져오기
                imgUrl = await getDownloadURL(storageRef);
            }

            // Firestore에서 게시물 업데이트
            await updateDoc(doc(db, 'posts', postId), {
                content: content,
                img: imgUrl,
            });

            setLoading(false);
        } catch (error) {
            console.error('Error updating post:', error);
            setLoading(false);
            setError(error);
        }
    };

    return { handleUpdatePost, loading, error };
};

export default useUpdatePost;
