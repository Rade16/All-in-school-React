import React from 'react';
import '../scss/main.scss';

import CourseProgress from "../components/CourseProgress/CourseProgress";
import Footer from '../components/Footer/Footer';
import Nav2 from "../components/Nav2/Nav2";

function CourseProgres_page() {
    return (
        <>
            <Nav2/>
            <CourseProgress/>
            <Footer/>
        </>
    );
}

export default CourseProgres_page;