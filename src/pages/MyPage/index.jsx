import React, { useEffect, useState } from 'react';
import { useSelector , useDispatch} from 'react-redux';
import styles from '@/pages/MyPage/MyPage.module.css';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore'; 
import { setUserInfo } from '@/stores/userInfo/userInfo.sliec';
import ChangePassword from '@/components/user/ChangePassword/ChangePassword.jsx'

const MyPage = () => {
  const user = useSelector(state => state.user); 
  const userInfo = useSelector(state => state.userInfo); 
  const userId = user.id;
  const db = firebase.firestore();
  const dispatch = useDispatch();

  const [open , setOpen] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    displayName: '',
    password: '',
    photoURL: '',
    bio: '',
    updatedAt:''
  });


  const fetchData = async () => {
    try {
      const userRef = db.collection('users').doc(userId);
      const doc = await userRef.get();
      if (doc.exists) {
        const userData = doc.data();
        console.log('사용자 정보:', userData);
        dispatch(setUserInfo({
          id : userData.id,
          email : userData.email,
          displayName : userData.displayName,
          photoURL : userData.photoURL,
          bio : userData.bio,
        }));
        setFormData({
          email : userData.email,
          displayName : userData.displayName,
          photoURL : userData.photoURL,
          bio : userData.bio,
          updatedAt: Date()
        });
      } else {
        console.log('해당 사용자의 정보가 없습니다.');
      }
    } catch (error) {
      console.error('사용자 정보를 읽어오는 중 오류 발생:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const userRef = db.collection('users').doc(userId);
      await userRef.update({
          email : formData.email,
          displayName : formData.displayName,
          photoURL : formData.photoURL,
          bio : formData.bio,
          updatedAt: formData.updatedAt
      });
      dispatch(setUserInfo(formData)); // Update Redux state with new data
      setIsEditMode(false);
    } catch (error) {
      console.error('사용자 정보를 업데이트하는 중 오류 발생:', error);
    }
  };
  const handleClose = () => {
    setOpen(false); 
}
  return (

    <div className={styles.container}>

      <ChangePassword open={open} onClose={handleClose}/>
      <div className={styles.formContainer}>
        <h2>마이페이지</h2>
       
    
          <>

              <img src={userInfo.photoURL} alt="프로필 이미지" className={styles.profileImage} />
              <form className={styles.form} onSubmit={handleFormSubmit}>
            <table>
              <tbody>
                
                <tr>
                  <th>이름</th>
                  <td><input 
                  type="text" 
                  name="displayName" 
                  value={formData.displayName}
                  onChange={handleInputChange} /></td>
                </tr>
                <tr>
                  <th>이메일</th>
                  <td><input type="email" name="email" value={formData.email} onChange={handleInputChange} /></td>
                </tr>
                <tr>
                  <th>자기소개</th>
                  <td><input type="text" name="bio" value={formData.bio} onChange={handleInputChange}/></td>
                </tr>
                <tr>
                  <th className={styles.unchangeTh} >가입일자</th>
                  <td className={styles.unchangeTd}>{userInfo.joinDate}</td>
                </tr>
                <tr>
                  <th className={styles.unchangeTh}>팔로워수</th>
                  <td className={styles.unchangeTd}>{userInfo.followers}</td>
                </tr>
                <tr>
                  <th className={styles.unchangeTh}>게시글수</th>
                  <td className={styles.unchangeTd}>{userInfo.feed}</td>
                </tr>
              </tbody>
            </table>
            <button className={styles.button} onClick={()=> {setOpen(true)}}>비밀번호 변경</button>
            <button className={styles.button}  type='submit'>수정 사항 저장</button>
            </form>
          </>
      </div>
    </div>
  );
};

export default MyPage;
