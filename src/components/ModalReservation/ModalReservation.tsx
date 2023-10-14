import React, { useState } from "react";
import "./ModalReservation.css";
import MyButton from "../UPI/button/MyButton";
import { reservationApi } from "../../services/TourService";
import { ITours } from "../../TypeScripts/ITours";

const ModalReservation = ({ tour }: { tour: ITours }) => {
  const [addReservation, {}] = reservationApi.useAddReservationMutation();
  const [reservation, setReservation] = useState({
    id: Date.now(),
    phone: +7,
    user: "",
    persone: 1,
    days: 1,
    tour: tour,
  });
  function buttonAddReservation(e: any) {
    e.preventDefault();
    addReservation(reservation);
  }

  return (
    <div>
      <h1 style={{ display: "flex", justifyContent: "center" }}>
        Бронирование отеля
      </h1>
      <div className="textBlockReservation">
        Для бронирования отеля вам необходимо оставить заявку и наш менеджер
        свяжется с вами
      </div>
      <form className="formReservation">
        <input
          onChange={(e) =>
            setReservation({ ...reservation, phone: Number(e.target.value) })
          }
          value={reservation.phone}
          placeholder="Номер телефона"
          type="number"
          className="inputReservation"
        />
        <input
          value={reservation.user}
          onChange={(e) =>
            setReservation({ ...reservation, user: e.target.value })
          }
          placeholder="ФИО"
          type="text"
          className="inputReservation"
        />
        <input
          onChange={(e) =>
            setReservation({ ...reservation, persone: Number(e.target.value) })
          }
          value={reservation.persone}
          placeholder="Колличество человек"
          type="number"
          className="inputReservation"
        />
        <input
          onChange={(e) =>
            setReservation({ ...reservation, days: Number(e.target.value) })
          }
          value={reservation.days}
          placeholder="Колличество дней"
          type="number"
          className="inputReservation"
        />
        <MyButton onClick={(e: any) => buttonAddReservation(e)}>
          Оставить заявку
        </MyButton>
      </form>
    </div>
  );
};

export default ModalReservation;
