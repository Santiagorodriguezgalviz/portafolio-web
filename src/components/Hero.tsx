import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/content';
import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';

export default function Hero() {
  const { language } = useLanguage();
  const t = translations[language].hero;

  return (
    <section className="min-h-screen relative flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 to-transparent dark:from-purple-500/10"></div>
      
      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full animate-pulse-slow opacity-30 dark:opacity-20">
          <div className="w-full h-full bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-full blur-3xl"></div>
        </div>
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full animate-pulse-slow opacity-30 dark:opacity-20">
          <div className="w-full h-full bg-gradient-to-tl from-purple-500/30 to-pink-500/30 rounded-full blur-3xl"></div>
        </div>
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 animate-float">
          <span className="gradient-text">{t.greeting}</span>
        </h1>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl text-gray-600 dark:text-gray-300 mb-8">{t.role}</h2>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
          {t.description}
        </p>
        
        <div className="flex justify-center space-x-6 mb-16">
          <SocialLink href="https://github.com/Santiagorodriguezgalviz" icon={Github} label="GitHub" />
          <SocialLink href="mailto:rodriguezsanti95@gmail.com" icon={Mail} label="Email" />
          <SocialLink href="https://linkedin.com/in/yourusername" icon={Linkedin} label="LinkedIn" />
        </div>

        <a
          href="#about"
          className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 animate-bounce"
          aria-label="Scroll to About section"
        >
          <ChevronDown className="w-6 h-6 text-gray-600 dark:text-gray-300" />
        </a>
      </div>
    </section>
  );
}

function SocialLink({ href, icon: Icon, label }: { href: string; icon: any; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative p-4 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
      aria-label={label}
    >
      <Icon className="w-6 h-6 text-gray-600 dark:text-gray-300 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors" />
      <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-gray-900 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity">
        {label}
      </span>
    </a>
  );
}