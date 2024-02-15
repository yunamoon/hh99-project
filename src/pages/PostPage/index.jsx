import React, { useState, useEffect } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore'; 
import styles from '@/pages/PostPage/Post.module.css';

const db = firebase.firestore();

function PostList() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [lastPost, setLastPost] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);
  const [commentText, setCommentText] = useState('');
  const [showCommentInput, setShowCommentInput] = useState({});
  const [editCommentText, setEditCommentText] = useState('');
  const [editCommentIndex, setEditCommentIndex] = useState(null);

  // useEffect를 사용하여 현재 사용자 정보 가져오기
  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setCurrentUser(user);
      } else {
        setCurrentUser(null);
      }
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      let query = db.collection('posts').orderBy('createdAt', 'desc').limit(5);

      if (lastPost) {
        query = query.startAfter(lastPost);
      }

      const snapshot = await query.get();
      const newPosts = snapshot.docs.map(async (doc) => {
        const postData = { id: doc.id, ...doc.data() };
        const userSnapshot = await db.collection('users').doc(postData.userId).get();
        const userData = userSnapshot.data();
        return { ...postData, userDisplayName: userData.displayName };
      });
      Promise.all(newPosts).then((postsWithDisplayName) => {
        setPosts([...posts, ...postsWithDisplayName]);
        setLastPost(snapshot.docs[snapshot.docs.length - 1] || null);
        setLoading(false);
      });
    };

    fetchPosts();
  }, []);

  const handleLoadMore = () => {
    if (!loading && lastPost) {
      fetchPosts();
    }
  };

  // 좋아요 버튼 클릭 처리
  const handleLikeButtonClick = async (postId) => {
    const postIndex = posts.findIndex((post) => post.id === postId);
    if (postIndex !== -1) {
      const post = posts[postIndex];
      const alreadyLiked = post.likes && post.likes.includes(currentUser.uid);

      let updatedLikes = [...(post.likes || [])];
      if (alreadyLiked) {
        updatedLikes = updatedLikes.filter((userId) => userId !== currentUser.uid);
      } else {
        updatedLikes.push(currentUser.uid);
      }

      await db.collection('posts').doc(postId).update({ likes: updatedLikes });

      // Update the local state with the new likes
      const updatedPosts = [...posts];
      updatedPosts[postIndex].likes = updatedLikes;
      setPosts(updatedPosts);
    }
  };

  // 댓글 입력 처리
  const handleCommentSubmit = async (postId) => {
    if (commentText.trim() !== '') {
      const postIndex = posts.findIndex((post) => post.id === postId);
      if (postIndex !== -1) {
        const updatedComments = [...(posts[postIndex].comments || []), { text: commentText, userId: currentUser.uid }];
        await db.collection('posts').doc(postId).update({ comments: updatedComments });
        const updatedPosts = [...posts];
        updatedPosts[postIndex].comments = updatedComments;
        setPosts(updatedPosts);
      }
      setCommentText('');
      setShowCommentInput({});
    }
  };

  // 댓글 수정 시작
  const handleEditComment = (commentText, commentIndex) => {
    setEditCommentText(commentText);
    setEditCommentIndex(commentIndex);
  };

  // 댓글 수정 취소
  const handleCancelEdit = () => {
    setEditCommentText('');
    setEditCommentIndex(null);
  };

  // 댓글 수정 완료
  const handleSaveEdit = async (postId, commentIndex) => {
    if (editCommentText.trim() !== '') {
      const postIndex = posts.findIndex((post) => post.id === postId);
      if (postIndex !== -1) {
        const updatedComments = [...posts[postIndex].comments];
        updatedComments[commentIndex].text = editCommentText;
        await db.collection('posts').doc(postId).update({ comments: updatedComments });
        const updatedPosts = [...posts];
        updatedPosts[postIndex].comments = updatedComments;
        setPosts(updatedPosts);
      }
      setEditCommentText('');
      setEditCommentIndex(null);
    }
  };

  // 댓글 삭제 처리
  const handleCommentDelete = async (postId, commentIndex) => {
    const postIndex = posts.findIndex((post) => post.id === postId);
    if (postIndex !== -1) {
      const commentUserId = posts[postIndex].comments[commentIndex].userId;
      if (commentUserId === currentUser.uid || posts[postIndex].userId === currentUser.uid) {
        const updatedComments = [...posts[postIndex].comments];
        updatedComments.splice(commentIndex, 1);
        await db.collection('posts').doc(postId).update({ comments: updatedComments });
        const updatedPosts = [...posts];
        updatedPosts[postIndex].comments = updatedComments;
        setPosts(updatedPosts);
      } else {
        // Show error message or handle unauthorized deletion
      }
    }
  };

  return (
    <div className={styles.container}>
      {posts.map((post) => (
        <div key={post.id} className={styles.card}>
          <img src={post.img} alt="게시글 이미지" className={styles.image} />
          <div className={styles.contentContainer}>
            <div className={styles.actions}>
              <button className={styles.likeButton} onClick={() => handleLikeButtonClick(post.id)}>
                {post.likes && post.likes.includes(currentUser.uid) ? '❤️' : '🤍'}
              </button>
              <button className={styles.commentButton} onClick={() => setShowCommentInput({ [post.id]: true })}>
                Comment
              </button>
            </div>
            <div className={styles.likesCount}>{post.likes ? post.likes.length : 0} Likes</div>
            <p className={styles.content}>{post.content}</p>
            <div className={styles.userInfo}>
              <span className={styles.displayName}>{post.userDisplayName}</span>
            </div>
            {showCommentInput[post.id] && (
              <div className={styles.commentInputContainer}>
                <input
                  type="text"
                  value={commentText}
                  onChange={(e) => setCommentText(e.target.value)}
                  placeholder="Enter your comment"
                  className={styles.commentInput}
                />
                <button
                  onClick={() => handleCommentSubmit(post.id)}
                  className={styles.commentSubmitButton}
                >
                  Submit
                </button>
              </div>
            )}
            {post.comments && (
              <div className={styles.commentsContainer}>
                {post.comments.map((comment, index) => (
                  <div key={index} className={styles.comment}>
                    {editCommentIndex === index ? (
                      <>
                        <input
                          type="text"
                          value={editCommentText}
                          onChange={(e) => setEditCommentText(e.target.value)}
                          className={styles.editCommentInput}
                        />
                        <button
                          onClick={() => handleSaveEdit(post.id, index)}
                          className={styles.saveEditButton}
                        >
                          Save
                        </button>
                        <button
                          onClick={handleCancelEdit}
                          className={styles.cancelEditButton}
                        >
                          Cancel
                        </button>
                      </>
                    ) : (
                      <>
                        <span className={styles.commentText}>{comment.text}</span>
                        {(comment.userId === currentUser.uid || post.userId === currentUser.uid) && (
                          <button
                            className={styles.commentEditButton}
                            onClick={() => handleEditComment(comment.text, index)}
                          >
                            Edit
                          </button>
                        )}
                        {(comment.userId === currentUser.uid || post.userId === currentUser.uid) && (
                          <button
                            className={styles.commentDeleteButton}
                            onClick={() => handleCommentDelete(post.id, index)}
                          >
                            Delete
                          </button>
                        )}
                      </>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      ))}
      {loading && <p>Loading...</p>}
      {!loading && lastPost && (
        <button onClick={handleLoadMore} className={styles.loadMoreButton}>
          Load more
        </button>
      )}
    </div>
  );
}

export default PostList;
