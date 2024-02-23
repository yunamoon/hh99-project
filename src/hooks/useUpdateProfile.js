import react ,{ useState } from "react";
import { getDownloadURL, ref, uploadString } from "firebase/storage";
import { db, storage } from "../firebase/firebase";
import { doc, updateDoc } from "firebase/firestore";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from '@/store/user.sliec.jsx';
import { setUserProfile } from "@/store/profile.slice";

const useUpdateProfile = () => {
	const [isUpdating, setIsUpdating] = useState(false);
	const authUser = useSelector((state) => state.user);
    const dispatch = useDispatch();

	const editProfile = async (inputs, selectedFile) => {
		if (isUpdating || !authUser) return;
		
        setIsUpdating(true);

		const storageRef = ref(storage, `profilePics/${authUser.uid}`);
		const userDocRef = doc(db, "users", authUser.uid);

		let URL = "";
		
        try {
			if (selectedFile) {
				await uploadString(storageRef, selectedFile, "data_url");
				URL = await getDownloadURL(ref(storage, `profilePics/${authUser.uid}`));
			}

			const updatedUser = {
				...authUser,
				username: inputs.username || authUser.username,
				bio: inputs.bio || authUser.bio,
				profilePicURL: URL || authUser.profilePicURL,
			};

			await updateDoc(userDocRef, {
				username: inputs.username || authUser.username,
				bio: inputs.bio || authUser.bio,
				profilePicURL: URL || authUser.profilePicURL,
			});
			
            dispatch( 
                setUser({
                    ...updatedUser,
                }),
                setUserProfile({
                    ...updatedUser,
                })
            );
		} catch (error) {
			console.log('Error' + error)
		}
	};

	return { editProfile, isUpdating };
};

export default useUpdateProfile;
