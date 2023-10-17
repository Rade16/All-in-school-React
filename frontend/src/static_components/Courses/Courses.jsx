import React from 'react';
import { objectUserCourses } from '../../Helpers/objectUserCourses';
import UserCoursesCard from '../../components/UserCoursesCard/UserCoursesCard';
import './_courses.scss';
function Courses() {
  return (
    <>
      <div className='courses'>
        <div className='courses__container'>
          <div className='courses__line'>
            {objectUserCourses.map((card, index) => {
              return <UserCoursesCard key={index} object={card} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Courses;
