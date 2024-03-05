export const timeAgo = (timestamp) => {
	const now = Date.now();
	const secondsAgo = Math.floor((now - timestamp) / 1000);

	if (secondsAgo < 60) {
		return `${secondsAgo}초 전`;
	} else if (secondsAgo < 3600) {
		const minutesAgo = Math.floor(secondsAgo / 60);
		return `${minutesAgo}분 전`;
	} else if (secondsAgo < 86400) {
		const hoursAgo = Math.floor(secondsAgo / 3600);
		return `${hoursAgo}시간 전`;
	} else if (secondsAgo < 604800) {
		const daysAgo = Math.floor(secondsAgo / 86400);
		return `${daysAgo}일 전`;
	} else {
		const weeksAgo = Math.floor(secondsAgo / 604800); // 7 days in seconds
		return `${weeksAgo}주 전`;
	}
};
