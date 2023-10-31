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
            console.log(data)
            setName(data.name)
            setNumber(data.number)
            setVideo(data.video)
            setdiscriptionTitle(data.description_title)
            setText(data.text)
            setNextLessonId(data.next_lesson_id)
            setIsFinalLesson(data.is_final_lesson)
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
