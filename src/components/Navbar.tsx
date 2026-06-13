import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const navLinks = [
  { label: 'About', href: '/#sobre-mi' },
  { label: 'Experience', href: '/#experiencia' },
  { label: 'Projects', href: '/#proyectos' },
  { label: 'Skills', href: '/#habilidades' },
  { label: 'Contact', href: '/#contacto' },
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
      <nav className="navbar" aria-label="Main navigation">
        <Link className="brand" to="/" aria-label="Go to homepage" onClick={() => setIsOpen(false)}>
          <span>Kevin Herrera</span>
          <small>Software Developer</small>
        </Link>

        <button
          className="menu-toggle"
          type="button"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
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
            CV coming soon
          </button>
        </div>
      </nav>
    </header>
  )
}
