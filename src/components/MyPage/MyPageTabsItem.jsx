import React  from "react";


const MyPageTabsItem = ({ icon, text }) => {
	return (

		<div className="flex border-t border-white items-center p-3 cursor-pointer border-b border-gray-100 hover:border-b hover:border-red-900">
			<div className="text-2xl">
             {icon}
			</div>
			<span className="text-sm font-medium ml-1">{text}</span>
		</div>

	);
};

export default MyPageTabsItem;
