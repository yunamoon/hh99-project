// import React, { useEffect, useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import styles from '@/pages/MyPage/MyPage.module.css';
// import { db, storage} from '@/firebase'; 

// import ChangePassword from '@/components/user/ChangePassword/ChangePassword.jsx';

// const MyPage = () => {
//   const user = useSelector((state) => state.user);
//   const dispatch = useDispatch();

//   const [isEditMode, setIsEditMode] = useState(false);
//   const [formData, setFormData] = useState({
//     email: '',
//     displayName: '',
//     password: '',
//     photoURL: '',
//     bio: '',
//     updatedAt: '',
//   });
//   const [openChangePasswordModal, setOpenChangePasswordModal] = useState(false);

//   const fetchData = async () => {
//     try {
//       const userRef = db.collection('users').doc(user.id);
//       const doc = await userRef.get();
//       if (doc.exists) {
//         const userData = doc.data();
//         dispatch(
//           setUserInfo({
//             id: userData.id,
//             email: userData.email,
//             displayName: userData.displayName,
//             photoURL: userData.photoURL,
//             bio: userData.bio,
//             createdAt: userData.createdAt,
//             updatedAt: userData.updatedAt,
//           })
//         );
//         setFormData({
//           id: userData.id,
//           email: userData.email,
//           displayName: userData.displayName,
//           photoURL: userData.photoURL,
//           createdAt: userData.createdAt,
//           bio: userData.bio,
//           updatedAt: Date(),
//         });
//       } else {
//         console.log('해당 사용자의 정보가 없습니다.');
//       }
//     } catch (error) {
//       console.error('사용자 정보를 읽어오는 중 오류 발생:', error);
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleFormSubmit = async (event) => {
//     event.preventDefault();
//     try {
//       const userRef = db.collection('users').doc(user.id);
//       await userRef.update({
//         id: formData.id,
//         email: formData.email,
//         displayName: formData.displayName,
//         photoURL: formData.photoURL,
//         bio: formData.bio,
//         updatedAt: Date(),
//       });
//       dispatch(setUserInfo({
//         ...formData,
//         updatedAt: Date(),
//       }));
//       setIsEditMode(false);
//       alert('사용자 정보 업데이트 완료');
//     } catch (error) {
//       console.error('사용자 정보를 업데이트하는 중 오류 발생:', error);
//     }
//   };

//   const handleProfileImageChange = async (event) => {
//     const file = event.target.files[0];
//     const storageRef = storage.ref(`images/${user.id}`);
    
//     try {
//       await storageRef.child(file.name).put(file);
//       const imageUrl = await storageRef.child(file.name).getDownloadURL();

//       if (userInfo.photoURL) {
//         const prevImageRef = storage.refFromURL(userInfo.photoURL);
//         await prevImageRef.delete();
//       }
  
//       setFormData({ ...formData, photoURL: imageUrl });
      
//     } catch (error) {
//       console.error('프로필 사진 변경 중 오류 발생:', error);
//     }
//   };
  

//   return (
//     <div className={styles.container}>
//       <ChangePassword open={openChangePasswordModal} onClose={() => setOpenChangePasswordModal(false)} />
//       <div className={styles.formContainer}>
//         <h2>마이페이지</h2>
//         <>
//           <img src={formData.photoURL} alt="프로필 이미지" className={styles.profileImage} />
//           <input
//                       type="file"
//                       accept="image/*"
//                       onChange={handleProfileImageChange}
//                     />
//           <form className={styles.form} onSubmit={handleFormSubmit}>
//             <table>
//               <tbody>
//                 <tr>
//                   <th>이름</th>
//                   <td>
//                     <input
//                       className={styles.input}
//                       type="text"
//                       name="displayName"
//                       value={formData.displayName}
//                       onChange={handleInputChange}
//                     />
//                   </td>
//                 </tr>
//                 <tr>
//                   <th>이메일</th>
//                   <td>
//                     <input
//                       className={styles.input}
//                       type="email"
//                       name="email"
//                       value={formData.email}
//                       onChange={handleInputChange}
//                     />
//                   </td>
//                 </tr>
//                 <tr>
//                   <th>자기소개</th>
//                   <td>
//                     <textarea
//                       className={styles.input}
//                       type="text"
//                       name="bio"
//                       value={formData.bio}
//                       onChange={handleInputChange}
//                     />
//                   </td>
//                 </tr>
//                 <tr>
//                   <th className={styles.unchangeTh}>가입일자</th>
//                   <td className={styles.unchangeTd}>{userInfo.createdAt}</td>
//                 </tr>
//                 <tr>
//                   <th className={styles.unchangeTh}>팔로워수</th>
//                   <td className={styles.unchangeTd}>{userInfo.followers}</td>
//                 </tr>
//                 <tr>
//                   <th className={styles.unchangeTh}>게시글수</th>
//                   <td className={styles.unchangeTd}>{userInfo.feed}</td>
//                 </tr>
//               </tbody>
//             </table>
//             <div className={styles.buttonContainer}>
//               <button className={styles.button} onClick={() => setOpenChangePasswordModal(true)}>
//                 비밀번호 변경
//               </button>
//               <button className={styles.button} type='submit'>
//                 수정 사항 저장
//               </button>
//             </div>
//           </form>
//         </>
//       </div>
//     </div>
//   );
// };

// export default MyPage;

import React from 'react'

function MyPage() {
  return (
    <div>
      
    </div>
  )
}

export default MyPage
