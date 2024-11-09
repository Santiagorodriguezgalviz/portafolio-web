import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/content';
import { Send, CheckCircle, XCircle } from 'lucide-react';

export default function Contact() {
  const { language } = useLanguage();
  const t = translations[language].contact;
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('https://formspree.io/f/your-form-id', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formState)
      });

      if (response.ok) {
        setStatus('success');
        setFormState({ name: '', email: '', message: '' });
        setTimeout(() => setStatus('idle'), 3000);
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-black"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center gradient-text mb-16">
          {t.title}
        </h2>

        <form onSubmit={handleSubmit} className="card p-8 space-y-6">
          <div className="space-y-2">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              {t.name}
            </label>
            <input
              type="text"
              id="name"
              value={formState.name}
              onChange={(e) => setFormState({ ...formState, name: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 
                       text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent
                       transition-all duration-200"
              required
              disabled={status === 'loading'}
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              {t.email}
            </label>
            <input
              type="email"
              id="email"
              value={formState.email}
              onChange={(e) => setFormState({ ...formState, email: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 
                       text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent
                       transition-all duration-200"
              required
              disabled={status === 'loading'}
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              {t.message}
            </label>
            <textarea
              id="message"
              value={formState.message}
              onChange={(e) => setFormState({ ...formState, message: e.target.value })}
              rows={5}
              className="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 
                       text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent
                       transition-all duration-200 resize-none"
              required
              disabled={status === 'loading'}
            />
          </div>

          <button
            type="submit"
            disabled={status === 'loading'}
            className="button-primary w-full flex items-center justify-center space-x-2"
          >
            <span>{status === 'loading' ? t.sending : t.send}</span>
            {status === 'idle' && <Send className="w-5 h-5" />}
            {status === 'loading' && (
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            )}
            {status === 'success' && <CheckCircle className="w-5 h-5 text-green-400" />}
            {status === 'error' && <XCircle className="w-5 h-5 text-red-400" />}
          </button>

          {status === 'success' && (
            <p className="text-green-500 dark:text-green-400 text-center">{t.success}</p>
          )}
          {status === 'error' && (
            <p className="text-red-500 dark:text-red-400 text-center">{t.error}</p>
          )}
        </form>
      </div>
    </section>
  );
}