<<<<<<< HEAD
import React from 'react';
import './index.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/ContactUs';
import Lost from './pages/404';
=======
import Body from './components/Body';
import Navbar from './components/Navbar';
<<<<<<< Updated upstream

import Home from './pages/Home'
import About from './pages/About';

import Home from './pages/Home';

=======
>>>>>>> Stashed changes
import './index.css';

>>>>>>> fork/update-James

function App() {
  return (
<<<<<<< Updated upstream
    <div className='bg-img'>
<<<<<<< HEAD
      <div className="container mx-auto scroll-behavior: smooth;">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Lost />} />
        </Routes>
      </div>
=======
    <div className="container mx-auto scroll-behavior: smooth; ">
     <Home />
=======
    <div className="App">
      <Navbar />
     <Body />
>>>>>>> Stashed changes
>>>>>>> fork/update-James
    </div>
  );
}

export default App;
