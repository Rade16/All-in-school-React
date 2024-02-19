import React from 'react';
import '../scss/main.scss';

import TestsResults from "../static_components/TestsResults/TestsResults";
import Footer from '../components/Footer/Footer';
import Nav2 from "../components/Nav2/Nav2";

function TestsResultsPage() {
    return (
        <>
            <Nav2/>
            <TestsResults/>
            <Footer/>
        </>
    );
}

export default TestsResultsPage;