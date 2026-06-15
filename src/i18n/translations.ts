export type Language = 'en' | 'es'

export type ProjectTranslation = {
  title: string
  description: string
  stack: readonly string[]
  status?: string
  cta?: string
  route?: string
  url?: string
  note?: string
}

export type GalleryTranslation = {
  number: string
  title: string
  caption: string
  assetPath: string
}

const shared = {
  email: 'kevinho216@gmail.com',
  githubUrl: 'https://github.com/kevollex',
  linkedinUrl: 'https://www.linkedin.com/in/kevin-herrera-oropeza/',
  whatsappUrl: 'https://wa.me/59170533229',
  location: 'La Paz, Bolivia',
  technologies: ['TypeScript', 'React', '.NET', 'SQL Server', 'Docker', 'Git'],
  stack: [
    '.NET 10',
    'React',
    'TypeScript',
    'Vite',
    'SQL Server',
    'Docker Compose',
    'Caddy',
    'JWT',
  ],
}

export const translations = {
  en: {
    languageName: 'English',
    nav: {
      aria: 'Main navigation',
      homeAria: 'Go to homepage',
      menuOpen: 'Open menu',
      menuClose: 'Close menu',
      links: [
        { label: 'About', href: '/#sobre-mi' },
        { label: 'Experience', href: '/#experiencia' },
        { label: 'Projects', href: '/#proyectos' },
        { label: 'Skills', href: '/#habilidades' },
        { label: 'Contact', href: '/#contacto' },
      ],
      cv: 'Download Resume',
      brandRole: 'Software Developer',
      languageAria: 'Select language',
    },
    footer: {
      role: 'Systems Engineer and Software Developer.',
    },
    home: {
      hero: {
        metadata: 'La Paz, Bolivia · Frontend · Full Stack',
        title: 'Kevin Herrera Oropeza',
        subtitle: 'Systems Engineer and Software Developer.',
        description:
          'Modern web solutions with TypeScript, React and .NET, focused on thoughtful interfaces, reliable backend foundations and practical products.',
        actionsAria: 'Primary actions',
        projectsCta: 'View projects',
        aboutCta: 'View profile',
      },
      technologiesLabel: 'Technologies',
      about: {
        label: 'About',
        title: 'Professional profile',
        body: 'Systems Engineer and software developer with a frontend and full stack focus. Experience building web solutions with thoughtful interfaces, useful applications and a clear technical foundation.',
      },
      experience: {
        label: 'Experience',
        title: 'Applied work',
        body: 'Experience developing and supporting technology solutions in an institutional environment.',
      },
      projects: {
        label: 'Featured projects',
        title: 'Products and technical projects',
      },
      skills: {
        label: 'Skills',
        title: 'Technical toolkit',
      },
      contact: {
        label: 'Contact',
        title: 'Public details',
        locationLabel: 'Location',
        githubLabel: 'GitHub',
        linkedinLabel: 'LinkedIn',
        whatsappLabel: 'WhatsApp',
        whatsappCta: 'Chat on WhatsApp',
        whatsappMessage:
          'Hello Kevin, I found your portfolio and would like to get in touch.',
        emailLabel: 'Email',
        emailCta: 'Send email',
      },
    },
    projects: [
      {
        title: 'Vocational Guidance Platform',
        description:
          'Web platform designed to digitize vocational assessments, student tracking and results management for the Psychology department.',
        stack: ['React', 'TypeScript', '.NET', 'SQL Server', 'Docker', 'JWT'],
        status: 'Case study',
        cta: 'View case study',
        route: '/proyectos/orientacion-vocacional',
      },
      {
        title: 'MonteApp',
        description:
          'Progressive web application designed to centralize academic information and institutional communications on mobile devices.',
        stack: ['TypeScript', 'Lit', 'Vite', '.NET', 'SQL Server', 'Redis', 'JWT'],
        note: 'Developed and supervised in an institutional context. The source code, operational data and screenshots remain private due to confidentiality requirements.',
      },
      {
        title: 'Job Tracker',
        description: 'Application for organizing and tracking job applications.',
        stack: ['React', 'TypeScript'],
        cta: 'View repository',
        url: 'https://github.com/kevollex/frontend-job-tracker',
      },
      {
        title: 'GitHub Repository Explorer',
        description:
          'Application for exploring GitHub repositories, filtering results and practicing web service integration.',
        stack: ['React', 'TypeScript'],
        cta: 'View repository',
        url: 'https://github.com/kevollex/github-repository-explorer',
      },
      {
        title: 'TypeScript Types and Testing',
        description:
          'Technical project focused on static typing, validations and automated tests.',
        stack: ['TypeScript', 'Vitest'],
        cta: 'View repository',
        url: 'https://github.com/kevollex/typescript-testing-lab',
      },
    ],
    skills: [
      {
        title: 'Frontend',
        skills: ['TypeScript', 'React', 'HTML', 'CSS', 'Vite'],
      },
      {
        title: 'Backend',
        skills: ['.NET', 'REST API', 'JWT', 'SQL Server'],
      },
      {
        title: 'Tools',
        skills: ['Git', 'GitHub', 'Docker', 'CI/CD'],
      },
    ],
    caseStudy: {
      back: 'Back to portfolio',
      label: 'Case study',
      title: 'Vocational Guidance Platform',
      summary:
        'Web platform developed to digitize the vocational guidance process, making it easier to administer assessments, track students and manage results for the Psychology department.',
      problem: {
        title: 'Problem',
        body: 'The vocational guidance process needed a web solution to organize assessments, students, results and documents more clearly for internal review.',
      },
      solution: {
        title: 'Solution',
        body: 'The solution was a full stack platform with differentiated flows, assessment management, course-level tracking and results available through a responsive interface.',
      },
      contribution: {
        label: 'Contribution',
        title: 'Full stack implementation',
        body: 'Full stack implementation of a solution with role-based authentication, assessment management, course-level tracking, results visualization, Excel exports and private PDF document storage.',
      },
      stack: {
        label: 'Stack',
        title: 'Technology stack',
        items: shared.stack,
      },
      architecture: {
        label: 'Architecture',
        title: 'High-level architecture',
        aria: 'High-level architecture',
        layers: ['Frontend: React + TypeScript', 'REST API: .NET', 'SQL Server'],
        complements: [
          'JWT authentication',
          'Private PDF storage',
          'Docker deployment',
        ],
      },
      features: {
        label: 'Features',
        title: 'Core scope',
        items: [
          'role-based authentication',
          'assessment management',
          'course-level tracking',
          'student profiles',
          'results and visual analysis',
          'Excel exports',
          'private PDF documents',
          'responsive student experience',
        ],
      },
      challenges: {
        title: 'Technical challenges',
        body: 'Separating responsibilities across the interface, API, data layer and private documents while maintaining a clear experience for different user profiles.',
      },
      privacy: {
        label: 'Privacy notice',
        body: 'The source code and operational data remain private due to confidentiality requirements. Public screenshots use fictional demonstration data exclusively.',
      },
      gallery: {
        label: 'Gallery',
        title: 'Product walkthrough',
        fallback: 'Screenshot unavailable',
      },
    },
    gallery: [
      {
        number: '01',
        title: 'Secure access',
        caption:
          'Role-based access point for students and Psychology staff using fictional demonstration data.',
        assetPath: '/assets/projects/orientacion-vocacional/01-login-demo.png',
      },
      {
        number: '02',
        title: 'Psychology dashboard',
        caption: 'Work view for assessment tracking and management.',
        assetPath: '/assets/projects/orientacion-vocacional/02-panel-psicologia.png',
      },
      {
        number: '03',
        title: 'Demo courses',
        caption: 'Student organization by course using fictional information.',
        assetPath: '/assets/projects/orientacion-vocacional/03-cursos-demo.png',
      },
      {
        number: '04',
        title: 'Students by course',
        caption: 'Student list prepared for a public demonstration.',
        assetPath:
          '/assets/projects/orientacion-vocacional/04-estudiantes-curso-demo.png',
      },
      {
        number: '05',
        title: 'Student profile',
        caption: 'Individual summary with fictional data and assessment status.',
        assetPath:
          '/assets/projects/orientacion-vocacional/05-perfil-estudiante-demo.png',
      },
      {
        number: '06',
        title: 'Pending assessments',
        caption: 'Pending activity interface for students.',
        assetPath:
          '/assets/projects/orientacion-vocacional/06-tests-pendientes-demo.png',
      },
      {
        number: '07',
        title: 'Ranking IPP-R',
        caption: 'Results representation prepared for visual review.',
        assetPath:
          '/assets/projects/orientacion-vocacional/07-resultados-ipp-r-ranking.png',
      },
      {
        number: '08',
        title: 'IPP-R visual analysis',
        caption: 'Reserved area for visualizations and graphical analysis.',
        assetPath:
          '/assets/projects/orientacion-vocacional/08-analisis-grafico-ipp-r.png',
      },
      {
        number: '09',
        title: 'Student home',
        caption: 'Home screen for the student flow with demo content.',
        assetPath:
          '/assets/projects/orientacion-vocacional/09-home-estudiante-demo.png',
      },
      {
        number: '10',
        title: 'Results documents',
        caption: 'Conceptual view for private PDF documents.',
        assetPath:
          '/assets/projects/orientacion-vocacional/10-documentos-resultados-demo.png',
      },
      {
        number: '11',
        title: 'Responsive mobile',
        caption: 'Mobile view of the student experience using demonstration data.',
        assetPath:
          '/assets/projects/orientacion-vocacional/11-home-estudiante-responsive-mobile.png',
      },
    ],
    shared,
    projectCard: {
      stackAria: 'stack',
    },
  },
  es: {
    languageName: 'Español',
    nav: {
      aria: 'Navegación principal',
      homeAria: 'Ir al inicio',
      menuOpen: 'Abrir menú',
      menuClose: 'Cerrar menú',
      links: [
        { label: 'Sobre mí', href: '/#sobre-mi' },
        { label: 'Experiencia', href: '/#experiencia' },
        { label: 'Proyectos', href: '/#proyectos' },
        { label: 'Habilidades', href: '/#habilidades' },
        { label: 'Contacto', href: '/#contacto' },
      ],
      cv: 'Descargar CV',
      brandRole: 'Desarrollador de software',
      languageAria: 'Seleccionar idioma',
    },
    footer: {
      role: 'Ingeniero de Sistemas y desarrollador de software.',
    },
    home: {
      hero: {
        metadata: 'La Paz, Bolivia · Frontend · Full Stack',
        title: 'Kevin Herrera Oropeza',
        subtitle: 'Ingeniero de Sistemas y desarrollador de software.',
        description:
          'Soluciones web modernas con TypeScript, React y .NET, enfocadas en interfaces cuidadas, bases backend sólidas y productos útiles.',
        actionsAria: 'Acciones principales',
        projectsCta: 'Ver proyectos',
        aboutCta: 'Ver perfil',
      },
      technologiesLabel: 'Tecnologías',
      about: {
        label: 'Sobre mí',
        title: 'Perfil profesional',
        body: 'Ingeniero de Sistemas y desarrollador de software con orientación frontend y full stack. Experiencia construyendo soluciones web con interfaces cuidadas, aplicaciones útiles y una base técnica clara.',
      },
      experience: {
        label: 'Experiencia',
        title: 'Trabajo aplicado',
        body: 'Experiencia desarrollando y dando soporte a soluciones tecnológicas en un entorno institucional.',
      },
      projects: {
        label: 'Proyectos destacados',
        title: 'Productos y proyectos técnicos',
      },
      skills: {
        label: 'Habilidades',
        title: 'Stack de trabajo',
      },
      contact: {
        label: 'Contacto',
        title: 'Datos públicos',
        locationLabel: 'Ubicación',
        githubLabel: 'GitHub',
        linkedinLabel: 'LinkedIn',
        whatsappLabel: 'WhatsApp',
        whatsappCta: 'Abrir WhatsApp',
        whatsappMessage:
          'Hola Kevin, vi tu portafolio y me gustaría ponerme en contacto contigo.',
        emailLabel: 'Correo',
        emailCta: 'Enviar correo',
      },
    },
    projects: [
      {
        title: 'Plataforma de Orientación Vocacional',
        description:
          'Plataforma web diseñada para digitalizar evaluaciones vocacionales, el seguimiento de estudiantes y la gestión de resultados por parte del área de Psicología.',
        stack: ['React', 'TypeScript', '.NET', 'SQL Server', 'Docker', 'JWT'],
        status: 'Caso de estudio',
        cta: 'Ver caso de estudio',
        route: '/proyectos/orientacion-vocacional',
      },
      {
        title: 'MonteApp',
        description:
          'Aplicación web progresiva diseñada para centralizar información académica y comunicaciones institucionales desde dispositivos móviles.',
        stack: ['TypeScript', 'Lit', 'Vite', '.NET', 'SQL Server', 'Redis', 'JWT'],
        note: 'Proyecto desarrollado y supervisado en un contexto institucional. El código fuente, los datos operativos y las capturas se mantienen privados por confidencialidad.',
      },
      {
        title: 'Job Tracker',
        description:
          'Aplicación para organizar y dar seguimiento a postulaciones laborales.',
        stack: ['React', 'TypeScript'],
        cta: 'Ver repositorio',
        url: 'https://github.com/kevollex/frontend-job-tracker',
      },
      {
        title: 'GitHub Repository Explorer',
        description:
          'Aplicación para explorar repositorios de GitHub, filtrar resultados y practicar la integración con servicios web.',
        stack: ['React', 'TypeScript'],
        cta: 'Ver repositorio',
        url: 'https://github.com/kevollex/github-repository-explorer',
      },
      {
        title: 'Tipos y pruebas TypeScript',
        description:
          'Proyecto técnico enfocado en tipado estático, validaciones y pruebas automatizadas.',
        stack: ['TypeScript', 'Vitest'],
        cta: 'Ver repositorio',
        url: 'https://github.com/kevollex/typescript-testing-lab',
      },
    ],
    skills: [
      {
        title: 'Frontend',
        skills: ['TypeScript', 'React', 'HTML', 'CSS', 'Vite'],
      },
      {
        title: 'Backend',
        skills: ['.NET', 'API REST', 'JWT', 'SQL Server'],
      },
      {
        title: 'Herramientas',
        skills: ['Git', 'GitHub', 'Docker', 'CI/CD'],
      },
    ],
    caseStudy: {
      back: 'Volver al portafolio',
      label: 'Caso de estudio',
      title: 'Plataforma de Orientación Vocacional',
      summary:
        'Plataforma web desarrollada para digitalizar el proceso de orientación vocacional, facilitando la aplicación de evaluaciones, el seguimiento de estudiantes y la gestión de resultados por parte del área de Psicología.',
      problem: {
        title: 'Problema',
        body: 'El proceso de orientación vocacional requería una solución web que ayudara a organizar evaluaciones, estudiantes, resultados y documentos de forma más clara para su revisión interna.',
      },
      solution: {
        title: 'Solución',
        body: 'Se planteó una plataforma full stack con flujos diferenciados, gestión de evaluaciones, seguimiento por curso y resultados consultables desde una interfaz responsive.',
      },
      contribution: {
        label: 'Contribución',
        title: 'Implementación full stack',
        body: 'Implementación full stack de una solución con autenticación basada en roles, gestión de evaluaciones, seguimiento por curso, visualización de resultados, exportación a Excel y almacenamiento privado de documentos PDF.',
      },
      stack: {
        label: 'Stack',
        title: 'Tecnologías utilizadas',
        items: shared.stack,
      },
      architecture: {
        label: 'Arquitectura',
        title: 'Arquitectura general',
        aria: 'Arquitectura general',
        layers: ['Frontend: React + TypeScript', 'API REST: .NET', 'SQL Server'],
        complements: [
          'Autenticación JWT',
          'Almacenamiento privado de PDFs',
          'Despliegue con Docker',
        ],
      },
      features: {
        label: 'Funcionalidades',
        title: 'Alcance principal',
        items: [
          'autenticación basada en roles',
          'gestión de evaluaciones',
          'seguimiento por curso',
          'perfiles de estudiantes',
          'resultados y análisis gráfico',
          'exportación a Excel',
          'documentos PDF privados',
          'experiencia responsive para estudiantes',
        ],
      },
      challenges: {
        title: 'Retos técnicos',
        body: 'Separar responsabilidades entre interfaz, API, datos y documentos privados, manteniendo una experiencia clara para perfiles de usuario distintos.',
      },
      privacy: {
        label: 'Nota de privacidad',
        body: 'El código fuente y los datos operativos se mantienen privados por requisitos de confidencialidad. Las capturas públicas utilizan exclusivamente información ficticia preparada para demostración.',
      },
      gallery: {
        label: 'Galería',
        title: 'Recorrido por el producto',
        fallback: 'Captura no disponible',
      },
    },
    gallery: [
      {
        number: '01',
        title: 'Acceso seguro',
        caption:
          'Punto de acceso basado en roles para estudiantes y personal de Psicología con datos ficticios de demostración.',
        assetPath: '/assets/projects/orientacion-vocacional/01-login-demo.png',
      },
      {
        number: '02',
        title: 'Panel de Psicología',
        caption: 'Vista de trabajo para seguimiento y gestión de evaluaciones.',
        assetPath: '/assets/projects/orientacion-vocacional/02-panel-psicologia.png',
      },
      {
        number: '03',
        title: 'Cursos demo',
        caption: 'Organización de estudiantes por curso con información ficticia.',
        assetPath: '/assets/projects/orientacion-vocacional/03-cursos-demo.png',
      },
      {
        number: '04',
        title: 'Estudiantes por curso',
        caption: 'Listado de estudiantes preparado para una demostración pública.',
        assetPath:
          '/assets/projects/orientacion-vocacional/04-estudiantes-curso-demo.png',
      },
      {
        number: '05',
        title: 'Perfil de estudiante',
        caption:
          'Resumen individual con datos ficticios y estado de evaluaciones.',
        assetPath:
          '/assets/projects/orientacion-vocacional/05-perfil-estudiante-demo.png',
      },
      {
        number: '06',
        title: 'Evaluaciones pendientes',
        caption: 'Interfaz de actividades pendientes para estudiantes.',
        assetPath:
          '/assets/projects/orientacion-vocacional/06-tests-pendientes-demo.png',
      },
      {
        number: '07',
        title: 'Ranking IPP-R',
        caption: 'Representación de resultados preparada para revisión visual.',
        assetPath:
          '/assets/projects/orientacion-vocacional/07-resultados-ipp-r-ranking.png',
      },
      {
        number: '08',
        title: 'Análisis gráfico IPP-R',
        caption: 'Espacio reservado para visualizaciones y análisis gráfico.',
        assetPath:
          '/assets/projects/orientacion-vocacional/08-analisis-grafico-ipp-r.png',
      },
      {
        number: '09',
        title: 'Inicio de estudiante',
        caption: 'Pantalla de inicio del flujo estudiantil con contenido demo.',
        assetPath:
          '/assets/projects/orientacion-vocacional/09-home-estudiante-demo.png',
      },
      {
        number: '10',
        title: 'Documentos de resultados',
        caption: 'Vista conceptual para documentos PDF privados.',
        assetPath:
          '/assets/projects/orientacion-vocacional/10-documentos-resultados-demo.png',
      },
      {
        number: '11',
        title: 'Responsive mobile',
        caption:
          'Vista móvil de la experiencia estudiantil con datos de demostración.',
        assetPath:
          '/assets/projects/orientacion-vocacional/11-home-estudiante-responsive-mobile.png',
      },
    ],
    shared,
    projectCard: {
      stackAria: 'stack',
    },
  },
} as const
