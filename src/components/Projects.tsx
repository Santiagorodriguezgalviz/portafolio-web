import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { projects } from '../data/content';
import ProjectCard from './ProjectCard';

export default function Projects() {
  const { language } = useLanguage();

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50 dark:from-black dark:to-gray-900"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center gradient-text mb-16">
          {language === 'en' ? 'Projects' : 'Proyectos'}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="opacity-0 animate-fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }
      `}</style>
    </section>
  );
}