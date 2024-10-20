import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const menuItems = [
  { icon: "dashboard.svg", label: "DashBoard", to: "/" },
  { icon: "profile.svg", label: "Profile", to: "/profile" },
  { icon: "notification.svg", label: "Notification", to: "/notification" },
];

const SideBar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed((prev) => !prev);
  };

  return (
    <div
      className={`${
        isCollapsed ? "w-16" : "w-52"
      } mt-5 mb-5 ml-5 flex flex-col bg-white transition-all duration-300`}
    >
      <div
        className={`${
          isCollapsed ? "hidden" : "h-[100px]"
        } grid place-items-center text-[18px] font-semibold transition-all ease-in-out duration-300`}
      >
        My DashBoard
      </div>

      <div className="flex flex-col gap-4">
        {menuItems.map((item) => (
          <NavLink
            key={item.label}
            to={item.to}
            className={({ isActive }) =>
              `flex items-center ${
                isCollapsed
                  ? "justify-center rounded-full m-1"
                  : "justify-start"
              } p-5 gap-2 h-14 ${
                isActive ? "bg-red-400 text-gray-700" : "text-gray-700"
              }`
            }
          >
            <img
              className="w-[20px] min-w-[20px]"
              src={`src/assets/icons/${item.icon}`}
              alt={item.label}
            />
            <span className={`${isCollapsed ? "hidden" : "block"}`}>
              {item.label}
            </span>
          </NavLink>
        ))}
      </div>

      <div className="mt-auto self-center mb-5">
        <img
          onClick={toggleSidebar}
          className="h-[20px] w-[20px] cursor-pointer"
          src={`src/assets/icons/${
            isCollapsed ? "right-arrow.svg" : "left-arrow.svg"
          }`}
          alt="Toggle Sidebar"
        />
      </div>
    </div>
  );
};

export default SideBar;
