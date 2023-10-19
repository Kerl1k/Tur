import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import "./ClientLayout.css";

const ClientLayout = () => {
  return (
    <section>
      <div className="HeaderManager">
        <NavLink
          className={({ isActive }) =>
            `header_button ${isActive && "active_header_button"}`
          }
          to="/"
        >
          На главную
        </NavLink>
        <NavLink className="header_button" to="/manager">
          менеджер
        </NavLink>
      </div>
      <div>
        <Outlet />
      </div>
    </section>
  );
};

export default ClientLayout;
