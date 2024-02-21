import { useEffect, useState } from "react";
import { db } from "@/firebase/firebase";
import { useDispatch, useSelector } from 'react-redux'; // Redux의 useDispatch 및 useSelector 임포트
import { setUser } from '@/store/user.sliec.jsx'; // Redux의 setUser 액션 임포트
import { arrayRemove, arrayUnion, doc, updateDoc } from "firebase/firestore";

const useFollower = (userId) => {
	const [isUpdating, setIsUpdating] = useState(false); // 팔로잉 여부 업데이트 상태를 관리하는 상태
	const [isFollowing, setIsFollowing] = useState(false); // 현재 사용자가 해당 사용자를 팔로우 중인지 여부를 나타내는 상태
	const dispatch = useDispatch(); // Redux useDispatch 훅을 사용하여 디스패치 함수를 가져옴
	const authUser = useSelector((state) => state.user); // Redux useSelector 훅을 사용하여 사용자 정보를 가져옴

	// 사용자가 다른 사용자를 팔로우 또는 언팔로우하는 함수
	const handleFollowUser = async () => {
		setIsUpdating(true); // 업데이트 중임을 나타내는 상태를 true로 설정
		try {
			const currentUserRef = doc(db, "users", authUser.uid); // 현재 사용자의 문서 참조 가져오기
			const userToFollowOrUnfollowRef = doc(db, "users", userId); // 팔로우 또는 언팔로우할 사용자의 문서 참조 가져오기

			// 현재 사용자의 팔로잉 목록 업데이트
			await updateDoc(currentUserRef, {
				following: isFollowing ? arrayRemove(userId) : arrayUnion(userId),
			});

			// 팔로우 또는 언팔로우할 사용자의 팔로워 목록 업데이트
			await updateDoc(userToFollowOrUnfollowRef, {
				followers: isFollowing ? arrayRemove(authUser.uid) : arrayUnion(authUser.uid),
			});

			// Redux 스토어를 사용하여 사용자 정보 업데이트
			dispatch(
				setUser({
					...authUser,
					following: isFollowing
						? authUser.following.filter((uid) => uid !== userId) // 언팔로우 시 해당 사용자의 팔로잉 목록에서 제거
						: [...authUser.following, userId], // 팔로우 시 해당 사용자의 팔로잉 목록에 추가
				})
			);

			setIsFollowing((prevIsFollowing) => !prevIsFollowing); // 팔로잉 상태를 토글
		} catch (error) {
			showToast("Error", error.message, "error"); // 오류가 발생한 경우 토스트 메시지 표시
		} finally {
			setIsUpdating(false); // 업데이트 완료 후 상태를 false로 설정
		}
	};

	// useEffect를 사용하여 사용자 정보 및 팔로잉 여부 업데이트
	useEffect(() => {
		if (authUser) {
			const isFollowing = authUser.following.includes(userId); // 해당 사용자가 팔로우되어 있는지 확인
			setIsFollowing(isFollowing); // 팔로잉 여부 상태 업데이트
		}
	}, [authUser, userId]);

	return { isUpdating, isFollowing, handleFollowUser }; // 상태 및 팔로우 관련 함수 반환
};

export default useFollower;
