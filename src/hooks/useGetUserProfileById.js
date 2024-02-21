import React from 'react';
import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db} from "@/firebase/firebase";

const useGetUserProfileById = (userId) => {
	const [isLoading, setIsLoading] = useState(true);
	const [userProfile, setUserProfile] = useState(null);

	useEffect(() => {
		const getUserProfile = async () => {
			setIsLoading(true);
			setUserProfile(null);
			try {
				const userRef = await getDoc(doc(db, "users", userId));
				if (userRef.exists()) {
					setUserProfile(userRef.data());
				}
			} catch (error) {
				console.log("Error", error.message);
			} finally {
				setIsLoading(false);
			}
		};
		getUserProfile();
	}, [setUserProfile, userId]);

	return { isLoading, userProfile, setUserProfile };
};

export default useGetUserProfileById;
