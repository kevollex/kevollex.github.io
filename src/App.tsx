import { Route, Routes } from 'react-router-dom'
import PageTransition from './components/PageTransition'
import ScrollToTop from './components/ScrollToTop'
import PortfolioPage from './pages/PortfolioPage'
import VocationalGuidanceCaseStudy from './pages/VocationalGuidanceCaseStudy'

function App() {
  return (
    <>
      <ScrollToTop />
      <PageTransition>
        <Routes>
          <Route path="/" element={<PortfolioPage />} />
          <Route
            path="/proyectos/orientacion-vocacional"
            element={<VocationalGuidanceCaseStudy />}
          />
        </Routes>
      </PageTransition>
    </>
  )
}

export default App
