import React from 'react';
import '../scss/main.scss';

import Header from '../static_components/Header/Header';
import Home from '../static_components/Home/Home';
import Footer from '../components/Footer/Footer';
import Nav2 from "../components/Nav2/Nav2";

function WithAuthMenu() {
    return (
        <>
            <Nav2/>
            <Header/>
            <Home/>
            <Footer/>
        </>
    );
}

export default WithAuthMenu;