import React from 'react';
import {BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import video from './Print.mp4';

import About from './About';
import Shop from './Shop';
import OurWorks from './OurWorks';
import Contact from './Contact';


function App() {
  return <Router>

  <div className='cont'>
      <video autoPlay muted loop>
    <source src={video} type="video/mp4" />
        </video>
      </div>

    <nav>
      <Link to="/about" className="link">About</Link>      
      <Link to="/shop" className="link">Shop</Link>
      <Link to="/ourworks" className="link">Our works</Link>
      <Link to="/contact" className="link">Contact Us</Link>
    </nav>
    
        <Routes>
      <Route path="/about" element={<About/>} />      
      <Route path="/shop" element={<Shop/>} />
      <Route path="/ourworks" element={<OurWorks/>} />
      <Route path="/contact" element={<Contact/>} />
      

    </Routes>
    </Router>
}
export default App;