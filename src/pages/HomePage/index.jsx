import React from 'react';
import FeedPosts from "@/components/FeedPosts/FeedPosts";
import UsersList from "@/components/UsersList/UsersList";
import UseGetUsers from '@/hooks/useGetUsers';
import CreatePost from '@/components/FeedPosts/CreatePost';
import { useLocation } from "react-router-dom";

const HomePage = () => {
    const { pathname } = useLocation();
    const createPost = pathname == "/create";
    return (
        <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="col-span-2">
                {createPost? <CreatePost/>  :  <FeedPosts />}
      
                </div>

                {/* <div className="hidden md:block">
                {Users.map((user) => (
				<UsersList user={user} key={user.id} />))}
                </div> */}
            </div>
        </div>
    );
};

export default HomePage;
