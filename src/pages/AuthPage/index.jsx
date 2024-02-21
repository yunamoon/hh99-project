import React from 'react'
import AuthForm from '@/components/UserAuth/AuthForm';

function AuthPage() {
	const container = {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		height: "100vh",
		backgroundColor: "black",
	  };

	
	  return (
		<div style={container}>
			<AuthForm/>
		</div>
	  );
}

export default AuthPage
