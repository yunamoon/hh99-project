// UserListPage.js
import React, { useState, useEffect } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore'; 
import styles from '@/pages/UserListPage/UserList.module.css'

const db = firebase.firestore();
function UserListPage() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
      const unsubscribe = db.collection('users').onSnapshot(snapshot => {
        setUsers(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
      });
      return () => unsubscribe();
    }, []);

    
    return (
        <div className={styles.cardList}>
      {users.map((user) => (
        <div key={user.id} className={styles.card}>
          <div className={styles.userInfo}>
            <p>Name: {user.displayName}</p>
            <p>Email: {user.email}</p>
          </div>
          <div className={styles.actions}>
            <button className={styles.likeButton}>❤️</button>
            <button className={styles.followButton}>팔로우</button>
          </div>
        </div>
      ))}
    </div>
      );
}

export default UserListPage;
