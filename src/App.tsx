import React from 'react';
import Navbar from './components/layout/Navbar';
import Hero from './components/home/Hero';
import Services from './components/home/Services';

function App() {
  return (
    <div className="min-h-screen bg-[#FIF2F4]">
      <Navbar />
      <Hero />
      <Services />
    </div>
  );
}

export default App;