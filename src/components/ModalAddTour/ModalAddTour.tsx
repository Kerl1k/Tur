import React, { useState } from "react";
import "./ModalAddTour.css";
import MyButton from "../UPI/button/MyButton";
import { tourApi } from "../../services/TourService";

const ModalAddTour = () => {
  const [addTour, {}] = tourApi.useAddTourMutation();
  const [tour, setTour] = useState({
    id: Date.now(),
    airplane: "",
    hotel: "",
    country: "",
    city: "",
    price: 0,
    about: "",
    img: "",
  });

  function Add() {
    addTour(tour);
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
            Авикомпания:
            <input
              value={tour.airplane}
              onChange={(e) => setTour({ ...tour, airplane: e.target.value })}
              className="inputTour"
              type="text"
            />
            Название отеля:
            <input
              value={tour.hotel}
              onChange={(e) => setTour({ ...tour, hotel: e.target.value })}
              className="inputTour"
              type="text"
            />
          </div>
          <div>
            Страна:
            <input
              value={tour.country}
              onChange={(e) => setTour({ ...tour, country: e.target.value })}
              className="inputTour"
              type="text"
            />
            Город:
            <input
              value={tour.city}
              onChange={(e) => setTour({ ...tour, city: e.target.value })}
              className="inputTour"
              type="text"
            />
          </div>
          Фото:
          <input
            value={tour.img}
            onChange={(e) => setTour({ ...tour, img: e.target.value })}
            className="inputTour"
            type="text"
          />
          Цена:
          <input
            value={tour.price}
            onChange={(e) =>
              setTour({ ...tour, price: Number(e.target.value) })
            }
            className="inputTour"
            type="number"
          />
          Описание:
          <input
            value={tour.about}
            onChange={(e) => setTour({ ...tour, about: e.target.value })}
            className="inputTour"
            type="text"
          />
        </div>
        <div className="list_button">
          <MyButton onClick={Add}>Сохранить</MyButton>
        </div>
      </div>
    </div>
  );
};

export default ModalAddTour;
