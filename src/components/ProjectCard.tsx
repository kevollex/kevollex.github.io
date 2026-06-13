import { Link } from 'react-router-dom'
import type { Project } from '../data/projects'

type ProjectCardProps = {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="project-card">
      <div>
        {project.status ? <p className="project-status">{project.status}</p> : null}
        <h3>{project.title}</h3>
        <p>{project.description}</p>
      </div>

      <ul className="tag-list" aria-label={`${project.title} stack`}>
        {project.stack.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      {project.note ? <p className="project-note">{project.note}</p> : null}

      {project.route && project.cta ? (
        <Link className="text-link" to={project.route}>
          {project.cta}
        </Link>
      ) : null}

      {project.url && project.cta ? (
        <a
          className="text-link"
          href={project.url}
          target="_blank"
          rel="noreferrer"
          aria-label={`${project.cta}: ${project.title}`}
        >
          {project.cta}
        </a>
      ) : null}
    </article>
  )
}
