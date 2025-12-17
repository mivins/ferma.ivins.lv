import React from 'react';
import Image from 'next/image';
import { Content } from '@/lib/types';
import { Lock } from 'lucide-react';

interface SneakPeekProps {
  content: Content['peek'];
}

const SneakPeek: React.FC<SneakPeekProps> = ({ content }) => {
  // Using actual screenshots provided
  const images = [
    "/ferma-scrn-1.png",
    "/ferma-scrn-2.png",
    "/ferma-scrn-3.png"
  ];

  return (
    <section className="py-24 bg-stone-50 overflow-hidden relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
            <div className="max-w-xl">
                <h2 className="text-3xl md:text-5xl font-bold text-stone-900 mb-4">{content.title}</h2>
                <p className="text-lg text-stone-600">{content.description}</p>
            </div>
            {/* Decorative line */}
            <div className="hidden md:block h-px flex-1 bg-stone-200 ml-8 mb-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {images.map((img, idx) => (
            <div key={idx} className="relative group rounded-3xl overflow-hidden shadow-lg border border-stone-200 aspect-[4/3]">
              <Image
                src={img}
                alt="Sneak peek"
                fill
                className="object-cover filter blur-md brightness-75 group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-stone-900/20 group-hover:bg-stone-900/10 transition-colors"></div>

              <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                <div className="bg-white/20 backdrop-blur-xl p-4 rounded-full mb-3 border border-white/30 shadow-2xl">
                    <Lock size={32} className="text-white drop-shadow-md" />
                </div>
                <span className="font-bold tracking-wide uppercase text-sm drop-shadow-lg">{content.lockText}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SneakPeek;
