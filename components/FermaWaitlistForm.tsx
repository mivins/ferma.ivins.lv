'use client';

import React, { useState } from 'react';
import { Content, FormData } from '@/lib/types';
import { Sprout, Check, Loader2 } from 'lucide-react';

interface WaitlistFormProps {
  content: Content['waitlist'];
  id: string;
}

const FermaWaitlistForm: React.FC<WaitlistFormProps> = ({ content, id }) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    isBeta: false,
    isHelper: false,
    isSponsor: false
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', isBeta: false, isHelper: false, isSponsor: false });
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  return (
    <section id={id} className="py-24 relative bg-gradient-to-br from-green-900 to-stone-900 text-white overflow-hidden">
      {/* Abstract patterns */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-stone-50 to-transparent opacity-10"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl">

          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-tr from-green-400 to-green-600 rounded-2xl mb-6 shadow-lg shadow-green-500/20">
                <Sprout size={32} className="text-white" />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">{content.title}</h2>
            <p className="text-stone-300 text-lg">{content.description}</p>
          </div>

          {status === 'success' ? (
            <div className="bg-green-500/20 border border-green-500/50 rounded-2xl p-8 text-center animate-fade-in">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">{content.success}</h3>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-stone-400 mb-2 ml-1">
                    {content.namePlaceholder}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/10 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all text-white placeholder-stone-500"
                    placeholder={content.namePlaceholder}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-stone-400 mb-2 ml-1">
                    {content.emailPlaceholder}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/10 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all text-white placeholder-stone-500"
                    placeholder="janis@epasts.lv"
                  />
                </div>
              </div>

              <div className="space-y-3 bg-black/20 p-6 rounded-2xl border border-white/5">
                <label className="flex items-center space-x-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    name="isBeta"
                    checked={formData.isBeta}
                    onChange={handleChange}
                    className="w-5 h-5 text-green-500 rounded focus:ring-green-500 border-gray-500 bg-gray-700"
                  />
                  <span className="text-stone-300 group-hover:text-white transition-colors">{content.checkboxes.beta}</span>
                </label>
                <label className="flex items-center space-x-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    name="isHelper"
                    checked={formData.isHelper}
                    onChange={handleChange}
                    className="w-5 h-5 text-green-500 rounded focus:ring-green-500 border-gray-500 bg-gray-700"
                  />
                  <span className="text-stone-300 group-hover:text-white transition-colors">{content.checkboxes.help}</span>
                </label>
                <label className="flex items-center space-x-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    name="isSponsor"
                    checked={formData.isSponsor}
                    onChange={handleChange}
                    className="w-5 h-5 text-green-500 rounded focus:ring-green-500 border-gray-500 bg-gray-700"
                  />
                  <span className="text-stone-300 group-hover:text-white transition-colors">{content.checkboxes.sponsor}</span>
                </label>
              </div>

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-400 hover:to-emerald-500 text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-green-500/20 transform hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {status === 'submitting' ? (
                  <Loader2 className="animate-spin mr-2" />
                ) : null}
                {content.submit}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default FermaWaitlistForm;
