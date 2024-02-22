import React from "react";
import { Link  } from "react-router-dom";

const SidebarLink = ( {to , name, icon}) => {
	
	return (
		<Link to={to} >
        <li className="p-4 hover:bg-neutral-700 hover:rounded cursor-pointer font-light">
        <i className={icon}></i>
          <span>{name}</span>
        </li>
      </Link >
	);
};

export default SidebarLink;
