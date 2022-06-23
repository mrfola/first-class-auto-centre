import React from "react";
import Home from './components/pages/Home/Home';
import About from './components/pages/About/About';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

function App() 
{
  return (
    <Router>
      <Routes>
        <Route path="/about" element={<About/>} />
        <Route path="/" element={<Home/>} />
      </Routes>
    </Router>
  );
}

export default App;
