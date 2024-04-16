import React from 'react';
import FeedPosts from "@/components/FeedPosts/FeedPosts";
import { useLocation } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import './Home.css';

const Home = () => {

    return (
        <div className='home-container'>
                <FeedPosts />
        </div>
    );
};

export default Home;
