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
                Systems Engineer and Software Developer.
              </p>
              <p className="hero-description">
                I build modern web solutions with TypeScript, React and .NET,
                combining thoughtful interfaces with a solid technical foundation.
              </p>
              <div className="hero-actions" aria-label="Primary actions">
                <a className="button primary" href="#proyectos">
                  View projects
                </a>
                <a className="button secondary" href="#sobre-mi">
                  About me
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
                Technologies
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
              <SectionHeading eyebrow="About" title="Professional profile" />
              <div className="content-block">
                <p>
                  I am a Systems Engineer and software developer with a frontend
                  and full stack focus. I have experience building web solutions
                  and I am interested in thoughtful interfaces, useful
                  applications and products with a clear technical foundation.
                </p>
              </div>
            </div>
          </section>
        </RevealOnScroll>

        <RevealOnScroll>
          <section className="section muted-section" id="experiencia">
            <div className="container two-column">
              <SectionHeading eyebrow="Experience" title="Applied work" />
              <article className="experience-card">
                <p>
                  Experience developing and supporting technology solutions in
                  an institutional environment.
                </p>
              </article>
            </div>
          </section>
        </RevealOnScroll>

        <RevealOnScroll>
          <section className="section" id="proyectos">
            <div className="container">
              <SectionHeading
                eyebrow="Featured projects"
                title="Products and technical projects"
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
                eyebrow="Skills"
                title="Technical toolkit"
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
              <SectionHeading eyebrow="Contact" title="Public details" />
              <div className="contact-card">
                <dl>
                  <div>
                    <dt>Location</dt>
                    <dd>La Paz, Bolivia</dd>
                  </div>
                  <div>
                    <dt>GitHub</dt>
                    <dd>
                      <a
                        href="https://github.com/kevollex"
                        target="_blank"
                        rel="noreferrer"
                      >
                        kevollex
                      </a>
                    </dd>
                  </div>
                  <div>
                    <dt>Email</dt>
                    <dd>To be added</dd>
                  </div>
                  <div>
                    <dt>LinkedIn</dt>
                    <dd>To be added</dd>
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
