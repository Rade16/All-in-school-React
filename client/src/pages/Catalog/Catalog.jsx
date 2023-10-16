import React from 'react';
import { useState } from 'react';
import './_catalog.scss';
import { objectOurCourses } from '../../Helpers/objectOurCurses';
import OurCoursesCard from '../../components/OurCoursesCard/OurCoursesCard';
import axios from 'axios';
import img from '../../img/Courses/Barber.png';

const OurCourses = () => {
  const [courses, setCourses] = useState([]);

  const result = courses.map((element, index) => {
    return <OurCoursesCard key={index} object={element} />;
  });

  function getCourses() {
    axios({
      method: 'get',
      url: '/get-courses/',
    }).then((response) => {
      const data = response.data;
      setCourses(data);
    });
  }

  return (
    <div className='ourCourses'>
      <div className='ourCourses__header'>
        <div className='ourCourses__header-container'>
          <h1 className='ourCourses__header-text'>Все направления в сфере услуг в одном месте</h1>
        </div>
      </div>
      <div className='ourCourses__catalog'>
        <div className='ourCourses__catalog-container'>
          <h1 className='ourCourses__catalog-title'>Наши курсы</h1>
          <div className='ourCourses__catalog-courses' id='catalog'>
            {result}
            {getCourses()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurCourses;
