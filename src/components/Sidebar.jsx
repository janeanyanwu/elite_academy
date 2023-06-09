import React, { useState } from "react";
import "./Sidebar.css";
import {
  FaTh,
  FaUserAlt,
  FaCommentAlt,
  FaThList,
  FaBars,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  const menuItem = [
    {
      path: "/",
      name: "Dashboard",
      icon: <FaTh />,
    },
    {
      path: "/about",
      name: "About",
      icon: <FaUserAlt />,
    },
    {
      path: "/application",
      name: "Application",
      icon: <FaCommentAlt />,
    },
    {
      path: "/pricelist",
      name: "PriceList",
      icon: <FaThList />,
    },
  ];
  return (
    <div className="container">
      <div style={{ width: isOpen ? "250px" : "50px" }} className="sidebar">
        <div className="top-section">
          <h1 style={{ display: isOpen ? "block" : "none" }} className="logo">
            {" "}
            Logo
          </h1>
          <div style={{ marginLeft: isOpen ? "50px" : "0px" }} className="bars">
            <FaBars onClick={toggle} />
          </div>
        </div>
        {menuItem.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className="link"
            activeclassname="active"
          >
            <div className="icon">{item.icon}</div>
            {isOpen && <div className="link_text">{item.name}</div>}
          </NavLink>
        ))}
      </div>
      <main>{children}</main>
    </div>
  );
};

export default Sidebar;
