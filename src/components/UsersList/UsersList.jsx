import React, { useState } from 'react'
import useFollower from "@/hooks/useFollower";
import UseGetUsers from '@/hooks/useGetUsers';
import UserListItem from '@/components/UsersList/UsersListItem.jsx';

const UserList = () => {
    const {  Users } = UseGetUsers();
    const [searchTerm, setSearchTerm] = useState('');

    // 검색어에 따라 유저 목록을 필터링
    const filteredUsers = Users.filter(user => {
        return user.username.toLowerCase().includes(searchTerm.toLowerCase());
    });

    // 검색어 입력 시 상태 업데이트
    const handleSearchInputChange = (event) => {
        setSearchTerm(event.target.value);
    };


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
            
            {/* 필터링된 유저 목록 렌더링 */}
            {filteredUsers.map((user) => (
                <UserListItem user={user} key={user.id} />
            ))}
        </div>
    );
};

export default UserList;
