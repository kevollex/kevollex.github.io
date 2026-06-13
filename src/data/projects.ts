export type Project = {
  title: string
  description: string
  stack: string[]
  status?: string
  cta?: string
  route?: string
  url?: string
  note?: string
}

export const featuredProjects: Project[] = [
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
    description:
      'Application for organizing and tracking job applications.',
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
    skills: ['.NET', 'REST API', 'JWT', 'SQL Server'],
  },
  {
    title: 'Tools',
    skills: ['Git', 'GitHub', 'Docker', 'CI/CD'],
  },
]
