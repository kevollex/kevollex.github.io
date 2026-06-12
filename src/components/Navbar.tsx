import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const navLinks = [
  { label: 'Sobre mí', href: '/#sobre-mi' },
  { label: 'Experiencia', href: '/#experiencia' },
  { label: 'Proyectos', href: '/#proyectos' },
  { label: 'Habilidades', href: '/#habilidades' },
  { label: 'Contacto', href: '/#contacto' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12)

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`site-header ${isScrolled ? 'is-scrolled' : ''}`}>
      <nav className="navbar" aria-label="Navegación principal">
        <Link className="brand" to="/" aria-label="Ir al inicio" onClick={() => setIsOpen(false)}>
          <span>Kevin Herrera</span>
          <small>Software Developer</small>
        </Link>

        <button
          className="menu-toggle"
          type="button"
          aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={isOpen}
          aria-controls="main-menu"
          onClick={() => setIsOpen((value) => !value)}
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </button>

        <div id="main-menu" className={`nav-panel ${isOpen ? 'is-open' : ''}`}>
          <ul className="nav-links">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={() => setIsOpen(false)}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <button className="cv-button" type="button" disabled>
            CV próximamente
          </button>
        </div>
      </nav>
    </header>
  )
}
