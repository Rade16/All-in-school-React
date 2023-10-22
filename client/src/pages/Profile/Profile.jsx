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
              <label for="file" class="custum-file-upload">
                <div class="icon">
                  <svg
                    viewBox="0 0 24 24"
                    fill=""
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M10 1C9.73478 1 9.48043 1.10536 9.29289 1.29289L3.29289 7.29289C3.10536 7.48043 3 7.73478 3 8V20C3 21.6569 4.34315 23 6 23H7C7.55228 23 8 22.5523 8 22C8 21.4477 7.55228 21 7 21H6C5.44772 21 5 20.5523 5 20V9H10C10.5523 9 11 8.55228 11 8V3H18C18.5523 3 19 3.44772 19 4V9C19 9.55228 19.4477 10 20 10C20.5523 10 21 9.55228 21 9V4C21 2.34315 19.6569 1 18 1H10ZM9 7H6.41421L9 4.41421V7ZM14 15.5C14 14.1193 15.1193 13 16.5 13C17.8807 13 19 14.1193 19 15.5V16V17H20C21.1046 17 22 17.8954 22 19C22 20.1046 21.1046 21 20 21H13C11.8954 21 11 20.1046 11 19C11 17.8954 11.8954 17 13 17H14V16V15.5ZM16.5 11C14.142 11 12.2076 12.8136 12.0156 15.122C10.2825 15.5606 9 17.1305 9 19C9 21.2091 10.7909 23 13 23H20C22.2091 23 24 21.2091 24 19C24 17.1305 22.7175 15.5606 20.9844 15.122C20.7924 12.8136 18.858 11 16.5 11Z"
                        fill=""
                      ></path>{" "}
                    </g>
                  </svg>
                </div>
                <div class="text">
                  <span>Click to upload image</span>
                </div>
                <input id="file" type="file" />
              </label>
            </div>
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
    </>
  );
}

export default Profile;
