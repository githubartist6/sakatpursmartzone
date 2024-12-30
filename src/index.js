import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { FuterComponants, MainContent } from './components/Home/home';
import { Navbar } from './components/Navbar/navBavr';
import { AllFuter } from './components/Home/allFuter';
import { AboutFooter } from './components/Footer/aboutFooter';
import { AllFuterHeding } from './components/Home/allFuterHeding';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
        <Navbar /> 
        <Routes>
          <Route path="/" element={[<MainContent />, <FuterComponants />]} />
          <Route path="/courses" element={[<AllFuterHeding />, <AllFuter />]} />
        </Routes>
        <AboutFooter />
    </Router>
);
