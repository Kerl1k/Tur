import React from "react";
import { IReservation } from "../../TypeScripts/IReservation";
import * as Yup from "yup";
import { Field, Form, Formik } from "formik";
import { reservationApi } from "../../services/TourService";
import MyButton from "../UPI/button/MyButton";

const ModalChangeTourClient = ({
  reservation,
}: {
  reservation: IReservation;
}) => {
  const [changeTour] = reservationApi.useChangeReservationMutation();
  const initialValues = {
    id: reservation.id,
    days: reservation.days,
    persone: reservation.persone,
    phone: reservation.phone,
    status: reservation.status,
    user: reservation.user,
    manager: reservation.manager,
    tour: reservation.tour,
  };
  function onSubmit(values: any) {
    changeTour(values);
  }
  const validationSchema = Yup.object({
    phone: Yup.string().required("Логин не введен"),
    user: Yup.string().required("Пароль не введен"),
    persone: Yup.string().required("Пароль не введен"),
    days: Yup.string().required("Пароль не введен"),
  });
  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {() => (
          <Form>
            Клиент:
            <Field name="user" placeholder="user" />
            Телефон
            <Field name="phone" placeholder="phone" />
            Кол-во человек
            <Field name="persone" placeholder="persone" />
            Кол-во дней
            <Field name="days" placeholder="days" />
            Статус:
            {reservation.status}
            <MyButton type="submit">Изменить</MyButton>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ModalChangeTourClient;
