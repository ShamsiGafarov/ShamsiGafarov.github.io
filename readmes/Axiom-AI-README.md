# Axiom AI

> An intelligent AI platform built with TypeScript, Firebase, and serverless LLM integration.

## Overview
Axiom AI is a production-ready AI application that connects users to large language models through a secure serverless middleware layer. Built with a TypeScript/Vite frontend and Node.js backend deployed on Netlify Functions, it uses Firebase Firestore for conversation persistence and Firestore security rules for auth-gated data access.

## Features
- Real-time AI interactions via serverless Netlify Functions
- Firebase Firestore for persistent conversation history
- Secure, auth-gated data access with Firestore security rules
- Full CI/CD pipeline with Netlify deployment
- TypeScript throughout for type-safe development

## Tech Stack
| Layer | Technology |
|-------|-----------|
| Frontend | TypeScript, Vite, HTML5, CSS3 |
| Backend | Node.js, Netlify Functions |
| Database | Firebase Firestore |
| Auth & Security | Firebase Auth, Firestore Rules |
| Deployment | Netlify, CI/CD |

## Getting Started
```bash
git clone https://github.com/ShamsiGafarov/Axiom-AI.git
cd Axiom-AI
npm install
npm run dev
```

## Architecture
The app uses a JAMstack architecture — the Vite frontend communicates with Netlify serverless functions that act as a secure proxy to LLM APIs, ensuring API keys are never exposed on the client side.

## Author
**Shamsi Gafarov** — Senior Full Stack Engineer
- GitHub: [@ShamsiGafarov](https://github.com/ShamsiGafarov)
- LinkedIn: [linkedin.com/in/shamsigafarov](https://www.linkedin.com/in/shamsigafarov/)
