import React, { useState } from "react";
import MyButton from "../../../components/UPI/button/MyButton";
import { tourApi } from "../../../services/TourService";
import "./Tour.css";
import MyModal from "../../../components/UPI/Modal/MyModal";
import ModalAddTour from "../../../components/ModalAddTour/ModalAddTour";
import pencil from "../../../img/pencil.svg";
import trash from "../../../img/trash.svg";
import { ITours } from "../../../TypeScripts/ITours";
import ModalChangeTour from "../../../components/ModalChangeTour/ModalChangeTour";

const Tour = () => {
  const { data: tours } = tourApi.useFetchAlltourQuery(" ");
  const [modal, setModal] = useState(false);
  const [deleteAirplane] = tourApi.useDeleteTourMutation();
  const [change, setChange] = useState(false);
  const [changeTour, setChangeTour] = React.useState<ITours>();
  function deleteTur(tour: ITours) {
    deleteAirplane(tour);
  }

  function changeTur(tour: ITours) {
    setChangeTour(tour);
    setChange(true);
  }

  return (
    <div>
      <MyButton className="tourAddButton" onClick={() => setModal(true)}>
        Добавление тура
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <ModalAddTour />
      </MyModal>
      <div className="tourList">
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
              <div className="buttonlist">
                <img
                  onClick={() => changeTur(t)}
                  src={pencil}
                  className="buttonBlock"
                />
                <img
                  onClick={() => deleteTur(t)}
                  src={trash}
                  className="buttonBlock"
                />
              </div>
            </div>
            <MyModal visible={change} setVisible={setChange}>
              <ModalChangeTour tours={t} />
            </MyModal>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tour;
