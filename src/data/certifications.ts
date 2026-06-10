// Certifications & distinctions from the CV.
// Add a `credentialUrl` to turn on the "View Credential" link.
export type Certification = {
  title: string;
  issuer: string;
  date: string;
  badge?: string; // image URL; falls back to `icon` when omitted
  icon?: string; // Font Awesome class used when no badge image
  credentialUrl?: string;
};

export const certifications: Certification[] = [
  {
    title: 'Junior Penetration Tester (PT1)',
    issuer: 'TryHackMe / eLearnSecurity',
    date: 'Pentest Path — Certified',
    icon: 'fas fa-user-secret',
    // credentialUrl: 'https://...', // TODO: add credential link
  },
  {
    title: 'CS50 Cybersecurity',
    issuer: 'Harvard University',
    date: "Introduction to Cybersecurity",
    icon: 'fas fa-shield-halved',
    // credentialUrl: 'https://certificates.cs50.io/...', // TODO
  },
  {
    title: 'CS50x — Computer Science',
    issuer: 'Harvard University',
    date: 'Introduction to Computer Science',
    icon: 'fas fa-graduation-cap',
    // credentialUrl: 'https://certificates.cs50.io/...', // TODO
  },
  {
    title: 'Développeur Python — Formation Complète',
    issuer: 'Udemy',
    date: 'Certified',
    icon: 'fab fa-python',
  },
  {
    title: 'TCF — Niveau C2 (Français)',
    issuer: "Ministère de l'Éducation nationale (France)",
    date: 'Test de Connaissance du Français',
    icon: 'fas fa-language',
  },
];
