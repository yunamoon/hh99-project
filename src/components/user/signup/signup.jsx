import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { auth, db, storage} from '@/firebase'; 
import { useDispatch } from 'react-redux';
import { setUser } from '@/stores/user/user.sliec.jsx';
import styles from '@/components/user/user.module.css'; 

function Signup({ open, onClose }) {
  
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [bio, setBio] = useState('');
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
  
    auth.createUserWithEmailAndPassword(email, password)
      .then((authUser) => {
        return authUser.user.updateProfile({
          displayName: displayName,
        }).then(() => {
          const user = authUser.user;
          if (profileImage) {
            const uploadImage = storage.ref(`images/${user.uid}`).put(profileImage);
            uploadImage.on(
              "state_changed",
              (snapshot) => {},
              (error) => {
                console.error(error);
              },
              () => {
                storage
                  .ref("images")
                  .child(user.uid)
                  .getDownloadURL()
                  .then((url) => {
                    db.collection("users").doc(user.uid).set({
                      id: user.uid,
                      email: user.email,
                      displayName: displayName,
                      password: password, // 이 부분을 보안상 고려해 수정하는 것이 좋습니다.
                      photoURL: url,
                      bio: bio,
                      createdAt: Date(), 
                      updatedAt: Date(), 
                    });
                  });
              }
            );
          }
          auth.signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
              const user = userCredential.user;
              dispatch(
                setUser({
                  id: user.uid,
                  email: user.email,
                  token: user.refreshToken,
                  displayName: user.displayName,
                })
              );
            })
            .catch((error) => {
              console.error(error);
              alert(error.message);
            });
          onClose();
          navigate('/');
        });
      })
      .catch((error) => {
        console.error(error);
        alert(error.message);
      });
  };
  
  const handleCloseModal = (e) => {
    if (e.target === e.currentTarget) {
      onClose(); 
    }
  };

  return (
    <div className={`${styles.modal} ${open ? styles.open : ''}`} onClick={handleCloseModal}>
      <div className={styles.modalContent}>
        <form className={styles.form}>
        <h1 className={styles.logo}>항해99</h1>
             {previewImage && (
            <img
              className={styles.previewImage}
              src={previewImage}
              alt='preview'
            />
             )}
           <input
            className={styles.input}
            type='file'
            accept='image/*'
            onChange={handleImageChange}
          />
          <input
            className={styles.input}
            placeholder='이름을 입력해주세요.'
            type='text'
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
          />
          <input
            className={styles.input}
            placeholder='이메일을 입력해주세요.'
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className={styles.input}
            placeholder='비밀번호를 입력해주세요.'
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <textarea
            className={styles.input}
            placeholder='자기소개를 입력해주세요.'
            value={bio}
            onChange={(e) => setBio(e.target.value)}
          />
          <button
            className={styles.button}
            type='submit'
            onClick={signup}> 
            회원가입</button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
