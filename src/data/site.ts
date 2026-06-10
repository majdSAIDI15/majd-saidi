// Global profile + contact information.
export const site = {
  name: 'Majd Saidi',
  role: 'AI Engineer & Cybersecurity Specialist',
  // Rotating roles shown by the hero typewriter.
  roles: [
    'AI Engineer & Cybersecurity Specialist',
    'Data Science & AI · LLM · RAG · Voice AI',
    'IoT & Embedded Systems Engineer',
    'Offensive Security · Pentest · API Security',
  ],
  tagline: 'AI · IoT & Embedded · Cybersecurity',
  intro:
    "Engineering student at ENSAM Rabat (Data Science & AI) with a dual focus on Artificial Intelligence — LLMs, RAG, Voice AI, Deep Learning — and offensive cybersecurity. Active freelancer at PillQare with 3 systems in production. Currently looking for an end-of-year project internship (PFA).",
  location: 'Rabat, Morocco',
  email: 'majdsaidi15@gmail.com',
  phoneDisplay: '+212 6 71 92 62 11',
  phoneIntl: '212671926211',
  resume: '/resume.pdf',
  avatar: '/images/profile.jpg',
  openToWork: 'Recherche stage PFA',
  social: {
    github: 'https://github.com/majdSAIDI15',
    linkedin: 'https://www.linkedin.com/in/majd-saidi-218922247/',
    instagram: '', // TODO: add Instagram URL or it stays hidden
  },
} as const;

export type NavItem = { href: string; label: string };

export const navItems: NavItem[] = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#certifications', label: 'Certifications' },
  { href: '#contact', label: 'Contact' },
];
