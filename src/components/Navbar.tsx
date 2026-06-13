import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import type { Language } from '../i18n/translations'
import { useLanguage } from '../i18n/useLanguage'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { language, setLanguage, t } = useLanguage()

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12)

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`site-header ${isScrolled ? 'is-scrolled' : ''}`}>
      <nav className="navbar" aria-label={t.nav.aria}>
        <Link
          className="brand"
          to="/"
          aria-label={t.nav.homeAria}
          onClick={() => setIsOpen(false)}
        >
          <span>Kevin Herrera</span>
          <small>{t.nav.brandRole}</small>
        </Link>

        <button
          className="menu-toggle"
          type="button"
          aria-label={isOpen ? t.nav.menuClose : t.nav.menuOpen}
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
            {t.nav.links.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={() => setIsOpen(false)}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <button className="cv-button" type="button" disabled>
            {t.nav.cv}
          </button>
          <div className="language-toggle" aria-label={t.nav.languageAria}>
            {(['en', 'es'] as Language[]).map((option) => (
              <button
                key={option}
                type="button"
                className={language === option ? 'is-active' : ''}
                aria-pressed={language === option}
                onClick={() => setLanguage(option)}
              >
                {option.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </nav>
    </header>
  )
}
