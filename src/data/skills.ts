// Technical skill groups, soft skills, and "currently exploring" tags.
export type SkillTag = { label: string; icon: string };
export type SkillSubGroup = { title: string; icon: string; color: string; tags: SkillTag[] };
export type SkillGroup = { title: string; icon: string; color: string; subgroups: SkillSubGroup[] };

const tag = (label: string, icon = 'fas fa-angle-right'): SkillTag => ({ label, icon });

export const skillGroups: SkillGroup[] = [
  {
    title: 'IA & Data Science',
    icon: 'fas fa-brain',
    color: 'green',
    subgroups: [
      {
        title: 'LLM & GenAI',
        icon: 'fas fa-comment-dots',
        color: 'purple',
        tags: [
          tag('LangChain'),
          tag('CrewAI'),
          tag('GPT-4o'),
          tag('RAG'),
          tag('Hugging Face'),
          tag('Voiceflow'),
        ],
      },
      {
        title: 'Voice AI',
        icon: 'fas fa-microphone-lines',
        color: 'blue',
        tags: [
          tag('Whisper STT'),
          tag('ElevenLabs TTS'),
          tag('OpenAI Realtime'),
          tag('Twilio'),
          tag('STT→LLM→TTS'),
        ],
      },
      {
        title: 'Machine / Deep Learning',
        icon: 'fas fa-robot',
        color: 'red',
        tags: [
          tag('TensorFlow'),
          tag('Keras'),
          tag('PyTorch', 'fas fa-fire'),
          tag('Scikit-learn'),
          tag('OpenCV', 'fa fa-eye'),
          tag('ResNet50 / EfficientNet'),
          tag('YOLO'),
        ],
      },
      {
        title: 'OCR / NLP',
        icon: 'fas fa-file-lines',
        color: 'yellow',
        tags: [tag('Tesseract'), tag('spaCy'), tag('Transformers'), tag('Pandas'), tag('NumPy')],
      },
      {
        title: 'Vector DB & Data Viz',
        icon: 'fas fa-database',
        color: 'indigo',
        tags: [tag('ChromaDB'), tag('FAISS'), tag('Pinecone'), tag('Power BI'), tag('Matplotlib')],
      },
    ],
  },
  {
    title: 'Cybersécurité',
    icon: 'fas fa-shield-halved',
    color: 'red',
    subgroups: [
      {
        title: 'Pentest Web',
        icon: 'fas fa-bug',
        color: 'orange',
        tags: [
          tag('Burp Suite'),
          tag('SQLmap'),
          tag('OWASP ZAP'),
          tag('Nikto'),
          tag('Gobuster'),
          tag('ffuf'),
        ],
      },
      {
        title: 'Pentest Réseau',
        icon: 'fas fa-network-wired',
        color: 'blue',
        tags: [
          tag('Nmap'),
          tag('Wireshark'),
          tag('Ettercap'),
          tag('Netcat'),
          tag('Metasploit'),
          tag('Scapy'),
        ],
      },
      {
        title: 'Exploitation',
        icon: 'fas fa-skull-crossbones',
        color: 'gray',
        tags: [
          tag('Reverse / Bind Shell'),
          tag('Python C2'),
          tag('ARP / DNS Spoofing'),
          tag('MITM'),
          tag('LFI · SQLi · XSS'),
        ],
      },
      {
        title: 'Sécurité API',
        icon: 'fas fa-lock',
        color: 'green',
        tags: [
          tag('JWT'),
          tag('HMAC'),
          tag('RBAC'),
          tag('HTTPS / TLS'),
          tag('OWASP API Top 10'),
          tag('Zero Trust'),
        ],
      },
    ],
  },
  {
    title: 'IoT & Systèmes Embarqués',
    icon: 'fas fa-microchip',
    color: 'orange',
    subgroups: [
      {
        title: 'Firmware embarqué',
        icon: 'fas fa-memory',
        color: 'blue',
        tags: [
          tag('ESP32-P4'),
          tag('ESP-IDF 5.4'),
          tag('FreeRTOS'),
          tag('LVGL 9'),
          tag('mbedTLS'),
          tag('C/C++', 'fas fa-code'),
        ],
      },
      {
        title: 'Hardware',
        icon: 'fas fa-microchip',
        color: 'purple',
        tags: [tag('Arduino'), tag('ESP32-C6'), tag('Raspberry Pi', 'fas fa-desktop')],
      },
      {
        title: 'Systèmes',
        icon: 'fab fa-linux',
        color: 'green',
        tags: [
          tag('Linux — Kali / Ubuntu', 'fab fa-linux'),
          tag('Bash', 'fas fa-terminal'),
          tag('Networking', 'fas fa-network-wired'),
        ],
      },
    ],
  },
  {
    title: 'Développement & Cloud',
    icon: 'fas fa-laptop-code',
    color: 'blue',
    subgroups: [
      {
        title: 'Backend',
        icon: 'fas fa-server',
        color: 'indigo',
        tags: [
          tag('Python', 'fab fa-python'),
          tag('Django 5'),
          tag('FastAPI'),
          tag('PHP Symfony', 'fab fa-php'),
          tag('Java', 'fab fa-java'),
          tag('C/C++'),
        ],
      },
      {
        title: 'Frontend & Mobile',
        icon: 'fas fa-mobile-screen',
        color: 'purple',
        tags: [
          tag('Next.js 15'),
          tag('React', 'fab fa-react'),
          tag('React Native', 'fab fa-react'),
          tag('Tailwind CSS', 'fab fa-css3-alt'),
          tag('HTML/CSS', 'fab fa-html5'),
        ],
      },
      {
        title: 'DevOps & Cloud',
        icon: 'fas fa-cloud',
        color: 'orange',
        tags: [
          tag('Docker', 'fab fa-docker'),
          tag('Git / GitHub', 'fab fa-git-alt'),
          tag('AWS S3', 'fab fa-aws'),
          tag('Koyeb'),
          tag('Vercel'),
          tag('CI/CD'),
        ],
      },
      {
        title: 'Bases de données',
        icon: 'fas fa-database',
        color: 'blue',
        tags: [tag('PostgreSQL'), tag('MySQL'), tag('Redis'), tag('Cassandra'), tag('SQLite')],
      },
    ],
  },
];

export const learning: SkillTag[] = [
  { label: 'Red Teaming avancé', icon: 'fas fa-user-secret' },
  { label: 'LLM Security & AI Safety', icon: 'fas fa-robot' },
  { label: 'CTF — Root-Me & TryHackMe', icon: 'fas fa-flag' },
];

export type SoftSkill = { title: string; description: string; icon: string; color: string };

export const softSkills: SoftSkill[] = [
  { title: 'Leadership', description: 'Chef de projet Enactus, VP Junior Entreprise', icon: 'fas fa-flag', color: 'blue' },
  { title: "Travail d'équipe", description: 'Collaboration pluridisciplinaire', icon: 'fas fa-users', color: 'green' },
  { title: 'Résolution de problèmes', description: 'Débogage en production, approche analytique', icon: 'fas fa-lightbulb', color: 'purple' },
  { title: 'Communication', description: 'Technique et interpersonnelle · FR C2 · EN B2+', icon: 'fas fa-comments', color: 'orange' },
];
