import React from 'react';
import '../scss/main.scss';

import AboutCourse from "../components/AboutCourse/AboutCourse";
import Footer from '../components/Footer/Footer';
import Nav from "../components/Nav/Nav";

function WithoutAuthCourse() {
    return (
        <>
            <Nav/>
            <AboutCourse/>
            <Footer/>
        </>
    );
}

export default WithoutAuthCourse;