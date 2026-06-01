import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import HomePage from './components/HomePage'
import AboutPage from './components/AboutPage'
import GalleryPage from './components/GalleryPage'
import SustainabilityPage from './components/SustainabilityPage'
import ContactPage from './components/ContactPage'
import CommercialPage from './components/CommercialPage'
import OWNarrativesPage from './components/OWNarrativesPage'
import MusicVideosPage from './components/MusicVideosPage'
import DocumentariesPage from './components/DocumentariesPage'
import PaintMeBlue from './components/narratives/PaintMeBlue'
import RememberTomorrow from './components/narratives/RememberTomorrow'
import MacNBeth from './components/narratives/MacNBeth'
import Awakening from './components/narratives/Awakening'
import KissingOtherPeople from './components/narratives/KissingOtherPeople'
import IWantYouBaby from './components/narratives/IWantYouBaby'
import SaltyCorn from './components/narratives/SaltyCorn'
import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/sustainability" element={<SustainabilityPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/commercials" element={<CommercialPage />} />
        <Route path="/narratives" element={<OWNarrativesPage />} />
        <Route path="/music-videos" element={<MusicVideosPage />} />
        <Route path="/documentaries" element={<DocumentariesPage />} />
        <Route path="/narratives/paint-me-blue" element={<PaintMeBlue />} />
        <Route path="/narratives/remember-tomorrow" element={<RememberTomorrow />} />
        <Route path="/narratives/mac-n-beth" element={<MacNBeth />} />
        <Route path="/narratives/awakening" element={<Awakening />} />
        <Route path="/narratives/kissing-other-people" element={<KissingOtherPeople />} />
        <Route path="/narratives/i-want-you-baby" element={<IWantYouBaby />} />
        <Route path="/narratives/salty-corn" element={<SaltyCorn />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
