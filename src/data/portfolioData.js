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
  photo: '/foto-perfil/foto-de-perfil.jpeg',
  photoWidth: 972,
  photoHeight: 1296,
  linkedin: 'https://www.linkedin.com/in/jeferson-bustamante-gomez-86853a297/',
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
  'https://www.linkedin.com/in/jeferson-bustamante-gomez-86853a297/details/certifications/';

export const certifications = [
  { name: 'AWS Cloud Quest: Cloud Practitioner', issuer: 'Amazon Web Services', year: '2026', icon: 'FaAws' },
  { name: 'Claude Academy: Claude 101', issuer: 'Anthropic', year: '2026', icon: 'SiAnthropic' },
  { name: 'Backend Development and APIs', issuer: 'freeCodeCamp', year: '2026', icon: 'SiFreecodecamp' },
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
    group: 'Bases de datos',
    items: [{ name: 'PostgreSQL', icon: 'SiPostgresql' }],
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

// Proyectos propios, los tres públicos en GitHub. `figure` apunta a una captura
// real; cuando es null el componente dibuja la lámina grabada del proyecto.
export const projects = [
  {
    id: 'studyflow',
    name: 'StudyFlow',
    url: 'https://github.com/JefersonGomez/studyflow-backend',
    year: '2026',
    lastCommit: 'julio 2026',
    description:
      'API REST para una plataforma de gestión académica: materias, tareas, notas, eventos y pizarra. Sube PDFs y les extrae el texto, y la capa de IA corre local con Ollama en vez de depender de un servicio externo.',
    stack: ['Go', 'Gin', 'PostgreSQL', 'GORM', 'Ollama', 'JWT', 'Google OAuth', 'Swagger'],
    figure: '/proyectos/studyflow.png',
    figureWidth: 1903,
    figureHeight: 944,
    figureAlt:
      'Panel de StudyFlow con el resumen de materias, tareas pendientes, notas y las próximas entregas.',
  },
  {
    id: 'inventario',
    name: 'Sistema de inventario',
    url: 'https://github.com/JefersonGomez/api-inventario',
    year: '2026',
    lastCommit: 'septiembre 2026',
    description:
      'Backend REST de inventario para una pequeña empresa: autenticación por roles, CRUD de productos y categorías, control de stock con trazabilidad de movimientos, órdenes de compra y reportes.',
    stack: ['TypeScript', 'Express', 'PostgreSQL', 'Prisma', 'Docker', 'Zod', 'Jest'],
    figure: '/proyectos/inventario.png',
    figureWidth: 1883,
    figureHeight: 914,
    figureAlt:
      'Panel de InventarioPro con alertas de stock, valor del inventario y gráficos de movimientos por categoría.',
  },
  {
    id: 'techrag',
    name: 'TechRAG Assistant',
    url: 'https://github.com/JefersonGomez/RAG-Techrag-Assistant',
    year: '2026',
    lastCommit: 'septiembre 2026',
    description:
      'Sistema RAG para entender bases de código y documentación técnica. Ingesta un repositorio, lo parte en fragmentos con metadatos, los indexa como embeddings y responde preguntas con el contexto que recupera.',
    stack: ['TypeScript', 'LangChain', 'pgvector', 'Hugging Face', 'Groq', 'Redis', 'Prisma'],
    figure: null,
    figureAlt: null,
  },
];
