
import React from 'react';
import './scss/main.scss';


import Header from './pages/Header/Header';
import Home from './pages/Home/Home';
import Footer from './components/Footer/Footer';
import Nav from "./components/Nav/Nav";
import Reg from "./pages/Reg/Reg.jsx";
function App() {
  return (
    <>
        <Nav />
        {/*<Reg/>*/}
      <Header />
      <Home />
      <Footer />
    </>
  );
}

export default App;
