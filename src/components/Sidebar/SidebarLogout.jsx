import React from "react";
import useLogout from "@/hooks/useLogout";

const SidebarLogout = () => {
	const { handleLogout } = useLogout();
    
    return (
        <button className="mb-10 mt-auto p-4 text-left w-full hover:bg-neutral-700 hover:text-white hover:rounded font-normal"
        onClick={handleLogout}>  
       <i className="fas fa-sign-out-alt mr-3"></i>
         Logout
       </button>
	);
};

export default SidebarLogout;
