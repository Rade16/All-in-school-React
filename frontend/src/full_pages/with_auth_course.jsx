import React from 'react';
import '../scss/main.scss';

import AboutCourse from "../components/AboutCourse/AboutCourse";
import Footer from '../components/Footer/Footer';
import Nav2 from "../components/Nav2/Nav2";

function WithAuthCourse() {
    return (
        <>
            <Nav2/>
            <AboutCourse/>
            <Footer/>
        </>
    );
}

export default WithAuthCourse;