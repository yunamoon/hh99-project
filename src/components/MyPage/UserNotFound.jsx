import React from "react";
import { Link  } from "react-router-dom";

const UserNotFound = () => {
	return (
		<div className="flex flex-col items-center mx-auto text-center">
			<p className="text-2xl">User Not Found</p>
			<Link to="/" className="text-blue-500 mt-2">
				Go home
			</Link>
		</div>
	);
};

export default UserNotFound;