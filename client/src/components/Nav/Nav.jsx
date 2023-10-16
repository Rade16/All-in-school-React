import "./_nav.scss";
import logo from "./../../img/logo.svg";
import Modal from "../Modal/Modal";
import Reg from "../Reg/Reg";
import Auth from "../Auth/Auth";
import { useState } from "react";

const Nav = () => {
  const [modalActive, setModalActive] = useState(false);
  const [modalActive2, setModalActive2] = useState(false);
  return (
    <header className="header__nav">
      <div className="header__container__nav">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <nav className="nav">
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
          <div className="nav__buttons">
            <div className="btn" onClick={() => setModalActive(true)}>
              <strong>Регистрация</strong>
            </div>
            <div className="btn" onClick={() => setModalActive2(true)}>
              <strong>Войти</strong>
            </div>
          </div>
        </nav>
      </div>
      <Modal active={modalActive} setActive={setModalActive}>
        <Reg />
      </Modal>
      <Modal active={modalActive2} setActive={setModalActive2}>
        <Auth />
      </Modal>
    </header>
  );
};

export default Nav;
