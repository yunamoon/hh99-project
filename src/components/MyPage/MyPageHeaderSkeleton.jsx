
import React from 'react';

const MyPageHeaderSkeleton = () => {
	return (
		<div className="flex gap-4 sm:gap-10 py-10 flex-col sm:flex-row justify-center items-center">
			<div className="h-24 w-24 rounded-full bg-gray-300"></div>
			<div className="flex flex-col items-center sm:items-start w-full">
				<div className="h-3 w-36 bg-gray-300 mb-2"></div>
				<div className="h-3 w-24 bg-gray-300"></div>
			</div>
		</div>
	);
};

export default MyPageHeaderSkeleton;