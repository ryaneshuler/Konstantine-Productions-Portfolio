import { Link } from 'react-router-dom'

function NavBar() {
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

      <Link to="/">
        <img className="KP-logo" src="/Media/Branding/logo_konstantine_main_round.PNG" alt="Konstantine Productions" />
      </Link>

      <div className="nav-right-section">
        <Link to="/gallery">GALLERY</Link>
        <Link to="/contact">CONTACT US</Link>
      </div>
    </nav>
  )
}

export default NavBar
