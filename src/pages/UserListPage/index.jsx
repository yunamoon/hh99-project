import React, { useState, useEffect } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore'; 
import styles from '@/pages/UserListPage/UserList.module.css';

const db = firebase.firestore();

function UserListPage() {
    const [users, setUsers] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [currentUser, setCurrentUser] = useState(null);

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
        const unsubscribe = db.collection('users').onSnapshot(snapshot => {
            const filteredUsers = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
                .filter(user => user.displayName.toLowerCase().includes(searchTerm.toLowerCase()));
            setUsers(filteredUsers);
        });
        return () => unsubscribe();
    }, [searchTerm]);

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const followUser = async (userId, followedUserId) => {
        const userRef = db.collection('users').doc(userId);
        const followedUserRef = db.collection('users').doc(followedUserId);

        try {
            const userSnapshot = await userRef.get();
            const followedUserSnapshot = await followedUserRef.get();

            if (userSnapshot.exists && followedUserSnapshot.exists) {
                const userData = userSnapshot.data();
                const followedUserData = followedUserSnapshot.data();

                // Check if the user is already following the followed user
                if (!userData.following.includes(followedUserId)) {
                    const updatedFollowing = [...userData.following, followedUserId];
                    await userRef.update({ following: updatedFollowing });

                    // Update the followers list of the followed user
                    let updatedFollowers;
                    if (Array.isArray(followedUserData.followers)) {
                        updatedFollowers = [...followedUserData.followers, userId];
                    } else {
                        updatedFollowers = [userId];
                    }
                    await followedUserRef.update({ followers: updatedFollowers });
                } else {
                    console.log('User is already following this user');
                }
            } else {
                console.error('User not found');
            }
        } catch (error) {
            console.error('Error following user:', error);
        }
    };

    const unfollowUser = async (userId, unfollowedUserId) => {
        const userRef = db.collection('users').doc(userId);
        const unfollowedUserRef = db.collection('users').doc(unfollowedUserId);

        try {
            const userSnapshot = await userRef.get();
            const unfollowedUserSnapshot = await unfollowedUserRef.get();

            if (userSnapshot.exists && unfollowedUserSnapshot.exists) {
                const userData = userSnapshot.data();
                const unfollowedUserData = unfollowedUserSnapshot.data();

                // Check if the user is following the unfollowed user
                if (userData.following.includes(unfollowedUserId)) {
                    const updatedFollowing = userData.following.filter(id => id !== unfollowedUserId);
                    await userRef.update({ following: updatedFollowing });

                    // Update the followers list of the unfollowed user
                    let updatedFollowers;
                    if (Array.isArray(unfollowedUserData.followers)) {
                        updatedFollowers = unfollowedUserData.followers.filter(id => id !== userId);
                    } else {
                        updatedFollowers = [];
                    }
                    await unfollowedUserRef.update({ followers: updatedFollowers });
                } else {
                    console.log('User is not following this user');
                }
            } else {
                console.error('User not found');
            }
        } catch (error) {
            console.error('Error unfollowing user:', error);
        }
    };
    
    const handleFollowClick = async (userId, followedUserId) => {
        await followUser(userId, followedUserId);
    };

    const handleUnfollowClick = async (userId, unfollowedUserId) => {
        await unfollowUser(userId, unfollowedUserId);
    };
    
    return (
        <div className={styles.container}>
           <div className={styles.searchContainer}>
              <input
                className={styles.searchInput}
                type="text"
                placeholder="유저 검색"
                value={searchTerm}
                onChange={handleSearchChange}
              />
           </div>
           <div className={styles.cardList}>
              {users.map((user) => (
                  <div key={user.id} className={styles.card}>
                      <div className={styles.userInfo}>
                          <p>Name: {user.displayName}</p>
                          <p>Email: {user.email}</p>
                          <p>팔로워 수: {user.followers ? user.followers.length : 0}</p>
                          <p>팔로잉 수: {user.following ? user.following.length : 0}</p>
                      </div>
                      <div className={styles.actions}>
                          <button className={styles.likeButton}>❤️</button>
                          <button 
                              className={styles.followButton} 
                              onClick={() => handleFollowClick(currentUser.uid, user.id)}
                          >
                              팔로우
                          </button>
                          <button 
                              className={styles.followButton}  
                              onClick={() => handleUnfollowClick(currentUser.uid, user.id)}
                          >
                              언팔로우
                          </button>
                      </div>
                  </div>
              ))}
           </div>
        </div>
    );
}

export default UserListPage;
