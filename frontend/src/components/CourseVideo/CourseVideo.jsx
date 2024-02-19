import React, {useEffect, useState} from "react";
import "./courseVideo.scss";
import ShakaPlayer from "shaka-player-react";
import "shaka-player/dist/controls.css";
import {objectOurCourses} from "../../Helpers/objectOurCourses";
import axios from "axios";

const CourseVideo = () => {
    const [name, setName] = useState('')
    const [number, setNumber] = useState('')
    const [video, setVideo] = useState('')
    const [discriptionTitle, setdiscriptionTitle] = useState('')
    const [text, setText] = useState('')
    const [nextLessonId, setNextLessonId] = useState('')
    const [isFinalLesson, setIsFinalLesson] = useState(false)

    const [test, setTest] = useState({})

    function getLessonId() {
        return document.getElementById('root').getAttribute('data')
    }

    useEffect(() => {
        axios({
            method: 'post',
            url: '/get-lesson-info/',
            data: {
                lessonId: getLessonId()
            },
            xsrfCookieName: 'csrftoken',
            xsrfHeaderName: 'X-CSRFTOKEN',
            withCredentials: true
        }).then((response) => {
            const data = response.data
            setName(data.name)
            setNumber(data.number)
            setVideo(data.video)
            setdiscriptionTitle(data.description_title)
            setText(data.text)
            setNextLessonId(data.next_lesson_id)
            setIsFinalLesson(data.is_final_lesson)
            setTest(data.test)
            console.log(data.test)
        })
    }, []);

    function addPastLesson() {
        axios({
            method: 'post',
            url: '/add-past-lesson/',
            data: {
                lessonId: getLessonId()
            },
            xsrfCookieName: 'csrftoken',
            xsrfHeaderName: 'X-CSRFTOKEN',
            withCredentials: true
        }).then((response) => {
            if (isFinalLesson) {
                window.location.href = '/pased-lesson/'
            }
        })
    }

    return (
        <div className="courseVideo">
            <div className="courseVideo__container">
                <h1 className="courseVideo__title">{name}</h1>
                <h1 className="courseVideo__lesson-number">Урок {number}</h1>
                <div className="courseVideo__video">
                    {video ? <ShakaPlayer autoPlay src={video}/> : ''}
                </div>
                <div className="courseVideo__description-block">
                    <h2 className="courseVideo__description-title">
                        {discriptionTitle}
                    </h2>
                    <p className="courseVideo__description">
                        {text}
                    </p>
                </div>
                {test.questions ?
                    <div className="test__box">
                        <div className="test__box__title">
                            <h1 className="courseVideo__title">{test.name}</h1>
                        </div>
                        <ul className='questions__list'>
                            {test.questions.map((question) => {
                                return (
                                    <li className='question'>
                                        <p>{question.question_text}?</p>
                                        <ul className='answers'>
                                            {question.answers.map((answer) => {
                                                return (<li>
                                                    <input type='radio' name={`answer-${question.question_id}`}
                                                           id={answer.answer_id}/>
                                                    <label htmlFor={answer.answer_id}>{answer.answer_text}</label>
                                                </li>)
                                            })}
                                        </ul>
                                    </li>
                                )
                            })}
                        </ul>
                        <div className="courseVideo__button">
                            <button className="courseVideo__button-link">
                                Проверить тест
                            </button>
                        </div>
                    </div> : ''}
                {
                    nextLessonId ? <div className="courseVideo__button"><a href={`/lesson/${nextLessonId}/`}
                                                                           className="courseVideo__button-link"
                                                                           onClick={addPastLesson}>Следующий урок</a>
                    </div> : ''
                }
                {
                    isFinalLesson ? <div className="courseVideo__button">
                        <button
                            className="courseVideo__button-link"
                            onClick={addPastLesson}>Закончить курс
                        </button>
                    </div> : ''
                }
            </div>
        </div>
    );
};

export default CourseVideo;
