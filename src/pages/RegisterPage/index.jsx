import { Button, TextField } from '@material-ui/core'
import React, { useState } from 'react'
import styles from './Register.module.css';
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/storage'
import 'firebase/compat/firestore'
import { db, storage } from '../../firebase';

const Register = ({ username }) => {
  
  const [caption, setCaption] = useState('');
  const [progress, setProgress] = useState(0);
  const [image, setImage] = useState(null);

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0])
    }
  }
 
  const handleUpload = () => {
    const uploadTask = storage.ref(`images/${image.name}`).put(image);

    uploadTask.on('state_changed', 
      (snapshot) => {
        const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
        setProgress(progress);
      },
      (error) => {
        console.error(error);
      },
      () => {
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then(url => {
            db.collection("posts").add({
              timestamp: firebase.firestore.FieldValue.serverTimestamp(),
              caption: caption,
              imageURL: url,
              userName: username
            })
            .then(() => {
              setCaption('');
              setImage(null);
              setProgress(0);
            })
            .catch(error => {
              console.error("게시글 추가 오류: ", error);
            });
          })
          .catch(error => {
            console.error("다운로드 URL 가져오기 오류: ", error);
          });
      }
    );
  }
 
  return (
    <div className={styles.form}>
      <h2>새로운 게시글 추가</h2>
      <input 
        className={styles.fileInput} 
        type='file' 
        onChange={handleChange}
      />
      <TextField
        id='filled-basic'
        label='캡션 추가'
        variant='filled'
        onChange={(e) => setCaption(e.target.value)}
        value={caption}
      />
      <progress 
        className={styles.progress}
        value={progress}
        max='100'
      />
      <Button 
        variant='contained'
        color='primary'
        onClick={handleUpload}
      >
        업로드
      </Button>
    </div>
  );
}

export default Register;
