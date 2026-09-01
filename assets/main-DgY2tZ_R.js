import{a as e,c as t,i as n,l as r,n as i,o as a,r as o,s,t as c}from"./utils-BdSk9dQj.js";function l(e,n,r=42){if(t()){e.textContent=n;return}let i=0,a=()=>{e.textContent=n.slice(0,i),i+=1,i<=n.length&&window.setTimeout(a,r)};a()}function u(e=`.hero`,n=`.hero-content`){let r=document.querySelector(e),i=document.querySelector(n);if(!r)return;let a=!1;function o(){if(!t()){let e=window.scrollY;e<(r?.offsetHeight??0)&&(document.documentElement.style.setProperty(`--hero-parallax`,`${Math.round(e*.08)}px`),i?.style.setProperty(`--hero-content-parallax`,`${Math.round(e*.15)}px`))}a=!1}window.addEventListener(`scroll`,()=>{a||=(requestAnimationFrame(o),!0)},{passive:!0}),o()}var d=[`10+ Years`,`50+ Projects`,`AI & ML Expert`],f=[{label:`Location`,value:`Toronto, Canada`},{label:`Experience`,value:`10+ Years`},{label:`Companies`,value:`Wix &middot; BMO &middot; Ford &middot; VGH`},{label:`Available for`,value:`Full-time &amp; Contract roles`}];function p(){let e=document.querySelector(`#hero`);if(!e)return;e.innerHTML=`
    <div class="section-inner hero-content">
      <div class="hero-copy">
        <h1 class="hero-name">Shamsi Gafarov</h1>
        <div class="gradient-underline" aria-hidden="true"></div>
        <ul class="hero-badges" aria-label="Highlights">
          ${d.map(e=>`<li class="hero-badge">${e}</li>`).join(``)}
        </ul>
        <p class="eyebrow"><span class="typewriter-text"></span><span class="cursor" aria-hidden="true"></span></p>
        <p class="hero-bio">
          Senior Full Stack Engineer based in Toronto with 10+ years of experience building robust
          backend systems, intuitive frontends, and intelligent AI powered applications. Specializing
          in Java, TypeScript, AWS, and Kubernetes to architect and ship solutions that scale across
          millions of users.
        </p>
        <div class="hero-ctas">
          <a href="#projects" class="btn btn-primary">View Work</a>
          <a href="#contact" class="btn btn-secondary">Contact Me</a>
        </div>
      </div>
      <div class="hero-visual">
        <div class="hero-visual-glow" aria-hidden="true"></div>
        <div class="info-card">
          <div class="info-card-header">
            <span class="info-card-name">Shamsi Gafarov</span>
            <span class="info-card-title">Senior Full Stack Engineer</span>
          </div>
          <ul class="info-card-list">
            ${f.map(e=>`
              <li class="info-card-row">
                <span class="info-card-label">${e.label}</span>
                <span class="info-card-value">${e.value}</span>
              </li>`).join(``)}
          </ul>
        </div>
      </div>
    </div>
  `;let t=e.querySelector(`.typewriter-text`);t&&l(t,`Senior Full Stack Software Engineer`),u()}function m(e){let n=Number(e.dataset.target??`0`),r=e.dataset.suffix??``;if(t()){e.textContent=`${n}${r}`;return}let i=null;function a(t){i===null&&(i=t);let o=Math.min((t-i)/1300,1),s=1-(1-o)**3;e.textContent=`${Math.round(s*n)}${r}`,o<1&&requestAnimationFrame(a)}requestAnimationFrame(a)}function h(e=`.stat-number[data-target]`){let t=Array.from(document.querySelectorAll(e));if(!t.length)return;if(!(`IntersectionObserver`in window)){t.forEach(m);return}let n=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting&&(m(e.target),n.unobserve(e.target))})},{threshold:.4});t.forEach(e=>n.observe(e))}var g=[{label:`Years Experience`,target:10,suffix:`+`},{label:`Companies`,target:5,suffix:``},{label:`AI Products`,target:3,suffix:``},{label:`Degrees`,target:2,suffix:``}];function _(){let e=document.querySelector(`#about`);e&&(e.innerHTML=`
    <div class="section-inner">
      <div class="about-grid">
        <div class="about-copy">
          <h2 class="section-heading reveal-item">About Me</h2>
          <p class="about-text reveal-item">
            I am a Senior Full Stack Software Engineer and AI practitioner with over a decade of
            experience delivering enterprise-grade systems across banking, healthcare, and SaaS at
            companies including Wix, BMO, Ford Motor Company, and Vancouver General Hospital.
          </p>
          <p class="about-text reveal-item">
            My engineering philosophy centers on building systems that are performant, maintainable,
            and built to scale. I architect distributed microservices with Java and Spring Boot, design
            cloud-native infrastructure on AWS and Azure with Kubernetes and Docker, and ship polished
            frontends with React, Angular, and TypeScript.
          </p>
          <p class="about-text reveal-item">
            Over the past several years I have integrated LLM-powered features and AI automation into
            production environments &mdash; building secure serverless middleware, designing prompt
            engineering pipelines, and delivering intelligent applications that solve real business
            problems.
          </p>
          <p class="about-text reveal-item">
            I hold a Diploma in AI and Software Engineering Technology from Centennial College and a
            Bachelor's degree in Computer Programming from Azerbaijan Technical University, bringing
            both modern AI expertise and deep foundational engineering knowledge to every project I take
            on.
          </p>
        </div>
        <div class="stats-row">
          ${g.map(e=>`
            <div class="stat reveal-item">
              <span class="stat-number" data-target="${e.target}" data-suffix="${e.suffix}">0</span>
              <span class="stat-label">${e.label}</span>
            </div>`).join(``)}
        </div>
      </div>
    </div>
  `,s(e),h())}var v=[{category:`Languages`,skills:[`Java`,`TypeScript`,`JavaScript`,`C#`,`Python`,`SQL`,`HTML5`,`CSS3`]},{category:`Frontend`,skills:[`React`,`Angular`,`Vite`,`HTML5`,`CSS3`,`Responsive Design`,`TypeScript`,`JavaScript`,`DOM Manipulation`,`REST API Integration`]},{category:`Backend`,skills:[`Node.js`,`Express.js`,`Spring Boot`,`Spring Cloud`,`.NET Core`,`REST APIs`,`Microservices`,`Server-Side TypeScript`,`Netlify Functions`,`Apache Kafka`]},{category:`AI & ML`,skills:[`LLM Integration`,`Prompt Engineering`,`AI Automation`,`Serverless AI`,`Firebase AI`,`Machine Learning`,`Data Science`,`Kaggle`,`AI Testing`]},{category:`Databases`,skills:[`MongoDB`,`PostgreSQL`,`Firestore`,`SQL Server`,`Oracle DB`,`MySQL`,`Firebase`,`RDBMS`]},{category:`Cloud & DevOps`,skills:[`AWS`,`Azure`,`Kubernetes`,`Docker`,`Jenkins`,`GitHub Actions`,`Netlify`,`CI/CD`,`NPM`,`Git`,`Firebase Hosting`]},{category:`Testing & QA`,skills:[`Selenium WebDriver`,`TestNG`,`Cucumber BDD`,`REST Assured`,`Postman`,`Jest`,`JUnit`,`Manual Testing`,`Regression Testing`,`API Testing`]}],y={Languages:`💻`,Frontend:`🎨`,Backend:`⚙️`,"AI & ML":`🤖`,Databases:`🗄️`,"Cloud & DevOps":`☁️`,"Testing & QA":`🧪`};function b(){let e=document.querySelector(`#skills`);e&&(e.innerHTML=`
    <div class="section-inner">
      <h2 class="section-heading reveal-item">Tech Stack</h2>
      <div class="stack-groups">
        ${v.map(e=>`
          <div class="stack-group">
            <h3 class="stack-group-title reveal-item">
              <span class="stack-group-icon" aria-hidden="true">${y[e.category]??`🧩`}</span>
              <span>${e.category}</span>
            </h3>
            <ul class="pill-list">
              ${e.skills.map(e=>`<li class="pill reveal-item">${e}</li>`).join(``)}
            </ul>
          </div>`).join(``)}
      </div>
    </div>
  `,s(e))}var x=[{company:`Wix`,title:`Senior Full Stack Engineer`,type:`Contract · Full-time`,period:`Sep 2024 — Present`,location:`United States · Remote`,bullets:[`Architected and owned core product modules for a high-traffic SaaS platform serving millions of global users, engineering performance optimizations in Node.js, React, and TypeScript that increased system throughput by 30% and reduced page load latency significantly.`,`Designed and deployed secure LLM-powered features into production, engineering serverless middleware layers that proxy AI model requests with zero client-side API key exposure — enabling scalable, cost-efficient intelligent product features.`,`Led Kubernetes-based deployment architecture improvements across high-availability services, implementing rolling deployments, health checks, and autoscaling policies that drove measurable gains in uptime and release velocity.`,`Collaborated with cross-functional product and infrastructure teams in an agile environment, contributing to sprint planning, code reviews, and architectural decision-making at the senior engineering level.`],tech:[`Node.js`,`React`,`TypeScript`,`JavaScript`,`Kubernetes`,`Java`,`LLM Integration`,`AWS`,`NPM`,`CI/CD`,`Docker`]},{company:`BMO (Bank of Montreal)`,title:`Senior Java Software Engineer`,type:`Contract · Full-time`,period:`Jan 2022 — May 2024`,location:`Toronto, Ontario, Canada · Remote`,bullets:[`Engineered and maintained a portfolio of Java Spring Boot microservices underpinning high-availability core banking operations, processing millions of daily financial transactions with 99.9% uptime SLA compliance.`,`Designed RESTful and event-driven APIs using Spring Cloud and Apache Kafka, enabling real-time data synchronization across distributed banking systems and reducing inter-service latency.`,`Accelerated deployment pipeline velocity by 20% within six months through CI/CD improvements with Jenkins and GitHub Actions, reducing release cycle risk through automated testing gates and containerized deployments.`,`Partnered with security and compliance teams to ensure all systems met financial industry regulatory standards, implementing secure API authentication, data encryption, and audit logging across all services.`],tech:[`Java`,`Spring Boot`,`Spring Cloud`,`RESTful APIs`,`Microservices`,`AWS`,`SQL`,`Jenkins`,`GitHub Actions`,`PostgreSQL`,`Docker`]},{company:`Vancouver General Hospital – Gordon and Leslie Diamond Health Care Centre`,title:`Senior System Developer`,type:`Contract · Full-time`,period:`Jul 2019 — Oct 2021`,location:`Vancouver, British Columbia, Canada · Remote`,bullets:[`Developed and maintained mission-critical healthcare information systems supporting clinical staff workflows at one of Canada's largest hospital networks, using C# .NET Core on the backend and React with TypeScript on the frontend.`,`Architected HIPAA-compliant data pipelines and secure integrations between disparate hospital systems, ensuring patient data integrity, privacy, and zero-downtime availability across clinical operations.`,`Built and maintained a comprehensive QA automation framework using Selenium WebDriver, REST Assured, and TestNG with Cucumber BDD, significantly reducing manual regression testing time and improving release confidence.`,`Collaborated directly with clinical staff and hospital administrators to translate complex healthcare workflows into reliable, intuitive software solutions — bridging the gap between technical delivery and domain expertise.`],tech:[`C#`,`.NET Core`,`React`,`TypeScript`,`JavaScript`,`Selenium`,`REST Assured`,`SQL Server`,`Azure`,`JUnit`,`TestNG`,`Cucumber BDD`]},{company:`Ford Motor Company`,title:`Senior Application Developer`,type:`Contract · Full-time`,period:`Sep 2017 — Jun 2019`,location:`Toronto, Ontario, Canada · On-site`,bullets:[`Engineered scalable backend services using Java, Spring Boot, and Spring Cloud to power enterprise automotive applications supporting millions of vehicle records and global dealership operations at Ford Motor Company.`,`Designed and implemented distributed system components including service discovery, load balancing, and circuit breaking patterns using Spring Cloud, ensuring resilience and fault tolerance across enterprise-scale services.`,`Drove CI/CD pipeline modernization using Jenkins and GitHub Actions, implementing automated build, test, and deployment workflows that reduced release cycle time and increased engineering team throughput.`,`Collaborated with global engineering teams across multiple time zones, contributing to architectural design reviews, technical documentation, and cross-team API contract definitions for mission-critical platform features.`],tech:[`Java`,`Spring Boot`,`Spring Cloud`,`JavaScript`,`Python`,`Jenkins`,`GitHub Actions`,`Oracle DB`,`Docker`,`Kubernetes`,`Maven`]},{company:`IntroPro`,title:`Web Developer`,type:`Contract · Full-time`,period:`Sep 2015 — Aug 2016`,location:`Kyiv, Ukraine · Remote`,bullets:[`Delivered responsive, cross-browser-compatible web applications using HTML5, CSS3, JavaScript, and Angular, collaborating closely with designers to translate high-fidelity mockups into polished, production-ready user interfaces.`,`Built reusable, component-driven frontend architecture using Angular and TypeScript, establishing patterns for modularity and maintainability that accelerated development velocity across client projects.`,`Integrated RESTful backend APIs using Node.js and Express.js, developing full stack features end-to-end and ensuring seamless data flow between frontend interfaces and server-side services.`],tech:[`HTML5`,`CSS3`,`JavaScript`,`TypeScript`,`Angular`,`NPM`,`Node.js`,`Express.js`,`Responsive Design`,`Git`]}];function S(){let e=document.querySelector(`#experience`);e&&(e.innerHTML=`
    <div class="section-inner">
      <h2 class="section-heading reveal-item">Experience</h2>
      <ol class="timeline">
        ${x.map(e=>`
          <li class="timeline-item reveal-item">
            <div class="timeline-marker" aria-hidden="true"></div>
            <div class="timeline-content">
              <div class="timeline-header">
                <div class="timeline-heading">
                  <h3 class="timeline-company">${e.company}</h3>
                  <p class="timeline-role">${e.title}</p>
                  <p class="timeline-meta">${e.type} &middot; ${e.location}</p>
                </div>
                <span class="timeline-dates">${e.period}</span>
              </div>
              <ul class="timeline-points">
                ${e.bullets.map(e=>`<li>${e}</li>`).join(``)}
              </ul>
              <ul class="pill-list timeline-tags">
                ${e.tech.map(e=>`<li class="pill pill-sm">${e}</li>`).join(``)}
              </ul>
            </div>
          </li>`).join(``)}
      </ol>
    </div>
  `,s(e))}var C=[{school:`Centennial College`,degree:`Diploma of Education, AI & Software Engineering Technology`,period:`Sep 2024 — Aug 2026`,highlights:[`Elected member of the Software Engineering Society and AI & Machine Learning Society.`,`Placed in HackCentennial and ranked in Kaggle competitions through the Data Science Circle.`,`Attended exclusive industry sessions with engineers from Google, IBM, and Shopify.`,`Advocated for diversity in tech through Women in STEM programs.`],skills:[`Java`,`.NET Framework`,`AI & ML`,`Data Science`]},{school:`Azerbaijan Technical University`,degree:`Bachelor's Degree, Computer Programming`,period:`Sep 2008 — Jun 2012`,highlights:[`Active member of the University Computer Science Club, participating in workshops on emerging industry trends.`,`Comprehensive study of Oracle Database ecosystem, RDBMS architecture, SQL and database management systems.`],skills:[`PostgreSQL`,`Database Management Systems`,`SQL`,`Oracle`]},{school:`Baku State University`,degree:`Bachelor's Degree, Information Technology`,period:`Sep 2001 — Jun 2006`,highlights:[`Studied network management and internet infrastructure during the early normalization of the internet era.`,`Focused on network architecture, information systems, and foundational computer science principles.`],skills:[`Network Management`,`Information Technology`,`Computer Science`]}];function w(){let e=document.querySelector(`#education`);e&&(e.innerHTML=`
    <div class="section-inner">
      <h2 class="section-heading reveal-item">Education</h2>
      <ol class="timeline">
        ${C.map(e=>`
          <li class="timeline-item reveal-item">
            <div class="timeline-marker" aria-hidden="true"></div>
            <div class="timeline-content">
              <div class="timeline-header">
                <div class="timeline-heading">
                  <h3 class="timeline-company">${e.school}</h3>
                  <p class="timeline-role">${e.degree}</p>
                </div>
                <span class="timeline-dates">${e.period}</span>
              </div>
              <ul class="timeline-points">
                ${e.highlights.map(e=>`<li>${e}</li>`).join(``)}
              </ul>
              <ul class="pill-list timeline-tags">
                ${e.skills.map(e=>`<li class="pill pill-sm">${e}</li>`).join(``)}
              </ul>
            </div>
          </li>`).join(``)}
      </ol>
    </div>
  `,s(e))}var T=`shamsi-portfolio-custom-projects`,E=[`All`,`Full Stack`,`AI & ML`,`Backend`,`DevOps`],D=[],O=`All`;function k(){try{let e=localStorage.getItem(T);return e?JSON.parse(e):[]}catch{return[]}}function A(e){try{localStorage.setItem(T,JSON.stringify(e))}catch{}}function j(t){let r=t.tech.map(e=>`<li class="pill pill-sm">${n(e)}</li>`).join(``),a=e(t.liveUrl),o=e(t.githubUrl),s=n(t.title),l=`./src/pages/project.html?id=${encodeURIComponent(t.id)}`;return`
    <article class="project-card" data-category="${n(t.category)}">
      <div class="project-card-glow" aria-hidden="true"></div>
      <div class="project-card-body">
        <span class="project-category">${n(t.category)}</span>
        <h3 class="project-title"><a href="${l}" class="project-title-link">${s}</a></h3>
        <p class="project-description">${n(t.description)}</p>
        <ul class="pill-list tech-pills">${r}</ul>
      </div>
      <div class="project-card-actions">
        <a href="${l}" class="text-link project-details-link">View Details &rarr;</a>
        <div class="project-card-icons">
          <a href="${a}" class="icon-btn" target="_blank" rel="noopener noreferrer" aria-label="View live project: ${s}">${c}</a>
          <a href="${o}" class="icon-btn" target="_blank" rel="noopener noreferrer" aria-label="View source on GitHub: ${s}">${i}</a>
        </div>
      </div>
    </article>
  `}function M(e){let n=document.querySelector(`#project-grid`);if(!n)return;o(n);let r=O===`All`?D:D.filter(e=>e.category===O),i=()=>{n.innerHTML=r.length?r.map(j).join(``):`<p class="project-empty">No projects in this category yet.</p>`,s(n),requestAnimationFrame(()=>n.classList.remove(`is-filtering`))};e&&!t()?(n.classList.add(`is-filtering`),window.setTimeout(i,180)):i()}function N(){return E.map(e=>`<button type="button" class="filter-btn${e===`All`?` is-active`:``}" data-filter="${e}" role="tab" aria-selected="${e===`All`}">${e}</button>`).join(``)}function P(){let e=Array.from(document.querySelectorAll(`.filter-btn`));e.forEach(t=>{t.addEventListener(`click`,()=>{t.classList.contains(`is-active`)||(e.forEach(e=>{e.classList.remove(`is-active`),e.setAttribute(`aria-selected`,`false`)}),t.classList.add(`is-active`),t.setAttribute(`aria-selected`,`true`),O=t.dataset.filter??`All`,M(!0))})})}function F(){O=`All`,document.querySelectorAll(`.filter-btn`).forEach(e=>{let t=e.dataset.filter===`All`;e.classList.toggle(`is-active`,t),e.setAttribute(`aria-selected`,String(t))})}function I(){let e=document.querySelector(`#add-project-fab`),t=document.querySelector(`#project-modal-overlay`),n=document.querySelector(`#project-modal-close`),r=document.querySelector(`#project-modal-cancel`),i=document.querySelector(`#project-form`);if(!e||!t||!n||!r||!i)return;let a=()=>{t.hidden=!1,document.body.classList.add(`modal-open`),requestAnimationFrame(()=>t.classList.add(`is-open`)),i.querySelector(`#field-title`)?.focus()},o=()=>{t.classList.remove(`is-open`),document.body.classList.remove(`modal-open`),window.setTimeout(()=>{t.hidden=!0,i.reset()},200)};e.addEventListener(`click`,a),n.addEventListener(`click`,o),r.addEventListener(`click`,o),t.addEventListener(`click`,e=>{e.target===t&&o()}),document.addEventListener(`keydown`,e=>{e.key===`Escape`&&!t.hidden&&o()}),i.addEventListener(`submit`,e=>{e.preventDefault();let t=new FormData(i),n=String(t.get(`title`)??``).trim(),r=String(t.get(`description`)??``).trim();if(!n||!r)return;let a=String(t.get(`tech`)??``).split(`,`).map(e=>e.trim()).filter(Boolean),s=t.get(`category`)??`Full Stack`,c={id:`custom-${Date.now()}`,title:n,description:r,tech:a,category:s,liveUrl:String(t.get(`liveUrl`)??``).trim(),githubUrl:String(t.get(`githubUrl`)??``).trim()},l=k();l.push(c),A(l),D.push(c),F(),M(!0),o()})}function L(){return`
    <button type="button" class="fab" id="add-project-fab" aria-haspopup="dialog" aria-controls="project-modal" aria-label="Add a project">
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
    </button>
    <div class="modal-overlay" id="project-modal-overlay" hidden>
      <div class="modal" id="project-modal" role="dialog" aria-modal="true" aria-labelledby="project-modal-title">
        <div class="modal-header">
          <h2 id="project-modal-title">Add a Project</h2>
          <button type="button" class="modal-close" id="project-modal-close" aria-label="Close dialog">&times;</button>
        </div>
        <form id="project-form" novalidate>
          <div class="form-field">
            <label for="field-title">Title</label>
            <input type="text" id="field-title" name="title" required maxlength="80" />
          </div>
          <div class="form-field">
            <label for="field-description">Description</label>
            <textarea id="field-description" name="description" rows="3" required maxlength="400"></textarea>
          </div>
          <div class="form-field">
            <label for="field-tech">Tech Stack <span class="field-hint">(comma separated)</span></label>
            <input type="text" id="field-tech" name="tech" placeholder="React, Node.js, PostgreSQL" />
          </div>
          <div class="form-row">
            <div class="form-field">
              <label for="field-category">Category</label>
              <select id="field-category" name="category">
                <option value="Full Stack">Full Stack</option>
                <option value="AI &amp; ML">AI &amp; ML</option>
                <option value="Backend">Backend</option>
                <option value="DevOps">DevOps</option>
              </select>
            </div>
          </div>
          <div class="form-row">
            <div class="form-field">
              <label for="field-live-url">Live URL</label>
              <input type="url" id="field-live-url" name="liveUrl" placeholder="https://" />
            </div>
            <div class="form-field">
              <label for="field-github-url">GitHub URL</label>
              <input type="url" id="field-github-url" name="githubUrl" placeholder="https://" />
            </div>
          </div>
          <div class="form-actions">
            <button type="button" class="btn btn-secondary" id="project-modal-cancel">Cancel</button>
            <button type="submit" class="btn btn-primary">Add Project</button>
          </div>
        </form>
      </div>
    </div>
  `}function R(){let e=document.querySelector(`#projects`);e&&(D=[...a,...k()],e.innerHTML=`
    <div class="section-inner">
      <h2 class="section-heading reveal-item">Projects</h2>
      <div class="project-filters" role="tablist" aria-label="Filter projects by category">
        ${N()}
      </div>
      <div class="project-grid" id="project-grid" aria-live="polite"></div>
    </div>
    ${L()}
  `,P(),I(),M(!1))}var z=[{id:`axiom-ai-platform`,title:`Axiom AI Platform`,description:`Architected and built a production-ready AI application integrating serverless backend functions with real-time AI model interactions. Implemented Firebase Firestore for conversation persistence and Firestore security rules for secure, auth-gated data access.`,tech:[`TypeScript`,`Firebase`,`Netlify Functions`,`LLM Integration`,`Vite`],githubUrl:`https://github.com/ShamsiGafarov/Axiom-AI`},{id:`ai-enhanced-test-automation`,title:`AI Enhanced Test Automation`,description:`Applied AI driven strategies to QA automation workflows, blending traditional test frameworks with intelligent automation. Specialized in functional, regression, UI, and API testing across high-impact banking and healthcare domains.`,tech:[`Selenium WebDriver`,`Java`,`TestNG`,`Cucumber BDD`,`REST Assured`,`Jenkins`]},{id:`llm-integration-serverless-ai`,title:`LLM Integration & Serverless AI`,description:`Designed and deployed serverless functions that act as middleware between frontend clients and large language model APIs. Focused on latency optimization, prompt engineering, and secure API key management in cloud environments.`,tech:[`Netlify Functions`,`Node.js`,`TypeScript`,`LLM APIs`,`AWS`]}];function B(t){let r=t.tech.map(e=>`<li class="pill pill-sm">${n(e)}</li>`).join(``),a=n(t.title),o=[];return t.liveUrl&&o.push(`<a href="${e(t.liveUrl)}" class="icon-btn" target="_blank" rel="noopener noreferrer" aria-label="View live: ${a}">${c}</a>`),t.githubUrl&&o.push(`<a href="${e(t.githubUrl)}" class="icon-btn" target="_blank" rel="noopener noreferrer" aria-label="View source on GitHub: ${a}">${i}</a>`),`
    <article class="project-card reveal-item">
      <div class="project-card-glow" aria-hidden="true"></div>
      <div class="project-card-body">
        <h3 class="project-title">${a}</h3>
        <p class="project-description">${n(t.description)}</p>
        <ul class="pill-list tech-pills">${r}</ul>
      </div>
      ${o.length?`<div class="project-card-actions">${o.join(``)}</div>`:``}
    </article>
  `}function V(){let e=document.querySelector(`#ai-work`);if(!e)return;e.innerHTML=`
    <div class="section-inner">
      <h2 class="section-heading reveal-item">AI &amp; ML Work</h2>
      <p class="section-intro reveal-item">
        Over the past few years my focus has shifted toward applied AI &mdash; integrating LLMs,
        building serverless AI middleware, and blending intelligent automation into production systems.
      </p>
      <div class="project-grid" id="ai-work-grid" aria-live="polite">
        ${z.map(B).join(``)}
      </div>
    </div>
  `;let t=e.querySelector(`#ai-work-grid`);t&&o(t),s(e)}var H=`<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 6-10 7L2 6"/></svg>`,U=`<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6Z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>`,W=`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14"/><path d="m13 6 6 6-6 6"/></svg>`,G=[{label:`Email`,href:`mailto:shamsigafarov@gmail.com`,icon:H,external:!1,ariaLabel:`Email shamsigafarov@gmail.com`},{label:`LinkedIn`,href:`https://www.linkedin.com/in/shamsigafarov/`,icon:U,external:!0,ariaLabel:`Shamsi Gafarov on LinkedIn`},{label:`GitHub`,href:`https://github.com/ShamsiGafarov`,icon:i,external:!0,ariaLabel:`Shamsi Gafarov on GitHub`}];function K(){let e=document.querySelector(`#contact`);e&&(e.innerHTML=`
    <div class="contact-grid-overlay" aria-hidden="true"></div>
    <div class="section-inner">
      <h2 class="section-heading reveal-item">Let&rsquo;s Build Something</h2>
      <p class="contact-text reveal-item">
        I'm based in Toronto, Canada and open to new opportunities and interesting
        conversations. The best way to reach me is by email.
      </p>
      <ul class="contact-links reveal-item">
        ${G.map(e=>`
          <li>
            <a
              href="${e.href}"
              class="contact-link"
              aria-label="${e.ariaLabel}"
              ${e.external?`target="_blank" rel="noopener noreferrer"`:``}
            >
              <span class="contact-link-icon">${e.icon}</span>
              <span class="contact-link-label">${e.label}</span>
              <span class="contact-link-arrow">${W}</span>
            </a>
          </li>`).join(``)}
      </ul>
    </div>
  `,s(e))}function q(){let e=document.getElementById(`year`);e&&(e.textContent=String(new Date().getFullYear()))}function J(){r(),p(),_(),b(),S(),w(),R(),V(),K(),q()}document.addEventListener(`DOMContentLoaded`,J);