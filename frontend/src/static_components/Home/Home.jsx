import './home.scss'
import comp from './../../../src/img/home/icons/comp.svg';
import user from './../../../src/img/home/icons/user.svg';
import time from './../../../src/img/home/icons/time.svg';
import sertificate from './../../../src/img/home/icons/certificate.svg';

import img1 from './../../../src/img/home/aboutUs/image 9.png';
import img2 from './../../../src/img/home/aboutUs/img 7.png';
import img3 from './../../../src/img/home/aboutUs/img 8.png';
import {useEffect, useState} from "react";
import axios from "axios";


const Home = () => {
    const [freshCourses, setFreshCourses] = useState([])

    useEffect(() => {
        getFreshCourses()
    }, []);

    function getFreshCourses() {
        axios({
            method: 'get',
            url: '/get-fresh-courses/'
        }).then((response) => {
            setFreshCourses(response.data)
        })
    }

    return (
        <main>
            <div className="main__container">
                <section className='benefits none1'>
                    <h2 className='titleOfPage'>Наши преимущества</h2>

                    <div className='container container--sm'>
                        <div className='benefits__row'>
                            <div className='benefits__item'>
                                <img src={comp} alt='' className='benefits__item-img'/>
                                <p className='benefits__item-text'>Ты можешь учиться из любой точки мира</p>
                            </div>

                            <div className='benefits__item'>
                                <img src={user} alt='' className='benefits__item-img'/>
                                <p className='benefits__item-text'>Оффлайн мастер-классы от партнеров</p>
                            </div>

                            <div className='benefits__item'>
                                <img src={time} alt='' className='benefits__item-img'/>
                                <p className='benefits__item-text'>Экономия времени</p>
                            </div>

                            <div className='benefits__item'>
                                <img src={sertificate} alt='' className='benefits__item-img'/>
                                <p className='benefits__item-text'>Диплом об окончании специальности</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className='popularCours'>
                    {
                        freshCourses.length > 0 ? <h2 className='titleOfPage'>Новые курсы</h2>: ''
                    }
                    <div className='row'>
                        {
                            freshCourses.map((element) => {
                                return (<div className='col-md-4 col-sm-6 col-xs-12'>
                                    <div className='card'>
                                        <div className='cover' style={{backgroundImage: `url(${element.image})`}}>
                                            <h1>{element.name}</h1>
                                            <span className='price'>{element.price} ₽</span>
                                            <div className='card-back'>
                                                <a href={`course/${element.id}`}>Подробнее</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>)
                            })
                        }
                    </div>
                </section>

                <section className='aboutUs'>
                    <h2 className='titleOfPage'>О нас</h2>
                    <div className="aboutUs__container">
                        <div className="aboutUs__text-block text-block_1">
                            <h1 className="aboutUs__text-block-title">All in school</h1>
                            <p className="aboutUs__text">
                                Онлайн площадка для получения знаний и навыков в сфере услуг красоты.
                            </p>
                        </div>
                        <div className="aboutUs__text-block text-block_2">
                            <h1 className="aboutUs__text-block-title">Наша миссия</h1>
                            <p className="aboutUs__text">дать возможность каждому быть востребованным специалистом прямо
                                сейчас.
                            </p>
                        </div>
                        <div className="aboutUs__text-block text-block_3">
                            <p className="aboutUs__text">Большой выбор курсов для профессионального и личностного
                                развития. Здесь каждый сможет найти дело по душе</p>
                        </div>
                        <div className="grid-wrapper">
                            <img src={img1} alt="" className="img1"/>
                            <img src={img2} alt="" className="img2"/>
                            <img src={img3} alt="" className="img3"/>
                        </div>
                    </div>
                </section>
                <section className='WhatsWeCan'>
                    <h2 className='titleOfPage'>Что мы можем<br/>предложить тебе?</h2>

                    <div className="WhatsWeCan__line">
                        <div className="WhatsWeCan__block">
                            <div className="WhatsWeCan__innerBlock">
                                <p className="WhatsWeCan__block-text">Круглосутчный доступ
                                    к личному кабинету </p>
                            </div>
                        </div>
                        <div className="WhatsWeCan__block">
                            <div className="WhatsWeCan__innerBlock">
                                <p className="WhatsWeCan__block-text">Кураторы - признанные профессионалы, которые
                                    помогут в начинаниях</p>
                            </div>
                        </div>
                        <div className="WhatsWeCan__block">
                            <div className="WhatsWeCan__innerBlock">
                                <p className="WhatsWeCan__block-text">Возможность возвращения к пройденному
                                    материалу</p>
                            </div>
                        </div>
                        <div className="WhatsWeCan__block">
                            <div className="WhatsWeCan__innerBlock">
                                <p className="WhatsWeCan__block-text">Изучение сразу нескольких направлений</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
};

export default Home;
