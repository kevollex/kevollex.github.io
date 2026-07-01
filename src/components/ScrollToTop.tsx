import { useLayoutEffect, useRef } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const hashAliases: Record<string, string> = {
  about: 'sobre-mi',
  contact: 'contacto',
  experience: 'experiencia',
  projects: 'proyectos',
  skills: 'habilidades',
}

export default function ScrollToTop() {
  const navigate = useNavigate()
  const { pathname, hash, state } = useLocation()
  const skipNextScroll = useRef(false)
  const scrollTarget = (state as { scrollTo?: string } | null)?.scrollTo

  useLayoutEffect(() => {
    const previousScrollRestoration = window.history.scrollRestoration
    window.history.scrollRestoration = 'manual'

    return () => {
      window.history.scrollRestoration = previousScrollRestoration
    }
  }, [])

  useLayoutEffect(() => {
    const root = document.documentElement
    const previousScrollBehavior = root.style.scrollBehavior
    root.style.scrollBehavior = 'auto'

    if (skipNextScroll.current) {
      skipNextScroll.current = false
    } else if (scrollTarget) {
      const targetId = hashAliases[scrollTarget] ?? scrollTarget
      document.getElementById(targetId)?.scrollIntoView({ behavior: 'auto' })

      skipNextScroll.current = true
      navigate(pathname, { replace: true, state: null })
    } else if (hash) {
      const hashId = decodeURIComponent(hash.slice(1))
      const targetId = hashAliases[hashId] ?? hashId
      document.getElementById(targetId)?.scrollIntoView({ behavior: 'auto' })
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
    }

    root.style.scrollBehavior = previousScrollBehavior
  }, [pathname, hash, scrollTarget, navigate])
  return null
}
