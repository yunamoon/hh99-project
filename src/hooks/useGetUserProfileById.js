import React from 'react';
import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db} from "@/firebase/firebase";
import { useDispatch } from 'react-redux';
import { setUserProfile } from '@/store/profile.slice';

const useGetUserProfileById = (userId) => {
	const [isLoading, setIsLoading] = useState(true);
	const [profile, setProfile] = useState([]);
	const dispatch = useDispatch();

	useEffect(() => {
		const getUserProfile = async () => {
			console.log('데이터 가지러 출발')
			setIsLoading(true);
			setUserProfile(null);
			try {
				const userRef = await getDoc(doc(db, "users", userId));
				if (userRef.exists()) {
					console.log("저장 전" + userRef.data())
					setProfile(userRef.data());
					dispatch(setUserProfile(userRef.data()))
				}
			} catch (error) {
				console.log("Error", error.message);
			} finally {
				setIsLoading(false);
			}
		};
		getUserProfile();
	}, [userId]);

	return { isLoading, profile,  setUserProfile };
};

export default useGetUserProfileById;
