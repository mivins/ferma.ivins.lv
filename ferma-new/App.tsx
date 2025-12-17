import React, { useState, useEffect } from 'react';
import { CONTENT } from './constants';
import { Language } from './types';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Nostalgia from './components/Nostalgia';
import SneakPeek from './components/SneakPeek';
import WaitlistForm from './components/WaitlistForm';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('lv');
  
  // Set default language based on browser preference logic if needed, 
  // currently defaults to LV as per request nature.

  const content = CONTENT[lang];

  const scrollToWaitlist = () => {
    const element = document.getElementById('waitlist');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 font-sans">
      <Navbar lang={lang} setLang={setLang} />
      
      <main>
        <Hero content={content.hero} scrollToWaitlist={scrollToWaitlist} />
        <Features content={content.features} />
        <Nostalgia content={content.nostalgia} />
        <SneakPeek content={content.peek} />
        <WaitlistForm content={content.waitlist} id="waitlist" />
      </main>

      <Footer content={content.footer} />
    </div>
  );
};

export default App;