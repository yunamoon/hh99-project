import React, { useState } from 'react';
import useFollower from "@/hooks/useFollower";
import UseGetUsers from '@/hooks/useGetUsers';
import UserListItem from '@/components/UsersList/UsersListItem.jsx';
import { useSelector } from 'react-redux';

const UserList = () => {
    const { followers, following } = useFollower();
    const { Users } = UseGetUsers();
    const [searchTerm, setSearchTerm] = useState('');
    const [filterOption, setFilterOption] = useState('all');
    const user = useSelector((state)=> state.user)
    // 검색어에 따라 유저 목록을 필터링
    const filteredUsers = Users.filter(user => {
        return user.username.toLowerCase().includes(searchTerm.toLowerCase());
    });

    // 검색어 입력 시 상태 업데이트
    const handleSearchInputChange = (event) => {
        setSearchTerm(event.target.value);
    };

    // followers와 following이 정의되지 않았을 때 빈 배열로 설정
    const followersArray = user.followers || [];
    const followingArray = user.following || [];

    // 전체 보기, 나를 팔로우한 회원만 보기, 내가 팔로잉한 회원만 보기에 따라 필터링
    let filteredUsersByOption;
    switch (filterOption) {
        case 'followers':
            filteredUsersByOption = filteredUsers.filter(user => followersArray.includes(user.id));
            break;
        case 'following':
            filteredUsersByOption = filteredUsers.filter(user => followingArray.includes(user.id));
            break;
        default:
            filteredUsersByOption = filteredUsers;
    }

    return (
        <div>
            {/* 검색 상자 */}
            <input
                type="text"
                placeholder="Search users..."
                value={searchTerm}
                onChange={handleSearchInputChange}
                className="px-3 py-3 rounded-md  w-full mx-10 mt-10 shadow-md"
            />
                 {/* 버튼으로 필터링 옵션 선택 */}
                 <div className="flex justify-start ml-10 mt-4 space-x-4">
                <button onClick={() => setFilterOption('all')} className={`px-4 py-2 rounded-md ${filterOption === 'all' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}>Total</button>
                <button onClick={() => setFilterOption('followers')} className={`px-4 py-2 rounded-md ${filterOption === 'followers' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}>followers</button>
                <button onClick={() => setFilterOption('following')} className={`px-4 py-2 rounded-md ${filterOption === 'following' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}>following</button>
                </div>
            {/* 필터링된 유저 목록 렌더링 */}
            {filteredUsersByOption.map((user) => (
                <UserListItem user={user} key={user.id} />
            ))}

       
        </div>
    );
};

export default UserList;
