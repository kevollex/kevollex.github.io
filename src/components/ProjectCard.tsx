import { Link } from 'react-router-dom'
import type { ProjectTranslation } from '../i18n/translations'

type ProjectCardProps = {
  project: ProjectTranslation
  stackLabel: string
}

export default function ProjectCard({ project, stackLabel }: ProjectCardProps) {
  const hasActions = Boolean(project.route || project.demoUrl || project.url)

  return (
    <article className="project-card">
      <div>
        {project.status ? <p className="project-status">{project.status}</p> : null}
        <h3>{project.title}</h3>
        <p>{project.description}</p>
      </div>

      <ul className="tag-list" aria-label={`${project.title} ${stackLabel}`}>
        {project.stack.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      {project.note ? <p className="project-note">{project.note}</p> : null}

      {hasActions ? (
        <div className="project-actions">
        {project.route && project.cta ? (
          <Link className="text-link" to={project.route}>
            {project.cta}
          </Link>
        ) : null}

        {project.demoUrl && project.demoCta ? (
          <a
            className="text-link"
            href={project.demoUrl}
            target="_blank"
            rel="noreferrer"
            aria-label={project.demoCta + ': ' + project.title}
          >
            {project.demoCta}
          </a>
        ) : null}

        {project.url && (project.repositoryCta || project.cta) ? (
          <a
            className="text-link"
            href={project.url}
            target="_blank"
            rel="noreferrer"
            aria-label={(project.repositoryCta || project.cta) + ': ' + project.title}
          >
            {project.repositoryCta || project.cta}
          </a>
        ) : null}
        </div>
      ) : null}
    </article>
  )
}
