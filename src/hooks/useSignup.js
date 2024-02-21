import { useState } from 'react';
import { auth, db} from '@/firebase'
import { useDispatch } from 'react-redux';
import { setUser } from '@/store/user.sliec.jsx';

const useSignup = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const signup = async (inputs) => {

    try {
      setLoading(true);
      const newUser = await auth.createUserWithEmailAndPassword(inputs.email, inputs.password);

      if (!newUser && error) {
        setError(error);
        return;
      }

      if (newUser) {
        const userDoc = {
          uid: newUser.user.uid,
          email: inputs.email,
          username: inputs.username,
          bio: "",
          profilePicURL: "",
          followers: [],
          following: [],
          posts: [],
          createdAt: Date.now(),
          updatedAt: Date.now(), 
        };
        
        await db.collection("users").doc(newUser.user.uid).set({
          ...userDoc, 
        }).then(() => {
          dispatch(
            setUser({
              ...userDoc,
            })
          );
        });
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return {  signup  , loading, error }; 
};

export default useSignup;
