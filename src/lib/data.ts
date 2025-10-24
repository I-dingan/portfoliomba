
import type { ImagePlaceholder } from './placeholder-images';
import { PlaceHolderImages } from './placeholder-images';
import { Github, Linkedin, Twitter, type LucideIcon } from 'lucide-react';

export const NAV_LINKS = [
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Education', href: '#education' },
  { name: 'Dashboards', href: '#power-bi-reports' },
  { name: 'Contact', href: '#contact' },
];

export const SOCIAL_LINKS: { name: string; url: string; icon: LucideIcon }[] = [
  { name: 'GitHub', url: 'https://github.com/I-dingan', icon: Github },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/ashwin-satheesh-b1ab78161', icon: Linkedin },
  { name: 'Twitter', url: 'https://x.com/AshwinSatheesh9', icon: Twitter },
];

const getImage = (id: string): ImagePlaceholder => {
    const image = PlaceHolderImages.find(img => img.id === id);
    if (!image) {
      // Return a default placeholder if image is not found
      return {
        id: 'default',
        description: 'Project placeholder',
        imageUrl: 'https://picsum.photos/seed/default/600/400',
        imageHint: 'project code'
      };
    }
    return image;
};

export const PROJECTS = [
  {
    id: 0,
    title: 'AI-Driven Skill Gap Analysis Platform',
    description: 'Built and deployed an AI-Driven Skill Gap Analysis Platform for Engineering Students in the EV Industry using MERN stack and n8n automation. Engineered a data pipeline to normalize over 700 unique skills with 97% accuracy using transformer models. Automated the generation of a 130,000+ question bank for personalized assessments using LLMs and n8n workflows.',
    technologies: ['MERN', 'n8n', 'AI', 'Transformers', 'LLM'],
    image: getImage('project-1'),
    liveUrl: 'https://autobotsreact.onrender.com/login',
    githubUrl: 'https://github.com/Ashwin-Satheesh',
  },
  {
    id: 1,
    title: 'Medium Build',
    description: 'A clone of the popular blogging platform Medium, built with Next.js and Sanity IO for content management.',
    technologies: ['Sanity IO', 'Next Js', 'React Js', 'Typescript'],
    image: getImage('medium-build'),
    liveUrl: 'https://medium-clone-flax.vercel.app/',
    githubUrl: 'https://github.com/Ashwin-Satheesh',
  },
  {
    id: 2,
    title: 'Facebook Build',
    description: 'A clone of the social media platform Facebook, featuring core functionalities and UI, built with Next.js and Firebase.',
    technologies: ['Firebase', 'Next Js', 'React Js', 'Javascript'],
    image: getImage('facebook-build'),
    liveUrl: 'https://facebook-clone-beta-sable.vercel.app/',
    githubUrl: 'https://github.com/Ashwin-Satheesh',
  },
  {
    id: 3,
    title: 'Instagram Build',
    description: 'A clone of the photo-sharing app Instagram, implemented with Next.js and Firebase.',
    technologies: ['Firebase', 'Next Js', 'React Js', 'Javascript'],
    image: getImage('instagram-build'),
    liveUrl: 'https://insta-clone-beryl-nine.vercel.app/',
    githubUrl: 'https://github.com/Ashwin-Satheesh',
  },
  {
    id: 4,
    title: 'Whatsapp Build',
    description: 'A web-based clone of the popular messaging application WhatsApp.',
    technologies: ['Firebase', 'Next Js', 'React Js', 'Javascript'],
    image: getImage('whatsapp-build'),
    liveUrl: 'https://whatsapp-clone-psi-nine.vercel.app/',
    githubUrl: 'https://github.com/Ashwin-Satheesh',
  },
  {
    id: 5,
    title: 'Hulu Build',
    description: 'A clone of the streaming service Hulu, built to showcase movie and TV show browsing.',
    technologies: ['Firebase', 'Next Js', 'React Js', 'Javascript'],
    image: getImage('hulu-build'),
    liveUrl: 'https://hulu-clone-nu-hazel.vercel.app/',
    githubUrl: 'https://github.com/Ashwin-Satheesh',
  },
  {
    id: 6,
    title: 'Google Search Build',
    description: 'A clone of the Google search engine, demonstrating API integration and search result display.',
    technologies: ['Firebase', 'Next Js', 'React Js', 'Javascript'],
    image: getImage('google-build'),
    liveUrl: 'https://google-search-clone-8jwmwgfr7-i-dingan.vercel.app/',
    githubUrl: 'https://github.com/Ashwin-Satheesh',
  },
  {
    id: 7,
    title: 'Amazon Build',
    description: 'A clone of the e-commerce giant Amazon, including product listings and a checkout process with Stripe.',
    technologies: ['Firebase', 'Next Js', 'React Js', 'Stripe', 'Javascript'],
    image: getImage('amazon-build'),
    liveUrl: 'https://amazon-clone-nu-murex.vercel.app/',
    githubUrl: 'https://github.com/Ashwin-Satheesh',
  },
  {
    id: 8,
    title: 'Deliveroo App Build',
    description: 'A mobile app clone of the food delivery service Deliveroo, built with React Native and Expo.',
    technologies: ['Sanity IO', 'Expo', 'React Native', 'Javascript'],
    image: getImage('deliveroo-build'),
    liveUrl: '#',
    githubUrl: 'https://github.com/I-dingan/Deliveroo-react-native',
  }
];


export const SKILLS = {
  technical: [
    { name: 'Python/R/SQL', level: 90 },
    { name: 'React/Next.js', level: 85 },
    { name: 'Machine Learning', level: 80 },
    { name: 'Tableau/Power BI', level: 90 },
    { name: 'n8n automation', level: 88 },
    { name: 'Firebase/Azure/GCP', level: 85 },
    { name: 'Shopify/GA4', level: 82 },
    { name: 'Microsoft 365', level: 90 },
    { name: 'Active Directory', level: 80 },
  ],
  management: [
    { name: 'Agile/Scrum', level: 95 },
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
    duration: 'Apr 2025 - Jun 2025',
    description: 'Built and deployed an AI-Driven Skill Gap Analysis Platform for Engineering Students in the EV Industry using MERN stack and n8n automation. Engineered a data pipeline to normalize over 700 unique skills with 97% accuracy using transformer models. Automated the generation of a 130,000+ question bank for personalized assessments using LLMs and n8n workflows.',
  },
  {
    role: 'Self-Employed - Amazon Sales',
    company: 'Icedpaw',
    duration: 'Apr 2023 - Apr 2024',
    description: 'Engaged in entrepreneurial activities in Amazon Sales and Instagram Marketing.',
  },
  {
    role: 'App Development Intern',
    company: 'XOOG, Bengaluru',
    duration: 'Aug 2022 - Feb 2023',
    description: 'Collaborated cross-functionally to deliver a scalable social platform, contributing to end-to-end project execution. Managed project tasks in ClickUp, supporting Agile ceremonies. Led frontend app development using React Native, while supporting backend development with Firebase and Google Cloud Platform.',
  },
  {
    role: 'Remote Engineer',
    company: 'NTT Global, Bengaluru',
    duration: 'Jun 2021 - Mar 2022',
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
];

export const POWER_BI_REPORTS = [
  {
    id: "power-bi-1",
    title: "Finance Dashboard",
    description: "An interactive dashboard providing insights into financial performance, including revenue, expenses, and profitability metrics. This report helps in making data-driven decisions for financial management.",
    embedUrl:"https://app.powerbi.com/view?r=eyJrIjoiMjRiMTk5MTItOTc2YS00MjliLThlMDctNmY5YzEyNmYyMTExIiwidCI6IjEwZGU2MjRjLWMyM2ItNDA2NS1hMjFlLTg5MWE5Y2YzZTc3ZCJ9&embedImagePlaceholder=true",
    image: getImage("finance-dashboard")
  }
];


export const CERTIFICATIONS = [
  'Microsoft Power BI Desktop for Business Intelligence-Udemy',
  'The Complete Python Developer-Udemy',
  'RA: Data Science and Supply Chain analytics. A-Z with Python_Udemy',
  'The Business Intelligence Analyst Course 2025-Udemy',
];

export const OTHER_PROJECTS = [
  {
    category: 'Web Automation & Bot Development',
    items: [
      'Developed a quiz bot using Selenium for automated interactions.',
      'Created Instagram bots for automated commenting and liking.',
      'Built a Twitter sentiment analysis bot to analyze and categorize tweets.',
    ]
  },
  {
    category: 'Data Science & Machine Learning',
    items: [
      'Conducted sentiment analysis and customer segmentation on Swiggy and Google reviews using clustering algorithms like HDBSCAN.',
      'Engineered a skill similarity system using embeddings to match related skills.',
      'Developed demand forecasting models.',
    ]
  },
  {
    category: 'E-commerce & Workflow Automation',
    items: [
      'Managed end-to-end Shopify store creation and setup, including GA4 integration for advanced analytics.',
      'Designed and implemented a question bank generation system using n8n automation.',
    ]
  },
  {
    category: 'Front-End Development',
    items: [
      'Developed React clones of major web platforms including Facebook, Instagram, Amazon, and Hulu to mimic their UI and core functionalities.',
    ]
  }
];
