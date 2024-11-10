import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/content';
import { FileDown } from 'lucide-react';

export default function About() {
  const { language } = useLanguage();
  const t = translations[language].about;

  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-12">
          {t.title}
        </h2>
        <div className="bg-gray-800 rounded-xl p-8 shadow-xl">
          <p className="text-gray-300 text-lg leading-relaxed mb-8">
            {t.description}
          </p>
          <div className="flex justify-center">
            <a
              href="/Hoja de vida.pdf"
              download
              className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg text-white font-semibold hover:opacity-90 transition-all duration-200 transform hover:scale-105"
            >
              <FileDown className="w-5 h-5" />
              <span>{t.downloadCV}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}