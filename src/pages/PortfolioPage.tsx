import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import ProjectCard from '../components/ProjectCard'
import RevealOnScroll from '../components/RevealOnScroll'
import SectionHeading from '../components/SectionHeading'
import SkillGroup from '../components/SkillGroup'
import { useLanguage } from '../i18n/useLanguage'

export default function PortfolioPage() {
  const { t } = useLanguage()
  const emailHref = `mailto:${t.shared.email}`

  return (
    <>
      <Navbar />
      <main>
        <section className="hero-section">
          <div className="container hero-layout">
            <div className="hero-copy">
              <p className="eyebrow">{t.home.hero.metadata}</p>
              <h1>{t.home.hero.title}</h1>
              <p className="hero-subtitle">{t.home.hero.subtitle}</p>
              <p className="hero-description">
                {t.home.hero.description}
              </p>
              <div className="hero-actions" aria-label={t.home.hero.actionsAria}>
                <a className="button primary" href="#proyectos">
                  {t.home.hero.projectsCta}
                </a>
                <a className="button secondary" href="#sobre-mi">
                  {t.home.hero.aboutCta}
                </a>
              </div>
            </div>

            <div className="hero-visual" aria-hidden="true">
              <div className="visual-panel">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        </section>

        <RevealOnScroll>
          <section className="section compact-section" aria-labelledby="tecnologias">
            <div className="container">
              <h2 id="tecnologias" className="sr-only">
                {t.home.technologiesLabel}
              </h2>
              <ul className="tech-strip">
                {t.shared.technologies.map((technology) => (
                  <li key={technology}>{technology}</li>
                ))}
              </ul>
            </div>
          </section>
        </RevealOnScroll>

        <RevealOnScroll>
          <section className="section" id="sobre-mi">
            <div className="container two-column">
              <SectionHeading
                eyebrow={t.home.about.label}
                title={t.home.about.title}
              />
              <div className="content-block">
                <p>{t.home.about.body}</p>
              </div>
            </div>
          </section>
        </RevealOnScroll>

        <RevealOnScroll>
          <section className="section muted-section" id="experiencia">
            <div className="container two-column">
              <SectionHeading
                eyebrow={t.home.experience.label}
                title={t.home.experience.title}
              />
              <article className="experience-card">
                <p>{t.home.experience.body}</p>
              </article>
            </div>
          </section>
        </RevealOnScroll>

        <RevealOnScroll>
          <section className="section" id="proyectos">
            <div className="container">
              <SectionHeading
                eyebrow={t.home.projects.label}
                title={t.home.projects.title}
              />
              <div className="projects-grid">
                {t.projects.map((project) => (
                  <ProjectCard
                    key={project.title}
                    project={project}
                    stackLabel={t.projectCard.stackAria}
                  />
                ))}
              </div>
            </div>
          </section>
        </RevealOnScroll>

        <RevealOnScroll>
          <section className="section muted-section" id="habilidades">
            <div className="container">
              <SectionHeading
                eyebrow={t.home.skills.label}
                title={t.home.skills.title}
              />
              <div className="skills-grid">
                {t.skills.map((group) => (
                  <SkillGroup
                    key={group.title}
                    title={group.title}
                    skills={group.skills}
                  />
                ))}
              </div>
            </div>
          </section>
        </RevealOnScroll>

        <RevealOnScroll>
          <section className="section contact-section" id="contacto">
            <div className="container contact-grid">
              <SectionHeading
                eyebrow={t.home.contact.label}
                title={t.home.contact.title}
              />
              <div className="contact-card">
                <dl>
                  <div>
                    <dt>{t.home.contact.locationLabel}</dt>
                    <dd>{t.shared.location}</dd>
                  </div>
                  <div>
                    <dt>{t.home.contact.githubLabel}</dt>
                    <dd>
                      <a
                        href={t.shared.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                      >
                        kevollex
                      </a>
                    </dd>
                  </div>
                  <div>
                    <dt>{t.home.contact.emailLabel}</dt>
                    <dd>
                      <a href={emailHref}>{t.shared.email}</a>
                    </dd>
                  </div>
                </dl>
                <a className="text-link contact-cta" href={emailHref}>
                  {t.home.contact.emailCta}
                </a>
              </div>
            </div>
          </section>
        </RevealOnScroll>
      </main>
      <Footer />
    </>
  )
}
