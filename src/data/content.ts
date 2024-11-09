import { Project } from '../types';
import { Code, Database, Globe, Layout, Server, Smartphone } from 'lucide-react';

export const skills = [
  {
    name: 'Frontend Development',
    icon: Layout,
    level: 90
  },
  {
    name: 'React.js',
    icon: Code,
    level: 85
  },
  {
    name: 'Responsive Design',
    icon: Smartphone,
    level: 95
  },
  {
    name: 'Backend Development',
    icon: Server,
    level: 75
  },
  {
    name: 'Databases',
    icon: Database,
    level: 70
  },
  {
    name: 'Web Performance',
    icon: Globe,
    level: 80
  }
];

export const projects: Project[] = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: {
      en: "Full-featured e-commerce platform with React and Redux",
      es: "Plataforma de comercio electrónico completa con React y Redux"
    },
    image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&q=80&w=1600",
    tags: ["React", "Redux", "Tailwind CSS", "Node.js"],
    link: "https://example.com",
    github: "https://github.com/Santiagorodriguezgalviz"
  },
  {
    id: 2,
    title: "AI Dashboard",
    description: {
      en: "Real-time analytics dashboard with AI insights",
      es: "Panel de análisis en tiempo real con IA"
    },
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1600",
    tags: ["React", "TypeScript", "D3.js", "API"],
    link: "https://example.com",
    github: "https://github.com/Santiagorodriguezgalviz"
  }
];

export const translations = {
  en: {
    nav: {
      about: "About",
      skills: "Skills",
      projects: "Projects",
      contact: "Contact"
    },
    hero: {
      greeting: "Hi, I'm Santiago Rodriguez",
      role: "Frontend Developer",
      description: "Crafting beautiful and performant web experiences"
    },
    about: {
      title: "About Me",
      description: "I'm a passionate frontend developer focused on creating intuitive and responsive user interfaces. With a keen eye for design and a love for clean code, I strive to build web applications that not only look beautiful but also provide exceptional user experiences. I'm constantly learning and exploring new technologies to stay at the forefront of web development.",
      downloadCV: "Download CV"
    },
    contact: {
      title: "Get in Touch",
      name: "Name",
      email: "Email",
      message: "Message",
      send: "Send Message",
      sending: "Sending...",
      success: "Message sent successfully!",
      error: "Failed to send message. Please try again."
    }
  },
  es: {
    nav: {
      about: "Sobre Mí",
      skills: "Habilidades",
      projects: "Proyectos",
      contact: "Contacto"
    },
    hero: {
      greeting: "Hola, soy Santiago Rodriguez",
      role: "Desarrollador Frontend",
      description: "Creando experiencias web hermosas y eficientes"
    },
    about: {
      title: "Sobre Mí",
      description: "Soy un desarrollador frontend apasionado enfocado en crear interfaces de usuario intuitivas y responsivas. Con un ojo agudo para el diseño y amor por el código limpio, me esfuerzo por construir aplicaciones web que no solo se vean hermosas sino que también brinden experiencias de usuario excepcionales. Constantemente estoy aprendiendo y explorando nuevas tecnologías para mantenerme a la vanguardia del desarrollo web.",
      downloadCV: "Descargar CV"
    },
    contact: {
      title: "Contacto",
      name: "Nombre",
      email: "Correo",
      message: "Mensaje",
      send: "Enviar Mensaje",
      sending: "Enviando...",
      success: "¡Mensaje enviado con éxito!",
      error: "Error al enviar el mensaje. Por favor, intenta de nuevo."
    }
  }
};