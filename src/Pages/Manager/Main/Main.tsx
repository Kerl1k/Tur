import React from "react";
import MyButton from "../../../components/UPI/button/MyButton";
import "./Main.css";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <div className="main">
      <MyButton>
        <Link className="link" to="/user">
          Клиенты
        </Link>
      </MyButton>
      <MyButton>
        <Link className="link" to="/tour">
          Туры
        </Link>
      </MyButton>
      <MyButton>
        <Link className="link" to="/airplane">
          Самолеты
        </Link>
      </MyButton>
      <MyButton>Настройки</MyButton>
      <MyButton>
        <Link className="link" to="/client">
          Выйти
        </Link>
      </MyButton>
    </div>
  );
};

export default Main;
