import React from "react";
import "./settings.scss";
import Modal from "./../../components/Modal/Modal";
import {useState} from "react";
import axios from "axios";

const Settings = () => {
    const [modalActive, setModalActive] = useState(false);
    function deleteAccount(event) {
        axios({
            method: 'post',
            url: '/delete-account/',
            xsrfCookieName: 'csrftoken',
            xsrfHeaderName: 'X-CSRFTOKEN',
            withCredentials: true
        }).then((response) => {
            window.location.reload()
        })
        event.preventDefault()
    }

    return (
        <div className="settings">
            <div className="settings__container">
                <div className="settings__block">
                    <h1 className="settings__name">Удалить аккаунт:</h1>
                    <div className="settings__button">
                        <button
                            onClick={() => setModalActive(true)}
                            className="settings__delete-button"
                        >
                            Удалить аккаунт
                        </button>
                    </div>
                </div>
            </div>
            <Modal active={modalActive} setActive={setModalActive}>
                <div className="quit">
                    <div className="quit__container">
                        <div className="quit__text">
                            <p>
                                Вы <b>ТОЧНО</b> хотите{" "}
                                <b>
                                    <span style={{color: "#ff000057"}}>удалить</span>
                                </b>{" "}
                                аккаунт?
                            </p>
                        </div>
                        <div className="quit__buttons-line">
                            <button type='button' className="quit__button" onClick={deleteAccount}>Да</button>
                            <button
                                className="quit__button"
                                onClick={() => setModalActive(false)}
                            >
                                Нет
                            </button>
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    );
};

export default Settings;
