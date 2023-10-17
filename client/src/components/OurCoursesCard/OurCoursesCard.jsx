import React from 'react';
import './_ourCoursesCard.scss'

function OurCoursesCard({ object }) {
  return (
    <>
      <div className='courseCard' style={{ backgroundImage: `url(${object.image})` }}>
        <div className='courseCard__container'>
          <h1 className='courseCard__title'>{object.name}</h1>
          <p className='courseCard__price'>
            От {object.price} ₽
          </p>
          <div className="courseCard__button">
            <a href={`/course/${object.id}`} className='courseCard__button-link'>Подробнее</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default OurCoursesCard;
