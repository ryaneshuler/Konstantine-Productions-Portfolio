import { useState } from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const close = () => setMenuOpen(false)

  return (
    <nav>
      <div className="nav-left-section">
        <div className="dropdown" aria-haspopup="true">
          <button className="dropbtn" aria-expanded="false" style={{ color: 'black' }}>OUR WORKS</button>
          <div className="dropdown-content" role="menu">
            <Link role="menuitem" to="/narratives">NARRATIVES</Link>
            <Link role="menuitem" to="/commercials">COMMERCIALS</Link>
            <Link role="menuitem" to="/music-videos">MUSIC VIDEOS</Link>
            <Link role="menuitem" to="/documentaries">DOCUMENTARIES</Link>
          </div>
        </div>
        <div className="dropdown" aria-haspopup="true">
          <button className="dropbtn" aria-expanded="false" style={{ color: 'black' }}>ABOUT</button>
          <div className="dropdown-content" role="menu">
            <Link role="menuitem" to="/about">ABOUT US</Link>
            <Link role="menuitem" to="/sustainability">SUSTAINABLE PRACTICES</Link>
          </div>
        </div>
      </div>

      <Link to="/" onClick={close}>
        <img className="KP-logo" src="/Media/Branding/logo_konstantine_main_round.PNG" alt="Konstantine Productions" />
      </Link>

      <div className="nav-right-section">
        <Link to="/gallery">GALLERY</Link>
        <Link to="/contact">CONTACT US</Link>
      </div>

      {/* Hamburger button — mobile only */}
      <button
        className={`hamburger${menuOpen ? ' hamburger--open' : ''}`}
        onClick={() => setMenuOpen(o => !o)}
        aria-label="Toggle menu"
      >
        <span />
        <span />
        <span />
      </button>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="mobile-menu">
          <Link to="/" onClick={close}>HOME</Link>
          <Link to="/narratives" onClick={close}>NARRATIVES</Link>
          <Link to="/commercials" onClick={close}>COMMERCIALS</Link>
          <Link to="/music-videos" onClick={close}>MUSIC VIDEOS</Link>
          <Link to="/documentaries" onClick={close}>DOCUMENTARIES</Link>
          <Link to="/about" onClick={close}>ABOUT US</Link>
          <Link to="/sustainability" onClick={close}>SUSTAINABLE PRACTICES</Link>
          <Link to="/gallery" onClick={close}>GALLERY</Link>
          <Link to="/contact" onClick={close}>CONTACT US</Link>
        </div>
      )}
    </nav>
  )
}

export default NavBar
