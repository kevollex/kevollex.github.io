export type Project = {
  title: string
  description: string
  stack: string[]
  status?: string
  cta?: string
  route?: string
  note?: string
}

export const featuredProjects: Project[] = [
  {
    title: 'Plataforma de Orientación Vocacional',
    description:
      'Plataforma web para digitalizar evaluaciones vocacionales, seguimiento de estudiantes y gestión de resultados por parte del área de Psicología.',
    stack: ['React', 'TypeScript', '.NET', 'SQL Server', 'Docker', 'JWT'],
    status: 'Caso de estudio',
    cta: 'Ver caso de estudio',
    route: '/proyectos/orientacion-vocacional',
  },
  {
    title: 'MonteApp',
    description:
      'Aplicación web progresiva orientada a centralizar información académica y comunicaciones institucionales desde dispositivos móviles.',
    stack: ['TypeScript', 'Lit', 'Vite', '.NET', 'SQL Server', 'Redis', 'JWT'],
    note: 'Proyecto desarrollado y supervisado en un contexto institucional. El código fuente, los datos operativos y las capturas se mantienen privados por confidencialidad.',
  },
  {
    title: 'Job Tracker',
    description:
      'Aplicación para organizar y dar seguimiento a postulaciones laborales.',
    stack: ['React', 'TypeScript'],
  },
  {
    title: 'GitHub Repository Explorer',
    description:
      'Aplicación para explorar repositorios y practicar integración con servicios web.',
    stack: ['React', 'TypeScript'],
  },
  {
    title: 'Tipos y pruebas TypeScript',
    description:
      'Proyecto técnico enfocado en tipado estático, validaciones y pruebas automatizadas.',
    stack: ['TypeScript', 'Vitest'],
  },
]

export const technologies = [
  'TypeScript',
  'React',
  '.NET',
  'SQL Server',
  'Docker',
  'Git',
]

export const skillGroups = [
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
]
