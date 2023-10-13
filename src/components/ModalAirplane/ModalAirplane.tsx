import { Dispatch, SetStateAction, useState } from "react";
import MyButton from "../UPI/button/MyButton";
import "./ModalAirplane.css";
import { airplaneApi } from "../../services/TourService";
import { ICity } from "../../TypeScripts/ICity";

const ModalAirplane = ({
  setModal,
}: {
  setModal: Dispatch<SetStateAction<boolean>>;
}) => {
  const [company, setCompany] = useState("");
  const [cities, setCities] = useState<ICity[]>([
    { id: Date.now(), city: "", price: 0 },
  ]);
  const [addAirplane, {}] = airplaneApi.useAddAirplaneMutation();

  function AddObject() {
    setCities([...cities, { id: Date.now(), city: "", price: 0 }]);
  }

  function onChangeCity(id: number, name: string) {
    setCities(
      cities.map((city) => {
        if (id === city.id) {
          return { ...city, city: name };
        } else {
          return city;
        }
      })
    );
  }
  function onChangePrice(id: number, price: number) {
    setCities(
      cities.map((city) => {
        if (id === city.id) {
          return { ...city, price };
        } else {
          return city;
        }
      })
    );
  }

  async function onSubmit() {
    addAirplane({
      id: Date.now(),
      name: company,
      city: cities,
    });
    setModal(false);
  }

  function deleteBlock(number: number) {
    const newCity = cities.filter((cities) => cities.id !== number);
    setCities(newCity);
  }

  return (
    <div className="addModal">
      <h1 style={{ display: "flex", justifyContent: "center" }}>
        Добавление авикомпании
      </h1>
      Авикомпания:
      <input
        onChange={(e) => setCompany(e.target.value)}
        className="inputAirplane"
        type="text"
      />
      <div className="addAirplane">
        {cities.map((city) => {
          return (
            <div key={city.id}>
              Город:
              <input
                value={city.city}
                onChange={(e) => onChangeCity(city.id, e.target.value)}
                className="inputAirplane"
                type="text"
              />
              Цена:
              <input
                value={city.price}
                onChange={(e) => onChangePrice(city.id, Number(e.target.value))}
                className="inputAirplane"
                type="number"
              />
              <MyButton onClick={() => deleteBlock(city.id)}>Удалить</MyButton>
            </div>
          );
        })}
      </div>
      <div className="list_button">
        <MyButton onClick={AddObject}>Добавить город</MyButton>
        <MyButton onClick={onSubmit}>Сохранить</MyButton>
      </div>
    </div>
  );
};

export default ModalAirplane;
