import React, { useState } from "react";
import "./Main.css";
import { tourApi } from "../../../services/TourService";

const Main = () => {
  const [serch, setSerch] = useState("");
  const { data: tours } = tourApi.useFetchAlltourSerchQuery(serch);
  return (
    <div>
      <div className="ad">ТУТ БУДЕТ РЕКЛАМА</div>
      <div className="serchBlock">
        <input
          value={serch}
          onChange={(e) => setSerch(e.target.value)}
          form="text"
          placeholder="Поиск"
          className="serchInput"
        />
      </div>
      {tours?.map((t) => (
        <div key={t.id} className="tourAddButton">
          <div className="tourBlock">
            <img src={t.img} className="imgBlock" />
            <div className="midleBlock">
              <div className="hotelBlock">{t.hotel}</div>
              <div className="airplaneBlock">{t.airplane}</div>
              <div className="aboutBlock">{t.about}</div>
            </div>
            <div className="priceBlock">{t.price}р</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Main;
