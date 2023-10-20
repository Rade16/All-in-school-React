import React from 'react';
import './_userCoursesCard.scss';

function CoursesCard({ object }) {
  return (
    <>
      <div className='courseCard' style={{ backgroundImage: `url(${object.image})` }}>
       
        <div className='courseCard__container'>
          <a href={`/course/${object.id}`} className='courseCard__title'>{object.name}</a>
        </div>
      </div>
    </>
  );
}

export default CoursesCard;
