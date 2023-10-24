import "./profile.scss";
import { useEffect, useState } from "react";
import axios from "axios";

function Profile(props) {
  const [status, setStatus] = useState("");

  const [firstName, setFirstName] = useState("");
  const [secondName, setSecondName] = useState("");
  const [lastName, setLastName] = useState("");
  const [telephone, setTelephone] = useState("");
  const [email, setEmail] = useState("");
  const [telegram, setTelegram] = useState("");
  const [gender, setGender] = useState("");

  useEffect(() => {
    const menButton = document.querySelector(".men__button");
    const womenButton = document.querySelector(".women__button");
    const btn = document.querySelectorAll(".profile__button");

    btn.forEach((btns) => {
      btns.addEventListener("click", () => {
        document
          .querySelector(".profile__button--active")
          ?.classList.remove("profile__button--active");
        btns.classList.add("profile__button--active");
      });
    });

    axios({
      method: "get",
      url: "/get-profile-settings/",
    }).then((response) => {
      const data = response.data;
      setFirstName(response.data.first_name);
      setSecondName(response.data.second_name);
      setLastName(response.data.last_name);
      setTelephone(response.data.telephone);
      setEmail(response.data.email);
      setTelegram(response.data.telegram);

      if (data.gender === "M") {
        menButton.classList.add("profile__button--active");
        setGender("M");
      } else {
        womenButton.classList.add("profile__button--active");
        setGender("F");
      }
    });
  }, []);

  function changeProfileSettings(event) {
    axios({
      method: "post",
      url: "/change-profile-settings/",
      data: {
        first_name: document.getElementById("first_name").value,
        second_name: document.getElementById("second_name").value,
        last_name: document.getElementById("last_name").value,
        email: document.getElementById("email").value,
        telephone: document.getElementById("telephone").value,
        telegram: document.getElementById("telegram").value,
        gender: gender,
      },
      xsrfCookieName: "csrftoken",
      xsrfHeaderName: "X-CSRFTOKEN",
      withCredentials: true,
    }).then((response) => {
      setStatus(response.data.status);
    });
    event.preventDefault();
  }

  return (
    <>
      <div className="profile">
        <div className="profile__container">
          <div className="profile__form">
            <h1 className="Profile__title">Профиль</h1>
            <form action="">
              <div className="profile__form-input">
                <p className="profile__form-input-text">Фамилия*</p>
                <input
                  placeholder="Иванов"
                  type="text"
                  className="profile__form-input-field"
                  value={secondName}
                  onChange={(e) => setSecondName(e.target.value)}
                  id="second_name"
                />
              </div>
              <div className="profile__form-input">
                <p className="profile__form-input-text">Имя*</p>
                <input
                  placeholder="Иван"
                  type="text"
                  className="profile__form-input-field"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  id="first_name"
                />
              </div>
              <div className="profile__form-input">
                <p className="profile__form-input-text">Отчество*</p>
                <input
                  placeholder="Иванович"
                  type="text"
                  className="profile__form-input-field"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  id="last_name"
                />
              </div>
              <div className="profile__form-input">
                <p className="profile__form-input-text">Номер*</p>
                <input
                  placeholder="+7826754395"
                  type="number"
                  className="profile__form-input-field"
                  value={telephone}
                  onChange={(e) => setTelegram(e.target.value)}
                  id="telephone"
                />
              </div>
              <div className="profile__form-input">
                <p className="profile__form-input-text">E-mail*</p>
                <input
                  placeholder="pochta@gmail.com"
                  type="email"
                  className="profile__form-input-field"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  id="email"
                />
              </div>
              <div className="profile__form-input">
                <p className="profile__form-input-text">Telegram*</p>
                <input
                  placeholder="https://web.telegram.org/#"
                  type="text"
                  className="profile__form-input-field"
                  value={telegram}
                  onChange={(e) => setTelegram(e.target.value)}
                  id="telegram"
                />
              </div>
              <p>{status}</p>
              <button
                className="profile__form-button"
                onClick={changeProfileSettings}
              >
                Редактировать данные
              </button>
            </form>
          </div>
          <div className="profile__form2">
            <div className="profile__upload-photo">
              <div className="avatar"></div>
              <label for="file" className="custum-file-upload">
                <span>Загрузить аватар </span>
                <input id="file" type="file" className="" />
              </label>
            </div>
            <div className="profile__gender">
              <h1 className="profile__form-input-text">Пол*</h1>
              <div className="profile__buttons-line">
                <div
                  className="men__button profile__button"
                  onClick={() => setGender("M")}
                >
                  Мужской
                </div>
                <div
                  className="women__button profile__button"
                  onClick={() => setGender("F")}
                >
                  Женский
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
