import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/content';
import { skills } from '../data/content';

export default function Skills() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-black"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center gradient-text mb-16">
          {t.nav.skills}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="card p-6 group"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="p-3 rounded-xl bg-purple-50 dark:bg-purple-900/20 group-hover:scale-110 transition-transform duration-300">
                  <skill.icon className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {skill.name}
                </h3>
              </div>
              
              <div className="relative h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                <div
                  className="absolute top-0 left-0 h-full bg-gradient-to-r from-purple-600 to-pink-600 rounded-full transition-all duration-1000 ease-out"
                  style={{
                    width: `${skill.level}%`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}