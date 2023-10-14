import React from 'react';
import './_ourCoursesCard.scss'

function OurCoursesCard({ object }) {
  return (
    <>
      <div className='courseCard' style={{ backgroundImage: `url(${object.img})` }}>
       
        <div className='courseCard__container'>
          <h1 className='courseCard__title'>{object.title}</h1>
          <p className='courseCard__price'>
            От {object.price} ₽
          </p>
          <div className="courseCard__button">
            <a href='#' className='courseCard__button-link'>Подробнее</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default OurCoursesCard;
