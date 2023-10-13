import "./_nav.scss";
import logo from "./../../img/logo.svg";

const Nav = () => {
  return (
    <header className="header__nav">
      <div className="header__container__nav">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <nav className="nav">
          <ul className="nav__list">
            <li>
              <a className="nav-link" href="#">
                Главная
              </a>
            </li>
            <li>
              <a className="nav-link" href="#">
                Контакты
              </a>
            </li>
            <li>
              <a className="nav-link" href="#">
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
        <div className="btn">
          <strong>Войти</strong>
        </div>
      </div>
    </header>
  );
};

export default Nav;
