import { useState } from "react";
import "./ModalChangeTour.css";
import MyButton from "../UPI/button/MyButton";
import { tourApi } from "../../services/TourService";

const ModalAddTour = ({ tours }: { tours: any }) => {
  const [changeTour] = tourApi.useChangeTourMutation();
  const [tour, setTour] = useState({
    id: tours.id,
    airplane: tours.airplane,
    hotel: tours.hotel,
    country: tours.country,
    city: tours.city,
    price: tours.price,
    about: tours.about,
    img: tours.img,
  });

  function Change() {
    changeTour(tour);
  }

  return (
    <div>
      <div className="addModal">
        <h1
          style={{ margin: "15px", display: "flex", justifyContent: "center" }}
        >
          Изменение тура "{tour.hotel}"
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
          <MyButton onClick={Change}>Изменить</MyButton>
        </div>
      </div>
    </div>
  );
};

export default ModalAddTour;
