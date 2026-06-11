// Real projects from the CV. Cards with no photo use an on-brand icon tile.
// `code` / `demo` buttons only render when a URL is provided (search for TODO).
// `details` powers the per-project case-study popup (ProjectModal.astro).
export type ProjectMedia =
  | { type: 'image'; src: string; alt: string }
  | { type: 'video'; src: string }
  | { type: 'icon'; icon: string };

export type GalleryImage = { src: string; caption: string };
export type DetailLink = { label: string; href: string; icon: string };
export type StackGroup = { group: string; items: string[] };

export type ProjectDetails = {
  tagline: string; // one-liner shown under the title in the popup
  context?: string; // role · org · period
  overview: string; // 1–2 paragraphs
  features: string[]; // key highlights
  stack: StackGroup[]; // grouped technologies
  note?: string; // optional caveat / scope line
  gallery?: GalleryImage[];
  links?: DetailLink[];
};

export type Project = {
  slug: string;
  title: string;
  category: string;
  summary: string; // hover overlay
  description: string; // card body
  media: ProjectMedia;
  tags: string[];
  highlight?: string; // optional badge line (e.g. an award)
  code?: string;
  demo?: string;
  details?: ProjectDetails;
};

const LINKEDIN = 'https://www.linkedin.com/in/majd-saidi-218922247/recent-activity/all/';
const linkedinLink: DetailLink = { label: 'More on LinkedIn', href: LINKEDIN, icon: 'fab fa-linkedin' };

export const projects: Project[] = [
  {
    slug: 'lisa',
    title: 'Lisa — AI Voice Assistant',
    category: 'Voice AI',
    summary: 'Real-time voice agent for patients',
    description:
      'A phone voice assistant with a 5-stage pipeline (Whisper STT → GPT-4o → ElevenLabs TTS → Twilio, < 2s latency), a ChromaDB RAG layer for per-patient personalization, real-time emotion detection with automatic SMS escalation, and AWS S3 archiving. Live on a French number in production.',
    media: { type: 'image', src: '/images/projects/lisa/analytics.png', alt: 'Lisa voice-AI analytics dashboard' },
    tags: ['Whisper', 'GPT-4o', 'ElevenLabs', 'Twilio', 'ChromaDB', 'RAG'],
    details: {
      tagline: 'A production phone agent that talks to patients in real time.',
      context: 'Freelance · PillQare · Voice AI',
      overview:
        "Lisa answers the phone for medication follow-up: a caller is greeted by an AI that understands speech, reasons over the patient's record and replies in a natural voice — end to end in under two seconds. A Django backend orchestrates a five-stage pipeline (Twilio telephony → Whisper STT → GPT-4o → ElevenLabs TTS → Twilio), with a ChromaDB RAG layer that personalizes every conversation. It detects emotion in real time, escalates by SMS when needed, and archives every recording to AWS S3. It runs live on a French phone number.",
      features: [
        'Sub-2s end-to-end latency across STT → LLM → TTS',
        'RAG over patient records (ChromaDB) for personalized answers',
        'Real-time emotion detection with automatic SMS escalation',
        'Every call recorded and archived to AWS S3',
        'Analytics dashboard: call volume, durations, transcripts & outcomes',
        'Live in production on a French number',
      ],
      stack: [
        { group: 'Voice & AI', items: ['Whisper STT', 'GPT-4o', 'ElevenLabs TTS', 'OpenAI Realtime'] },
        { group: 'Telephony', items: ['Twilio'] },
        { group: 'Backend', items: ['Django', 'Python'] },
        { group: 'Data & Cloud', items: ['ChromaDB (RAG)', 'AWS S3'] },
      ],
      gallery: [
        { src: '/images/projects/lisa/architecture.png', caption: 'Production architecture' },
        { src: '/images/projects/lisa/architecture-summary.png', caption: 'Pipeline overview' },
        { src: '/images/projects/lisa/analytics.png', caption: 'Analytics dashboard' },
        { src: '/images/projects/lisa/call-detail.png', caption: 'Call detail & transcript' },
        { src: '/images/projects/lisa/recordings.png', caption: 'S3 call recordings' },
      ],
      links: [linkedinLink],
    },
  },
  {
    slug: 'pillqare-pro',
    title: 'PillQare Pro — Healthcare CRM',
    category: 'Full-Stack',
    summary: 'Multi-tenant SaaS · web & mobile',
    description:
      'A multi-tenant CRM SaaS: Django 5 + DRF backend with 4-role RBAC, three Next.js 15 portals and a React Native mobile app. Secured with JWT + refresh tokens and 256-bit HMAC API keys (constant-time validation), CI/CD on Koyeb and Vercel.',
    media: { type: 'image', src: '/images/projects/pillqare-pro/landing.png', alt: 'PillQare Pro landing page' },
    tags: ['Django 5', 'DRF', 'Next.js 15', 'React Native', 'JWT', 'RBAC'],
    details: {
      tagline: 'The multi-tenant SaaS that powers the connected pill dispensers.',
      context: 'Freelance · PillQare · Full-Stack & Security',
      overview:
        'PillQare Pro is a healthcare CRM with backend-enforced tenant isolation and 4-role RBAC (admin, hospital staff, company staff, patient). Three role-aware, localized Next.js 15 portals and a React Native app consume a Django 5 + DRF API. I owned the security model — JWT over HttpOnly cookies and 256-bit HMAC API keys for the IoT devices with constant-time validation — and fixed four classes of vulnerabilities in production (broken auth, IDOR, injection, secret leakage). It also ships an over-the-air firmware service for the dispensers.',
      features: [
        'Backend-enforced multi-tenant isolation with 4-role RBAC',
        'Three localized Next.js 15 portals (admin / hospital / company) + React Native app',
        'JWT (HttpOnly cookies) + 256-bit HMAC device keys, constant-time validation',
        'Fixed broken-auth, IDOR, injection & secret-leakage issues in production',
        'OTA firmware delivery (rollout %, SHA-256 integrity, rollback logs)',
        'CI/CD on Koyeb (backend) and Vercel (frontend)',
      ],
      stack: [
        { group: 'Backend', items: ['Django 5', 'DRF', 'Simple JWT', 'Gunicorn'] },
        { group: 'Frontend', items: ['Next.js 15', 'React 19', 'TypeScript', 'Tailwind', 'shadcn/ui'] },
        { group: 'Mobile', items: ['React Native'] },
        { group: 'Data & Infra', items: ['PostgreSQL', 'Docker', 'Koyeb', 'Vercel'] },
      ],
      gallery: [
        { src: '/images/projects/pillqare-pro/landing.png', caption: 'Landing page' },
        { src: '/images/projects/pillqare-pro/dashboard.png', caption: 'Admin dashboard' },
        { src: '/images/projects/pillqare-pro/patients.png', caption: 'Patients management' },
        { src: '/images/projects/pillqare-pro/pillboxes.png', caption: 'Connected pillboxes' },
        { src: '/images/projects/pillqare-pro/alerts.png', caption: 'Alerts engine' },
        { src: '/images/projects/pillqare-pro/reports.png', caption: 'Reports & analytics' },
      ],
      links: [linkedinLink],
    },
  },
  {
    slug: 'pill-dispenser',
    title: 'Connected Pill Dispenser',
    category: 'IoT',
    summary: 'Embedded firmware on ESP32-P4',
    description:
      'C++ firmware on an ESP32-P4 (RISC-V 400 MHz) running FreeRTOS with 7 tasks in 265 KB RAM, an 800×800 @ 60 fps LVGL 9 touch UI, a motorized 29-compartment carousel, TLS/HTTPS over mbedTLS and an offline mode (SD cache). 10 production bugs resolved.',
    media: { type: 'image', src: '/images/projects/pill-dispenser/device.png', alt: 'The connected pill dispenser device' },
    tags: ['ESP32-P4', 'ESP-IDF 5.4', 'FreeRTOS', 'LVGL 9', 'mbedTLS', 'C++'],
    details: {
      tagline: 'Embedded firmware for a 29-slot connected pill dispenser.',
      context: 'Freelance · PillQare · Embedded / IoT',
      overview:
        'Firmware for an ESP32-P4 (dual-core RISC-V) dispenser built on ESP-IDF and FreeRTOS. It drives a motorized 29-compartment carousel (stepper + servo door), an 800×800 round LVGL 9 touch display, audio alerts and an SD store — all within ~265 KB of RAM, with WiFi 6 + BLE handled by an ESP32-C6 coprocessor. Medications dispense automatically from CRM-synced schedules; an offline staging queue replays events when connectivity returns, cloud sync is secured with mbedTLS, and an OTA flow self-updates the device with automatic rollback. Tilt and tamper detection round out the safety features.',
      features: [
        'ESP32-P4 + FreeRTOS — 7 tasks within ~265 KB RAM',
        '800×800 round LVGL 9 touch UI at 60 fps',
        'Motorized 29-compartment carousel (stepper + servo)',
        'Automatic dispensing from CRM schedules + offline event staging/replay',
        'Secure TLS/HTTPS sync (mbedTLS) and OTA update with rollback',
        'Tilt-based screen rotation + SD-removal tamper detection',
      ],
      stack: [
        { group: 'MCU & RTOS', items: ['ESP32-P4', 'ESP32-C6', 'ESP-IDF 5.4', 'FreeRTOS'] },
        { group: 'UI & Drivers', items: ['LVGL 9', 'Stepper/Servo', 'WS2812B', 'ES8311 audio'] },
        { group: 'Connectivity', items: ['WiFi 6', 'BLE', 'mbedTLS', 'HTTPS'] },
        { group: 'Language', items: ['C / C++'] },
      ],
      gallery: [
        { src: '/images/projects/pill-dispenser/device.png', caption: 'The device' },
        { src: '/images/projects/pill-dispenser/model-3d.jpg', caption: '3D model' },
        { src: '/images/projects/pill-dispenser/carousel.png', caption: '29-compartment carousel' },
        { src: '/images/projects/pill-dispenser/ui.jpg', caption: 'On-device LVGL UI' },
        { src: '/images/projects/pill-dispenser/in-use.jpg', caption: 'In use' },
        { src: '/images/projects/pill-dispenser/wiring.jpg', caption: 'Wiring diagram' },
      ],
      links: [linkedinLink],
    },
  },
  {
    slug: 'glove-voice',
    title: 'Glove Voice',
    category: 'IoT',
    summary: 'Sign language to speech, in real time',
    description:
      'An IoT glove that translates sign language into audible speech in real time using Arduino and ESP32, helping bridge communication gaps for the hearing impaired.',
    media: { type: 'video', src: '/images/glove-voice.mp4' },
    tags: ['Arduino', 'ESP32', 'C++', 'SQL'],
    highlight: '🏆 1st National (Injaaz Al Maghrib) · 3rd International (Dubai)',
    details: {
      tagline: 'A wearable that turns sign language into speech — award-winning.',
      context: 'Founder & Project Lead · 2024 – present',
      overview:
        'Glove Voice is a wearable that translates sign-language gestures into audible speech in real time. Flex and motion sensors on the glove feed an ESP32/Arduino pipeline that recognizes gestures and speaks them aloud, helping bridge communication for the hearing- and speech-impaired. The project won 1st place nationally (Injaaz Al Maghrib) and 3rd internationally (Injaaz Al Arab, Dubai).',
      features: [
        'Real-time gesture → speech translation',
        'ESP32 + Arduino sensor fusion (flex + motion)',
        'On-device data logging (SQL) for gesture training',
        '🏆 1st National (Injaaz Al Maghrib) · 3rd International (Dubai)',
      ],
      stack: [
        { group: 'Hardware', items: ['Arduino', 'ESP32', 'Flex / motion sensors'] },
        { group: 'Firmware', items: ['C / C++'] },
        { group: 'Data', items: ['SQL'] },
      ],
      gallery: [
        { src: '/images/projects/glove-voice/7.jpg', caption: 'INJAZ Al-Arab — Youth Entrepreneurship Celebration 2024' },
        { src: '/images/projects/glove-voice/5.jpg', caption: 'Award ceremony — INJAZ Al Maghrib' },
        { src: '/images/projects/glove-voice/6.jpg', caption: 'National final — Company Program 2024' },
        { src: '/images/projects/glove-voice/8.jpg', caption: 'Pitching Glove Voice on stage' },
      ],
      links: [linkedinLink],
    },
  },
  {
    slug: 'smarthdoc',
    title: 'SmartHDoc — Document OCR',
    category: 'Computer Vision',
    summary: 'OCR for administrative documents',
    description:
      'A full OCR pipeline for IDs, passports, certificates and diplomas with structured entity extraction (NLP), document-integrity validation and forgery-vector analysis.',
    media: { type: 'image', src: '/images/projects/smarthdoc/home.png', alt: 'SmartHDoc home — template families' },
    tags: ['Tesseract', 'OpenCV', 'spaCy', 'Transformers', 'FastAPI'],
    details: {
      tagline: 'Align a photographed document, then extract its fields with zonal OCR.',
      context: 'PFA · ENSAM (supervised by Pr. CHEFIRA) · Computer Vision',
      overview:
        'SmartAlign + SmartExtract is a document-digitization platform exposed as a single wizard. SmartAlign warps a photographed document onto a reference template with feature matching + homography (RANSAC → warpPerspective); SmartExtract then runs adaptive, zone-based OCR (background filtering → ROI definition → Tesseract/EasyOCR → JSON export). Users have accounts and reusable template families persisted in PostgreSQL.',
      features: [
        'Template alignment via feature matching + homography (RANSAC)',
        'Adaptive zonal OCR with auto-scale & fit-to-ink zone sizing',
        'Tesseract + EasyOCR fallback, structured JSON export',
        'User accounts + reusable template families (PostgreSQL)',
        '7-step wizard UI with a Konva canvas editor',
      ],
      stack: [
        { group: 'Backend', items: ['FastAPI', 'SQLAlchemy 2.0', 'Alembic'] },
        { group: 'CV / OCR', items: ['OpenCV', 'Tesseract', 'EasyOCR', 'NumPy'] },
        { group: 'Frontend', items: ['React 18', 'Vite', 'Konva'] },
        { group: 'Data & Infra', items: ['PostgreSQL', 'Docker Compose'] },
      ],
      note: 'My scope: the extraction core — background filter, OCR engine and the auto-scaling / fit-to-ink zone algorithms.',
      gallery: [
        { src: '/images/projects/smarthdoc/home.png', caption: 'Home — template families' },
        { src: '/images/projects/smarthdoc/create-project.png', caption: 'Create a project' },
        { src: '/images/projects/smarthdoc/define-zone.png', caption: 'Define extraction zones' },
        { src: '/images/projects/smarthdoc/extract-panel.png', caption: 'SmartExtract panel' },
        { src: '/images/projects/smarthdoc/ocr-result.png', caption: 'OCR result' },
        { src: '/images/projects/smarthdoc/alignment.png', caption: 'Alignment test' },
      ],
    },
  },
  {
    slug: 'shopmaroc',
    title: 'ShopMaroc — RAG Chatbot',
    category: 'AI',
    summary: 'Bilingual e-commerce assistant (FR/AR)',
    description:
      'A conversational e-commerce assistant in French and Arabic built on a LangChain → FAISS → GPT-4 retrieval-augmented pipeline served via FastAPI.',
    media: { type: 'icon', icon: 'fas fa-comments' },
    tags: ['LangChain', 'GPT-4', 'FAISS', 'FastAPI', 'Python'],
    details: {
      tagline: 'A bilingual shopping assistant grounded in the product catalog.',
      context: 'Academic project · ENSAM · AI',
      overview:
        'A conversational shopping assistant for the Moroccan market that answers product questions in French and Arabic. A retrieval-augmented pipeline — LangChain orchestrating a FAISS vector store over the catalog, with GPT-4 generating grounded answers — is served through a FastAPI backend.',
      features: [
        'Retrieval-augmented generation over the product catalog',
        'Bilingual French / Arabic conversations',
        'FAISS semantic search + GPT-4 grounded answers',
        'FastAPI serving layer',
      ],
      stack: [
        { group: 'AI', items: ['LangChain', 'GPT-4', 'FAISS'] },
        { group: 'Backend', items: ['FastAPI', 'Python'] },
      ],
    },
  },
  {
    slug: 'vision-models',
    title: 'Smart Waste Sorting & GeoGuesser',
    category: 'Deep Learning',
    summary: 'Image classification & geolocation',
    description:
      'Two computer-vision models: a 5-class waste classifier (ResNet50 transfer learning, > 93% accuracy) and an image-based geographic locator (EfficientNetB3).',
    media: { type: 'image', src: '/images/projects/vision-models/vgg16.webp', alt: 'VGG-16 convolutional network architecture' },
    tags: ['TensorFlow', 'Keras', 'PyTorch', 'ResNet50', 'EfficientNetB3'],
    details: {
      tagline: 'Two applied computer-vision models.',
      context: 'Academic projects · ENSAM · Deep Learning',
      overview:
        "A waste classifier sorts images into 5 categories using ResNet50 transfer learning (>93% accuracy, TensorFlow/Keras). A 'GeoGuesser' model predicts the geographic location of a photo using EfficientNetB3 (PyTorch).",
      features: [
        '5-class waste classifier — ResNet50 transfer learning, >93% accuracy',
        'Image geo-location model — EfficientNetB3',
        'Data augmentation + fine-tuning pipelines',
      ],
      stack: [
        { group: 'Deep Learning', items: ['TensorFlow', 'Keras', 'PyTorch'] },
        { group: 'Models', items: ['ResNet50', 'EfficientNetB3', 'VGG16', 'OpenCV'] },
      ],
      gallery: [{ src: '/images/projects/vision-models/vgg16.webp', caption: 'VGG-16 convolutional architecture' }],
    },
  },
  {
    slug: 'c2-backdoor',
    title: 'Python C2 Backdoor',
    category: 'Cybersecurity',
    summary: 'Offensive security research tool',
    description:
      'A personal offensive-security project: a TCP backdoor in Python with a persistent encrypted reverse shell, obfuscation and in-memory execution techniques, system persistence, and command-and-control over camouflaged HTTP requests.',
    media: { type: 'icon', icon: 'fas fa-user-secret' },
    tags: ['Python', 'TCP Sockets', 'Scapy', 'Bash'],
    details: {
      tagline: 'Offensive-security research — built for authorized labs and CTFs.',
      context: 'Personal project · 2024 – 2025 · Offensive Security',
      overview:
        'A personal offensive-security research project (educational, lab-only): a TCP backdoor in Python featuring a persistent encrypted reverse shell, obfuscation and in-memory execution techniques, system persistence, and command-and-control over camouflaged HTTP requests. It was built alongside regular CTF practice on Root-Me and TryHackMe — a few of my write-ups and a pentest report are linked below.',
      features: [
        'Persistent encrypted reverse shell over TCP',
        'Obfuscation + in-memory execution to reduce detection',
        'System persistence (crontab / registry)',
        'Command-and-control over camouflaged HTTP requests',
      ],
      stack: [
        { group: 'Offensive', items: ['Python', 'TCP Sockets', 'Scapy', 'Bash'] },
        { group: 'Pentest toolkit', items: ['Burp Suite', 'Nmap', 'Metasploit', 'Wireshark'] },
      ],
      note: 'Educational / authorized-lab use only — no targeting of systems without permission.',
      links: [
        { label: 'n8n — Pentest report', href: '/docs/ctf/n8n-pentest-report.pdf', icon: 'fas fa-file-pdf' },
        { label: 'Nebula — CTF write-up', href: '/docs/ctf/nebula-writeup.pdf', icon: 'fas fa-file-pdf' },
        { label: 'MCP — CTF write-up', href: '/docs/ctf/mcp-writeup.pdf', icon: 'fas fa-file-pdf' },
        { label: 'Compete — CTF write-up', href: '/docs/ctf/compete-writeup.pdf', icon: 'fas fa-file-pdf' },
        { label: 'OpenClaw — CTF write-up', href: '/docs/ctf/openclaw-writeup.pdf', icon: 'fas fa-file-pdf' },
        { label: 'Teletype — CTF write-up', href: '/docs/ctf/teletype-writeup.pdf', icon: 'fas fa-file-pdf' },
      ],
    },
  },
  {
    slug: 'zhbot',
    title: 'ZhBOT — AI Study Chatbot',
    category: 'AI',
    summary: 'AI guidance for studying abroad',
    description:
      'An AI chatbot for "ZhAcademie" that guides students through studying abroad, providing personalized recommendations. Built during a remote project internship.',
    media: { type: 'image', src: '/images/zhbot.png', alt: 'ZhBOT AI chatbot interface' },
    tags: ['JavaScript', 'Voiceflow', 'OpenAI API'],
    details: {
      tagline: 'A chatbot that guides students through studying abroad.',
      context: 'Project internship · ZhAcademie (USA, remote) · Jan – Feb 2025',
      overview:
        'ZhBOT is an AI chatbot built for ZhAcademie that guides students through the process of studying abroad. It combines a Voiceflow conversation design with the OpenAI API to deliver personalized, step-by-step recommendations.',
      features: [
        'Conversational study-abroad guidance',
        'Voiceflow flow + OpenAI API',
        'Personalized recommendations',
      ],
      stack: [
        { group: 'AI', items: ['OpenAI API', 'Voiceflow'] },
        { group: 'Web', items: ['JavaScript'] },
      ],
      gallery: [{ src: '/images/zhbot.png', caption: 'ZhBOT interface' }],
      links: [linkedinLink],
    },
  },
  {
    slug: 'jarvis',
    title: 'Jarvis — Web Automation',
    category: 'Automation',
    summary: 'Multi-site crontab automation',
    description:
      'A web interface to manage and automate crontab tasks across multiple websites simultaneously, with hardened session management, built during an internship at WebPick.',
    media: { type: 'image', src: '/images/jarvis.png', alt: 'Web automation management interface' },
    tags: ['PHP Symfony', 'MySQL', 'JavaScript'],
    details: {
      tagline: 'Manage and automate crontab across many sites from one place.',
      context: 'Full-stack internship · WebPick, Marrakech · Summer 2024',
      overview:
        'Jarvis is a web interface to manage and automate crontab tasks across many websites at once. Built with PHP Symfony and MySQL, it centralizes scheduling and execution; I also hardened session management and analysed the attack surface of the multi-tenant application.',
      features: [
        'Centralized multi-site crontab automation',
        'Session hardening + attack-surface analysis',
        'Multi-tenant web application',
      ],
      stack: [
        { group: 'Backend', items: ['PHP Symfony', 'MySQL'] },
        { group: 'Frontend', items: ['JavaScript', 'HTML/CSS'] },
      ],
      gallery: [{ src: '/images/jarvis.png', caption: 'Jarvis interface' }],
    },
  },
];
