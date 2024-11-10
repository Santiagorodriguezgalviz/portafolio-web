import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import { translations } from '../data/content';
import { Globe, Sun, Moon } from 'lucide-react';
import { FlagIcon } from 'react-flag-kit';

export default function Navbar() {
  const { language, setLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const t = translations[language].nav;
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleLanguage = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const changeLanguage = (lang: 'en' | 'es') => {
    setLanguage(lang);
    setDropdownOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 dark:bg-black/80 backdrop-blur-md z-50 border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-1 flex justify-center sm:justify-between">
            <div className="flex items-center">
              <a href="#" className="text-xl font-bold gradient-text">SR</a>
            </div>
            <div className="hidden sm:flex items-center space-x-8">
              <a href="#about" className="nav-link">{t.about}</a>
              <a href="#skills" className="nav-link">{t.skills}</a>
              <a href="#projects" className="nav-link">{t.projects}</a>
              <a href="#contact" className="nav-link">{t.contact}</a>
            </div>
          </div>
          <div className="flex items-center space-x-4 relative ml-4">
            <div className="flex items-center space-x-2">
              <button
                onClick={toggleLanguage}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors flex items-center"
                aria-label="Toggle language"
              >
                <Globe className="w-5 h-5 text-gray-600 dark:text-gray-300" />
              </button>
              {isDropdownOpen && (
                <div className="absolute right-0 mt-32 w-32 bg-gray-900 dark:bg-gray-700 border border-gray-600 rounded-lg shadow-lg z-50 transition-all duration-300 ease-in-out transform scale-95 origin-top-right">
                  <button onClick={() => changeLanguage('en')} className="flex items-center p-2 hover:bg-purple-600 dark:hover:bg-purple-800 w-full rounded-lg transition-colors text-white">
                    <FlagIcon code="US" size={20} />
                    <span className="ml-2 font-semibold">Inglés</span>
                  </button>
                  <button onClick={() => changeLanguage('es')} className="flex items-center p-2 hover:bg-purple-600 dark:hover:bg-purple-800 w-full rounded-lg transition-colors text-white">
                    <FlagIcon code="ES" size={20} />
                    <span className="ml-2 font-semibold">Español</span>
                  </button>
                </div>
              )}
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? (
                  <Sun className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                ) : (
                  <Moon className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}