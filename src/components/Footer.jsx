import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="site-footer">
      <p className="footer-title">KONSTANTINE PRODUCTIONS LLC</p>

      <div className="footer-socials">
        <a href="https://vimeo.com/konstantineproductions" target="_blank" rel="noopener noreferrer" aria-label="Vimeo">
          <img src="/Media/Social Media/Vimeo-png.webp" alt="Vimeo" className="footer-social-icon footer-social-icon--vimeo" />
        </a>
        <a href="https://www.instagram.com/konstantineproductions/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <img src="/Media/Social Media/Instagram_png.png" alt="Instagram" className="footer-social-icon" />
        </a>
        <a href="https://www.facebook.com/KonstantineProductions" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
          <img src="/Media/Social Media/facebook.png" alt="Facebook" className="footer-social-icon" />
        </a>
      </div>

      <nav className="footer-nav">
        <Link to="/">HOME</Link>
        <span className="footer-sep">|</span>
        <Link to="/commercials">COMMERCIALS</Link>
        <span className="footer-sep">|</span>
        <Link to="/narratives">NARRATIVES</Link>
        <span className="footer-sep">|</span>
        <Link to="/music-videos">MUSIC VIDEOS</Link>
        <span className="footer-sep">|</span>
        <Link to="/documentaries">DOCUMENTARIES</Link>
      </nav>

      <nav className="footer-nav">
        <Link to="/about">ABOUT</Link>
        <span className="footer-sep">|</span>
        <Link to="/sustainability">SUSTAINABLE PRACTICES</Link>
        <span className="footer-sep">|</span>
        <Link to="/gallery">GALLERY</Link>
        <span className="footer-sep">|</span>
        <Link to="/contact">CONTACT US</Link>
      </nav>
    </footer>
  )
}

export default Footer
