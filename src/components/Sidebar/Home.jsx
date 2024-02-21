import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";

const Home = () => {
  return (
    <div className="md:hidden relative">
      <div className="group flex items-center gap-4 hover:bg-whiteAlpha-400 rounded-6 p-2 w-full">
        <AiFillHome size={25} />
        <span className="hidden md:block">홈</span>
      </div>
      <div className="absolute right-10 bg-gray-800 text-white text-xs py-1 px-2 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        홈
      </div>
    </div>
  );
};

export default Home;
