import React, { useState } from "react";
import MyButton from "../../../components/UPI/button/MyButton";
import { reservationApi } from "../../../services/TourService";
import { IReservation } from "../../../TypeScripts/IReservation";
import "../Applications/Applications.css";

const Applications = () => {
  const [number, setNumber] = useState(7);
  const [visible, setVisible] = useState(false);
  const { data: reservation } =
    reservationApi.useFetchAllReservationParamsQuery({
      phone: number,
    });

  function NumberQWE() {
    if (reservation?.length !== 0) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }
  return (
    <div>
      введите номер телефона
      <input
        value={number}
        onChange={(e) => setNumber(Number(e.target.value))}
        type="number"
      />
      <MyButton onClick={() => NumberQWE()}>Просмотреть заявки</MyButton>
      {visible && reservation !== undefined ? (
        reservation.map((res: IReservation) => (
          <div className="res">
            <div>
              Телефон:
              {res.phone}
            </div>
            <div>
              Отель:
              {res.tour.hotel}
            </div>
            <div>
              Человек:
              {res.persone}
            </div>
            <div>
              Дней:
              {res.days}
            </div>
            <div>
              Статус:
              {res.status}
            </div>
          </div>
        ))
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Applications;
