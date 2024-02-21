import React, { useState } from 'react';
import useSignup from "@/hooks/useSignup";

function Signup() {

  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
  });

  const { signup } = useSignup();
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    signup(inputs);
  };

  return (
    <div className="text-white text-center">
      <h1 className="text-2xl font-bold mb-4">회원가입</h1>
      <form className="w-64 mx-auto" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="username" className="block mb-1 font-light text-left">이름</label>
          <input
            type="text"
            id="username"
            name="username"
            className="w-full p-2.5 border border-white rounded-lg text-black text-sm"
            placeholder="이름을 입력하세요"
            value={inputs.username}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-1 font-light text-left">아이디</label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full p-2.5 border border-white rounded-lg text-black text-sm"
            placeholder="아이디를 입력하세요"
            value={inputs.email}
            onChange={handleChange}
          />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block mb-1 font-light text-left">비밀번호</label>
          <input
            type="password"
            id="password"
            name="password"
            className="w-full p-2.5 border border-white rounded-lg text-black text-sm"
            placeholder="비밀번호를 입력하세요"
            value={inputs.password}
            onChange={handleChange}
          />
        </div>
        <button
          className="text-blue-500 hover:bg-white hover:text-black border border-white px-4 py-2 rounded-full w-full"
          type="submit"
        >회원가입</button>
      </form>
    </div>
  );
}

export default Signup;
