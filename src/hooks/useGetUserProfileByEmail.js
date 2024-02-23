import React from 'react';
import { useEffect, useState } from "react";
import { collection, query, where, onSnapshot } from "firebase/firestore";
import { db} from "@/firebase/firebase";
import { useDispatch } from 'react-redux';
import { setUserProfile } from '@/store/profile.slice';

const useGetUserProfileByEmail = (email) => {
	const [isLoading, setIsLoading] = useState(true);
	const [profile, setProfile] = useState([]);
	const dispatch = useDispatch();

	useEffect(() => {

		if (!email) {
            // 에러 처리: 이메일이 유효하지 않음
            console.error('Invalid email provided');
            setIsLoading(false);
            return;
        }

		const q = query(collection(db, "users"), where("email", "==", email));
		const unsubscribe = onSnapshot(q, (snapshot) => {
            setIsLoading(true);
            const profiles = [];
            snapshot.forEach((doc) => {
                profiles.push(doc.data());
            });
            setProfile(profiles[0]); // 이메일이 고유하다고 가정하고 첫 번째 문서만 사용
            dispatch(setUserProfile(profiles[0]));
            setIsLoading(false);
        }); 
		
		return () => unsubscribe(); // 컴포넌트가 언마운트되면 구독을 해제합니다.
    }, [email, dispatch, setUserProfile]);

	return { isLoading, profile};
};

export default useGetUserProfileByEmail;


		// const getUserProfile = async () => {
		// 	console.log('데이터 가지러 출발')
		// 	setIsLoading(true);
		// 	try {
		// 		const q = query(collection(db, "users"), where("email", "==", email));
		// 		const querySnapshot = await getDocs(q);
 		// 			querySnapshot.forEach((doc) => {
        //             console.log(doc.id, ' => ', doc.data());
        //             setProfile(doc.data());
        //             dispatch(setUserProfile(doc.data()));
        //         });
					
		// 	} catch (error) {
		// 		console.log("Error", error.message);
		// 	} finally {
		// 		setIsLoading(false);
		// 	}
		// };
	// 	getUserProfile();
	// }, [email]);