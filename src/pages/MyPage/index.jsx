import React, { useEffect } from 'react';
import { useSelector , useDispatch} from 'react-redux';
import styles from '@/pages/MyPage/MyPage.module.css';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore'; 
import { setUserInfo } from '@/stores/userInfo/userInfo.sliec';

const MyPage = () => {
  const user = useSelector(state => state.user); 
  const userInfo = useSelector(state => state.userInfo); 
  const userId = user.id;
  const db = firebase.firestore();
  const dispatch = useDispatch();

  useEffect(() => {
    // 현재 로그인한 사용자의 UID 가져오
    // Firestore에서 해당 사용자의 정보 읽어오기
    const userRef = db.collection('users').doc(userId);
    console.log(userId)
    userRef.get().then((doc) => {
      if (doc.exists) {
        // 사용자 정보가 있는 경우
        const userData = doc.data();
        console.log('사용자 정보:', userData);
        dispatch(setUserInfo({
          id : userData.id,
          email : userData.email,
          displayName : userData.displayName,
          profileUrl : userData.profileUrl,
          bio : userData.bio,
        }))
      } else {
        console.log('해당 사용자의 정보가 없습니다.');
      }
    }).catch((error) => {
      console.error('사용자 정보를 읽어오는 중 오류 발생:', error);
    });
  }, []);


  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <h2>마이페이지</h2>
        <form className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="name">이름</label>
            <input type="text" id="name" name="name" placeholder={userInfo.displayName}/>
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">이메일</label>
            <input type="email" id="email" name="email"  placeholder={userInfo.email}/>
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="profileImage">프로필 이미지</label>
            <input type="file" id="profileImage" name="profileImage" accept={userInfo.profileUrl} />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="bio">자기소개</label>
            <textarea id="bio" name="bio" placeholder={userInfo.bio}></textarea>
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="password">비밀번호</label>
            <input type="password" id="password" name="password" />
          </div>
          <button type="submit">저장</button>
        </form>
      </div>
    </div>
  );
};

export default MyPage;
