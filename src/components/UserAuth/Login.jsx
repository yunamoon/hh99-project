import React, { useState } from 'react';
import useLogin from '@/hooks/useLogin';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, loading, error } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    login(email, password);
  };

  return (
    <div className="text-white text-center">
      <h1 className="text-2xl font-bold mb-4">로그인</h1>
      {error && <alert status='error'><p>로그인 에러: {error}</p></alert>}
      <form className="w-64 mx-auto" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-1 font-light text-left">아이디</label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full p-2.5 border border-white rounded-lg text-black text-sm"
            placeholder="아이디를 입력하세요"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          className="text-blue-500 hover:bg-white hover:text-black border border-white px-4 py-2 rounded-full w-full"
          type="submit"
          disabled={loading} // 로딩 중일 때 버튼 비활성화
        >로그인</button>
      </form>
    </div>
  );
};

export default Login;
