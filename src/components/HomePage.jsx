import { useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom"

const galleryImages = [
  { src: "/Media/Gallery/Home/Gallery_Home_01.webp", header: "\"Sunflowers & Twists\" Products", description: "Sunflowers and Twists promotional video | Photo by Lloyd Hembrador" },
  { src: "/Media/Gallery/Home/Gallery_Home_02.webp", header: "Ari Veach, Ryan Shuler (Producers, Co-Directors), Mecca MeDina (Model)", description: "Zeeta Body product video series | Photo by Lloyd Hembrador" },
  { src: "/Media/Gallery/Home/Gallery_Home_03.webp", header: "Nathan Krauss (DP)", description: "Paint Me Blue (short film) | Photo by Erin Lamar" },
  { src: "/Media/Gallery/Home/Gallery_Home_04.webp", header: "\"Elder Sisters Apothecary\" Products", description: "Elder Sisters Apothecary commercial | Photo by Lloyd Hembrador" },
  { src: "/Media/Gallery/Home/Gallery_Home_05.webp", header: "Mecca MeDina (Model)", description: "Zeeta Body product video series | Photo by Lloyd Hembrador" },
  { src: "/Media/Gallery/Home/Gallery_Home_06.webp", header: "Kezia Thompson (Owner, Sunflowers & Twists)", description: "Sunflowers and Twists promotional video | Photo by Lloyd Hembrador" },
  { src: "/Media/Gallery/Home/Gallery_Home_07.webp", header: "Clark Huntley Ivers (Gaffer)", description: "Paint Me Blue (short film) | Photo by Erin Lamar" },
  { src: "/Media/Gallery/Home/Gallery_Home_08.webp", header: "Eren Gedikoglu (Gaffer)", description: "Sunflowers & Twists promotional video | Photo by Lloyd Hembrador" },
  { src: "/Media/Gallery/Home/Gallery_Home_09.webp", header: "Corey Hess (Steadicam Operator)", description: "Elder Sisters Apothecary commercial | Photo by Lloyd Hembrador" },
  { src: "/Media/Gallery/Home/Gallery_Home_10.webp", header: "Nathan Krauss (DP), Melannie Vásquez Lara (\"The Muse\")", description: "Paint Me Blue (short film) | Photo by Erin Lamar" },
  { src: "/Media/Gallery/Home/Gallery_Home_11.webp", header: "Nathan Krauss (DP), Taylor Petracek (\"The Painter\"), Melannie Vásquez Lara (\"The Muse\")", description: "Paint Me Blue (short film) | Photo by Erin Lamar" },
  { src: "/Media/Gallery/Home/Gallery_Home_12.webp", header: "Corey Hess (1st AC), Taylor Petracek (1st AD)", description: "Remember/Tomorrow (short film) | Photo by Mecca MeDina" },
  { src: "/Media/Gallery/Home/Gallery_Home_13.webp", header: "Nathan Krauss (DP), Maduma Mihindukulasuriya (1st AC)", description: "Paint Me Blue (short film) | Photo by Erin Lamar" },
  { src: "/Media/Gallery/Home/Gallery_Home_14.webp", header: "Ari Veach (Co-Director, \"Him\"), Marielle Renée Rousseau (\"Her\"), Nathan Krauss (DP)", description: "Remember/Tomorrow (short film) | Photo by Mecca MeDina" },
  { src: "/Media/Gallery/Home/Gallery_Home_15.webp", header: "Maduma Mihindukulasuriya (1st AC), Ryan Shuler (Producer), Nathan Krauss (DP), Ari Veach (Director), Melannie Vásquez Lara (\"The Muse\")", description: "Paint Me Blue (short film) | Photo by Erin Lamar" },
]

function HomePage() {
  const thumbnailsRef = useRef(null)
  const [currentSlide, setCurrentSlide] = useState(0)

  // Gallery auto-advance
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % galleryImages.length)
    }, 4500)
    return () => clearInterval(timer)
  }, [])

  // Scroll active thumbnail into view within the strip only
  useEffect(() => {
    const container = thumbnailsRef.current
    if (!container) return
    const activeThumb = container.children[currentSlide]
    if (!activeThumb) return
    const scrollLeft = activeThumb.offsetLeft - (container.offsetWidth / 2) + (activeThumb.offsetWidth / 2)
    container.scrollTo({ left: scrollLeft, behavior: 'smooth' })
  }, [currentSlide])

  const [lightboxIndex, setLightboxIndex] = useState(null)

  const openLightbox = (index) => setLightboxIndex(index)
  const closeLightbox = () => setLightboxIndex(null)
  const lightboxPrev = () =>
    setLightboxIndex(prev => (prev - 1 + galleryImages.length) % galleryImages.length)
  const lightboxNext = () =>
    setLightboxIndex(prev => (prev + 1) % galleryImages.length)

  // Close on Escape, navigate with arrow keys
  useEffect(() => {
    if (lightboxIndex === null) return
    const onKey = (e) => {
      if (e.key === 'Escape') closeLightbox()
      if (e.key === 'ArrowLeft') lightboxPrev()
      if (e.key === 'ArrowRight') lightboxNext()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [lightboxIndex])

  const prevSlide = () =>
    setCurrentSlide(prev => (prev - 1 + galleryImages.length) % galleryImages.length)
  const nextSlide = () =>
    setCurrentSlide(prev => (prev + 1) % galleryImages.length)

  return (
    <>
      {/* Top parallax banner */}
      <div className="banner">
        <p className="banner-text">
          SUSTAINABILITY<br />MEETS<br />CREATIVITY
        </p>
        <div
          className="full-width-container home-banner-fixed"
          style={{ backgroundImage: "url('/Media/Gallery/HomeBanner_01.webp')" }}
          role="img"
          aria-label="Product video shoot"
        />
      </div>

      {/* Demo reel */}
      <div className="demo-reel">
        <h1 className="demo-text" style={{ color: "black" }}>DEMO REEL</h1>
        <div className="video-demo">
          <div className="vimeo-wrapper">
            <iframe
              src="https://player.vimeo.com/video/568945302"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              title="Demo Reel"
            ></iframe>
          </div>
        </div>
        <div className="below-demo">
          <Link to="/narratives"><button>NARRATIVES</button></Link>
          <Link to="/commercials"><button>COMMERCIALS</button></Link>
          <Link to="/documentaries"><button>DOCUMENTARIES</button></Link>
          <Link to="/music-videos"><button>MUSIC VIDEOS</button></Link>
        </div>
      </div>

      {/* Mission statement parallax banner */}
      <div className="mission-statement">
        <div className="mission-text">
          <h1 className="mission-header">KONSTANTINE PRODUCTIONS...</h1>
          <p className="mission-description">
            …is an NYC-based, full-service production company with an eco-conscious mission. We create a range
            of film and video projects for clients — from narratives and music videos, to commercials and
            documentaries, and beyond. We pledge to craft unique productions that achieve a common vision between
            all collaborators at every level. And, we do it sustainably. Because we value and respect the future
            of our planet just as we value and respect the art of storytelling.
          </p>
        </div>
        <div
          className="full-width-container home-banner-fixed"
          style={{ backgroundImage: "url('/Media/Gallery/AriRyan2_New+Edit.webp')" }}
          role="img"
          aria-label="Behind the scenes of 'Remember/Tomorrow'"
        />
      </div>

      {/* Gallery slideshow */}
      <div className="home-gallery">
        <div className="gallery-slideshow" style={{ cursor: 'pointer' }} onClick={() => openLightbox(currentSlide)}>
          {galleryImages.map((img, i) => (
            <div
              key={img.src}
              className={`gallery-slide${i === currentSlide ? " active" : ""}`}
            >
              <img src={img.src} alt={img.header} />
            </div>
          ))}
          <div className="gallery-caption">
            <h3 className="gallery-caption-header">{galleryImages[currentSlide].header}</h3>
            <p className="gallery-caption-desc">{galleryImages[currentSlide].description}</p>
          </div>
          <button className="gallery-arrow gallery-prev" onClick={(e) => { e.stopPropagation(); prevSlide() }} aria-label="Previous image">
            &#8249;
          </button>
          <button className="gallery-arrow gallery-next" onClick={(e) => { e.stopPropagation(); nextSlide() }} aria-label="Next image">
            &#8250;
          </button>
        </div>
        <div className="gallery-thumbnails" ref={thumbnailsRef}>
          {galleryImages.map((img, i) => (
            <button
              key={img.src}
              className={`gallery-thumb${i === currentSlide ? " active" : ""}`}
              onClick={() => setCurrentSlide(i)}
              aria-label={`Go to image ${i + 1}`}
            >
              <img src={img.src} alt={img.header} />
            </button>
          ))}
        </div>
      </div>

      {/* CTA parallax banner */}
      <div className="cta-banner">
        <div
          className="full-width-container home-banner-fixed"
          style={{ backgroundImage: "url('/Media/Gallery/DSC01892.webp')" }}
          role="img"
          aria-label="Let's Collaborate"
        />
        <Link to="/contact" className="cta-button">LET'S COLLABORATE</Link>
      </div>
      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <button className="lightbox-close" onClick={closeLightbox} aria-label="Close">&times;</button>
          <button className="lightbox-arrow lightbox-prev" onClick={(e) => { e.stopPropagation(); lightboxPrev() }} aria-label="Previous image">&#8249;</button>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img
              className="lightbox-img"
              src={galleryImages[lightboxIndex].src}
              alt={galleryImages[lightboxIndex].header}
            />
            <div className="lightbox-caption">
              <p className="lightbox-caption-header">{galleryImages[lightboxIndex].header}</p>
              <p className="lightbox-caption-desc">{galleryImages[lightboxIndex].description}</p>
            </div>
          </div>
          <button className="lightbox-arrow lightbox-next" onClick={(e) => { e.stopPropagation(); lightboxNext() }} aria-label="Next image">&#8250;</button>
        </div>
      )}
    </>
  )
}

export default HomePage
