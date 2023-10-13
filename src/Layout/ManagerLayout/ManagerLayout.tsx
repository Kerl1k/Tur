import { NavLink, Outlet } from "react-router-dom";
import "./HeaderManager.css";

const ManagerLayout = () => {
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
        <NavLink className="header_button" to="/user">
          Клиенты
        </NavLink>
        <NavLink className="header_button" to="/tour">
          Туры
        </NavLink>
        <NavLink className="header_button" to="/airplane">
          Самолеты
        </NavLink>
      </div>
      <div>
        <Outlet />
      </div>
    </section>
  );
};

export default ManagerLayout;
