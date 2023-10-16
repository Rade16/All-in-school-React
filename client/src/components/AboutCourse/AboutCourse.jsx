import React from 'react';
import { objectOurCourses } from '../../Helpers/objectOurCurses';
import './_aboutCourse.scss';

const AboutCourse = () => {
  return (
    <div className='aboutCourse'>
      <header
        className='aboutCourse__header'
        style={{ backgroundImage: `url(${objectOurCourses[0].img})` }}
      >
        <div className='aboutCourse__header-container'>
          <h1 className='aboutCourse__courseName'>{objectOurCourses[0].title}</h1>
        </div>
      </header>
      <main className='aboutCourse__body'>
        <div className='aboutCourse__container'>
          <h1 className='aboutCourse__title'>О курсе</h1>
          <div className='aboutCourse__text-block1'>
            <img
              src={objectOurCourses[0].aboutImg1}
              alt=''
              className='aboutCourse__text-block1-image'
            />
            <p className='aboutCourse__text-block1-text'>{objectOurCourses[0].aboutText1}</p>
          </div>
          <div className='aboutCourse__text-block2'>
            <p className='aboutCourse__text-block2-text'>{objectOurCourses[0].aboutText2}</p>
            <img
              src={objectOurCourses[0].aboutImg2}
              alt=''
              className='aboutCourse__text-block2-image'
            />
          </div>
          <h1 className='aboutCourse__title'>Что Вы получите?</h1>
        </div>
      </main>
    </div>
  );
};

export default AboutCourse;
