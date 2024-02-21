import { useState } from 'react';
import { auth } from "@/firebase/firebase";
import { useDispatch } from 'react-redux';
import { removeUser } from '@/store/user.sliec.jsx';

const useLogout = () => {
    const [error, setError] = useState(null);
    const dispatch = useDispatch();

	const handleLogout = async () => {
		try {
			await auth.signOut();
            dispatch(removeUser());
		} catch (error) {
			setError(error);
		}
	};

	return { handleLogout, error };
};

export default useLogout;
