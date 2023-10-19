import React, { useState } from "react";
import "./Main.css";
import { filterApi, tourApi } from "../../../services/TourService";
import MyButton from "../../../components/UPI/button/MyButton";
import MyModal from "../../../components/UPI/Modal/MyModal";
import ModalReservation from "../../../components/ModalReservation/ModalReservation";

const Main = () => {
  const [modal, setModal] = useState(false);
  const [filter, setFilter] = useState({ serch: "", country: "", city: "" });
  const { data: tours } = tourApi.useFetchAlltourSerchQuery(filter);
  const { data: filterList = { country: "", city: "" } } =
    filterApi.useFetchFilterQuery("");
  return (
    <div>
      <div className="ad">ТУТ БУДЕТ РЕКЛАМА</div>
      <div className="serchBlock">
        <input
          value={filter.serch}
          onChange={(e) => setFilter({ ...filter, serch: e.target.value })}
          form="text"
          placeholder="Поиск"
          className="serchInput"
        />
        <select
          className="select"
          onChange={(e) => setFilter({ ...filter, country: e.target.value })}
        >
          <option value="">Страны</option>
          {Object.keys(filterList)?.map((filt: any) => (
            <option key={filt} value={filt}>
              {filt}
            </option>
          ))}
        </select>

        {filter.country !== "" ? (
          <select
            className="select"
            onChange={(e) => setFilter({ ...filter, city: e.target.value })}
          >
            <option value="">Города</option>
            {Object.keys(filterList[filter.country]).map((filt: any) => (
              <option key={filt} value={filt}>
                {filt}
              </option>
            ))}
          </select>
        ) : (
          <h1>не работаем</h1>
        )}
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
            <div className="lineBlock" />
            <div className="addBlock">
              <div className="textPrice">Цена за одну ночь</div>
              <MyButton onClick={() => setModal(true)}>Забронировать</MyButton>
            </div>
          </div>
          <MyModal visible={modal} setVisible={setModal}>
            <ModalReservation tour={t} />
          </MyModal>
        </div>
      ))}
    </div>
  );
};

export default Main;
