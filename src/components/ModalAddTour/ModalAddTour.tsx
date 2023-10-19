import React, { useState } from "react";
import "./ModalAddTour.css";
import MyButton from "../UPI/button/MyButton";
import { filterApi, tourApi } from "../../services/TourService";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { ITours } from "../../TypeScripts/ITours";

const ModalAddTour = () => {
  const [addTour, {}] = tourApi.useAddTourMutation();
  const { data: filter } = filterApi.useFetchFilterQuery("");
  const [changeFilter] = filterApi.useAddFilterMutation();
  const initialValues = {
    id: Date.now(),
    airplane: "",
    hotel: "",
    country: "",
    city: "",
    price: 0,
    about: "",
    img: "",
  };
  const validationSchema = Yup.object({});

  function onSubmit(values: any) {
    if (filter[values.country]) {
      if (filter[values.country][values.city]) {
        changeFilter({
          ...filter,
          [values.country]: {
            ...filter[values.country],
            [values.city]: 1,
          },
        });
      } else {
        changeFilter({
          ...filter,
          [values.country]: {
            ...filter[values.country],
            [values.city]: 1,
          },
        });
      }
    } else {
      changeFilter({
        ...filter,
        [values.country]: {
          ...filter[values.country],
          [values.city]: 1,
        },
      });
    }

    addTour(values);
  }

  return (
    <div>
      <div className="addModal">
        <h1
          style={{ margin: "15px", display: "flex", justifyContent: "center" }}
        >
          Добавление тура
        </h1>
        <div className="inputList">
          <div>
            <Formik
              initialValues={initialValues}
              onSubmit={onSubmit}
              validationSchema={validationSchema}
            >
              {() => (
                <Form>
                  <div>
                    Авикомпания:
                    <Field
                      className="inputTour"
                      name="airplane"
                      placeholder="airplane"
                    />
                    Название отеля:
                    <Field
                      className="inputTour"
                      name="hotel"
                      placeholder="hotel"
                    />
                  </div>
                  <div>
                    Страна:
                    <Field
                      className="inputTour"
                      name="country"
                      placeholder="country"
                    />
                    Город:
                    <Field
                      className="inputTour"
                      name="city"
                      placeholder="city"
                    />
                  </div>
                  Цена:
                  <Field
                    className="inputTour"
                    name="price"
                    placeholder="price"
                  />
                  Описание:
                  <Field
                    className="inputTour"
                    name="about"
                    placeholder="about"
                  />
                  <Field
                    className="inputTour"
                    name="photo"
                    placeholder="photo"
                  />
                  <div className="list_button">
                    <MyButton type="submit">Добавить тур</MyButton>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalAddTour;
