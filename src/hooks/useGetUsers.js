import { useEffect, useState } from "react";
import { useSelector } from "react-redux"; // useSelector를 사용하여 Redux 상태 가져오기
import { collection, getDocs, limit, orderBy, query, where } from "firebase/firestore";
import { db } from "@/firebase/firebase";

const UseGetUsers = () => {
    // 로딩 상태와 추천 사용자 목록을 관리하는 상태
    const [isLoading, setIsLoading] = useState(true);
    const [Users, setUsers] = useState([]);
    const [error, setError] = useState('');

    // Redux를 사용하여 인증된 사용자 정보 가져오기
    const authUser = useSelector((state) => state.user);

    useEffect(() => {
        const getUsers = async () => {
            setIsLoading(true); // 로딩 상태를 true로 설정하여 로딩 중임을 나타냄
            try {
                if (!authUser) return; // authUser가 null 또는 undefined인 경우 종료
                
                // authUser.following이 배열인지 확인
                if (!Array.isArray(authUser.following)) {
                    throw new Error("authUser.following is not an array");
                }

                const usersRef = collection(db, "users"); // "users" 컬렉션의 참조
                const q = query(
                    usersRef,
                    where("uid", "not-in", [authUser.uid, ...authUser.following]), // 현재 사용자와 팔로우 중인 사용자는 제외
                    orderBy("uid"), // uid를 기준으로 정렬
                    limit(10) // 최대 10명의 추천 사용자만 가져오기
                );

                const querySnapshot = await getDocs(q); // 쿼리 결과 가져오기
                const users = []; // 추천 사용자 목록을 저장할 배열

                // 각 문서에서 사용자 정보 추출하여 배열에 추가
                querySnapshot.forEach((doc) => {
                    users.push({ ...doc.data(), id: doc.id });
                });

                setUsers(users); 
                console.log(users);// 추천 사용자 목록 상태 업데이트
            } catch (error) {
                setError(error.message); // 에러 상태 업데이트
                console.error(error);
            } finally {
                setIsLoading(false); // 로딩 상태를 false로 설정하여 로딩이 완료되었음을 나타냄
            }
        };

        // Redux 상태인 authUser가 변경될 때마다 getUsers 함수 호출
        if (authUser) getUsers();
    }, [authUser]); // useEffect의 종속성으로 authUser와 showToast 지정

    // 로딩 상태, 추천 사용자 목록 및 에러 상태를 반환
    return { isLoading, Users, error };
};

export default UseGetUsers;
