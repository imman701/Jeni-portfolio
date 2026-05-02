import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import { initData } from './dataManager';

function App() {
  useEffect(() => {
    // Initialize mock data in local storage
    initData();
  }, []);

  return (
    <div className="relative min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Portfolio />
        <Contact />
      </main>
      
      <footer className="py-8 border-t border-white/10 text-center text-textSecondary text-sm">
        <p>© {new Date().getFullYear()} Jenisha R. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
