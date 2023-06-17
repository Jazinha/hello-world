import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './components/Navbar';
import MyRoutes from './Routes';
import Footer from './components/Footer';
import '@fortawesome/fontawesome-svg-core/styles.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <MyRoutes />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;





