/**
 * ============================================================================
 *  SITE CONTENT — edit everything about the portfolio in this single file.
 *  Replace the placeholder values (links, email, photo, projects, etc.)
 *  with your own details and the whole site updates automatically.
 * ============================================================================
 */

export const profile = {
  name: 'Ikram Ullah',
  // Short name shown in the navbar / footer brand
  brand: 'Ikram Khan',
  firstName: 'Ikram',
  lastName: 'Ullah',
  title: 'Full Stack Website & App Developer · AI Automation Expert',
  // Small mono badge shown above the hero heading
  badge: 'Open to SWE / Full-Stack / AI Automation roles',
  location: 'Peshawar, Pakistan',
  email: 'ikramullah35000@gmail.com',
  // Short bio — segments with `highlight: true` render in white
  bioSegments: [
    { text: '3rd-semester BSc Computer Science student at Air University', highlight: true },
    { text: ' specializing in ' },
    { text: 'full-stack web & mobile development', highlight: true },
    { text: ' and ' },
    { text: 'intelligent AI automation', highlight: true },
    { text: '. I build robust systems designed for measurable real-world impact.' },
  ],
  // Replace with your own photo: put a file in /public and reference it here.
  photo: '/ikram.jpg',
  resume: '/resume.pdf',
  education: 'BSc Computer Science · Air University (3rd Sem)',
};

/** Stats shown in the About section */
export const stats = [
  { value: '3+', label: 'Years Coding' },
  { value: '25+', label: 'Projects Built' },
  { value: '15+', label: 'Technologies' },
  { value: '10+', label: 'Happy Clients' },
];

/** About story paragraphs */
export const aboutStory = [
  "I'm a developer and problem-solver who turns complex ideas into clean, reliable software. My work spans the full stack — from pixel-perfect interfaces to the APIs, databases and automation that power them.",
  'I care about performance, accessibility and measurable impact. Whether it\'s a customer-facing app or an internal workflow, I build systems that are fast, maintainable and made to last.',
];

/** Social + contact links. `icon` maps to a key in the icon registry. */
export const socials = [
  { label: 'GitHub', href: 'https://github.com/Rehman35000', icon: 'github' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/ikram-ullah-07658536b', icon: 'linkedin' },
  { label: 'Instagram', href: 'https://www.instagram.com/_ikramkhan4n', icon: 'instagram' },
  { label: 'Email', href: 'mailto:ikramullah35000@gmail.com', icon: 'mail' },
];

/** Skills grouped by category — each group renders as a glass card of badges */
export const skillGroups = [
  {
    title: 'Frontend',
    icon: 'layout',
    skills: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Tailwind CSS', 'Framer Motion'],
  },
  {
    title: 'Backend',
    icon: 'server',
    skills: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'REST APIs', 'GraphQL', 'Firebase'],
  },
  {
    title: 'Mobile',
    icon: 'smartphone',
    skills: ['React Native', 'Expo', 'Flutter', 'Firebase', 'App Store / Play Store', 'Push Notifications'],
  },
  {
    title: 'AI / Automation',
    icon: 'cpu',
    skills: ['OpenAI API', 'LangChain', 'RAG', 'n8n', 'Zapier', 'Python', 'Prompt Engineering'],
  },
  {
    title: 'Tools',
    icon: 'wrench',
    skills: ['Git', 'GitHub', 'VS Code', 'Figma', 'Vite', 'Vercel', 'Docker', 'Postman'],
  },
];

/**
 * Projects — add 3-6 entries. `image` can be a URL or a file in /public.
 * Leave `demo` or `repo` empty ("") to hide that button.
 */
export const projects = [
  {
    title: 'Universal Link Education',
    description:
      'Online education platform delivering live 1-to-1 Quran, English, Science, Maths and GCSE / NAPLAN classes to students worldwide.',
    // Local screenshot in /public/projects. Replace anytime with your own image.
    image: '/projects/universal-link.jpg',
    tags: ['Next.js', 'TypeScript', 'Node.js', 'PostgreSQL'],
    demo: 'https://www.universallinkeducation.com/',
    repo: '',
  },
  {
    title: 'IKANOVA',
    description:
      'Website for a software & AI agency — services, portfolio, testimonials and a booking flow, built for performance and SEO.',
    image: '/projects/ikanova.jpg',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    demo: 'https://www.ikanova.com/',
    repo: '',
  },
  {
    title: 'Fashion Hubb',
    description:
      'Luxury fashion e-commerce storefront with curated collections, cart, authentication and a seamless checkout experience.',
    image: '/projects/fashion-hubb.jpg',
    tags: ['React', 'Tailwind CSS', 'Vite', 'E-Commerce'],
    demo: 'https://fashion-hubb-silk.vercel.app/',
    repo: '',
  },
  {
    title: 'St. Elizabeth Hospital',
    description:
      'Website for a charitable hospital in Hyderabad — departments, doctor directory, patient information and an online donation system.',
    image: '/projects/st-elizabeth.jpg',
    tags: ['WordPress', 'PHP', 'Responsive', 'Healthcare'],
    demo: 'https://st-elizabethhyderabad.com/',
    repo: '',
  },
];

/**
 * Certifications & licences (newest first).
 * `icon` picks a badge from the icon registry: award | badgeCheck | shieldCheck | medal.
 * Leave `url` empty ("") to hide the "Verify" link.
 */
export const certifications = [
  {
    title: 'Claude 101',
    issuer: 'Anthropic · Claude Academy',
    year: '2026',
    icon: 'badgeCheck',
    // Certificate preview image (shown on the card). Optional.
    image: '/certifications/claude-101.jpg',
    url: 'https://academy.claude.com/verify/576d3786a674b2cba4cde48301b629f2',
  },
  {
    title: 'Introduction to Model Context Protocol',
    issuer: 'Anthropic · Claude Academy',
    year: '2026',
    icon: 'code',
    url: 'https://academy.claude.com/verify/0a2215eb94c297e3f9a9db5346ca7c7b',
  },
  {
    title: 'Meta Front-End Developer Professional Certificate',
    issuer: 'Meta · Coursera',
    year: '2024',
    icon: 'award',
    url: 'https://coursera.org',
  },
  {
    title: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services',
    year: '2024',
    icon: 'shieldCheck',
    url: 'https://aws.amazon.com/certification/',
  },
  {
    title: 'Google Data Analytics Professional Certificate',
    issuer: 'Google · Coursera',
    year: '2023',
    icon: 'badgeCheck',
    url: 'https://coursera.org',
  },
  {
    title: 'Responsive Web Design Certification',
    issuer: 'freeCodeCamp',
    year: '2022',
    icon: 'medal',
    url: 'https://freecodecamp.org',
  },
];

/** Experience & education timeline (newest first). `type`: 'work' | 'education' */
export const timeline = [
  {
    type: 'work',
    title: 'Full-Stack Developer & AI Automation',
    org: 'Freelance / Remote',
    period: '2024 — Present',
    description:
      'Designing and shipping full-stack web & mobile apps and AI automations for clients — from UI and APIs to deployment on Vercel.',
  },
  {
    type: 'work',
    title: 'Frontend Developer Intern',
    org: 'TechCorp',
    period: '2023 — 2024',
    description:
      'Built reusable React components, improved Lighthouse scores and collaborated closely with designers.',
  },
  {
    type: 'education',
    title: 'BSc Computer Science (In Progress)',
    org: 'Air University',
    period: '2025 — Present',
    description:
      'Currently in my 3rd semester — coursework across programming, data structures, algorithms and software engineering.',
  },
];

/**
 * Knowledge base for the AI chat widget. The widget matches the visitor's
 * message against `keywords` and replies with the first matching `answer`.
 * Add your own Q&A here — no API keys required.
 */
export const chatKnowledge = [
  {
    keywords: ['hi', 'hello', 'hey', 'salam', 'assalam'],
    answer: `Hi! 👋 I'm Ikram's portfolio assistant. Ask me about his skills, projects, experience or how to get in touch.`,
  },
  {
    keywords: ['skill', 'tech', 'stack', 'technolog', 'language', 'framework'],
    answer:
      'Ikram works across the full stack: React, Next.js, TypeScript, Tailwind and Framer Motion on the frontend; Node.js, Express, MongoDB and PostgreSQL on the backend; React Native & Flutter for mobile; and OpenAI/LangChain/n8n for AI automation.',
  },
  {
    keywords: ['project', 'portfolio', 'built', 'work on', 'app'],
    answer:
      'A few highlights: Universal Link Education (online learning platform), IKANOVA (software & AI agency site), Fashion Hubb (luxury fashion e-commerce) and St. Elizabeth Hospital (charitable hospital website). Scroll to the Projects section for live links!',
  },
  {
    keywords: ['experience', 'job', 'career', 'intern', 'education', 'degree', 'university', 'study'],
    answer:
      'Ikram is a BSc Computer Science student at Air University, currently in his 3rd semester. He interned as a Frontend Developer at TechCorp and works as a freelance Full-Stack Developer & AI Automation specialist.',
  },
  {
    keywords: ['contact', 'email', 'reach', 'hire', 'available', 'freelance'],
    answer: `You can reach Ikram at ${profile.email}, or use the contact form at the bottom of the page. He's currently open to SWE / Full-Stack / AI Automation roles.`,
  },
  {
    keywords: ['certif', 'certificate', 'course', 'licence', 'license', 'credential'],
    answer:
      'Ikram holds certifications including Claude 101, Introduction to Model Context Protocol (Anthropic · Claude Academy), the Meta Front-End Developer Professional Certificate, AWS Certified Cloud Practitioner, Google Data Analytics and freeCodeCamp Responsive Web Design. See the Certificates section for details.',
  },
  {
    keywords: ['resume', 'cv', 'download'],
    answer: 'Sure — hit the "Download CV" button in the hero section to grab his resume.',
  },
  {
    keywords: ['ai', 'automation', 'ml', 'gpt', 'openai'],
    answer:
      'AI automation is one of Ikram\'s specialities — he builds LLM-powered tools, RAG pipelines and workflow automations with OpenAI, LangChain and n8n.',
  },
];

export const chatFallback =
  "I'm not sure about that one 🤔 — try asking about skills, projects, experience, AI automation or how to contact Ikram.";

/** Section ids used for nav links + active-section highlighting (in order) */
export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'certifications', label: 'Certificates' },
  { id: 'contact', label: 'Contact' },
];
