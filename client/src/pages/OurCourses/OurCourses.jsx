import React from "react";
import "./_ourCourses.scss";
import { objectOurCourses } from "../../Helpers/objectOurCurses";
import OurCoursesCard from '../../components/OurCoursesCard/OurCoursesCard'
const OurCourses = () => {  
  return (
    
    <div className="ourCourses">
      <div className="ourCourses__header">
        <div className="ourCourses__header-container">
          <h1 className="ourCourses__header-text">
            Все направления в сфере услуг в одном месте
          </h1>
        </div>
      </div>
      <div className="ourCourses__catalog">
        <div className="ourCourses__catalog-container">
          <h1 className="ourCourses__catalog-title">
          Наши курсы
          </h1>
          <div className="ourCourses__catalog-courses">
          {objectOurCourses.map((card, index) => {
              return <OurCoursesCard key={index} object={card} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurCourses;
