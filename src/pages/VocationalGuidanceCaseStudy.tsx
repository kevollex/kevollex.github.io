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
  'autenticación basada en roles',
  'gestión de evaluaciones',
  'seguimiento por curso',
  'perfil de estudiante',
  'resultados y análisis gráfico',
  'exportación a Excel',
  'documentos PDF privados',
  'experiencia responsive para estudiantes',
]

const complements = [
  'autenticación JWT',
  'almacenamiento privado de PDFs',
  'despliegue con Docker',
]

export default function VocationalGuidanceCaseStudy() {
  return (
    <>
      <main className="case-page">
        <section className="case-hero">
          <div className="container">
            <Link className="back-link" to="/">
              Volver al portafolio
            </Link>
            <p className="eyebrow">Caso de estudio</p>
            <h1>Plataforma de Orientación Vocacional</h1>
            <p>
              Plataforma web desarrollada para digitalizar el proceso de
              orientación vocacional, facilitando la aplicación de evaluaciones,
              el seguimiento de estudiantes y la gestión de resultados por parte
              del área de Psicología.
            </p>
          </div>
        </section>

        <RevealOnScroll>
          <section className="section">
            <div className="container case-grid">
              <article className="case-card">
                <h2>Problema</h2>
                <p>
                  El proceso de orientación vocacional requería una solución web
                  que ayudara a organizar evaluaciones, estudiantes, resultados y
                  documentos de forma más clara para su revisión interna.
                </p>
              </article>
              <article className="case-card">
                <h2>Solución</h2>
                <p>
                  Se planteó una plataforma full stack con flujos diferenciados,
                  gestión de evaluaciones, seguimiento por curso y resultados
                  consultables desde una interfaz responsive.
                </p>
              </article>
            </div>
          </section>
        </RevealOnScroll>

        <RevealOnScroll>
          <section className="section muted-section">
            <div className="container two-column">
              <SectionHeading
                eyebrow="Mi contribución"
                title="Implementación full stack"
              />
              <div className="content-block">
                <p>
                  Diseñé e implementé una solución full stack con autenticación
                  basada en roles, gestión de evaluaciones, seguimiento por
                  curso, visualización de resultados, exportación a Excel y
                  almacenamiento privado de documentos PDF.
                </p>
              </div>
            </div>
          </section>
        </RevealOnScroll>

        <RevealOnScroll>
          <section className="section">
            <div className="container">
              <SectionHeading eyebrow="Stack" title="Tecnologías utilizadas" />
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
                eyebrow="Arquitectura simplificada"
                title="Flujo general"
                description="Sin IPs, dominios, puertos, rutas internas ni configuración real."
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
                eyebrow="Funcionalidades"
                title="Alcance principal"
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
                <h2>Retos técnicos</h2>
                <p>
                  Separar responsabilidades entre interfaz, API, datos y
                  documentos privados, manteniendo una experiencia clara para
                  perfiles de usuario distintos.
                </p>
              </article>
              <PrivacyNotice>
                El código fuente y los datos operativos se mantienen privados
                por confidencialidad. Las capturas públicas utilizan
                exclusivamente información ficticia preparada para demostración.
              </PrivacyNotice>
            </div>
          </section>
        </RevealOnScroll>

        <RevealOnScroll>
          <section className="section">
            <div className="container">
              <SectionHeading
                eyebrow="Galería"
                title="Placeholders de capturas"
                description="Rutas preparadas para reemplazo posterior con imágenes demo."
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
