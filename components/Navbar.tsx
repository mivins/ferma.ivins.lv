'use client';

import React, { useState } from 'react';
import { Language } from '@/lib/types';
import { Globe } from 'lucide-react';

interface NavbarProps {
  lang: Language;
  setLang: (l: Language) => void;
}

const Navbar: React.FC<NavbarProps> = ({ lang, setLang }) => {
  const [showJoke, setShowJoke] = useState(false);

  const handleLangClick = () => {
    // Prevent switching language and show the joke bubble
    setShowJoke(true);

    // Auto-hide after 3 seconds
    setTimeout(() => {
      setShowJoke(false);
    }, 3000);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-stone-200/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
           <span className="font-display text-2xl font-bold text-orange-600 tracking-wide">FERMA</span>
           <span className="text-xs font-bold bg-green-100 text-green-700 px-2 py-0.5 rounded-full uppercase tracking-wider">Atgriežas</span>
        </div>

        <div className="flex items-center gap-4 relative">
          <button
            onClick={handleLangClick}
            className="flex items-center gap-2 text-sm font-medium text-stone-600 hover:text-orange-600 transition-colors bg-stone-100 hover:bg-orange-50 px-3 py-1.5 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500/50"
            title="Mainīt valodu"
          >
            <Globe size={16} />
            <span className="uppercase">{lang}</span>
          </button>

          {/* Funny rejection bubble */}
          {showJoke && (
            <div className="absolute top-full right-0 mt-3 w-64 bg-stone-900 text-stone-50 text-sm font-medium p-4 rounded-2xl shadow-xl z-50 border border-stone-800">
                {/* Arrow */}
                <div className="absolute -top-1.5 right-6 w-3 h-3 bg-stone-900 border-l border-t border-stone-800 transform rotate-45"></div>

                <p className="leading-snug">Gribēji ko citu? Nebūs! 😎</p>
                <p className="text-stone-400 text-xs mt-2">Spēlējam tikai latviski.</p>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
