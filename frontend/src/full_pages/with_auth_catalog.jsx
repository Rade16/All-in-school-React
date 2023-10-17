import React from 'react';
import '../scss/main.scss';

import Catalog from "../static_components/Catalog/Catalog";
import Footer from '../components/Footer/Footer';
import Nav2 from "../components/Nav2/Nav2";

function WithAuthCatalog() {
    return (
        <>
            <Nav2/>
            <Catalog/>
            <Footer/>
        </>
    );
}

export default WithAuthCatalog;