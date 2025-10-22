import type { ImagePlaceholder } from './placeholder-images';
import { PlaceHolderImages } from './placeholder-images';
import { Github, Linkedin, Twitter, type LucideIcon } from 'lucide-react';

export const NAV_LINKS = [
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

export const SOCIAL_LINKS: { name: string; url: string; icon: LucideIcon }[] = [
  { name: 'GitHub', url: 'https://github.com', icon: Github },
  { name: 'LinkedIn', url: 'https://linkedin.com', icon: Linkedin },
  { name: 'Twitter', url: 'https://twitter.com', icon: Twitter },
];

const getImage = (id: string): ImagePlaceholder => {
    const image = PlaceHolderImages.find(img => img.id === id);
    if (!image) throw new Error(`Image with id ${id} not found`);
    return image;
};

export const PROJECTS = [
  {
    id: 1,
    title: 'AI-Driven Skill Gap Analysis Platform',
    description: 'Built and deployed an AI-Driven Skill Gap Analysis Platform for Engineering Students in the EV Industry using MERN stack and n8n automation. Engineered a data pipeline to normalize over 700 unique skills with 97% accuracy using transformer models.',
    technologies: ['MERN', 'n8n', 'AI', 'Transformers', 'LLM'],
    image: getImage('project-1'),
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 2,
    title: 'Scalable Social Platform',
    description: 'Collaborated cross-functionally to deliver a scalable social platform, contributing to end-to-end project execution. Led frontend app development using React Native, while supporting backend development with Firebase and Google Cloud Platform.',
    technologies: ['React Native', 'Firebase', 'GCP', 'TypeSense', 'ClickUp'],
    image: getImage('project-2'),
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 3,
    title: 'Web Automation & Bot Development',
    description: 'Developed a quiz bot using Selenium for automated interactions. Created Instagram bots for automated commenting and liking. Built a Twitter sentiment analysis bot to analyze and categorize tweets.',
    technologies: ['Selenium', 'Python', 'Bot Development', 'Twitter API'],
    image: getImage('project-3'),
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 4,
    title: 'Data Science & Machine Learning Projects',
    description: 'Conducted sentiment analysis on Swiggy and Google reviews using HDBSCAN. Engineered a skill similarity system using embeddings and developed demand forecasting models.',
    technologies: ['Python', 'Machine Learning', 'HDBSCAN', 'Embeddings', 'Forecasting'],
    image: getImage('project-4'),
    liveUrl: '#',
    githubUrl: '#',
  },
];

export const SKILLS = {
  technical: [
    { name: 'Python/R/SQL', level: 90 },
    { name: 'React/React Native/Next.js', level: 85 },
    { name: 'Machine Learning', level: 80 },
    { name: 'Tableau/Power BI', level: 90 },
    { name: 'n8n automation', level: 88 },
    { name: 'Firebase/Azure/GCP', level: 85 },
    { name: 'Shopify/GA4', level: 82 },
  ],
  management: [
    { name: 'Agile Project Management', level: 95 },
    { name: 'Technical Leadership', level: 92 },
    { name: 'Problem Solving', level: 90 },
    { name: 'Strategic Planning', level: 88 },
    { name: 'Communication', level: 95 },
  ],
};

export const EXPERIENCE = [
  {
    role: 'AI Solutions Intern',
    company: 'Autobot India',
    duration: 'Apr 2025 - Jun 2025 (3 Months)',
    description: 'Built and deployed AI-Driven Skill Gap Analysis Platform for Engineering Students in the EV Industry using MERN stack and n8n automation. Engineered a data pipeline to normalize over 700 unique skills with 97% accuracy using transformer models. Automated the generation of a 130,000+ question bank for personalized assessments using LLMs and n8n workflows.',
  },
  {
    role: 'Self-Employed - Amazon Sales',
    company: 'Icedpaw',
    duration: 'Apr 2023 - Apr 2024 (13 Months)',
    description: 'Engaged in entrepreneurial activities in Amazon Sales and Instagram Marketing.',
  },
  {
    role: 'App Development Intern',
    company: 'XOOG, Bengaluru',
    duration: 'Aug 2022 - Feb 2023 (7 Months)',
    description: 'Collaborated cross-functionally to deliver a scalable social platform, contributing to end-to-end project execution. Managed project tasks in ClickUp, supporting Agile ceremonies. Led frontend app development using React Native, while supporting backend development with Firebase and Google Cloud Platform.',
  },
  {
    role: 'Remote Engineer',
    company: 'NTT Global, Bengaluru',
    duration: 'Jun 2021 - Mar 2022 (10 Months)',
    description: 'Provided remote IT support for key client operations. Managed Active Directory and Microsoft Azure services, including user permissions and license allocation. Administered remote servers and handled ITSM ticketing for efficient incident management.',
  },
];

export const EDUCATION = [
    {
        degree: 'Master of Business Administration (MBA), Business Analytics',
        institution: 'Christ University, Bengaluru',
        duration: 'Jan 2024 - Jan 2026',
    },
    {
        degree: 'Bachelor of Technology (B.Tech), Mechanical Engineering',
        institution: 'SRM University, Kattankulathur',
        duration: 'Jun 2016 - May 2020',
    }
]
