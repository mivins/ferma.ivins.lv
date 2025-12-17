import React from 'react';
import { Content } from '../types';
import { FERMA_HERO_IMAGE } from '../constants';
import { ArrowDown } from 'lucide-react';

interface HeroProps {
  content: Content['hero'];
  scrollToWaitlist: () => void;
}

const Hero: React.FC<HeroProps> = ({ content, scrollToWaitlist }) => {
  return (
    <section className="relative pt-32 pb-16 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[500px] h-[500px] bg-orange-200 rounded-full blur-3xl opacity-30 animate-pulse" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[400px] h-[400px] bg-green-200 rounded-full blur-3xl opacity-30" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-800 px-4 py-1.5 rounded-full text-sm font-bold mb-6 border border-orange-200 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
              </span>
              {content.badge}
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight text-stone-900 mb-6 whitespace-pre-line">
              {content.title}
            </h1>
            
            <p className="text-lg lg:text-xl text-stone-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              {content.subtitle}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button 
                onClick={scrollToWaitlist}
                className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-4 px-8 rounded-2xl shadow-lg hover:shadow-orange-500/30 transform hover:-translate-y-1 transition-all duration-200 text-lg"
              >
                {content.cta}
              </button>
            </div>
          </div>

          <div className="flex-1 w-full max-w-lg lg:max-w-xl relative">
            <div className="relative transform hover:scale-105 transition-transform duration-500 ease-out">
                <div className="absolute inset-0 bg-gradient-to-tr from-orange-400 to-green-400 rounded-3xl blur-2xl opacity-20 transform rotate-6"></div>
                <img 
                    src={FERMA_HERO_IMAGE} 
                    alt="Ferma Logo with Vegetables" 
                    className="relative w-full h-auto drop-shadow-2xl z-10 rounded-3xl"
                />
            </div>
          </div>

        </div>
      </div>
      
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce text-stone-400 hidden lg:block">
        <ArrowDown size={24} />
      </div>
    </section>
  );
};

export default Hero;