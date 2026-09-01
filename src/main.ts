import './styles/main.css';
import './styles/nav.css';
import './styles/hero.css';
import './styles/about.css';
import './styles/skills.css';
import './styles/experience.css';
import './styles/education.css';
import './styles/projects.css';
import './styles/ai-work.css';
import './styles/contact.css';

import { initNav } from './components/nav';
import { initHero } from './components/hero';
import { initAbout } from './components/about';
import { initSkills } from './components/skills';
import { initExperience } from './components/experience';
import { initEducation } from './components/education';
import { initProjects } from './components/projects';
import { initAIWork } from './components/ai-work';
import { initContact } from './components/contact';

function setFooterYear(): void {
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());
}

function bootstrap(): void {
  initNav();
  initHero();
  initAbout();
  initSkills();
  initExperience();
  initEducation();
  initProjects();
  initAIWork();
  initContact();
  setFooterYear();
}

document.addEventListener('DOMContentLoaded', bootstrap);
