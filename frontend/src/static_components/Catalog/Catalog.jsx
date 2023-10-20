import React from "react";
import {useState, useEffect} from "react";
import "./_catalog.scss";
import {objectOurCourses} from "../../Helpers/objectOurCourses";
import OurCoursesCard from '../../components/OurCoursesCard/OurCoursesCard'
import axios from "axios";
import img from "../../img/Courses/Barber.png";

const OurCourses = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        getCourses()
    }, [])

    function getCourses() {
        axios({
            method: 'get',
            url: '/get-courses/'
        }).then((response) => {
            setCourses(response.data)
        })
    }

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
                    <div className="ourCourses__catalog-courses" id='catalog'>
                        {courses.map((element, index) => {
                            return <OurCoursesCard key={index} object={element}/>;
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurCourses;
