import React from 'react';
import './scss/main.scss';

import Header from './pages/Header/Header';
import Home from './pages/Home/Home';
import Footer from './components/Footer/Footer';

import Nav2 from './components/Nav2/Nav2';
import Settings from './pages/Settings/Settings';
import Profile from './pages/Profile/Profile';
import Courses from './pages/Courses/Courses';
import Nav from './components/Nav/Nav';
import Catalog from './pages/Catalog/Catalog';
import AboutCourse from './components/AboutCourse/AboutCourse';
import Group from './pages/Group/Group';
function App() {
  return (
    <>
      <Nav />
      {/* <AboutCourse /> */}
    <Group/>
      {/* <Settings /> */}
      {/* <Nav /> */}
      {/* <Catalog /> */}
      {/* <Auth/> */}
      {/* <Header /> */}
      {/* <Home /> */}
      {/* <Profile /> */}
      {/* <Courses /> */}
      <Footer />
    </>
  );
}

export default App;
