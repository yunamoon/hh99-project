import React from "react";
import { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";


const AuthForm = () => {
	const [isLogin, setIsLogin] = useState(true);

	return (
        <div className="bg-black bg-opacity-75 text-white rounded-lg p-8 text-center border border-white border-opacity-50">
        <h1 className="text-2xl font-bold mb-4">HH99</h1>
        {isLogin ? <Login /> : <Signup />}
        <div className="flex items-center my-4">
          <div className="flex-1 border-t border-white"></div>
          <div className="mx-4">OR</div>
          <div className="flex-1 border-t border-white"></div>
        </div>
        {/* <GoogleAuth prefix={isLogin ? "Log in" : "Sign up"} /> */}
        {isLogin ? "계정이 없으신가요? " : "이미 계정이 있으신가요? "}
        <button className="ml-3 text-blue-500 hover:bg-white hover:text-black border border-white px-4 py-2 rounded-full" 
        onClick={() => setIsLogin(!isLogin)}>
        {isLogin ? "회원가입" : "로그인"}
        </button>
      </div>
	);
};

export default AuthForm;
