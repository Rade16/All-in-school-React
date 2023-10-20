import "./_nav2.scss";
import logo from "./../../img/logo.svg";
import Modal from "./../Modal/Modal";
import {useState} from "react";
import axios from "axios";

const Nav2 = () => {
    function logoutUser(event) {
        axios({
            method: 'post',
            url: '/logout-user/',
            xsrfCookieName: 'csrftoken',
            xsrfHeaderName: 'X-CSRFTOKEN',
            withCredentials: true
        }).then((response) => {
            window.location.reload()
        })
    }

    const [modalActive, setModalActive] = useState(false);
    return (
        <header className="header__nav">
            <div className="header__container__nav">
                <nav className="nav">
                    <div className="nav__menu">
                        <input type="checkbox" className="nav__checkbox"/>
                        <p className="nav-link nav-link_menu">Меню</p>

                        <ul className="menu">
                            <li>
                                <a href="#">Профиль</a>
                            </li>
                            <li>
                                <a href="/user-courses/">Мои курсы</a>
                            </li>
                            <li>
                                <a href="#">Пройденный материал</a>
                            </li>
                            <li>
                                <a href="#">Статистика</a>
                            </li>
                            <li>
                                <a href="/group/">Моя группа</a>
                            </li>
                            <li>
                                <a href="/settings/">Настройки</a>
                            </li>
                            <li>
                                <a onClick={() => setModalActive(true)}>Выход</a>
                            </li>
                        </ul>
                    </div>
                    <ul className="nav__list">
                        <li>
                            <a className="nav-link" href="/">
                                Главная
                            </a>
                        </li>
                        <li>
                            <a className="nav-link" href="#">
                                Контакты
                            </a>
                        </li>
                        <li>
                            <a className="nav-link" href="/catalog/">
                                Каталог
                            </a>
                        </li>
                        <li>
                            <a className="nav-link" href="#">
                                Учителя
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
            <Modal active={modalActive} setActive={setModalActive}>
                <div className="quit">
                    <div className="quit__container">
                        <div className="quit__text">
                            <p>Вы действитель хотите выйти из аккаунта?</p>
                        </div>
                        <div className="quit__buttons-line">
                            <button onClick={logoutUser} className="quit__button">Да</button>
                            <button className="quit__button" onClick={() => setModalActive(false)}>Нет</button>
                        </div>
                    </div>
                </div>
            </Modal>
        </header>
    );
};

export default Nav2;
