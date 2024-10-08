import './css/style.css';
import * as React from 'react';
import { Route, Routes } from 'react-router-dom'; // Fixed the import here
import Navbar from './components/navbar/navbar.js';
import Home from './components/home/home.js';
import Asset from './components/asset/assets.js';
import History from './components/history/history.js';
import Login from './components/login/form.js';
import Footer from './footer/footer.js';

function App() {
  return (
        <div className="App">
          <div className="main-container">
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/assets" element={<Asset />} />
                <Route path="/history" element={<History/>} />
                <Route path="/login" element={<Login/>} />
            </Routes>
            <Footer />
          </div>
        </div>
  );
}

export default App;
