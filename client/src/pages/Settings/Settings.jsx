import React from "react";
import "./_settings.scss";
import Modal from "./../../components/Modal/Modal";
import { useState } from "react";
const Settings = () => {
  const [modalActive, setModalActive] = useState(false);
  return (
    <div className="settings">
      <div className="settings__container">
        <div className="settings__block">
          <h1 className="settings__name">Сменить тему:</h1>
          <div className="settings__button">
            <input type="checkbox" className="theme-checkbox"></input>
          </div>
        </div>
        <div className="settings__block">
          <h1 className="settings__name">Сменить язык:</h1>
          <div className="settings__button">
            <input type="checkbox" className="theme-checkbox"></input>
          </div>
        </div>
        <div className="settings__block">
          <h1 className="settings__name">Удалить аккаунт:</h1>
          <div className="settings__button">
            <button onClick={() => setModalActive(true)} className="settings__delete-button">Удалить аккаунт</button>
          </div>
        </div>
      </div>
      <Modal active={modalActive} setActive={setModalActive}>
        <div className="quit">
          <div className="quit__container">
            <div className="quit__text">
              <p>Вы <b>ТОЧНО</b> хотите <b><span style={{color: "#ff000057"}}>удалить</span></b> аккаунт?</p>
            </div>
            <div className="quit__buttons-line">
              <button className="quit__button">Да</button>
              <button className="quit__button" onClick={()=>setModalActive(false)}>Нет</button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Settings;
