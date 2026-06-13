import { Link } from 'react-router-dom'
import ArchitectureDiagram from '../components/ArchitectureDiagram'
import Footer from '../components/Footer'
import PrivacyNotice from '../components/PrivacyNotice'
import RevealOnScroll from '../components/RevealOnScroll'
import ScreenshotGallery from '../components/ScreenshotGallery'
import SectionHeading from '../components/SectionHeading'
import { orientationGallery } from '../data/orientationGallery'

const stack = [
  '.NET 10',
  'React',
  'TypeScript',
  'Vite',
  'SQL Server',
  'Docker Compose',
  'Caddy',
  'JWT',
]

const features = [
  'role-based authentication',
  'assessment management',
  'course-level tracking',
  'student profiles',
  'results and visual analysis',
  'Excel exports',
  'private PDF documents',
  'responsive student experience',
]

const complements = [
  'JWT authentication',
  'Private PDF storage',
  'Docker deployment',
]

export default function VocationalGuidanceCaseStudy() {
  return (
    <>
      <main className="case-page">
        <section className="case-hero">
          <div className="container">
            <Link className="back-link" to="/">
              Back to portfolio
            </Link>
            <p className="eyebrow">Case study</p>
            <h1>Vocational Guidance Platform</h1>
            <p>
              Web platform developed to digitize the vocational guidance
              process, making it easier to administer assessments, track
              students and manage results for the Psychology department.
            </p>
          </div>
        </section>

        <RevealOnScroll>
          <section className="section">
            <div className="container case-grid">
              <article className="case-card">
                <h2>Problem</h2>
                <p>
                  The vocational guidance process needed a web solution to
                  organize assessments, students, results and documents more
                  clearly for internal review.
                </p>
              </article>
              <article className="case-card">
                <h2>Solution</h2>
                <p>
                  The solution was a full stack platform with differentiated
                  flows, assessment management, course-level tracking and
                  results available through a responsive interface.
                </p>
              </article>
            </div>
          </section>
        </RevealOnScroll>

        <RevealOnScroll>
          <section className="section muted-section">
            <div className="container two-column">
              <SectionHeading
                eyebrow="My contribution"
                title="Full stack implementation"
              />
              <div className="content-block">
                <p>
                  I designed and implemented a full stack solution with
                  role-based authentication, assessment management, course-level
                  tracking, results visualization, Excel exports and private PDF
                  document storage.
                </p>
              </div>
            </div>
          </section>
        </RevealOnScroll>

        <RevealOnScroll>
          <section className="section">
            <div className="container">
              <SectionHeading eyebrow="Stack" title="Technology stack" />
              <ul className="tag-list large-tags">
                {stack.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </section>
        </RevealOnScroll>

        <RevealOnScroll>
          <section className="section muted-section">
            <div className="container architecture-grid">
              <SectionHeading
                eyebrow="Architecture"
                title="High-level architecture"
              />
              <ArchitectureDiagram />
              <ul className="complement-list">
                {complements.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </section>
        </RevealOnScroll>

        <RevealOnScroll>
          <section className="section">
            <div className="container">
              <SectionHeading
                eyebrow="Features"
                title="Core scope"
              />
              <ul className="feature-grid">
                {features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            </div>
          </section>
        </RevealOnScroll>

        <RevealOnScroll>
          <section className="section muted-section">
            <div className="container case-grid">
              <article className="case-card">
                <h2>Technical challenges</h2>
                <p>
                  Separating responsibilities across the interface, API, data
                  layer and private documents while maintaining a clear
                  experience for different user profiles.
                </p>
              </article>
              <PrivacyNotice>
                The source code and operational data remain private due to
                confidentiality requirements. Public screenshots use fictional
                demonstration data exclusively.
              </PrivacyNotice>
            </div>
          </section>
        </RevealOnScroll>

        <RevealOnScroll>
          <section className="section">
            <div className="container">
              <SectionHeading
                eyebrow="Gallery"
                title="Screenshot placeholders"
              />
              <ScreenshotGallery items={orientationGallery} />
            </div>
          </section>
        </RevealOnScroll>
      </main>
      <Footer />
    </>
  )
}
