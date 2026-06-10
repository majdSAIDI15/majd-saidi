// Work experience, education, achievements, languages, and involvement.
export type TimelineEntry = {
  title: string;
  org: string;
  description: string;
};

export const experience: TimelineEntry[] = [
  {
    title: 'Freelance AI & Security Engineer',
    org: 'PillQare • 2024 – Present',
    description:
      'Shipped 3 systems to production: "Lisa" voice AI assistant (Whisper → GPT-4o → ElevenLabs → Twilio, < 2s latency), the multi-tenant PillQare Pro CRM (Django 5 + Next.js 15 + React Native), and ESP32-P4 firmware for a connected pill dispenser. Fixed broken auth, IDOR, injection and secret-leakage issues live.',
  },
  {
    title: 'AI Developer (Project Internship)',
    org: 'ZhAcademie (USA) • Remote • Jan – Feb 2025',
    description:
      'Built ZhBOT, an AI chatbot for international study guidance. Technologies: JavaScript, Voiceflow, OpenAI API.',
  },
  {
    title: 'Full-Stack Developer (Internship)',
    org: 'WebPick • Marrakech • Summer 2024',
    description:
      'Developed the "Jarvis" interface to automate crontab across multiple sites, and hardened session management while analysing the attack surface of multi-tenant web apps. Technologies: PHP Symfony, MySQL, JavaScript.',
  },
  {
    title: 'Observation Intern',
    org: 'Pixel Junior • 2020 – 2021',
    description: 'Introduced young students to programming through hands-on teaching.',
  },
];

export const education: TimelineEntry[] = [
  {
    title: 'Engineering — Digital Engineering in Data Science & AI',
    org: 'ENSAM Rabat • 2024 – 2027',
    description: 'Engineering cycle specializing in Data Science and Artificial Intelligence.',
  },
  {
    title: 'Integrated Preparatory Classes (CPGE)',
    org: 'ENSAM Rabat • 2022 – 2024',
    description: 'Intensive preparation in Mathematics, Physics and Computer Science.',
  },
];

export const achievements: string[] = [
  '1st Regional & National Prize — Injaaz Al Maghrib (Glove Voice)',
  '3rd International Prize — Injaaz Al Arab, Dubai',
  'Hackathons — Orange, Innovatech, Injaaz',
];

export type Language = { name: string; level: string };

export const languages: Language[] = [
  { name: 'Arabic', level: 'Native' },
  { name: 'French', level: 'C2 — TCF certified' },
  { name: 'English', level: 'Professional (B2+)' },
];

export type Activity = { role: string; org: string; icon: string };

export const activities: Activity[] = [
  { role: 'Project Lead', org: 'Enactus ENSAM — social & tech innovation', icon: 'fas fa-lightbulb' },
  { role: 'Vice-President', org: 'Junior Entreprise ENSAM — IT projects & partnerships', icon: 'fas fa-people-group' },
  { role: 'Digital Lead', org: 'CCS ENSAM — redesigned & managed the official website', icon: 'fas fa-globe' },
];
