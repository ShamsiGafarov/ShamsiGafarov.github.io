import type { ProjectDetail } from '../types';

// NOTE: "challenges" are placeholder narratives (as requested) — refine with
// real specifics. "results" reuse real figures where available (from the
// matching experience.ts entry); otherwise they describe verified facts from
// the project's own description rather than invented metrics.
export const projectDetails: ProjectDetail[] = [
  {
    id: 'axiom-ai',
    description: [
      'Axiom AI is an intelligent AI platform built with a TypeScript frontend and a Node.js/TypeScript backend, designed to deliver real-time AI interactions through a clean, responsive interface.',
      'The platform uses Netlify serverless functions to broker requests to LLM providers, Firebase Firestore for persisting conversation and user data, and Firestore security rules to keep access strictly auth-gated. The entire stack is deployed on Netlify with a full CI/CD pipeline for fast, reliable releases.',
    ],
    bullets: [
      'Architected the serverless middleware layer connecting the frontend to LLM APIs via Netlify Functions.',
      'Modeled and secured the Firestore data layer with fine-grained security rules for auth-gated access.',
      'Built the TypeScript/Vite frontend and wired up the CI/CD pipeline for automatic Netlify deployments.',
    ],
    challenges: [
      'One of the main challenges was keeping AI responses fast and reliable while routing every request through a serverless function — cold starts and provider latency both needed to be accounted for in the UX.',
      "Firestore's security rules also required careful design so that conversation data stayed strictly scoped to its owner without adding unnecessary round-trips or complexity to the client.",
    ],
    results: [
      { value: 'Netlify Functions', label: 'Serverless AI Middleware' },
      { value: 'Firestore', label: 'Secure, Auth-Gated Data' },
      { value: 'CI/CD', label: 'Full Deployment Pipeline' },
    ],
  },
  {
    id: 'brewhaven',
    description: [
      'BrewHaven is a full stack coffee ordering platform built on the MERN stack, covering the full customer journey from browsing the menu to checkout.',
      'The app includes product browsing, cart management, user authentication, and order processing, backed by a RESTful Express/Node.js API and a React frontend — demonstrating a complete end-to-end full stack architecture.',
    ],
    bullets: [
      'Designed the MongoDB schema and Express REST API powering products, carts, and orders.',
      'Built user authentication and session handling for a secure checkout flow.',
      'Implemented the React frontend for browsing, cart management, and order tracking.',
    ],
    challenges: [
      'Keeping cart and order state consistent between the client and server was the trickiest part of the build, especially around concurrent updates and checkout edge cases.',
      'Designing a REST API that stayed simple for the frontend to consume while still enforcing business rules (stock, pricing, order status) took a few iterations to get right.',
    ],
    results: [
      { value: 'MERN Stack', label: 'End-to-End Architecture' },
      { value: 'REST API', label: 'Products, Cart & Orders' },
      { value: 'Auth + Checkout', label: 'Full Purchase Flow' },
    ],
  },
  {
    id: 'portfolio-platform',
    description: [
      'Portfolio Platform is a decoupled portfolio web application with a dedicated JavaScript frontend and a separate backend API.',
      'The project demonstrates clean separation of concerns between frontend and backend, RESTful API design, and modern deployment practices for a lightweight, maintainable personal site.',
    ],
    bullets: [
      'Split the frontend and backend into independently deployable services communicating over a REST API.',
      'Designed the API layer serving portfolio content to the frontend.',
      'Set up a modern deployment workflow for both the frontend and backend services.',
    ],
    challenges: [
      'Keeping the frontend and backend decoupled while still shipping a cohesive experience meant being deliberate about API contracts from the start.',
      'Balancing simplicity with good practice — RESTful conventions, a clean project structure — was a useful constraint for a smaller-scale project like this one.',
    ],
    results: [
      { value: 'Decoupled', label: 'Frontend & Backend' },
      { value: 'REST API', label: 'Clean API Design' },
      { value: 'HTML5 / CSS3', label: 'Lightweight Frontend' },
    ],
  },
  {
    id: 'bmo-banking-microservices',
    description: [
      "At BMO, I designed and maintained Java microservices with Spring Boot for high-availability banking applications, supporting core workflows relied on by the bank's customers and internal teams.",
      'I architected RESTful APIs handling millions of daily transactions and worked on CI/CD pipeline improvements that accelerated deployment speed by 20% within 6 months.',
    ],
    bullets: [
      'Designed and maintained Java/Spring Boot microservices for high-availability banking applications.',
      'Architected RESTful APIs supporting core banking workflows at scale.',
      'Improved CI/CD pipelines with Jenkins, accelerating deployment speed by 20% within 6 months.',
    ],
    challenges: [
      'Banking systems demand a very high bar for reliability and correctness, so every microservice needed thorough testing and careful rollout strategies to avoid any disruption to live transactions.',
      'Coordinating changes across multiple interdependent services required close collaboration with infrastructure and product teams to keep releases safe and predictable.',
    ],
    results: [
      { value: '20%', label: 'Faster Deployments (6 mo)' },
      { value: 'Millions', label: 'Daily Transactions Handled' },
      { value: 'Spring Boot', label: 'Microservices Architecture' },
    ],
  },
  {
    id: 'healthcare-systems-vgh',
    description: [
      'At Vancouver General Hospital, I built and maintained healthcare information systems supporting clinical staff workflows, using a C# / .NET Core backend with a React and TypeScript frontend.',
      'The work included integrations between hospital systems that preserved data integrity and HIPAA-compliant data flows, along with UI and API test automation to protect critical healthcare platforms.',
    ],
    bullets: [
      'Built a C#/.NET Core backend and React/TypeScript frontend for clinical staff workflows.',
      'Developed integrations between hospital systems while preserving HIPAA-compliant data flows.',
      'Delivered UI and API test automation using Selenium and REST Assured.',
    ],
    challenges: [
      'Healthcare data integrations come with strict compliance requirements, so every integration point had to be designed and tested with data privacy and integrity as first-class concerns.',
      'Supporting clinical staff workflows meant the UI had to stay dependable and fast even under real-world hospital operating conditions, which shaped a lot of the testing strategy.',
    ],
    results: [
      { value: 'HIPAA-Compliant', label: 'Data Flows & Integrations' },
      { value: '.NET Core + React', label: 'Full Stack Architecture' },
      { value: 'Selenium + REST Assured', label: 'Automated Test Coverage' },
    ],
  },
  {
    id: 'ford-automotive-platform',
    description: [
      'At Ford Motor Company, I developed backend services with Java, Spring Boot, and Spring Cloud powering enterprise automotive applications at scale.',
      'The work involved building scalable APIs supporting millions of vehicle records and collaborating with global engineering teams to deliver product-critical backend features on time.',
    ],
    bullets: [
      'Built backend services with Java, Spring Boot, and Spring Cloud for enterprise automotive applications.',
      'Designed scalable APIs supporting millions of vehicle records.',
      'Collaborated with global engineering teams to ship product-critical backend features.',
    ],
    challenges: [
      'Working across global engineering teams meant aligning on shared API contracts and release schedules across time zones, which took clear documentation and communication.',
      'Scaling APIs to reliably serve millions of vehicle records required careful attention to query performance and service boundaries as the platform grew.',
    ],
    results: [
      { value: 'Millions', label: 'Vehicle Records Served' },
      { value: 'Spring Cloud', label: 'Enterprise Microservices' },
      { value: 'Global Teams', label: 'Cross-Functional Delivery' },
    ],
  },
  {
    id: 'wix-saas-platform-modules',
    description: [
      'At Wix, I own core product modules for a high-traffic SaaS platform serving millions of users worldwide, working across Node.js, React, and TypeScript.',
      "I've delivered optimized features that increased system performance by 30%, and integrated LLM-powered features into production through secure, serverless AI middleware.",
    ],
    bullets: [
      'Owned core product modules on a high-traffic SaaS platform serving millions of users.',
      'Delivered performance optimizations that increased system performance by 30%.',
      'Integrated LLM-powered features using serverless middleware for secure AI model access.',
      'Led Kubernetes-based deployment improvements for reliability at scale.',
    ],
    challenges: [
      'Making meaningful performance improvements on a platform already serving millions of users meant every change had to be validated carefully to avoid regressions at scale.',
      'Integrating LLM-powered features in production introduced new constraints around latency, cost, and secure access to AI models, which shaped the serverless middleware design.',
    ],
    results: [
      { value: '30%', label: 'System Performance Increase' },
      { value: 'Millions', label: 'Users Served' },
      { value: 'Kubernetes', label: 'Reliable Deployments' },
    ],
  },
];
