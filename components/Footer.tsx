import React from 'react';
import { Content } from '@/lib/types';

interface FooterProps {
  content: Content['footer'];
}

const Footer: React.FC<FooterProps> = ({ content }) => {
  return (
    <footer className="bg-stone-900 py-12 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col items-center justify-center text-center">
        <div className="mb-4">
            <span className="font-display text-2xl font-bold text-stone-500">FERMA</span>
        </div>

        <p className="text-stone-400 mb-6">
          {content.madeBy} <a href="https://ivins.lv" target="_blank" rel="noopener noreferrer" className="text-orange-500 hover:text-orange-400 font-bold hover:underline transition-colors">Mārtiņš Īviņš</a>
        </p>

        <p className="text-stone-600 text-sm">
          &copy; {new Date().getFullYear()} Ferma Reloaded. {content.rights}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
