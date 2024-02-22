import React from 'react';
import FeedPosts from "@/components/FeedPosts/FeedPosts";
import UsersList from "@/components/UsersList/UsersList";
import CreatePost from '@/components/FeedPosts/CreatePost';
import { useLocation } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
const HomePage = () => {
    const { pathname } = useLocation();
    const feedPosts = pathname == "/";
    const createPost = pathname == "/create";
    const userList = pathname == "/users";

    return (
        <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="col-span-2">

                {feedPosts && <FeedPosts />}   
                {createPost && <CreatePost/> }
                {userList && <UsersList/> }
                </div>
            </div>
        </div>
    );
};

export default HomePage;
