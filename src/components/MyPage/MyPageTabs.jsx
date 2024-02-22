import React, { useEffect } from "react";

const MyPageTabs = () => {
	return (
		<div className="flex justify-center gap-4 sm:gap-10 text-uppercase font-bold">
			<div className="flex border-t border-white items-center p-3 cursor-pointer">
				<div className="text-xl">
	   {/* 포스트 아이콘 */}
				</div>
				<span className="text-xs sm:block">Posts</span>
			</div>

			<div className="flex items-center p-3 cursor-pointer">
				<div className="text-xl">
				{/* 저장한 아이콘 */}
				</div>
				<span className="text-xs sm:block">Saved</span>
			</div>

			<div className="flex items-center p-3 cursor-pointer">
				<div className="text-xl">
		{/* 하트아이콘 */}
				</div>
				<span className="text-xs sm:block">Likes</span>
			</div>
		</div>
	);
};

export default MyPageTabs;
