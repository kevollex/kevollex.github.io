import { Link } from 'react-router-dom'
import ArchitectureDiagram from '../components/ArchitectureDiagram'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import PrivacyNotice from '../components/PrivacyNotice'
import RevealOnScroll from '../components/RevealOnScroll'
import ScreenshotGallery from '../components/ScreenshotGallery'
import SectionHeading from '../components/SectionHeading'
import { useLanguage } from '../i18n/useLanguage'

export default function VocationalGuidanceCaseStudy() {
  const { t } = useLanguage()
  const caseStudy = t.caseStudy

  return (
    <>
      <Navbar />
      <main className="case-page">
        <section className="case-hero">
          <div className="container">
            <Link className="back-link" to="/">
              {caseStudy.back}
            </Link>
            <p className="eyebrow">{caseStudy.label}</p>
            <h1>{caseStudy.title}</h1>
            <p>{caseStudy.summary}</p>
          </div>
        </section>

        <RevealOnScroll>
          <section className="section">
            <div className="container case-grid">
              <article className="case-card">
                <h2>{caseStudy.problem.title}</h2>
                <p>{caseStudy.problem.body}</p>
              </article>
              <article className="case-card">
                <h2>{caseStudy.solution.title}</h2>
                <p>{caseStudy.solution.body}</p>
              </article>
            </div>
          </section>
        </RevealOnScroll>

        <RevealOnScroll>
          <section className="section muted-section">
            <div className="container two-column">
              <SectionHeading
                eyebrow={caseStudy.contribution.label}
                title={caseStudy.contribution.title}
              />
              <div className="content-block">
                <p>{caseStudy.contribution.body}</p>
              </div>
            </div>
          </section>
        </RevealOnScroll>

        <RevealOnScroll>
          <section className="section">
            <div className="container">
              <SectionHeading
                eyebrow={caseStudy.stack.label}
                title={caseStudy.stack.title}
              />
              <ul className="tag-list large-tags">
                {caseStudy.stack.items.map((item) => (
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
                eyebrow={caseStudy.architecture.label}
                title={caseStudy.architecture.title}
              />
              <ArchitectureDiagram
                ariaLabel={caseStudy.architecture.aria}
                layers={[...caseStudy.architecture.layers]}
              />
              <ul className="complement-list">
                {caseStudy.architecture.complements.map((item) => (
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
                eyebrow={caseStudy.features.label}
                title={caseStudy.features.title}
              />
              <ul className="feature-grid">
                {caseStudy.features.items.map((feature) => (
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
                <h2>{caseStudy.challenges.title}</h2>
                <p>{caseStudy.challenges.body}</p>
              </article>
              <PrivacyNotice label={caseStudy.privacy.label}>
                {caseStudy.privacy.body}
              </PrivacyNotice>
            </div>
          </section>
        </RevealOnScroll>

        <RevealOnScroll>
          <section className="section">
            <div className="container">
              <SectionHeading
                eyebrow={caseStudy.gallery.label}
                title={caseStudy.gallery.title}
              />
              <ScreenshotGallery
                items={t.gallery}
                fallbackText={caseStudy.gallery.fallback}
              />
            </div>
          </section>
        </RevealOnScroll>
      </main>
      <Footer />
    </>
  )
}
