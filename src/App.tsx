import { Route, Routes } from 'react-router-dom'
import PortfolioPage from './pages/PortfolioPage'
import VocationalGuidanceCaseStudy from './pages/VocationalGuidanceCaseStudy'

function App() {
  return (
    <Routes>
      <Route path="/" element={<PortfolioPage />} />
      <Route
        path="/proyectos/orientacion-vocacional"
        element={<VocationalGuidanceCaseStudy />}
      />
    </Routes>
  )
}

export default App
