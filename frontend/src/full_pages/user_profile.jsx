import React from 'react';
import '../scss/main.scss';

import Profile from "../static_components/Profile/Profile";
import Footer from '../components/Footer/Footer';
import Nav2 from "../components/Nav2/Nav2";

function User_profile() {
    return (
        <>
            <Nav2/>
            <Profile/>
            <Footer/>
        </>
    );
}

export default User_profile;