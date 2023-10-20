import React from 'react'
import './_courseProgress.scss'
import { objectOurCourses } from '../../Helpers/objectOurCourses'
import CourseProgressList from '../CourseProgressList/CourseProgressList'
export const CourseProgress = () => {
  return (
    <div className='courseProgress'>
      <div className="courseProgress__container">
        <h1 className="courseProgress__title">Пройдённый материал</h1>
        <div className="courseProgress__block">
    <div className="courseProgress__block-container">
        <h1 className="courseProgress__block-title">{objectOurCourses[1].title}</h1>
      <p className='courseProgress__lessons'>теоретический материал</p>
      <ol className='courseProgress__lessons-list'>
    {objectOurCourses.map((list, index) =>{
      return <CourseProgressList key={index} object={list}/>
    })}
      </ol>
    </div>
        </div>
      </div>
    </div>
  )
}

export default CourseProgress
