import React from "react";
import useLogout from "@/hooks/useLogout";
import { Link } from "react-router-dom";

const SidebarLogout = ({login}) => {
	const { handleLogout } = useLogout();
    return (
      <>
      {login === true?
       <Link to='/auth'><button 
       onClick={handleLogout}
       className="mb-10 mt-auto p-4 text-left w-full hover:bg-neutral-700 hover:text-white hover:rounded font-normal">  
      <i className="fas fa-sign-in-alt mr-3"></i> Login</button></Link> 
      :
            <button 
            className="mb-10 mt-auto p-4 text-left w-full hover:bg-neutral-700 hover:text-white hover:rounded font-normal"
            onClick={handleLogout}>  
           <i className="fas fa-sign-out-alt mr-3"></i>Logout</button>
           
      
      }
      </>
	);
};

export default SidebarLogout;
