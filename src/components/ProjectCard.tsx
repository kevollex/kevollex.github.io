import type { MouseEvent } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import type { ProjectTranslation } from '../i18n/translations'

type ProjectCardProps = {
  project: ProjectTranslation
  stackLabel: string
}

export default function ProjectCard({ project, stackLabel }: ProjectCardProps) {
  const navigate = useNavigate()
  const hasActions = Boolean(project.route || project.demoUrl || project.url)

  function handleInternalRouteClick(event: MouseEvent<HTMLAnchorElement>) {
    if (
      !project.route ||
      project.route.includes('#') ||
      event.defaultPrevented ||
      event.button !== 0 ||
      event.metaKey ||
      event.altKey ||
      event.ctrlKey ||
      event.shiftKey
    ) {
      return
    }

    event.preventDefault()

    const root = document.documentElement
    const previousScrollBehavior = root.style.scrollBehavior

    root.classList.add('is-route-switching')
    root.style.scrollBehavior = 'auto'
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })

    navigate(project.route!)

    window.setTimeout(() => {
      root.classList.remove('is-route-switching')
      root.style.scrollBehavior = previousScrollBehavior
    }, 180)
  }

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
            <Link
              className="button project-action primary"
              to={project.route}
              onClick={handleInternalRouteClick}
            >
              {project.cta}
            </Link>
          ) : null}

          {project.demoUrl && project.demoCta ? (
            <a
              className="button project-action primary"
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
              className="button project-action secondary"
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
