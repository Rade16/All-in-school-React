import React from 'react';
import './_userCoursesCard.scss';

function CoursesCard({ object }) {
  return (
    <>
      <div className='courseCard' style={{ backgroundImage: `url(${object.img})` }}>
       
        <div className='courseCard__container'>
          <h1 className='courseCard__title'>{object.title}</h1>
          <p className='courseCard__text'>
            {object.lesson} занятие {object.date}
            <br />в {object.time}
          </p>
        </div>
      </div>
    </>
  );
}

export default CoursesCard;
