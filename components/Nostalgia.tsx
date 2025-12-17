import React from 'react';
import { Content } from '@/lib/types';
import { Quote } from 'lucide-react';

interface NostalgiaProps {
  content: Content['nostalgia'];
}

const Nostalgia: React.FC<NostalgiaProps> = ({ content }) => {
  return (
    <section className="py-24 bg-orange-50 relative overflow-hidden">
      {/* Background decoration - Abstract vegetables */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-10 -left-10 text-9xl transform -rotate-12 opacity-5 select-none">🥕</div>
        <div className="absolute bottom-10 -right-10 text-9xl transform rotate-12 opacity-5 select-none">🍅</div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[20rem] opacity-[0.03] select-none">🚜</div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-stone-900 mb-4">{content.title}</h2>
          <p className="text-lg text-stone-600 font-medium">{content.subtitle}</p>
        </div>

        {/* Grid Layout: Stacks on mobile, 3 columns on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 lg:gap-10">
          {content.cards.map((card, idx) => {
             // Rotation logic for desktop to make it look organic
             let rotationClass = 'md:rotate-0';
             let translateClass = 'md:translate-y-0';

             if (idx === 0) {
                rotationClass = 'md:-rotate-2';
                translateClass = 'md:translate-y-4';
             } else if (idx === 1) {
                rotationClass = 'md:rotate-1';
                translateClass = 'md:-translate-y-4';
             } else if (idx === 2) {
                rotationClass = 'md:rotate-3';
                translateClass = 'md:translate-y-2';
             }

             return (
              <div
                key={idx}
                className={`
                  relative bg-white p-8 rounded-3xl shadow-sm border border-stone-100
                  hover:shadow-xl hover:scale-105 hover:z-10 hover:rotate-0 hover:translate-y-0 hover:border-orange-200
                  transition-all duration-300 ease-out
                  flex flex-col
                  ${rotationClass} ${translateClass}
                `}
              >
                {/* Tape effect at top center */}
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-12 h-6 bg-yellow-100/50 backdrop-blur-sm border border-yellow-200/50 shadow-sm rotate-1 rounded-sm hidden md:block opacity-70"></div>

                <div className="text-5xl mb-6 self-center animate-bounce-slow">{card.emoji}</div>

                <div className="relative flex-grow">
                  <Quote className="absolute -top-4 -left-2 text-orange-100 w-10 h-10 -z-10 transform -scale-x-100" />
                  <p className="text-xl font-bold text-stone-800 italic mb-6 leading-relaxed text-center">
                    &ldquo;{card.text}&rdquo;
                  </p>
                </div>

                <div className="flex items-center justify-center gap-3 pt-4 border-t border-stone-100">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-100 to-orange-200 flex items-center justify-center text-xs font-bold text-orange-700 shadow-inner">
                      {card.author.charAt(0)}
                  </div>
                  <p className="text-sm font-bold text-stone-400 uppercase tracking-widest">
                    {card.author}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Nostalgia;
