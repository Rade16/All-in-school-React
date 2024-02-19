import React from 'react';
import '../scss/main.scss';

import Tests from "../static_components/Tests/Tests";
import Footer from '../components/Footer/Footer';
import Nav2 from "../components/Nav2/Nav2";

function TestsPage() {
    return (
        <>
            <Nav2/>
            <Tests/>
            <Footer/>
        </>
    );
}

export default TestsPage;