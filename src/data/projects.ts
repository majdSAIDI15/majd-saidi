// Real projects from the CV. Cards with no photo use an on-brand icon tile.
// `code` / `demo` buttons only render when a URL is provided (search for TODO).
export type ProjectMedia =
  | { type: 'image'; src: string; alt: string }
  | { type: 'video'; src: string }
  | { type: 'icon'; icon: string };

export type Project = {
  title: string;
  category: string;
  summary: string; // hover overlay
  description: string; // card body
  media: ProjectMedia;
  tags: string[];
  highlight?: string; // optional badge line (e.g. an award)
  code?: string;
  demo?: string;
};

export const projects: Project[] = [
  {
    title: 'Lisa — AI Voice Assistant',
    category: 'Voice AI',
    summary: 'Real-time voice agent for patients',
    description:
      'A phone voice assistant with a 5-stage pipeline (Whisper STT → GPT-4o → ElevenLabs TTS → Twilio, < 2s latency), a ChromaDB RAG layer for per-patient personalization, real-time emotion detection with automatic SMS escalation, and AWS S3 archiving. Live on a French number in production.',
    media: { type: 'icon', icon: 'fas fa-headset' },
    tags: ['Whisper', 'GPT-4o', 'ElevenLabs', 'Twilio', 'ChromaDB', 'RAG'],
  },
  {
    title: 'PillQare Pro — Healthcare CRM',
    category: 'Full-Stack',
    summary: 'Multi-tenant SaaS · web & mobile',
    description:
      'A multi-tenant CRM SaaS: Django 5 + DRF backend with 4-role RBAC, three Next.js 15 portals and a React Native mobile app. Secured with JWT + refresh tokens and 256-bit HMAC API keys (constant-time validation), CI/CD on Koyeb and Vercel.',
    media: { type: 'icon', icon: 'fas fa-notes-medical' },
    tags: ['Django 5', 'DRF', 'Next.js 15', 'React Native', 'JWT', 'RBAC'],
  },
  {
    title: 'Connected Pill Dispenser',
    category: 'IoT',
    summary: 'Embedded firmware on ESP32-P4',
    description:
      'C++ firmware on an ESP32-P4 (RISC-V 400 MHz) running FreeRTOS with 7 tasks in 265 KB RAM, an 800×800 @ 60 fps LVGL 9 touch UI, a motorized 29-compartment carousel, TLS/HTTPS over mbedTLS and an offline mode (SD cache). 10 production bugs resolved.',
    media: { type: 'icon', icon: 'fas fa-microchip' },
    tags: ['ESP32-P4', 'ESP-IDF 5.4', 'FreeRTOS', 'LVGL 9', 'mbedTLS', 'C++'],
  },
  {
    title: 'Glove Voice',
    category: 'IoT',
    summary: 'Sign language to speech, in real time',
    description:
      'An IoT glove that translates sign language into audible speech in real time using Arduino and ESP32, helping bridge communication gaps for the hearing impaired.',
    media: { type: 'video', src: '/images/glove-voice.mp4' },
    tags: ['Arduino', 'ESP32', 'C++', 'SQL'],
    highlight: '🏆 1st National (Injaaz Al Maghrib) · 3rd International (Dubai)',
  },
  {
    title: 'SmartHDoc — Document OCR',
    category: 'Computer Vision',
    summary: 'OCR for administrative documents',
    description:
      'A full OCR pipeline for IDs, passports, certificates and diplomas with structured entity extraction (NLP), document-integrity validation and forgery-vector analysis.',
    media: { type: 'icon', icon: 'fas fa-id-card' },
    tags: ['Tesseract', 'OpenCV', 'spaCy', 'Transformers', 'FastAPI'],
  },
  {
    title: 'ShopMaroc — RAG Chatbot',
    category: 'AI',
    summary: 'Bilingual e-commerce assistant (FR/AR)',
    description:
      'A conversational e-commerce assistant in French and Arabic built on a LangChain → FAISS → GPT-4 retrieval-augmented pipeline served via FastAPI.',
    media: { type: 'icon', icon: 'fas fa-comments' },
    tags: ['LangChain', 'GPT-4', 'FAISS', 'FastAPI', 'Python'],
  },
  {
    title: 'Smart Waste Sorting & GeoGuesser',
    category: 'Deep Learning',
    summary: 'Image classification & geolocation',
    description:
      'Two computer-vision models: a 5-class waste classifier (ResNet50 transfer learning, > 93% accuracy) and an image-based geographic locator (EfficientNetB3).',
    media: { type: 'icon', icon: 'fas fa-recycle' },
    tags: ['TensorFlow', 'Keras', 'PyTorch', 'ResNet50', 'EfficientNetB3'],
  },
  {
    title: 'Python C2 Backdoor',
    category: 'Cybersecurity',
    summary: 'Offensive security research tool',
    description:
      'A personal offensive-security project: a TCP backdoor in Python with a persistent encrypted reverse shell, obfuscation and in-memory execution techniques, system persistence, and command-and-control over camouflaged HTTP requests.',
    media: { type: 'icon', icon: 'fas fa-user-secret' },
    tags: ['Python', 'TCP Sockets', 'Scapy', 'Bash'],
  },
  {
    title: 'ZhBOT — AI Study Chatbot',
    category: 'AI',
    summary: 'AI guidance for studying abroad',
    description:
      'An AI chatbot for "ZhAcademie" that guides students through studying abroad, providing personalized recommendations. Built during a remote project internship.',
    media: { type: 'image', src: '/images/zhbot.png', alt: 'ZhBOT AI chatbot interface' },
    tags: ['JavaScript', 'Voiceflow', 'OpenAI API'],
  },
  {
    title: 'Jarvis — Web Automation',
    category: 'Automation',
    summary: 'Multi-site crontab automation',
    description:
      'A web interface to manage and automate crontab tasks across multiple websites simultaneously, with hardened session management, built during an internship at WebPick.',
    media: { type: 'image', src: '/images/jarvis.png', alt: 'Web automation management interface' },
    tags: ['PHP Symfony', 'MySQL', 'JavaScript'],
  },
  // TODO: add `code`/`demo` URLs to any project above to show its links.
];
