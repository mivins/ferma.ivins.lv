import React from 'react';
import { Content } from '../types';
import { Heart, Smartphone, Clock, Users } from 'lucide-react';

interface FeaturesProps {
  content: Content['features'];
}

const getIcon = (iconName: string) => {
  switch (iconName) {
    case 'heart': return <Heart className="text-red-500" size={32} />;
    case 'smartphone': return <Smartphone className="text-blue-500" size={32} />;
    case 'clock': return <Clock className="text-orange-500" size={32} />;
    case 'users': return <Users className="text-green-500" size={32} />;
    default: return <Heart size={32} />;
  }
};

const Features: React.FC<FeaturesProps> = ({ content }) => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-stone-900 mb-4">{content.title}</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-green-400 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {content.list.map((feature, idx) => (
            <div 
              key={idx}
              className="group bg-stone-50 hover:bg-white p-8 rounded-3xl border border-stone-100 hover:border-orange-200 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-md mb-6 group-hover:scale-110 transition-transform">
                {getIcon(feature.icon)}
              </div>
              <h3 className="text-xl font-bold text-stone-900 mb-3">{feature.title}</h3>
              <p className="text-stone-600 leading-relaxed text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;