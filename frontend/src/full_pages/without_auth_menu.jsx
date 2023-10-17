import React from 'react';
import '../scss/main.scss';

import Header from '../static_components/Header/Header';
import Home from '../static_components/Home/Home';
import Footer from '../components/Footer/Footer';
import Nav from "../components/Nav/Nav";

function WithoutAuthMenu() {
    return (
        <>
            <Nav/>
            <Header/>
            <Home/>
            <Footer/>
        </>
    );
}

export default WithoutAuthMenu;