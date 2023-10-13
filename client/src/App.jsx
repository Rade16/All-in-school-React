import React from 'react';
import './scss/main.scss';

import Header from './pages/Header/Header';
import Home from './pages/Home/Home';
import Footer from './components/Footer/Footer';

// import Nav2 from './components/Nav2/Nav2';
import Profile from './pages/Profile/Profile';
import Courses from './pages/Courses/Courses';
import Nav from './components/Nav/Nav';
function App() {
  return (
    <>
      {/* <Nav2 /> */}
      <Nav />

      {/* <Auth/> */}
      <Header />
      <Home />
      {/* <Profile /> */}
      {/* <Courses /> */}
      <Footer />
    </>
  );
}

export default App;
