import React from 'react';
import '../scss/main.scss';

import Settings from "../static_components/Settings/Settings";
import Footer from '../components/Footer/Footer';
import Nav2 from "../components/Nav2/Nav2";

function Settings_page() {
    return (
        <>
            <Nav2/>
            <Settings/>
            <Footer/>
        </>
    );
}

export default Settings_page;