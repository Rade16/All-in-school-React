import React from "react";
import "./_settings.scss";
const Settings = () => {
  return (
    <div className="settings">
      <div className="settings__container">
        <div className="settings__block">
          <h1 className="settings__name">Сменить тему:</h1>
          <div className="settings__button">
            <input type="checkbox" class="theme-checkbox"></input>
          </div>
        </div>
        <div className="settings__block">
          <h1 className="settings__name">Сменить язык:</h1>
          <div className="settings__button">
            <input type="checkbox" class="theme-checkbox"></input>
          </div>
        </div>
        <div className="settings__block">
          <h1 className="settings__name">Удалить аккаунт:</h1>
          <div className="settings__button">
            <button>Удалить аккаунт</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
