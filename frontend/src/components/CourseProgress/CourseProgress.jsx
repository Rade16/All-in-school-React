import React from 'react'
import './_courseProgress.scss'
import { objectOurCourses } from '../../Helpers/objectOurCourses'
import CourseProgressList from '../CourseProgressList/CourseProgressList'
import { objectUserCourses } from '../../Helpers/objectUserCourses'
export const CourseProgress = () => {
  return (
    <div className='courseProgress'>
      <div className="courseProgress__container">
        <h1 className="courseProgress__title">Пройдённый материал</h1>
        <div className="courseProgress__block">
    <div className="courseProgress__block-container">
        <h1 className="courseProgress__block-title">{objectOurCourses[1].title}</h1>
      <p className='courseProgress__lessons'>Теоретический материал:</p>
      <ol className='courseProgress__lessons-list'>
        {objectOurCourses[1].lessons.map((list)=>{
      return <CourseProgressList   object={list}/>})}
      </ol>
    </div>
        </div>
      </div>
    </div>
  )
}

export default CourseProgress
