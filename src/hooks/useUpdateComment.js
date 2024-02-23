import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { db } from '@/firebase/firebase';

const useUpdateComment = () => {
  const updateComment = async (postId, commentId, editedComment) => {
    try {
      // 해당 게시물의 댓글을 수정하기 위해 해당 게시물에 접근합니다.
      const postRef = doc(db, 'posts', postId);
      const postSnapshot = await getDoc(postRef);
      const postData = postSnapshot.data();

      // 해당 댓글을 찾아 수정합니다.
      const updatedComments = postData.comments.map(comment => {
        if (comment.commentId === commentId) {
          return { ...comment, comment: editedComment };
        }
        return comment;
      });

      await updateDoc(postRef, { comments: updatedComments });

    } catch (error) {
      console.error('Error updating comment:', error);
    }
  };

  return { updateComment };
};

export default useUpdateComment;
