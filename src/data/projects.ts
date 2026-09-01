import type { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'axiom-ai',
    title: 'Axiom AI',
    description:
      'An intelligent AI platform built with a TypeScript frontend and Node.js/TypeScript backend. Features real-time AI interactions via Netlify serverless functions, Firebase Firestore for data persistence, and Firestore security rules for auth-gated access. Deployed on Netlify with a full CI/CD pipeline.',
    tech: ['TypeScript', 'Vite', 'Firebase', 'Firestore', 'Netlify Functions', 'Node.js'],
    category: 'AI & ML',
    liveUrl: 'https://github.com/ShamsiGafarov/Axiom-AI',
    githubUrl: 'https://github.com/ShamsiGafarov/Axiom-AI',
  },
  {
    id: 'brewhaven',
    title: 'BrewHaven',
    description:
      'A full stack coffee ordering platform built with the MERN stack. Features product browsing, cart management, user authentication, and order processing. Demonstrates end-to-end full stack architecture with RESTful APIs and a React frontend.',
    tech: ['MongoDB', 'Express', 'React', 'Node.js', 'JavaScript'],
    category: 'Full Stack',
    liveUrl: 'https://github.com/ShamsiGafarov/BrewHaven',
    githubUrl: 'https://github.com/ShamsiGafarov/BrewHaven',
  },
  {
    id: 'portfolio-platform',
    title: 'Portfolio Platform',
    description:
      'A decoupled portfolio web application with a dedicated JavaScript frontend and a separate backend API. Demonstrates clean separation of concerns, RESTful API design, and modern deployment practices.',
    tech: ['JavaScript', 'Node.js', 'REST API', 'HTML5', 'CSS3'],
    category: 'Full Stack',
    liveUrl: 'https://github.com/ShamsiGafarov/portfolio-frontend',
    githubUrl: 'https://github.com/ShamsiGafarov/portfolio-frontend',
  },
  {
    id: 'bmo-banking-microservices',
    title: 'BMO Banking Microservices Platform',
    description:
      'Designed and maintained Java microservices with Spring Boot for high-availability banking applications at BMO. Architected RESTful APIs handling millions of daily transactions, accelerating deployment speed by 20% within 6 months through CI/CD pipeline improvements.',
    tech: ['Java', 'Spring Boot', 'Spring Cloud', 'RESTful APIs', 'Microservices', 'AWS', 'Jenkins'],
    category: 'Backend',
    liveUrl: '#',
    githubUrl: 'https://github.com/ShamsiGafarov/bmo-banking-microservices',
  },
  {
    id: 'healthcare-systems-vgh',
    title: 'Healthcare Systems Platform – VGH',
    description:
      'Built and maintained healthcare information systems supporting clinical staff workflows at Vancouver General Hospital. Implemented C# .NET Core backend with React/TypeScript frontend, ensuring HIPAA-compliant data flows and delivering critical integrations between hospital systems.',
    tech: ['C#', '.NET Core', 'React', 'TypeScript', 'Selenium', 'REST Assured'],
    category: 'Full Stack',
    liveUrl: '#',
    githubUrl: 'https://github.com/ShamsiGafarov/vgh-healthcare-platform',
  },
  {
    id: 'ford-automotive-platform',
    title: 'Ford Automotive Enterprise Platform',
    description:
      'Developed backend services with Java, Spring Boot, and Spring Cloud powering enterprise automotive applications at Ford Motor Company. Built scalable APIs and collaborated with global engineering teams to deliver product-critical backend features supporting millions of vehicle records.',
    tech: ['Java', 'Spring Boot', 'Spring Cloud', 'JavaScript', 'Jenkins', 'GitHub Actions'],
    category: 'Backend',
    liveUrl: '#',
    githubUrl: 'https://github.com/ShamsiGafarov/ford-automotive-platform',
  },
  {
    id: 'wix-saas-platform-modules',
    title: 'Wix SaaS Platform Modules',
    description:
      "Owned core product modules for Wix's high-traffic SaaS platform serving millions of users globally. Delivered optimized features using Node.js, React, and TypeScript that increased system performance by 30%, and integrated LLM-powered features with serverless AI middleware.",
    tech: ['Node.js', 'React', 'TypeScript', 'Kubernetes', 'Java', 'LLM Integration'],
    category: 'Full Stack',
    liveUrl: '#',
    githubUrl: 'https://github.com/ShamsiGafarov/wix-saas-platform',
  },
];
