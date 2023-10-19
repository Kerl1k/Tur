import { useState } from "react";
import MyButton from "../../../components/UPI/button/MyButton";
import MyModal from "../../../components/UPI/Modal/MyModal";
import "./Airplane.css";
import ModalAirplane from "../../../components/ModalAirplane/ModalAirplane";
import { airplaneApi } from "../../../services/TourService";
import { IAirplane } from "../../../TypeScripts/IAirplane";

const Airplane = () => {
  const [modal, setModal] = useState(false);
  const { data: airplane } = airplaneApi.useFetchAllAirplaneQuery(" ");
  const [deleteAirplane] = airplaneApi.useDeleteAirplaneMutation();

  function deleteList(airplane: IAirplane) {
    deleteAirplane(airplane);
  }

  return (
    <div>
      <div className="airplane_add_button">
        <MyButton onClick={() => setModal(true)}>Добавление самолета</MyButton>
      </div>
      <MyModal visible={modal} setVisible={setModal}>
        <ModalAirplane setModal={setModal} />
      </MyModal>
      <div className="airplane_list">
        {airplane?.map((airplane: IAirplane) => (
          <div key={airplane.id} className="airplane_list_name">
            <div className="airplaneName">{airplane.name}</div>
            <div className="cityList">
              {airplane?.city.map((city) => (
                <div className="city">
                  <div className="cityLeft" key={city.id}>
                    {city.city}
                  </div>
                  <div className="cityRight">{city.price}</div>
                </div>
              ))}
            </div>
            <div className="airplaneButtonList">
              <MyButton>Изменить</MyButton>
              <MyButton onClick={() => deleteList(airplane)}>Удалить</MyButton>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Airplane;
