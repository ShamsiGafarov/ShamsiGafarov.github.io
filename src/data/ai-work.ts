import type { AIWorkEntry } from '../types';

export const aiWork: AIWorkEntry[] = [
  {
    id: 'axiom-ai-platform',
    title: 'Axiom AI Platform',
    description:
      'Architected and built a production-ready AI application integrating serverless backend functions with real-time AI model interactions. Implemented Firebase Firestore for conversation persistence and Firestore security rules for secure, auth-gated data access.',
    tech: ['TypeScript', 'Firebase', 'Netlify Functions', 'LLM Integration', 'Vite'],
    githubUrl: 'https://github.com/ShamsiGafarov/Axiom-AI',
  },
  {
    id: 'ai-enhanced-test-automation',
    title: 'AI Enhanced Test Automation',
    description:
      'Applied AI driven strategies to QA automation workflows, blending traditional test frameworks with intelligent automation. Specialized in functional, regression, UI, and API testing across high-impact banking and healthcare domains.',
    tech: ['Selenium WebDriver', 'Java', 'TestNG', 'Cucumber BDD', 'REST Assured', 'Jenkins'],
  },
  {
    id: 'llm-integration-serverless-ai',
    title: 'LLM Integration & Serverless AI',
    description:
      'Designed and deployed serverless functions that act as middleware between frontend clients and large language model APIs. Focused on latency optimization, prompt engineering, and secure API key management in cloud environments.',
    tech: ['Netlify Functions', 'Node.js', 'TypeScript', 'LLM APIs', 'AWS'],
  },
];
