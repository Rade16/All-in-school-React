import "./_nav2.scss";
import logo from "./../../img/logo.svg";

const Nav2 = () => {
  return (
    <header className="header__nav">
      <div className="header__container__nav">
        <nav className="nav">
          <div className="nav__menu" >
            <input type="checkbox" className="nav__checkbox"/>
            <p className="nav-link nav-link_menu">Меню</p>

            <ul className="menu" >
              <li>
                <a href="#">Профиль</a>
              </li>
              <li>
                <a href="#">Мои курсы</a>
              </li>
              <li>
                <a href="#">Пройденный материал</a>
              </li>
              <li>
                <a href="#">Статистика</a>
              </li>
              <li>
                <a href="#">Моя группа</a>
              </li>
              <li>
                <a href="#">Настройки</a>
              </li>
              <li>
                <a href="#">Выход</a>
              </li>
            </ul>
          </div>

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
      </div>
    </header>
  );
};

export default Nav2;
