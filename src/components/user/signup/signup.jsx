import React, { useState } from 'react';
import { auth, db, storage} from '@/firebase'; 
import { useDispatch } from 'react-redux';
import { setUser } from '@/stores/user/user.sliec.jsx';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore'; // storage 추가
import styles from '@/components/user/signup/signup.module.css'; // CSS 모듈을 가져옵니다.

function Signup({ open, onClose }) {
  const dispatch = useDispatch();
  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [profileImage, setProfileImage] = useState(null); // 프로필 이미지 상태 추가
  const [previewImage, setPreviewImage] = useState(null); // 미리보기 이미지 상태 추가

  const handleImageChange = (e) => {
    const imageFile = e.target.files[0];
    setProfileImage(imageFile); // 선택한 이미지 파일을 상태에 설정

    // FileReader를 사용하여 이미지 파일을 읽고 미리보기를 생성
    const reader = new FileReader();
    reader.onload = () => {
      setPreviewImage(reader.result); // 미리보기 이미지 설정
    };
    reader.readAsDataURL(imageFile); // 이미지 파일을 Data URL로 읽음
  };

  const signup = (e) => {
    e.preventDefault();

    // 이메일/비밀번호로 사용자 생성
    auth.createUserWithEmailAndPassword(email, password)
      .then((authUser) => {
        return authUser.user.updateProfile({
          displayName: displayName,
          profileImage : profileImage
        })
      .then(() => {
          // Firebase Storage에 프로필 이미지 업로드
          const uploadTask = storage.ref(`images/${authUser.user.uid}`).put(profileImage);
          uploadTask.on(
            "state_changed",
            snapshot => {},
            error => {
              // 업로드 중 오류 처리
              console.error(error);
            },
            () => {
              // 업로드 완료 후
              storage.ref("images").child(authUser.user.uid).getDownloadURL().then(url => {
                // Firestore에 사용자 정보 추가
                db.collection("users").doc(authUser.user.displayName).set({
                  id : authUser.user.uid,
                  nickname : displayName,
                  email: email,
                  password : password,
                  photoURL: url, // 업로드한 이미지의 URL 저장
                  createdAt: firebase.firestore.FieldValue.serverTimestamp(),
                  updatedAt: firebase.firestore.FieldValue.serverTimestamp() 
                });
              });
            }
          );
          auth.signInWithEmailAndPassword(email, password)
          .then((userCredential) => {
            const user = userCredential.user;
            dispatch(
              setUser({
                email: userCredential.user.email,
                token: userCredential.user.refreshToken,
                id: userCredential.user.uid,
                displayName: userCredential.user.displayName,
                profileUrl : userCredential.user.profileUrl
              })
            );
          })
          onClose(); // 모달을 닫습니다.
        });
      })
      .catch((error) => {
        // 사용자 생성 중 오류 처리
        console.error(error);
        alert(error.message);
      });
  };

  const handleCloseModal = (e) => {
    if (e.target === e.currentTarget) {
      onClose(); // 모달을 닫습니다.
    }
  };

  return (
    <div className={`${styles.modal} ${open ? styles.open : ''}`} onClick={handleCloseModal}>
      <div className={styles.modalContent}>
        <form>
          <img
            className={styles.logo}
            src='https://image-cdn.hypb.st/https%3A%2F%2Fkr.hypebeast.com%2Ffiles%2F2021%2F01%2Fkia-motors-new-logo-brand-slogan-officially-revealed-01.jpg?cbr=1&q=90'
            alt='logo'
            width={100}
            height={80}
          />
             {/* 미리보기 이미지 */}
             {previewImage && (
            <img
              className={styles.previewImage}
              src={previewImage}
              alt='preview'
            />
          )}
           {/* 프로필 이미지 업로드 input */}
           <input
            className={styles.input}
            type='file'
            accept='image/*'
            onChange={handleImageChange}
          />
       
          <br />
          <input
            className={styles.input}
            placeholder='이름을 입력해주세요.'
            type='text'
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
          />
          <br />
          <input
            className={styles.input}
            placeholder='이메일을 입력해주세요.'
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <input
            className={styles.input}
            placeholder='비밀번호를 입력해주세요.'
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
         
          <button
            className={styles.button}
            type='submit'
            onClick={signup}
          > Sign Up</button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
