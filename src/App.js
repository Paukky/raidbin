import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer'; // Import the Footer component
import { Route, Routes } from 'react-router-dom';
import M1S from './pages/M1S';
import Home from './pages/Home';

const App = () => {
  return (
    <div>
      {/* Navbar will persist across pages */}
      <Navbar />
      
      {/* Define routes */}
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route path='/m1s' element={<M1S/>} />
      </Routes>

      <Footer/>
    </div>
  );
}

export default App;