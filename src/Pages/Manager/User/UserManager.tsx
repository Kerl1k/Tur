import React, { useState } from "react";
import { isLogginApi, reservationApi } from "../../../services/TourService";
import { IReservation } from "../../../TypeScripts/IReservation";
import classes from "./UserManager.module.css";
import MyButton from "../../../components/UPI/button/MyButton";
import MyModal from "../../../components/UPI/Modal/MyModal";
import ModalChangeTourClient from "../../../components/ModalChangeTourClient/ModalChangeTourClient";

const User = () => {
  const [changeReservation] = reservationApi.useChangeReservationMutation();
  const { data: manager } = isLogginApi.useFetchIsLogginQuery("");
  const [modal, setModal] = useState(false);
  const { data: reservation } =
    reservationApi.useFetchAllReservationParamsQuery({
      manager_like: Number(manager?.manager?.id),
    });
  const { data: wait } = reservationApi.useFetchAllReservationParamsQuery({
    status: "waiting",
  });

  function ChangeWaiting(user: IReservation) {
    console.log(manager?.manager);
    changeReservation({
      ...user,
      status: "Working",
      manager: Number(manager?.manager?.id),
    });
  }

  function ChangeStatus(reserv: IReservation, e: { target: { value: any } }) {
    changeReservation({
      ...reserv,
      status: e.target.value,
    });
  }

  return (
    <div>
      <h1 className={classes.title}>Клиенты</h1>
      <h2 className={classes.title}>У вас в работе</h2>
      <div className={classes.reservationBlock}>
        {reservation?.map((reserv: IReservation) => (
          <div key={reserv.id} className={classes.reservation}>
            <div>{reserv.phone}</div>
            <div>{reserv.user}</div>
            <div>{reserv.tour.hotel}</div>
            <select
              id="status"
              name="status"
              onChange={(e: any) => ChangeStatus(reserv, e)}
              defaultValue={reserv.status}
            >
              <option value="Working">Ожидает</option>
              <option value="Awaiting confirmation">
                Ожидает подтверждения
              </option>
              <option value="Awaiting payment">Ожидает оплаты</option>
              <option value="end">Завершен</option>
            </select>
            <MyButton onClick={() => setModal(true)}>
              Изменить тур клиента
            </MyButton>
            <MyModal visible={modal} setVisible={setModal}>
              <ModalChangeTourClient reservation={reserv} />
            </MyModal>
          </div>
        ))}
      </div>
      <div>
        <h2 className={classes.title}>Ожидает менеджера</h2>
        {wait?.map((wait: IReservation) => (
          <div className={classes.reservation}>
            <div>{wait.phone}</div>
            <div>{wait.user}</div>
            <div>{wait.tour.hotel}</div>
            <MyButton onClick={() => ChangeWaiting(wait)}>
              Откликнуться
            </MyButton>
          </div>
        ))}
      </div>
    </div>
  );
};

export default User;
