import React from 'react';
import '../scss/main.scss';

import Courses from "../static_components/Courses/Courses";
import Footer from '../components/Footer/Footer';
import Nav2 from "../components/Nav2/Nav2";

function User_courses() {
    return (
        <>
            <Nav2/>
            <Courses/>
            <Footer/>
        </>
    );
}

export default User_courses;