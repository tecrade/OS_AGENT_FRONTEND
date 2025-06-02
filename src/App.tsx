import React from 'react';
import Navbar from './components/Navbar';
import HeroBanner from './components/HeroBanner';
import Features from './components/Features';
import Demos from './components/Demos';
import About from './components/About';
import Footer from './components/Footer';
import './styles/animations.css';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <HeroBanner />
      <Features />
      <Demos />
      <About />
      <Footer />
    </div>
  );
}

export default App;