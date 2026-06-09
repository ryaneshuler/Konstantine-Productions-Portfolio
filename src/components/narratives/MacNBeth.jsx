import { useState, useEffect, useRef } from 'react'

const galleryImages = [
  "/Media/Gallery/Narratives/MNB/Narratives_MNB_Gallery_01.webp",
  "/Media/Gallery/Narratives/MNB/Narratives_MNB_Gallery_02.webp",
  "/Media/Gallery/Narratives/MNB/Narratives_MNB_Gallery_03.webp",
  "/Media/Gallery/Narratives/MNB/Narratives_MNB_Gallery_04.webp",
  "/Media/Gallery/Narratives/MNB/Narratives_MNB_Gallery_05.webp",
  "/Media/Gallery/Narratives/MNB/Narratives_MNB_Gallery_06.webp",
  "/Media/Gallery/Narratives/MNB/Narratives_MNB_Gallery_07.webp",
  "/Media/Gallery/Narratives/MNB/Narratives_MNB_Gallery_08.webp",
  "/Media/Gallery/Narratives/MNB/Narratives_MNB_Gallery_09.webp",
]

const btsImages = [
  { src: "/Media/Gallery/Narratives/MNB/Narratives_MNB_BTS_01.webp", header: "", description: "" },
  { src: "/Media/Gallery/Narratives/MNB/Narratives_MNB_BTS_02.webp", header: "", description: "" },
  { src: "/Media/Gallery/Narratives/MNB/Narratives_MNB_BTS_03.webp", header: "", description: "" },
  { src: "/Media/Gallery/Narratives/MNB/Narratives_MNB_BTS_04.webp", header: "", description: "" },
  { src: "/Media/Gallery/Narratives/MNB/Narratives_MNB_BTS_05.webp", header: "", description: "" },
  { src: "/Media/Gallery/Narratives/MNB/Narratives_MNB_BTS_06.webp", header: "", description: "" },
  { src: "/Media/Gallery/Narratives/MNB/Narratives_MNB_BTS_07.webp", header: "", description: "" },
  { src: "/Media/Gallery/Narratives/MNB/Narratives_MNB_BTS_08.webp", header: "", description: "" },
]

function MacNBeth() {
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
        className="pmb-banner home-banner-fixed banner-mnb"
        style={{ backgroundImage: "url('/Media/Gallery/Narratives/MNB/Narratives_MNB_Banner_01.webp')" }}
      >
        <div className="pmb-banner-text">
          <h1 className="pmb-banner-title">MAC N BETH</h1>
          <p className="pmb-banner-subtitle">(short film, 2026 — now en route to festivals)</p>
        </div>
      </div>

      {/* Gallery */}
      <section className="pmb-section">
        <h2 className="pmb-section-header">GALLERY</h2>
        <div className="pmb-gallery-grid">
          {galleryImages.map((src, i) => (
            <img
              key={src}
              src={src}
              alt={`Mac N Beth gallery ${i + 1}`}
              className="pmb-gallery-img"
              onClick={() => setLightboxIndex(i)}
              style={{ cursor: 'pointer' }}
            />
          ))}
        </div>
      </section>

      {/* Synopsis */}
      <div
        className="pmb-synopsis home-banner-fixed synopsis-mnb"
        style={{ backgroundImage: "url('/Media/Gallery/Narratives/MNB/Narratives_MNB_Synopsis_01.webp')" }}
      >
        <div className="pmb-synopsis-overlay">
          <h2 className="pmb-synopsis-header">SYNOPSIS</h2>
          <p className="pmb-synopsis-body">
            Loosely based on Shakespeare's classic tragedy, Mac N Beth follows the old blood of the
            Blues music scene as they circumnavigate a grungy backstage labyrinth full of new wave
            musicians that seek to stamp them out for good. During a long, sleepless night, Mac and
            Beth must decide how far they'll go to keep the name they've made for themselves.
          </p>
        </div>
      </div>

      {/* BTS Stills Slideshow */}
      <section className="pmb-section">
        <h2 className="pmb-section-header">BEHIND THE SCENES</h2>
        <p style={{ fontFamily: 'Abel, Arial, sans-serif', fontSize: 'clamp(14px, 1.5vw, 18px)', letterSpacing: '0.04em', marginTop: '-20px', marginBottom: '24px' }}>
          Stills by Cooper Gordon
        </p>
        <div className="home-gallery bts-slideshow mnb-bts-slideshow">
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
                  alt={`Mac N Beth BTS ${i + 1}`}
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
                <img src={img.src} alt={`Mac N Beth BTS ${i + 1}`} />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Key Credits */}
      <div
        className="pmb-credits home-banner-fixed credits-mnb mnb-credits"
        style={{ backgroundImage: "url('/Media/Gallery/Narratives/MNB/Narratives_MNB_KeyCredits_01.webp')" }}
      >
        <div className="pmb-credits-overlay">
          <h2 className="pmb-credits-header">KEY CREDITS</h2>
          <p className="pmb-credits-individual"><em>Directed by:</em> Devin E. Haqq</p>
          <p className="pmb-credits-individual"><em>Written by:</em> Jacob Ming Trent</p>
          <p className="pmb-credits-individual"><em>Executive Producers:</em> Sienna D'Addario, Cooper Gordon</p>
          <p className="pmb-credits-individual"><em>Producers:</em> Ari Veach, Ryan Shuler</p>
          <p className="pmb-credits-individual"><em>Starring:</em> Jacob Ming Trent, Victoria Alev, Joel Marsh Garland, Billy Eugene Jones</p>
          <p className="pmb-credits-individual"><em>Featuring:</em> Casey McSherry, Siena D'Addario, Ashley J. Hicks</p>
          <p className="pmb-credits-individual"><em>Director of Photography:</em> George Lyon</p>
          <p className="pmb-credits-individual"><em>Composer:</em> Avi Amon</p>
          <p className="pmb-credits-individual"><em>Production Designer:</em> Erica Zhang</p>
          <p className="pmb-credits-individual"><em>Costume Designer:</em> Anna Grigo</p>
          <p className="pmb-credits-individual"><em>Editor:</em> Tony Grocki</p>
          <p className="pmb-credits-individual"><em>Sound Designer:</em> Nathaniel Reichman</p>
          <p className="pmb-credits-individual"><em>Colorist:</em> Patrick Devine</p>
        </div>
      </div>

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

export default MacNBeth
