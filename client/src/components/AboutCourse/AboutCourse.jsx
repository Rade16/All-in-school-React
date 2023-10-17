import React from 'react';
import { objectOurCourses } from '../../Helpers/objectOurCurses';
import './_aboutCourse.scss';
import Modal from "../Modal/Modal";
import Reg from "../Reg/Reg";
import Auth from "../Auth/Auth";
import { useState } from "react";


const AboutCourse = () => {
  const [modalActive, setModalActive] = useState(false);
  const [modalActive2, setModalActive2] = useState(false);
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
          <div className="aboutCourse__whatYouGet">
          <h1 className='aboutCourse__title'>Что Вы получите?</h1>
          <h1 className='aboutCourse__whatYouGet-title'>{objectOurCourses[0].whatYouGetTitle}</h1>
          <p className='aboutCourse__whatYouGet-text'>{objectOurCourses[0].whatYouGetText}</p>
          <h1 className='aboutCourse__whatYouGet-title'>{objectOurCourses[0].whatYouGetTitle2}</h1>
          <p className='aboutCourse__whatYouGet-text'>{objectOurCourses[0].whatYouGetText2}</p>
          <h1 className='aboutCourse__whatYouGet-title'>{objectOurCourses[0].whatYouGetTitle3}</h1>
          <p className='aboutCourse__whatYouGet-text'>{objectOurCourses[0].whatYouGetText3}</p>
          </div>

          <div className="aboutCourse__whatPutUp">
            <h1 className='aboutCourse__title'>Что принести с собой на практику?</h1>
            <div className="aboutCourse__whatPutUp-block">
            <p className='aboutCourse__whatPutUp-text'>Всё необходимое для обучения предоставляет школа: брендированный шоппер со стартовым набором продукции ведущих лучших брендов. Вам остаётся только приносить с собой хорошее настроение и готовность учиться новому.</p>
            <img src={objectOurCourses[0].aboutImg3} alt="" className='aboutCourse__whatPutUp-img'/>
            </div>
          </div>
          <div className="aboutCourse__regButton" onClick={() => setModalActive(true)}>
            Записаться на курс
          </div>
          <Modal active={modalActive} setActive={setModalActive}>
        <Reg />
      </Modal>
      <Modal active={modalActive2} setActive={setModalActive2}>
        <Auth />
      </Modal>
        </div>
      </main>
    </div>
  );
};

export default AboutCourse;
