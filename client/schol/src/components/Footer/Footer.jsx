
import './_footer.scss'
import logo from './../../../src/img/logo.svg';
import telega from './../../../src/img/social/telega.svg';
import whats from './../../../src/img/social/whats.svg';
import vk from './../../../src/img/social/vk.svg';
import { YMaps, Map } from '@pbe/react-yandex-maps';
const Footer = () => {

  return (
    <footer className='footer'>
      <div className="footer__container">
          <div className="footer__content">
              <div className="footer__contact">

                  <img src={logo} alt="logo" className="footer__logo"/>
                  <ul className="footer__contacts-list">
                      <li className="footer__list-text">Партнеры</li>
                      <li className="footer__list-text">Адрес:  Тверской бульвар, дом 24, стр. 1</li>
                      <li className="footer__list-text">Телефон: +7 (901)-796-63-26</li>
                  </ul>

                  <ul className="socials__list">
                      <li className="social"><img src={telega} alt=""/></li>
                      <li className="social"><img src={whats} alt=""/></li>
                      <li className="social"><img src={vk} alt=""/></li>
                  </ul>
              </div>
              <div className="footer__info">
                  <p className='list__info-title'>ФОРМАТ ОБУЧЕНИЯ для всех направлений</p>
                  <ol className="list__info">
                      <li className="list__info-text">4 полноценных недели обучения (20 рабочих дней) с графиком 5/2 с 10 до 19 часов
                      </li>
                      <li className="list__info-text">100 живых моделей для отработки навыков. Бесчисленное количество манекенов с настоящими волосами для отработки со второго занятия</li>
                      <li className="list__info-text">Более 198 часов обучения, выстроенных пл схеме «20% теории + 80% практики»</li>
                      <li className="list__info-text">Промежуточные этапы контроля для персонализации программы под успеваемость каждого из студентов и итоговый экзамен</li>
                  </ol>
              </div>
              <div className="footer__map">
                  <YMaps>
                      <div>
                          <Map defaultState={{ center: [55.75, 37.57], zoom: 9 }} />
                      </div>
                  </YMaps>
              </div>
          </div>
      </div>
    </footer>
  );
};

export default Footer;
