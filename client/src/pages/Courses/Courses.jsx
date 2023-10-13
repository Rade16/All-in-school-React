import React from 'react';
import { objectCourses } from '../../Helpers/objectCourses';
import CoursesCard from '../../components/CoursesCard/CoursesCard';
import './_courses.scss';
function Courses() {
  return (
    <>
      <div className='courses'>
        <div className='courses__container'>
          <div className='courses__line'>
            {objectCourses.map((card, index) => {
              return <CoursesCard key={index} object={card} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Courses;
