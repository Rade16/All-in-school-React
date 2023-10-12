import './_nav2.scss'

const Nav2 = () => {
    return (
        <header className='header__nav'>
            <div className='header__container__nav'>

                <nav className='nav'>
                    <ul className='nav__list'>
                        <li><a href="#" className="nav-link">Главная</a></li>
                        <li><a href="#" className="nav-link">Контакты</a></li>
                        <li><a href="#" className="nav-link">Каталог</a></li>
                        <li><a href="#" className="nav-link">Учитель</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Nav2;
