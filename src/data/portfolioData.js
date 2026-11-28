// Toda la información del sitio vive aquí. Cada texto traducible es { es, en } y
// los componentes lo leen con t() de useLang() (ver src/i18n.jsx).

export const personalInfo = {
  name: 'Jeferson Bustamante Gómez',
  role: { es: 'Desarrollador full-stack con foco en backend', en: 'Backend-leaning full-stack developer' },
  location: 'Heredia, Costa Rica',
  availability: { es: 'Disponible para trabajo local y remoto', en: 'Available for local and remote work' },
  email: 'jefersonbustamantegomez@gmail.com',
  phone: '+506 6171 8236',
  contactLocation: { es: 'Costa Rica · remoto', en: 'Costa Rica · remote' },
  github: 'https://github.com/JefersonGomez',
  photo: '/foto-perfil/foto1.jpg',
  photoWidth: 1254,
  photoHeight: 857,
  linkedin: 'https://www.linkedin.com/in/jefersonbustamantegomez/',
  // CV en el idioma activo del sitio
  cv: { es: '/cv/CV_Jeferson_Bustamante_ES.pdf', en: '/cv/CV_Jeferson_Bustamante_EN.pdf' },
};

// Solo destinos que existen de verdad: un enlace que no lleva a ningún lado es
// un defecto, no un pendiente.
export const navLinks = [
  { label: { es: 'Sobre mí', en: 'About' }, href: '#about' },
  { label: { es: 'Proyectos', en: 'Projects' }, href: '#projects' },
  { label: 'Stack', href: '#stack' },
  { label: { es: 'Formación', en: 'Education' }, href: '#education' },
  { label: { es: 'Contacto', en: 'Contact' }, href: '#contact' },
];

export const education = {
  school: 'Universidad Nacional de Costa Rica',
  degree: { es: 'Ingeniería en Sistemas de Información', en: 'B.S. in Information Systems Engineering' },
  status: { es: 'Finalizando tercer año', en: 'Finishing third year' },
};

// Insignias de LinkedIn. Todas enlazan a la página de certificaciones del perfil,
// donde está el botón "Mostrar credencial" de cada una.
export const certificationsUrl =
  'https://www.linkedin.com/in/jefersonbustamantegomez/details/certifications/';

// Las seis más relevantes para el perfil, de la más reciente a la más vieja.
export const certifications = [
  { name: 'Getting Started with Generative AI', issuer: 'IBM', year: { es: 'nov. 2026', en: 'Nov 2026' }, icon: 'Sparkles' },
  { name: 'Claude Academy: Claude Code 101', issuer: 'Anthropic', year: { es: 'oct. 2026', en: 'Oct 2026' }, icon: 'SiAnthropic' },
  { name: 'Claude Academy: Claude 101', issuer: 'Anthropic', year: { es: 'sept. 2026', en: 'Sep 2026' }, icon: 'SiAnthropic' },
  { name: 'AWS Cloud Quest: Cloud Practitioner', issuer: 'Amazon Web Services', year: { es: 'sept. 2026', en: 'Sep 2026' }, icon: 'FaAws' },
  { name: 'MongoDB Overview: Core Concepts and Architecture', issuer: 'MongoDB', year: { es: 'sept. 2026', en: 'Sep 2026' }, icon: 'SiMongodb' },
  { name: 'Backend Development and APIs', issuer: 'freeCodeCamp', year: { es: 'ago. 2026', en: 'Aug 2026' }, icon: 'SiFreecodecamp' },
];

// Stack declarado por Jeferson, agrupado por capa.
export const techStack = [
  {
    group: { es: 'Lenguajes', en: 'Languages' },
    items: [
      { name: 'TypeScript', icon: 'SiTypescript' },
      { name: 'JavaScript', icon: 'SiJavascript' },
      { name: 'Go', icon: 'SiGo' },
    ],
  },
  {
    group: 'Frameworks',
    items: [
      { name: 'Express', icon: 'SiExpress' },
      { name: 'Gin', icon: 'SiGin' },
    ],
  },
  {
    group: 'Frontend',
    items: [
      { name: 'React', icon: 'SiReact' },
      { name: 'Vite', icon: 'SiVite' },
      { name: 'Tailwind CSS', icon: 'SiTailwindcss' },
    ],
  },
  {
    group: { es: 'Bases de datos', en: 'Databases' },
    items: [
      { name: 'PostgreSQL', icon: 'SiPostgresql' },
      { name: 'MongoDB', icon: 'SiMongodb' },
    ],
  },
  {
    group: 'ORM',
    items: [
      { name: 'Prisma', icon: 'SiPrisma' },
      { name: 'GORM', icon: 'SiGo' },
    ],
  },
  {
    group: { es: 'Infraestructura', en: 'Infrastructure' },
    items: [
      { name: 'Docker', icon: 'SiDocker' },
      { name: 'AWS', icon: 'FaAws' },
    ],
  },
  {
    group: { es: 'Control de versiones', en: 'Version control' },
    items: [
      { name: 'Git', icon: 'SiGit' },
      { name: 'GitHub', icon: 'SiGithub' },
    ],
  },
  {
    group: { es: 'Inteligencia artificial', en: 'Artificial intelligence' },
    items: [{ name: 'Claude Code', icon: 'SiClaude' }],
  },
];

// Proyectos propios; `url` lleva a la demo desplegada (null si todavía no hay), `site`
// al sitio público si es distinto de la demo y `repo` al código. `tier` ordena el
// peso visual: featured > mid > minor.
export const projects = [
  {
    id: 'kitchago',
    buddy: {
      es: '¡Los pedidos llegan a cocina en tiempo real! 🍳',
      en: 'Orders reach the kitchen in real time! 🍳',
    },
    tier: 'featured',
    name: 'KitchaGo',
    tagline: { es: 'SaaS multi-restaurante', en: 'Multi-restaurant SaaS' },
    url: 'https://panel.kitchago.com/demo',
    site: 'https://kitchago.com',
    repo: 'https://github.com/JefersonGomez/sistema-restaurante',
    year: '2026',
    lastCommit: { es: 'noviembre 2026', en: 'November 2026' },
    commits: 65,
    description: {
      es: 'Los comensales escanean un QR en la mesa, ven el menú (ES/EN) en su celular y piden; los pedidos llegan en tiempo real a cocina, bar, meseros y caja. Una sola instancia sirve a todos los restaurantes y ninguno puede ver los datos de otro.',
      en: "Diners scan a QR code at the table, browse the menu (ES/EN) on their phone and order; orders reach the kitchen, bar, waiters and cashier in real time. A single instance serves every restaurant, and none can see another's data.",
    },
    highlights: [
      { es: 'Multi-tenant aislado', en: 'Isolated multi-tenancy' },
      { es: 'Tiempo real con WebSockets', en: 'Real time over WebSockets' },
      { es: 'Menú bilingüe por QR', en: 'Bilingual QR menu' },
    ],
    stack: ['TypeScript', 'React', 'Express', 'Socket.IO', 'PostgreSQL', 'Prisma', 'TanStack Query', 'Docker'],
    figure: '/proyectos/kitchaGo.jpg',
    figureWidth: 1280,
    figureHeight: 634,
    figureAlt: {
      es: 'Página de inicio de KitchaGo con un menú pedido desde el celular y el tablero de cocina con los pedidos en preparación.',
      en: 'KitchaGo home page showing a menu ordered from a phone and the kitchen board with orders in progress.',
    },
  },
  {
    id: 'cubivo',
    buddy: {
      es: '130 commits y contando. ¡Hasta tiene un cubito en el logo! 📦',
      en: '130 commits and counting. It even has a little cube in its logo! 📦',
    },
    tier: 'featured',
    name: 'Cubivo',
    tagline: { es: 'Inventario · POS · Facturación', en: 'Inventory · POS · Invoicing' },
    url: 'https://cubivo.org',
    repo: 'https://github.com/JefersonGomez/api-inventario',
    year: '2026',
    lastCommit: { es: 'noviembre 2026', en: 'November 2026' },
    commits: 130,
    description: {
      es: 'Sistema de inventario para empresas con punto de venta incluido, sistema contable y facturación. Autenticación por roles, control de stock con trazabilidad de movimientos y reportes.',
      en: 'Inventory system for businesses with a built-in point of sale, accounting and invoicing. Role-based authentication, stock control with full movement traceability, and reports.',
    },
    highlights: [
      { es: 'Roles admin y cajero', en: 'Admin and cashier roles' },
      { es: 'Trazabilidad de stock', en: 'Stock traceability' },
      { es: 'Demo con datos reales', en: 'Demo with realistic data' },
    ],
    stack: ['TypeScript', 'Express', 'PostgreSQL', 'Prisma', 'Docker', 'Zod', 'Jest'],
    figure: '/proyectos/cubivo.jpg',
    figureWidth: 1400,
    figureHeight: 706,
    figureAlt: {
      es: 'Pantalla de inicio de sesión de Cubivo, con acceso de demostración como administrador o como cajero.',
      en: 'Cubivo sign-in screen, with demo access as an administrator or as a cashier.',
    },
  },
  {
    id: 'techrag',
    buddy: {
      es: 'Le preguntas a un repo y te responde con la fuente 🤓',
      en: 'Ask a repo a question and it answers with sources 🤓',
    },
    tier: 'mid',
    name: 'TechRAG Assistant',
    tagline: { es: 'RAG sobre código y documentación', en: 'RAG over code and docs' },
    url: 'https://rag.jefersonbustamante.duckdns.org/#/',
    repo: 'https://github.com/JefersonGomez/RAG-Techrag-Assistant',
    year: '2026',
    lastCommit: { es: 'octubre 2026', en: 'October 2026' },
    commits: 28,
    description: {
      es: 'Sistema RAG para entender bases de código y documentación técnica. Ingesta un repositorio, lo parte en fragmentos con metadatos, los indexa como embeddings y responde preguntas con el contexto que recupera.',
      en: 'RAG system for understanding codebases and technical docs. It ingests a repository, splits it into chunks with metadata, indexes them as embeddings and answers questions with the context it retrieves.',
    },
    stack: ['TypeScript', 'LangChain', 'pgvector', 'Hugging Face', 'Groq', 'Redis', 'Prisma'],
    figure: '/proyectos/RAG.png',
    figureWidth: 1200,
    figureHeight: 700,
    figureAlt: {
      es: 'Portada de TechRAG Assistant: preguntas sobre un repositorio respondidas citando el archivo y las líneas de origen.',
      en: 'TechRAG Assistant cover: questions about a repository answered with the source file and lines cited.',
    },
  },
  {
    id: 'gullak',
    buddy: {
      es: '¡7.º lugar en HackDays Fatehpur, hecho en 3 días! 🏆',
      en: '7th place at HackDays Fatehpur, built in 3 days! 🏆',
    },
    tier: 'minor',
    name: 'GullakAI',
    tagline: { es: 'Proyecto de competencia (7.º lugar)', en: 'Competition project (7th place)' },
    award: { es: '7.º de ~50 · HackDays Fatehpur 2026', en: '7th of ~50 · HackDays Fatehpur 2026' },
    url: 'https://gullak-ai-psi.vercel.app/',
    repo: 'https://github.com/JefersonGomez/gullak-ai',
    year: '2026',
    lastCommit: { es: 'agosto 2026', en: 'August 2026' },
    commits: 14,
    description: {
      es: 'Asesor financiero con IA para pequeños comerciantes: registran ventas y gastos diarios, ven su salud financiera en un panel y reciben consejos de ahorro generados con Gemini. Metas, reportes, exportación a CSV y tres idiomas. Hecho en solitario en 3 días, entre unos 50 participantes.',
      en: 'AI financial advisor for small merchants: they log daily sales and expenses, see their financial health on a dashboard and get savings tips generated with Gemini. Goals, reports, CSV export and three languages. Built solo in 3 days, among about 50 participants.',
    },
    stack: ['React', 'Vite', 'Tailwind CSS', 'Gemini API', 'Chart.js', 'Framer Motion'],
    figure: '/proyectos/GullakIA.png',
    figureWidth: 1892,
    figureHeight: 900,
    figurePosition: 'center',
    figureAlt: {
      es: 'Pantalla de inicio de GullakAI: registrar ventas y gastos, recibir consejos de ahorro con IA y alcanzar metas.',
      en: 'GullakAI start screen: log sales and expenses, get AI savings tips and reach your goals.',
    },
  },
  {
    id: 'studyflow',
    buddy: {
      es: 'Su IA corre local con Ollama, sin nube 🧠',
      en: 'Its AI runs locally with Ollama, no cloud 🧠',
    },
    tier: 'minor',
    name: 'StudyFlow',
    tagline: { es: 'Gestión académica con IA local', en: 'Academic management with local AI' },
    url: 'https://studyflow-frontend-mocha.vercel.app/dashboard',
    repo: 'https://github.com/JefersonGomez/studyflow-backend',
    year: '2026',
    lastCommit: { es: 'julio 2026', en: 'July 2026' },
    commits: 25,
    description: {
      es: 'API REST para gestión académica: materias, tareas, notas, eventos y pizarra. Extrae el texto de PDFs y la capa de IA corre local con Ollama.',
      en: 'REST API for academic management: courses, tasks, grades, events and a whiteboard. It extracts text from PDFs and the AI layer runs locally with Ollama.',
    },
    stack: ['Go', 'Gin', 'PostgreSQL', 'GORM', 'Ollama', 'JWT'],
    figure: '/proyectos/studyflow.png',
    figureWidth: 1903,
    figureHeight: 944,
    figureAlt: {
      es: 'Panel de StudyFlow con el resumen de materias, tareas pendientes, notas y las próximas entregas.',
      en: 'StudyFlow dashboard with an overview of courses, pending tasks, grades and upcoming deadlines.',
    },
  },
  {
    id: 'rifas',
    buddy: {
      es: 'Del cuaderno a la web: rifas del 00 al 99 🎟️',
      en: 'From notebook to web: raffles from 00 to 99 🎟️',
    },
    tier: 'minor',
    name: 'Rifas Ivannia',
    tagline: { es: 'Rifas 00–99 sin papel', en: 'Paperless 00–99 raffles' },
    url: 'https://rifasivannia.duckdns.org/admin/login',
    repo: 'https://github.com/JefersonGomez/sistema_rifas',
    year: '2026',
    lastCommit: { es: 'noviembre 2026', en: 'November 2026' },
    commits: 22,
    description: {
      es: 'Página pública con los números libres y panel privado para asignar números, registrar abonos en efectivo o SINPE Móvil y mandar recordatorios por WhatsApp con el mensaje ya escrito. Historial con métricas de rifas pasadas.',
      en: 'Public page with the numbers still available and a private panel to assign numbers, record cash or SINPE Móvil installments and send WhatsApp reminders with the message pre-written. History with metrics from past raffles.',
    },
    stack: ['React', 'Express', 'PostgreSQL', 'Prisma', 'TanStack Query', 'Recharts'],
    figure: '/proyectos/rifas.png',
    figureWidth: 297,
    figureHeight: 95,
    figureIsLogo: true,
    figureAlt: { es: 'Logo de Rifas Ivannia.', en: 'Rifas Ivannia logo.' },
  },
];
