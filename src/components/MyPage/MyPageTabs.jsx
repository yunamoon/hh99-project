import React from "react";
import { HiOutlinePhotograph  , HiOutlineBookmark, HiOutlineHeart} from "react-icons/hi";
import MyPageTabsItem from "./MyPageTabsItem";

const MyPageTabs = () => {
	return (
		<div className="flex justify-center gap-4 sm:gap-10 text-uppercase font-bold">
		<MyPageTabsItem icon={<HiOutlinePhotograph />} text="Posts"/>
		<MyPageTabsItem icon={<HiOutlineBookmark />} text="Saved"/>
		<MyPageTabsItem icon={<HiOutlineHeart />} text="Likes"/>
	</div>
	);
};

export default MyPageTabs;
