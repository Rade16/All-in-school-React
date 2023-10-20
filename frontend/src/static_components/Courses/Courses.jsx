import React, {useState, useEffect} from 'react';
import {objectUserCourses} from '../../Helpers/objectUserCourses';
import UserCoursesCard from '../../components/UserCoursesCard/UserCoursesCard';
import './_courses.scss';
import axios from "axios";

function Courses() {
    const [courses, setCourses] = useState([])

    useEffect(() => {
        getUserCourses()
    }, []);

    function getUserCourses() {
        axios({
            method: "get",
            url: '/get-user-courses/',
        }).then((response) => {
            setCourses(response.data)
        })
    }

    return (
        <>
            <div className='courses'>
                <div className='courses__container'>
                    <div className='courses__line'>
                        {courses.map((card, index) => {
                            return <UserCoursesCard key={index} object={card}/>;
                        })}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Courses;
