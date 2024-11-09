export interface Project {
  id: number;
  title: string;
  description: {
    en: string;
    es: string;
  };
  image: string;
  tags: string[];
  link: string;
  github: string;
}