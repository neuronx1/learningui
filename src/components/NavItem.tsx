import React from "react";
import { NavLink } from "react-router-dom";

interface NavItemProps {
  icon: string;
  title: string;
  onClick?: () => void;
  sidePage?: boolean;
  link?: string; // Optional, falls noch benötigt
}

const NavItem: React.FC<NavItemProps> = ({ icon, title, onClick, link, sidePage }) => {
  return (
    <NavLink
      to={link || "#"}
      className={({ isActive }) =>
        `flex items-center space-x-2 cursor-pointer ${sidePage !== undefined
          ? (sidePage ? "text-blue-500 border-b-2 border-blue-500" : "text-gray-700")
          : (isActive ? "text-blue-500 border-b-2 border-blue-500" : "text-gray-700")
        }`
      }
      onClick={onClick}
      style={{ textDecoration: 'none' }}
    >
      <img src={icon} alt={title} className="w-6 h-6" />
      <span>{title}</span>
    </NavLink>
  );
};

export default NavItem;
