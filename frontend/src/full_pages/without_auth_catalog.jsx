import React from 'react';
import '../scss/main.scss';

import Catalog from "../static_components/Catalog/Catalog";
import Footer from '../components/Footer/Footer';
import Nav from "../components/Nav/Nav";

function WithoutAuthCatalog() {
    return (
        <>
            <Nav/>
            <Catalog/>
            <Footer/>
        </>
    );
}

export default WithoutAuthCatalog;