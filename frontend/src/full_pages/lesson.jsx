import React from 'react';
import '../scss/main.scss';

import CourseVideo from "../components/CourseVideo/CourseVideo";
import Footer from '../components/Footer/Footer';
import Nav2 from "../components/Nav2/Nav2";

function Lesson_page() {
    return (
        <>
            <Nav2/>
            <CourseVideo/>
            <Footer/>
        </>
    );
}

export default Lesson_page;