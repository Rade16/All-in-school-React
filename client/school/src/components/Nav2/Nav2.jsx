import './_nav2.scss'
import logo from './../../img/logo.svg';

const Nav2 = () => {
  return (
    <header className='header__nav'>
      <div className='header__container__nav'>

        <nav className='nav'>
            <div className="nav__menu">
                <p className='nav-link'>Меню</p>
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
