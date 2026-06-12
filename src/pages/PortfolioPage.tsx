import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import ProjectCard from '../components/ProjectCard'
import RevealOnScroll from '../components/RevealOnScroll'
import SectionHeading from '../components/SectionHeading'
import SkillGroup from '../components/SkillGroup'
import { featuredProjects, skillGroups, technologies } from '../data/projects'

export default function PortfolioPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="hero-section">
          <div className="container hero-layout">
            <div className="hero-copy">
              <p className="eyebrow">La Paz, Bolivia · Frontend · Full Stack</p>
              <h1>Kevin Herrera Oropeza</h1>
              <p className="hero-subtitle">
                Ingeniero de Sistemas y desarrollador de software.
              </p>
              <p className="hero-description">
                Construyo soluciones web modernas con TypeScript, React y .NET,
                combinando interfaces cuidadas con una base técnica sólida.
              </p>
              <div className="hero-actions" aria-label="Acciones principales">
                <a className="button primary" href="#proyectos">
                  Ver proyectos
                </a>
                <a className="button secondary" href="#sobre-mi">
                  Conocer mi perfil
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
                Tecnologías
              </h2>
              <ul className="tech-strip">
                {technologies.map((technology) => (
                  <li key={technology}>{technology}</li>
                ))}
              </ul>
            </div>
          </section>
        </RevealOnScroll>

        <RevealOnScroll>
          <section className="section" id="sobre-mi">
            <div className="container two-column">
              <SectionHeading eyebrow="Sobre mí" title="Perfil profesional" />
              <div className="content-block">
                <p>
                  Soy Ingeniero de Sistemas y desarrollador de software con
                  orientación frontend y full stack. Tengo experiencia
                  construyendo soluciones web y me interesa crear interfaces
                  cuidadas, aplicaciones útiles y productos con una base técnica
                  clara.
                </p>
              </div>
            </div>
          </section>
        </RevealOnScroll>

        <RevealOnScroll>
          <section className="section muted-section" id="experiencia">
            <div className="container two-column">
              <SectionHeading eyebrow="Experiencia" title="Trabajo aplicado" />
              {/* Esta sección se completará posteriormente con empresa, rol y fechas. */}
              <article className="experience-card">
                <p>
                  “Experiencia desarrollando y dando soporte a soluciones
                  tecnológicas en un entorno institucional.”
                </p>
              </article>
            </div>
          </section>
        </RevealOnScroll>

        <RevealOnScroll>
          <section className="section" id="proyectos">
            <div className="container">
              <SectionHeading
                eyebrow="Proyectos destacados"
                title="Casos y prácticas técnicas"
                description="Selección inicial de trabajos para revisión pública, sin enlaces ni capturas externas todavía."
              />
              <div className="projects-grid">
                {featuredProjects.map((project) => (
                  <ProjectCard key={project.title} project={project} />
                ))}
              </div>
            </div>
          </section>
        </RevealOnScroll>

        <RevealOnScroll>
          <section className="section muted-section" id="habilidades">
            <div className="container">
              <SectionHeading
                eyebrow="Habilidades"
                title="Stack de trabajo"
                description="Tecnologías organizadas por área, sin porcentajes ni niveles inventados."
              />
              <div className="skills-grid">
                {skillGroups.map((group) => (
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
              <SectionHeading eyebrow="Contacto" title="Datos públicos" />
              <div className="contact-card">
                <dl>
                  <div>
                    <dt>Ubicación</dt>
                    <dd>La Paz, Bolivia</dd>
                  </div>
                  <div>
                    <dt>GitHub</dt>
                    <dd>
                      <a href="https://github.com/kevollex">kevollex</a>
                    </dd>
                  </div>
                  <div>
                    <dt>Correo</dt>
                    <dd>Pendiente de agregar</dd>
                  </div>
                  <div>
                    <dt>LinkedIn</dt>
                    <dd>Pendiente de agregar</dd>
                  </div>
                </dl>
              </div>
            </div>
          </section>
        </RevealOnScroll>
      </main>
      <Footer />
    </>
  )
}
