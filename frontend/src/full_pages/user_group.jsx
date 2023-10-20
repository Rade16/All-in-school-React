import React from 'react';
import '../scss/main.scss';

import Group from "../static_components/Group/Group";
import Footer from '../components/Footer/Footer';
import Nav2 from "../components/Nav2/Nav2";

function User_group() {
    return (
        <>
            <Nav2/>
            <Group/>
            <Footer/>
        </>
    );
}

export default User_group;