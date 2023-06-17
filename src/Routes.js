import React from 'react';
import { Route, Routes as RouterRoutes } from 'react-router-dom';
import About from './components/About';
import Projects from './components/Projects';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact'; 


const MyRoutes = () => {
  return (
    <RouterRoutes>
      <Route exact path="/about" element={<About />} />
      <Route exact path="/projects" element={<Projects />} />
      <Route exact path="/portfolio" element={<Portfolio />} />
      <Route exact path="/contact" element={<Contact />} />
    </RouterRoutes>
  );
};

export default MyRoutes;
