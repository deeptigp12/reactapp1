import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './components/Login';
import Signup from './components/Signup';
import Gallery from './components/Gallery';
import Dashboard from './components/Dashboard';
import ContactUs from './components/ContactUs';

function App() {
  const appStyle = {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    backgroundColor: '#fffdf9',
    fontFamily: 'sans-serif'
  };

  const contentStyle = {
    flex: 1
  };

  return (
    <div style={appStyle}>
      <BrowserRouter>
        <Header />
        <div style={contentStyle}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contactus" element={<ContactUs />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
