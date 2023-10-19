import React, { useMemo, useState } from "react";
import "./ModalReservation.css";
import MyButton from "../UPI/button/MyButton";
import { reservationApi } from "../../services/TourService";
import { ITours } from "../../TypeScripts/ITours";
import * as Yup from "yup";
import { ErrorMessage, Field, Form, Formik } from "formik";

const ModalReservation = ({ tour }: { tour: ITours }) => {
  const [addReservation, {}] = reservationApi.useAddReservationMutation();
  const initialValues = {
    id: Date.now(),
    phone: +7,
    user: "",
    persone: 1,
    days: 1,
    tour: tour,
    status: "waiting",
  };
  function onSubmit(values: any) {
    addReservation(values);
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
          <Form className="formReservation">
            <h1 style={{ display: "flex", justifyContent: "center" }}>
              Бронирование отеля
            </h1>
            <div className="textBlockReservation">
              Для бронирования отеля вам необходимо оставить заявку и наш
              менеджер свяжется с вами
            </div>
            <Field name="phone" placeholder="phone" />
            <Field name="user" placeholder="user" />
            <Field name="persone" placeholder="persone" />
            <Field name="days" placeholder="days" />
            <MyButton type="submit">Оставить заявку</MyButton>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ModalReservation;
