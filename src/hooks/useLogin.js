import { useState } from 'react';
import { auth, db } from '@/firebase/firebase'
import { useDispatch } from 'react-redux';
import { setUser } from '@/store/user.sliec.jsx';
import { useNavigate } from 'react-router-dom';
const useLogin = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const login = async (email, password) => {
    try {
      setLoading(true);
      const userCredential = await auth.signInWithEmailAndPassword(email, password);
      
      const docRef = db.collection("users").doc(userCredential.user.uid);
      const docSnap = await docRef.get();
      const userInfo = docSnap.data();
      
      if(userInfo) {
          dispatch(
          setUser({
          ...userInfo,
          }));
      }
      navigate('/');

    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { login, loading, error };
};

export default useLogin;
