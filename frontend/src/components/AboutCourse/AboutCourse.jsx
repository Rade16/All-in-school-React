import React, {useEffect} from 'react';
import {objectOurCourses} from '../../Helpers/objectOurCourses';
import './aboutCourse.scss';
import Modal from "../Modal/Modal";
import Reg from "../Reg/Reg";
import {useState} from "react";
import axios from "axios";
import Nav from "../Nav/Nav";

const AboutCourse = () => {
    const [userIsAuth, setUserStatus] = useState(false)
    const [modalActive, setModalActive] = useState(false);
    const [courseInfo, setCourseInfo] = useState({
        header_image: '',
        about_image_1: '',
        about_image_2: '',
        about_image_3: '',
        about_text_1: '',
        about_text_2: '',
        id: '',
        image: '',
        name: '',
        price: '',
        you_get_text_1: '',
        you_get_text_2: '',
        you_get_text_3: '',
        you_get_title_1: '',
        you_get_title_2: '',
        you_get_title_3: ''
    });

    useEffect(() => {
        getCourseInfo()
    }, [])


    function getCourseId() {
        let id = 0
        try {
            id = document.getElementById('auth').getAttribute('data')
            setUserStatus(true)
        } catch (error) {
            id = document.getElementById('no-auth').getAttribute('data')
        }
        return id
    }

    function getCourseInfo() {
        axios({
            method: 'post',
            url: '/get-course-info/',
            data: {
                id: getCourseId()
            },
            xsrfCookieName: 'csrftoken',
            xsrfHeaderName: 'X-CSRFTOKEN',
            withCredentials: true
        }).then((response) => {
            setCourseInfo(response.data)
        })
    }

    function addUserToCourse() {
        if (userIsAuth) {
            axios({
                method: "post",
                url: '/add-user-to-course/',
                data: {
                    courseId: getCourseId()
                },
                xsrfCookieName: 'csrftoken',
                xsrfHeaderName: 'X-CSRFTOKEN',
                withCredentials: true
            }).then((response) => {
                window.location.href = '/user-courses/'
            })
        }
    }

    return (

        <div className='aboutCourse'>

            <header
                className='aboutCourse__header'
                style={{backgroundImage: `url(${courseInfo.header_image})`}}
            >
                <div className='aboutCourse__header-container'>
                    <h1 className='aboutCourse__courseName'>{courseInfo.name}</h1>
                </div>
            </header>
            <main className='aboutCourse__body'>
                <div className='aboutCourse__container'>
                    <h1 className='aboutCourse__title'>О курсе</h1>
                    <div className='aboutCourse__text-block1'>
                        <img
                            src={courseInfo.about_image_1}
                            alt=''
                            className='aboutCourse__text-block1-image'
                        />
                        <p className='aboutCourse__text-block1-text'>{courseInfo.about_text_1}</p>
                    </div>
                    <div className='aboutCourse__text-block2'>
                        <p className='aboutCourse__text-block2-text'>{courseInfo.about_text_2}</p>
                        <img
                            src={courseInfo.about_image_2}
                            alt=''
                            className='aboutCourse__text-block2-image'
                        />
                    </div>
                    <div className="aboutCourse__whatYouGet">
                        <h1 className='aboutCourse__title'>Что Вы получите?</h1>
                        <h1 className='aboutCourse__whatYouGet-title'>{courseInfo.you_get_title_1}</h1>
                        <p className='aboutCourse__whatYouGet-text'>{courseInfo.you_get_text_1}</p>
                        <h1 className='aboutCourse__whatYouGet-title'>{courseInfo.you_get_title_2}</h1>
                        <p className='aboutCourse__whatYouGet-text'>{courseInfo.you_get_text_2}</p>
                        <h1 className='aboutCourse__whatYouGet-title'>{courseInfo.you_get_title_3}</h1>
                        <p className='aboutCourse__whatYouGet-text'>{courseInfo.you_get_text_3}</p>
                    </div>

                    <div className="aboutCourse__whatPutUp">
                        <h1 className='aboutCourse__title'>Что принести с собой на практику?</h1>
                        <div className="aboutCourse__whatPutUp-block">
                            <p className='aboutCourse__whatPutUp-text'>Всё необходимое для обучения предоставляет школа:
                                брендированная каска c набором продукции ведущих лучших брендов. Вам
                                остаётся только приносить с собой хорошее настроение и готовность учиться новому.</p>
                            <img src={courseInfo.about_image_3} alt="" className='aboutCourse__whatPutUp-img'/>
                        </div>
                    </div>
                    <div className="aboutCourse__regButton" onClick={addUserToCourse}>
                        {userIsAuth ? 'Записаться на курс' : 'Вы не зарегистрированы!'}
                    </div>
                </div>
            </main>
        </div>
    );
};

export default AboutCourse;
