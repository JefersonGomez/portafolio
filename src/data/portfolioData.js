// Toda la información del sitio vive aquí. Los componentes no llevan texto quemado.
//
// Estructura lista para recibir español/inglés más adelante: cada campo de texto
// puede pasar a { es: "...", en: "..." } sin tocar los componentes más que en el
// punto donde se lee.

export const personalInfo = {
  name: 'Jeferson Bustamante Gómez',
  role: 'Desarrollador full-stack con foco en backend',
  location: 'Heredia, Costa Rica',
  availability: 'Disponible para trabajo local y remoto',
  email: 'jefersonbustamantegomez@gmail.com',
  phone: '+506 6171 8236',
  contactLocation: 'Costa Rica · remoto',
  github: 'https://github.com/JefersonGomez',
  photo: '/foto-perfil/foto1.jpg',
  photoWidth: 1254,
  photoHeight: 857,
  linkedin: 'https://www.linkedin.com/in/jefersonbustamantegomez/',
};

// Solo destinos que existen de verdad: un enlace que no lleva a ningún lado es
// un defecto, no un pendiente.
export const navLinks = [
  { label: 'Sobre mí', href: '#about' },
  { label: 'Proyectos', href: '#projects' },
  { label: 'Stack', href: '#stack' },
  { label: 'Formación', href: '#education' },
  { label: 'Contacto', href: '#contact' },
];

// Stack declarado por Jeferson, agrupado por capa.
export const education = {
  school: 'Universidad Nacional de Costa Rica',
  degree: 'Ingeniería en Sistemas de Información',
  status: 'Finalizando tercer año',
};

// Insignias de LinkedIn. Todas enlazan a la página de certificaciones del perfil,
// donde está el botón "Mostrar credencial" de cada una.
export const certificationsUrl =
  'https://www.linkedin.com/in/jefersonbustamantegomez/details/certifications/';

// Las seis más relevantes para el perfil, de la más reciente a la más vieja.
export const certifications = [
  { name: 'Getting Started with Generative AI', issuer: 'IBM', year: 'nov. 2026', icon: 'Sparkles' },
  { name: 'Claude Academy: Claude Code 101', issuer: 'Anthropic', year: 'oct. 2026', icon: 'SiAnthropic' },
  { name: 'Claude Academy: Claude 101', issuer: 'Anthropic', year: 'sept. 2026', icon: 'SiAnthropic' },
  { name: 'AWS Cloud Quest: Cloud Practitioner', issuer: 'Amazon Web Services', year: 'sept. 2026', icon: 'FaAws' },
  { name: 'MongoDB Overview: Core Concepts and Architecture', issuer: 'MongoDB', year: 'sept. 2026', icon: 'SiMongodb' },
  { name: 'Backend Development and APIs', issuer: 'freeCodeCamp', year: 'ago. 2026', icon: 'SiFreecodecamp' },
];

export const techStack = [
  {
    group: 'Lenguajes',
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
    group: 'Bases de datos',
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
    group: 'Infraestructura',
    items: [
      { name: 'Docker', icon: 'SiDocker' },
      { name: 'AWS', icon: 'FaAws' },
    ],
  },
  {
    group: 'Control de versiones',
    items: [
      { name: 'Git', icon: 'SiGit' },
      { name: 'GitHub', icon: 'SiGithub' },
    ],
  },
  {
    group: 'Inteligencia artificial',
    items: [{ name: 'Claude Code', icon: 'SiClaude' }],
  },
];

// Proyectos propios; `url` lleva a la demo desplegada (null si todavía no hay) y `repo`
// al código. `tier` ordena el peso visual: featured > mid > minor.
export const projects = [
  {
    id: 'kitchago',
    buddy: '¡Los pedidos llegan a cocina en tiempo real! 🍳',
    tier: 'featured',
    name: 'KitchaGo',
    tagline: 'SaaS multi-restaurante',
    url: null,
    repo: 'https://github.com/JefersonGomez/sistema-restaurante',
    year: '2026',
    lastCommit: 'noviembre 2026',
    commits: 65,
    description:
      'Los comensales escanean un QR en la mesa, ven el menú (ES/EN) en su celular y piden; los pedidos llegan en tiempo real a cocina, bar, meseros y caja. Una sola instancia sirve a todos los restaurantes y ninguno puede ver los datos de otro.',
    highlights: ['Multi-tenant aislado', 'Tiempo real con WebSockets', 'Menú bilingüe por QR'],
    stack: ['TypeScript', 'React', 'Express', 'Socket.IO', 'PostgreSQL', 'Prisma', 'TanStack Query', 'Docker'],
    figure: '/proyectos/kitchaGo.jpg',
    figureWidth: 1280,
    figureHeight: 634,
    figureAlt:
      'Página de inicio de KitchaGo con un menú pedido desde el celular y el tablero de cocina con los pedidos en preparación.',
  },
  {
    id: 'cubivo',
    buddy: '130 commits y contando. ¡Hasta tiene un cubito en el logo! 📦',
    tier: 'featured',
    name: 'Cubivo',
    tagline: 'Inventario · POS · Facturación',
    url: 'https://cubivo.org',
    repo: 'https://github.com/JefersonGomez/api-inventario',
    year: '2026',
    lastCommit: 'noviembre 2026',
    commits: 130,
    description:
      'Sistema de inventario para empresas con punto de venta incluido, sistema contable y facturación. Autenticación por roles, control de stock con trazabilidad de movimientos y reportes.',
    highlights: ['Roles admin y cajero', 'Trazabilidad de stock', 'Demo con datos reales'],
    stack: ['TypeScript', 'Express', 'PostgreSQL', 'Prisma', 'Docker', 'Zod', 'Jest'],
    figure: '/proyectos/cubivo.jpg',
    figureWidth: 1400,
    figureHeight: 706,
    figureAlt:
      'Pantalla de inicio de sesión de Cubivo, con acceso de demostración como administrador o como cajero.',
  },
  {
    id: 'techrag',
    buddy: 'Le preguntas a un repo y te responde con la fuente 🤓',
    tier: 'mid',
    name: 'TechRAG Assistant',
    tagline: 'RAG sobre código y documentación',
    url: 'https://rag.jefersonbustamante.duckdns.org/#/',
    repo: 'https://github.com/JefersonGomez/RAG-Techrag-Assistant',
    year: '2026',
    lastCommit: 'octubre 2026',
    commits: 28,
    description:
      'Sistema RAG para entender bases de código y documentación técnica. Ingesta un repositorio, lo parte en fragmentos con metadatos, los indexa como embeddings y responde preguntas con el contexto que recupera.',
    stack: ['TypeScript', 'LangChain', 'pgvector', 'Hugging Face', 'Groq', 'Redis', 'Prisma'],
    figure: '/proyectos/RAG.png',
    figureWidth: 1200,
    figureHeight: 700,
    figureAlt:
      'Portada de TechRAG Assistant: preguntas sobre un repositorio respondidas citando el archivo y las líneas de origen.',
  },
  {
    id: 'gullak',
    buddy: '¡7.º lugar en HackDays Fatehpur, hecho en 3 días! 🏆',
    tier: 'minor',
    name: 'GullakAI',
    tagline: 'Proyecto de competencia (7.º lugar)',
    award: '7.º lugar · HackDays Fatehpur 2026',
    url: 'https://gullak-ai-psi.vercel.app/',
    repo: 'https://github.com/JefersonGomez/gullak-ai',
    year: '2026',
    lastCommit: 'agosto 2026',
    commits: 14,
    description:
      'Asesor financiero con IA para pequeños comerciantes: registran ventas y gastos diarios, ven su salud financiera en un panel y reciben consejos de ahorro generados con Gemini. Metas, reportes, exportación a CSV y tres idiomas. Hecho en 3 días durante el hackathon.',
    stack: ['React', 'Vite', 'Tailwind CSS', 'Gemini API', 'Chart.js', 'Framer Motion'],
    figure: '/proyectos/GullakIA.png',
    figureWidth: 1892,
    figureHeight: 900,
    figurePosition: 'center',
    figureAlt:
      'Pantalla de inicio de GullakAI: registrar ventas y gastos, recibir consejos de ahorro con IA y alcanzar metas.',
  },
  {
    id: 'studyflow',
    buddy: 'Su IA corre local con Ollama, sin nube 🧠',
    tier: 'minor',
    name: 'StudyFlow',
    tagline: 'Gestión académica con IA local',
    url: 'https://studyflow-frontend-mocha.vercel.app/dashboard',
    repo: 'https://github.com/JefersonGomez/studyflow-backend',
    year: '2026',
    lastCommit: 'julio 2026',
    commits: 25,
    description:
      'API REST para gestión académica: materias, tareas, notas, eventos y pizarra. Extrae el texto de PDFs y la capa de IA corre local con Ollama.',
    stack: ['Go', 'Gin', 'PostgreSQL', 'GORM', 'Ollama', 'JWT'],
    figure: '/proyectos/studyflow.png',
    figureWidth: 1903,
    figureHeight: 944,
    figureAlt:
      'Panel de StudyFlow con el resumen de materias, tareas pendientes, notas y las próximas entregas.',
  },
  {
    id: 'rifas',
    buddy: 'Del cuaderno a la web: rifas del 00 al 99 🎟️',
    tier: 'minor',
    name: 'Rifas Ivannia',
    tagline: 'Rifas 00–99 sin papel',
    url: 'https://rifasivannia.duckdns.org/admin/login',
    repo: 'https://github.com/JefersonGomez/sistema_rifas',
    year: '2026',
    lastCommit: 'noviembre 2026',
    commits: 22,
    description:
      'Página pública con los números libres y panel privado para asignar números, registrar abonos en efectivo o SINPE Móvil y mandar recordatorios por WhatsApp con el mensaje ya escrito. Historial con métricas de rifas pasadas.',
    stack: ['React', 'Express', 'PostgreSQL', 'Prisma', 'TanStack Query', 'Recharts'],
    figure: '/proyectos/rifas.png',
    figureWidth: 297,
    figureHeight: 95,
    figureIsLogo: true,
    figureAlt: 'Logo de Rifas Ivannia.',
  },
];
