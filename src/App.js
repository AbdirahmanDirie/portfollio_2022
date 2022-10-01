import React from 'react';
import Nav from './Components/Nav';
import './App.css';
import Header from './Components/Header';
import ShowCase from './Components/ShowCase';
import About from './Components/About';
import Skills from './Components/Skills';
import Footer from './Components/Footer';

const App = () => {
  return (

    <div>
     <Nav />
     <Header />
     <ShowCase />
     <About />
     <Skills />
     <Footer/>
    </div>

  );
}

export default App;
