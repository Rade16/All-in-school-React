import React, {useEffect, useState} from 'react'
import './courseProgress.scss'
import {objectOurCourses} from '../../Helpers/objectOurCourses'
import CourseProgressList from '../CourseProgressList/CourseProgressList'
import {objectUserCourses} from '../../Helpers/objectUserCourses'
import axios from "axios";

export const CourseProgress = () => {
    const [passedLessons, setPassedLessons] = useState([])

    useEffect(() => {
        axios({
            method: "get",
            url: '/get-pased-lesson/'
        }).then((response) => {
            console.log(response.data)
            setPassedLessons(response.data)
        })
    }, []);

    return (
        <div className='courseProgress'>
            <div className="courseProgress__container">
                <h1 className="courseProgress__title">Пройдённый материал</h1>
                <div className="courseProgress__content">
                    {passedLessons.map((element) => {
                        return (<div className="courseProgress__block">
                            <div className="courseProgress__block-container">
                                <h1 className="courseProgress__block-title">{element.course_name}</h1>
                                <p className='courseProgress__lessons'>Теоретический материал:</p>
                                <ol className='courseProgress__lessons-list'>
                                    {element.lessons.map((element) => {
                                        return <CourseProgressList object={element}/>
                                    })}
                                </ol>
                            </div>
                        </div>)
                    })}
                </div>
            </div>
        </div>
    )
}

export default CourseProgress
