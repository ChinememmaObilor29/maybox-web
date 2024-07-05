import Body from './components/Body';
import Navbar from './components/Navbar';

import Home from './pages/Home'
import About from './pages/About';

import Home from './pages/Home';

import './index.css';
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className='bg-img'>
    <div className="container mx-auto scroll-behavior: smooth; ">
     <Home />
    </div>
     </div>
  );
}

export default App;
