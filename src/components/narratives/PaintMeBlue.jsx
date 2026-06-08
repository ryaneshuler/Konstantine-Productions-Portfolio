import { useState, useEffect, useRef } from 'react'

const galleryImages = [
  "/Media/Gallery/Narratives/PMB/Narratives_PMB_Gallery_01.webp",
  "/Media/Gallery/Narratives/PMB/Narratives_PMB_Gallery_02.webp",
  "/Media/Gallery/Narratives/PMB/Narratives_PMB_Gallery_03.webp",
  "/Media/Gallery/Narratives/PMB/Narratives_PMB_Gallery_04.webp",
  "/Media/Gallery/Narratives/PMB/Narratives_PMB_Gallery_05.webp",
  "/Media/Gallery/Narratives/PMB/Narratives_PMB_Gallery_06.webp",
  "/Media/Gallery/Narratives/PMB/Narratives_PMB_Gallery_07.webp",
  "/Media/Gallery/Narratives/PMB/Narratives_PMB_Gallery_08.webp",
  "/Media/Gallery/Narratives/PMB/Narratives_PMB_Gallery_09.webp",
  "/Media/Gallery/Narratives/PMB/Narratives_PMB_Gallery_10.webp",
  "/Media/Gallery/Narratives/PMB/Narratives_PMB_Gallery_11.webp",
  "/Media/Gallery/Narratives/PMB/Narratives_PMB_Gallery_12.webp",
  "/Media/Gallery/Narratives/PMB/Narratives_PMB_Gallery_13.webp",
  "/Media/Gallery/Narratives/PMB/Narratives_PMB_Gallery_14.webp",
  "/Media/Gallery/Narratives/PMB/Narratives_PMB_Gallery_15.webp",
  "/Media/Gallery/Narratives/PMB/Narratives_PMB_Gallery_16.webp",
  "/Media/Gallery/Narratives/PMB/Narratives_PMB_Gallery_17.webp",
  "/Media/Gallery/Narratives/PMB/Narratives_PMB_Gallery_18.webp",
]

const btsImages = [
  { src: "/Media/Gallery/Narratives/PMB/Narratives_PMB_BTS-Stills_01.webp", header: "", description: "Nathan Krauss (DP), Melannie Vásquez Lara (\"The Muse\")" },
  { src: "/Media/Gallery/Narratives/PMB/Narratives_PMB_BTS-Stills_02.webp", header: "", description: "Maduma Mihindukulasuriya (1st AC), Ryan Shuler (Producer), Ari Veach (Director), Melannie Vásquez Lara (\"The Muse\"), Austin Barron (Sound Mixer)" },
  { src: "/Media/Gallery/Narratives/PMB/Narratives_PMB_BTS-Stills_03.webp", header: "", description: "Clark Huntley Ivers (Gaffer)" },
  { src: "/Media/Gallery/Narratives/PMB/Narratives_PMB_BTS-Stills_04.webp", header: "", description: "Ari Veach (Director, Producer), Ryan Shuler (Producer, 1st AD)" },
  { src: "/Media/Gallery/Narratives/PMB/Narratives_PMB_BTS-Stills_05.webp", header: "", description: "Nathan Krauss (DP), Melannie Vásquez Lara (\"The Muse\"), Austin Barron (Sound Mixer)" },
  { src: "/Media/Gallery/Narratives/PMB/Narratives_PMB_BTS-Stills_06.webp", header: "", description: "Ari Veach (Director, Producer), Taylor Petracek (\"The Painter\")" },
  { src: "/Media/Gallery/Narratives/PMB/Narratives_PMB_BTS-Stills_07.webp", header: "", description: "Melannie Vásquez Lara (\"The Muse\")" },
  { src: "/Media/Gallery/Narratives/PMB/Narratives_PMB_BTS-Stills_08.webp", header: "", description: "Ari Veach (Director, Producer)" },
  { src: "/Media/Gallery/Narratives/PMB/Narratives_PMB_BTS-Stills_09.webp", header: "", description: "Taylor Petracek (\"The Painter\")" },
  { src: "/Media/Gallery/Narratives/PMB/Narratives_PMB_BTS-Stills_10.webp", header: "", description: "Austin Barron (Sound Mixer), Nathan Krauss (DP), Maduma Mihindukulasuriya (1st AC), Ryan Shuler (Producer), Ari Veach (Director)" },
  { src: "/Media/Gallery/Narratives/PMB/Narratives_PMB_BTS-Stills_11.webp", header: "", description: "Ari Veach (Director), Nathan Krauss (DP), Ryan Shuler (Producer), Melannie Vásquez Lara (\"The Muse\"), Anna Grigo (Production Designer)" },
  { src: "/Media/Gallery/Narratives/PMB/Narratives_PMB_BTS-Stills_12.webp", header: "", description: "Nathan Krauss (DP)" },
  { src: "/Media/Gallery/Narratives/PMB/Narratives_PMB_BTS-Stills_13.webp", header: "", description: "Nathan Krauss (DP), Taylor Petracek (\"The Painter\"), Melannie Vásquez Lara (\"The Muse\")" },
  { src: "/Media/Gallery/Narratives/PMB/Narratives_PMB_BTS-Stills_14.webp", header: "", description: "Ryan Shuler (Producer, 1st AD)" },
  { src: "/Media/Gallery/Narratives/PMB/Narratives_PMB_BTS-Stills_15.webp", header: "", description: "Nathan Krauss (DP)" },
  { src: "/Media/Gallery/Narratives/PMB/Narratives_PMB_BTS-Stills_16.webp", header: "", description: "Ari Veach (Director, Producer)" },
  { src: "/Media/Gallery/Narratives/PMB/Narratives_PMB_BTS-Stills_17.webp", header: "", description: "" },
]

function PaintMeBlue() {
  // Film stills lightbox
  const [lightboxIndex, setLightboxIndex] = useState(null)
  const closeLightbox = () => setLightboxIndex(null)
  const lightboxPrev = () => setLightboxIndex(i => (i - 1 + galleryImages.length) % galleryImages.length)
  const lightboxNext = () => setLightboxIndex(i => (i + 1) % galleryImages.length)

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

  // Awards reveal + lightbox
  const awardsImgRef = useRef(null)
  const [awardsVisible, setAwardsVisible] = useState(false)
  const [awardsLightbox, setAwardsLightbox] = useState(false)

  useEffect(() => {
    if (!awardsLightbox) return
    const onKey = (e) => { if (e.key === 'Escape') setAwardsLightbox(false) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [awardsLightbox])

  useEffect(() => {
    const el = awardsImgRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setAwardsVisible(true); observer.disconnect() } },
      { threshold: 0 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  // BTS slideshow
  const btsThumbnailsRef = useRef(null)
  const [currentBtsSlide, setCurrentBtsSlide] = useState(0)
  const [btsOrientations, setBtsOrientations] = useState({})

  const handleBtsImgLoad = (e, index) => {
    const isLandscape = e.target.naturalWidth > e.target.naturalHeight
    setBtsOrientations(prev => ({ ...prev, [index]: isLandscape ? 'landscape' : 'portrait' }))
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBtsSlide(prev => (prev + 1) % btsImages.length)
    }, 4500)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    const container = btsThumbnailsRef.current
    if (!container) return
    const activeThumb = container.children[currentBtsSlide]
    if (!activeThumb) return
    const scrollLeft = activeThumb.offsetLeft - (container.offsetWidth / 2) + (activeThumb.offsetWidth / 2)
    container.scrollTo({ left: scrollLeft, behavior: 'smooth' })
  }, [currentBtsSlide])

  const prevBtsSlide = () => setCurrentBtsSlide(prev => (prev - 1 + btsImages.length) % btsImages.length)
  const nextBtsSlide = () => setCurrentBtsSlide(prev => (prev + 1) % btsImages.length)

  // BTS lightbox
  const [btsLightboxIndex, setBtsLightboxIndex] = useState(null)
  const closeBtsLightbox = () => setBtsLightboxIndex(null)
  const btsLightboxPrev = () => setBtsLightboxIndex(i => (i - 1 + btsImages.length) % btsImages.length)
  const btsLightboxNext = () => setBtsLightboxIndex(i => (i + 1) % btsImages.length)

  useEffect(() => {
    if (btsLightboxIndex === null) return
    const onKey = (e) => {
      if (e.key === 'Escape') closeBtsLightbox()
      if (e.key === 'ArrowLeft') btsLightboxPrev()
      if (e.key === 'ArrowRight') btsLightboxNext()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [btsLightboxIndex])

  return (
    <main className="pmb-page">

      {/* Banner */}
      <div
        className="pmb-banner home-banner-fixed banner-pmb"
        style={{ backgroundImage: "url('/Media/Gallery/Narratives/PMB/Narratives_PMB_Banner_01.webp')" }}
      >
        <div className="pmb-banner-text">
          <h1 className="pmb-banner-title">PAINT ME BLUE</h1>
          <p className="pmb-banner-subtitle">(Short Film, 2025)</p>
        </div>
      </div>

      {/* Official Trailer */}
      <section className="pmb-section">
        <h2 className="pmb-section-header">OFFICIAL TRAILER</h2>
        <div className="pmb-vimeo-wrapper">
          <iframe
            src="https://player.vimeo.com/video/1028961153"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            title="Paint Me Blue — Official Trailer"
          ></iframe>
        </div>
      </section>

      {/* Watch Film */}
      <div className="rt-watch-btn-wrap">
        <a href="http://youtube.com/watch?v=PvpnvNCqhmU&t=3s" target="_blank" rel="noopener noreferrer" className="rt-watch-btn">WATCH FILM</a>
      </div>

      {/* Synopsis */}
      <div
        className="pmb-synopsis home-banner-fixed synopsis-pmb"
        style={{ backgroundImage: "url('/Media/Gallery/Narratives/PMB/Narratives_PMB_Synopsis_01.webp')" }}
      >
        <div className="pmb-synopsis-overlay">
          <h2 className="pmb-synopsis-header">SYNOPSIS</h2>
          <p className="pmb-synopsis-body">
            A Painter and a Muse fall in love, create art, and escape reality in the midst of chaos
            and tragedy. As the world returns to normalcy, they must grapple with their own
            evolution, purpose, and destiny.
          </p>
        </div>
      </div>

      {/* Official Poster */}
      <section className="pmb-section">
        <h2 className="pmb-section-header">OFFICIAL POSTER</h2>
        <img
          className="pmb-poster"
          src="/Media/Gallery/Narratives/PMB/Narratives_PMB_Poster_01.webp"
          alt="Paint Me Blue Official Poster"
        />
      </section>

      {/* Gallery */}
      <section className="pmb-section">
        <h2 className="pmb-section-header">GALLERY</h2>
        <div className="pmb-gallery-grid">
          {galleryImages.map((src, i) => (
            <img
              key={src}
              src={src}
              alt={`Paint Me Blue gallery ${i + 1}`}
              className="pmb-gallery-img"
              onClick={() => setLightboxIndex(i)}
              style={{ cursor: 'pointer' }}
            />
          ))}
        </div>
      </section>

      {/* BTS Stills Slideshow */}
      <section className="pmb-section">
        <h2 className="pmb-section-header">BEHIND THE SCENES</h2>
        <div className="home-gallery bts-slideshow">
          <div
            className="gallery-slideshow"
            style={{ cursor: 'pointer' }}
            onClick={() => setBtsLightboxIndex(currentBtsSlide)}
          >
            {btsImages.map((img, i) => (
              <div
                key={img.src}
                className={`gallery-slide${i === currentBtsSlide ? ' active' : ''}`}
              >
                <img
                  src={img.src}
                  alt={`Paint Me Blue BTS ${i + 1}`}
                  onLoad={(e) => handleBtsImgLoad(e, i)}
                  style={btsOrientations[i] === 'landscape' ? { objectFit: 'cover' } : {}}
                />
              </div>
            ))}
            {(btsImages[currentBtsSlide].header || btsImages[currentBtsSlide].description) && (
              <div className="gallery-caption">
                <h3 className="gallery-caption-header">{btsImages[currentBtsSlide].header}</h3>
                <p className="gallery-caption-desc">{btsImages[currentBtsSlide].description}</p>
              </div>
            )}
            <button className="gallery-arrow gallery-prev" onClick={(e) => { e.stopPropagation(); prevBtsSlide() }} aria-label="Previous image">
              &#8249;
            </button>
            <button className="gallery-arrow gallery-next" onClick={(e) => { e.stopPropagation(); nextBtsSlide() }} aria-label="Next image">
              &#8250;
            </button>
          </div>
          <div className="gallery-thumbnails" ref={btsThumbnailsRef}>
            {btsImages.map((img, i) => (
              <button
                key={img.src}
                className={`gallery-thumb${i === currentBtsSlide ? ' active' : ''}`}
                onClick={() => setCurrentBtsSlide(i)}
                aria-label={`Go to BTS image ${i + 1}`}
              >
                <img src={img.src} alt={`Paint Me Blue BTS ${i + 1}`} />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Behind the Scenes Reel */}
      <section className="pmb-section">
        <h2 className="pmb-section-header">BEHIND THE SCENES REEL</h2>
        <div className="pmb-vimeo-wrapper">
          <iframe
            src="https://player.vimeo.com/video/956581441"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            title="Paint Me Blue — Behind the Scenes Reel"
          ></iframe>
        </div>
      </section>

      {/* Awards */}
      <section className="pmb-section">
        <h2 className="pmb-section-header">AWARDS</h2>
        <img
          ref={awardsImgRef}
          src="/Media/Gallery/Narratives/PMB/Narratives_PMB_Awards_01.webp"
          alt="Paint Me Blue Awards"
          className={`pmb-awards-img${awardsVisible ? ' pmb-awards-reveal' : ''}`}
          onClick={() => setAwardsLightbox(true)}
          style={{ cursor: 'pointer' }}
        />
      </section>

      {/* Key Credits */}
      <div
        className="pmb-credits home-banner-fixed credits-pmb"
        style={{ backgroundImage: "url('/Media/Gallery/Narratives/PMB/Narratives_PMB_Credits_01.webp')" }}
      >
        <div className="pmb-credits-overlay">
          <h2 className="pmb-credits-header">KEY CREDITS</h2>
          <p className="pmb-credits-individual"><em>Written &amp; Directed by:</em> Ari Veach</p>
          <p className="pmb-credits-individual"><em>Produced by:</em> Ari Veach, Ryan Shuler</p>
          <p className="pmb-credits-individual"><em>Starring:</em> Melannie Vásquez Lara, Taylor Petracek</p>
          <p className="pmb-credits-individual"><em>Director of Photography:</em> Nathan Krauss</p>
          <p className="pmb-credits-individual"><em>Production Designer:</em> Anna Grigo</p>
          <p className="pmb-credits-individual"><em>Music by:</em> Katherine Beggs</p>
          <p className="pmb-credits-individual"><em>Choreographer:</em> Ryan Shuler</p>
          <p className="pmb-credits-individual"><em>Edited by:</em> Taylor Petracek</p>
          <p className="pmb-credits-individual"><em>Sound Design:</em> Taylor Bradshaw</p>
          <p className="pmb-credits-individual"><em>Colorist:</em> Ryan Berger</p>
        </div>
      </div>

      {/* Awards lightbox */}
      {awardsLightbox && (
        <div className="lightbox-overlay" onClick={() => setAwardsLightbox(false)}>
          <button className="lightbox-close" onClick={() => setAwardsLightbox(false)} aria-label="Close">&times;</button>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img
              className="lightbox-img"
              src="/Media/Gallery/Narratives/PMB/Narratives_PMB_Awards_01.webp"
              alt="Paint Me Blue Awards"
            />
          </div>
        </div>
      )}

      {/* Film stills lightbox */}
      {lightboxIndex !== null && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <button className="lightbox-close" onClick={closeLightbox} aria-label="Close">&times;</button>
          <button className="lightbox-arrow lightbox-prev" onClick={(e) => { e.stopPropagation(); lightboxPrev() }} aria-label="Previous">&#8249;</button>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img
              className="lightbox-img"
              src={galleryImages[lightboxIndex]}
              alt={`Gallery image ${lightboxIndex + 1}`}
            />
          </div>
          <button className="lightbox-arrow lightbox-next" onClick={(e) => { e.stopPropagation(); lightboxNext() }} aria-label="Next">&#8250;</button>
        </div>
      )}

      {/* BTS lightbox */}
      {btsLightboxIndex !== null && (
        <div className="lightbox-overlay" onClick={closeBtsLightbox}>
          <button className="lightbox-close" onClick={closeBtsLightbox} aria-label="Close">&times;</button>
          <button className="lightbox-arrow lightbox-prev" onClick={(e) => { e.stopPropagation(); btsLightboxPrev() }} aria-label="Previous">&#8249;</button>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img
              className="lightbox-img"
              src={btsImages[btsLightboxIndex].src}
              alt={`BTS image ${btsLightboxIndex + 1}`}
            />
          </div>
          <button className="lightbox-arrow lightbox-next" onClick={(e) => { e.stopPropagation(); btsLightboxNext() }} aria-label="Next">&#8250;</button>
        </div>
      )}
    </main>
  )
}

export default PaintMeBlue
