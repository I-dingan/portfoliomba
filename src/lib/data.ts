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
    title: 'CI/CD Pipeline Automation',
    description: 'A comprehensive CI/CD pipeline solution for a microservices-based application, reducing deployment times by 60% and improving developer productivity. Implemented using Jenkins, Docker, and Kubernetes.',
    technologies: ['Jenkins', 'Docker', 'Kubernetes', 'Groovy', 'Helm'],
    image: getImage('project-1'),
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 2,
    title: 'Agile Project Management Dashboard',
    description: 'A real-time dashboard for tracking Agile sprints, monitoring team velocity, and visualizing burndown charts. Integrated with Jira API to provide seamless data synchronization.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Jira API'],
    image: getImage('project-2'),
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 3,
    title: 'Cloud Infrastructure Orchestration',
    description: 'Designed and implemented a scalable and resilient cloud infrastructure on AWS using Terraform. Automated environment provisioning, configuration management, and implemented robust monitoring with Prometheus and Grafana.',
    technologies: ['AWS', 'Terraform', 'Ansible', 'Prometheus', 'Grafana'],
    image: getImage('project-3'),
    liveUrl: '#',
    githubUrl: '#',
  },
];

export const SKILLS = {
  technical: [
    { name: 'JavaScript/TypeScript', level: 95 },
    { name: 'React/Next.js', level: 90 },
    { name: 'Node.js/Express', level: 85 },
    { name: 'Python', level: 80 },
    { name: 'Docker & Kubernetes', level: 90 },
    { name: 'AWS/GCP', level: 85 },
    { name: 'Terraform/IaC', level: 88 },
  ],
  methodologies: [
    { name: 'Agile/Scrum', level: 95 },
    { name: 'DevOps Principles', level: 98 },
    { name: 'CI/CD', level: 92 },
    { name: 'Test-Driven Development', level: 85 },
    { name: 'Site Reliability Engineering', level: 80 },
  ],
};

export const EXPERIENCE = [
  {
    role: 'Senior DevOps Engineer',
    company: 'Tech Solutions Inc.',
    duration: '2020 - Present',
    description: 'Led the design and implementation of CI/CD pipelines for multiple projects. Managed cloud infrastructure on AWS, optimizing for cost and performance. Championed the adoption of Agile methodologies and DevOps culture across teams, resulting in faster release cycles and improved product quality.',
  },
  {
    role: 'Full-Stack Developer',
    company: 'Innovate Co.',
    duration: '2018 - 2020',
    description: 'Developed and maintained full-stack web applications using the MERN stack. Collaborated with cross-functional teams in an Agile environment to deliver high-quality software. Introduced containerization with Docker to streamline development and deployment processes.',
  },
  {
    role: 'Software Engineer Intern',
    company: 'CodeCrafters',
    duration: '2017 - 2018',
    description: 'Assisted in the development of a new client-facing platform. Gained hands-on experience with version control (Git), automated testing, and participated in daily Scrum meetings.',
  },
];
