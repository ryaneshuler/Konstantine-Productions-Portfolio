/*
   Add "WATCH FILM" button to all film pages that have full film available online
   Also make "WATCH FILM" button visible on Paint Me Blue page
*/

import { useState, useEffect, useRef } from 'react'

const galleryImages = [
  "/Media/Gallery/Narratives/RT/Narratives_RT_Gallery_02.webp",
  "/Media/Gallery/Narratives/RT/Narratives_RT_Gallery_03.webp",
  "/Media/Gallery/Narratives/RT/Narratives_RT_Gallery_04.webp",
  "/Media/Gallery/Narratives/RT/Narratives_RT_Gallery_05.webp",
  "/Media/Gallery/Narratives/RT/Narratives_RT_Gallery_06.webp",
  "/Media/Gallery/Narratives/RT/Narratives_RT_Gallery_07.webp",
  "/Media/Gallery/Narratives/RT/Narratives_RT_Gallery_08.webp",
  "/Media/Gallery/Narratives/RT/Narratives_RT_Gallery_09.webp",
  "/Media/Gallery/Narratives/RT/Narratives_RT_Gallery_10.webp",
  "/Media/Gallery/Narratives/RT/Narratives_RT_Gallery_11.webp",
  "/Media/Gallery/Narratives/RT/Narratives_RT_Gallery_12.webp",
]

function RememberTomorrow() {
  const [lightboxIndex, setLightboxIndex] = useState(null)

  const awardsImgRef = useRef(null)
  const [awardsVisible, setAwardsVisible] = useState(false)
  const [awardsLightbox, setAwardsLightbox] = useState(false)
  const [posterLightbox, setPosterLightbox] = useState(false)

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

  useEffect(() => {
    if (!awardsLightbox) return
    const onKey = (e) => { if (e.key === 'Escape') setAwardsLightbox(false) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [awardsLightbox])

  useEffect(() => {
    if (!posterLightbox) return
    const onKey = (e) => { if (e.key === 'Escape') setPosterLightbox(false) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [posterLightbox])

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

  return (
    <main className="rt-page">

      {/* Banner */}
      <div
        className="rt-banner home-banner-fixed"
        style={{ backgroundImage: "url('/Media/Gallery/Narratives/RT/Narratives_RT_Banner_01.webp')" }}
      >
        <div className="rt-banner-text">
          <h1 className="rt-banner-title">REMEMBER / TOMORROW</h1>
          <p className="rt-banner-subtitle">(Short Film, 2020)</p>
        </div>
      </div>

      {/* Official Trailer — replace TRAILER_VIMEO_ID with the Vimeo video ID */}
      <section className="rt-section">
        <h2 className="rt-section-header">OFFICIAL TRAILER</h2>
        <div className="rt-vimeo-wrapper">
          <iframe
            src="https://player.vimeo.com/video/782704567"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            title="Remember/Tomorrow — Official Trailer"
          ></iframe>
        </div>
      </section>

      {/* Official Teaser — replace TEASER_VIMEO_ID with the Vimeo video ID */}
      <section className="rt-section">
        <h2 className="rt-section-header">OFFICIAL TEASER</h2>
        <div className="rt-vimeo-wrapper">
          <iframe
            src="https://player.vimeo.com/video/568948601"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            title="Remember/Tomorrow — Official Teaser"
          ></iframe>
        </div>
      </section>

      {/* Watch Film button — replace href with the film URL */}
      <div className="rt-watch-btn-wrap">
        <a href="https://vimeo.com/konstantineproductions/remembertomorrow?share=copy&fl=cl&fe=ci" target="_blank" rel="noopener noreferrer" className="rt-watch-btn">WATCH FILM</a>
      </div>

      {/* Synopsis — parallax */}
      <div
        className="rt-synopsis home-banner-fixed"
        style={{ backgroundImage: "url('/Media/Gallery/Narratives/RT/Narratives_RT_Synopsis_01.webp')" }}
      >
        <div className="rt-synopsis-overlay">
          <h2 className="rt-section-header rt-overlay-header">SYNOPSIS</h2>
          <p className="rt-synopsis-body">
            Two lovers embark on a journey across time and space. Through a dream-like perception
            of reality, they navigate within alternate possibilities of how their lives may unfold.
          </p>
        </div>
      </div>

      {/* Official Poster */}
      <section className="rt-section">
        <h2 className="rt-section-header">OFFICIAL POSTER</h2>
        <img
          className="rt-poster"
          src="/Media/Gallery/Narratives/RT/Narratives_RT_Gallery_01.webp"
          alt="Remember/Tomorrow Official Poster"
          onClick={() => setPosterLightbox(true)}
          style={{ cursor: 'pointer' }}
        />
      </section>

      {/* Gallery */}
      <section className="rt-section">
        <h2 className="rt-section-header">GALLERY</h2>
        <div className="rt-gallery-grid">
          {galleryImages.map((src, i) => (
            <img
              key={src}
              src={src}
              alt={`Remember/Tomorrow gallery ${i + 1}`}
              className="rt-gallery-img"
              onClick={() => setLightboxIndex(i)}
              style={{ cursor: 'pointer' }}
            />
          ))}
        </div>
      </section>

      {/* Awards */}
      <section className="rt-section">
        <h2 className="rt-section-header">AWARDS</h2>
        <img
          ref={awardsImgRef}
          className={`rt-awards${awardsVisible ? ' rt-awards-reveal' : ''}`}
          src="/Media/Gallery/Narratives/RT/Narratives_RT_Awards_01.webp"
          alt="Remember/Tomorrow Awards"
          onClick={() => setAwardsLightbox(true)}
          style={{ cursor: 'pointer' }}
        />
      </section>

      {/* Key Credits — parallax */}
      <div
        className="rt-credits home-banner-fixed"
        style={{ backgroundImage: "url('/Media/Gallery/Narratives/RT/Narratives_RT_Credits_01.webp')" }}
      >
        <div className="rt-credits-overlay">
          <h2 className="rt-section-header rt-overlay-header">KEY CREDITS</h2>
          <p className="rt-credits-individual"><em>Directed &amp; Produced by:</em> Ari Veach, Ryan Shuler</p>
          <p className="rt-credits-individual"><em>Written by:</em> Ari Veach</p>
          <p className="rt-credits-individual"><em>Starring:</em> Ari Veach, Marielle Renée Rousseau</p>
          <p className="rt-credits-individual"><em>Director of Photography:</em> Nathan Krauss</p>
          <p className="rt-credits-individual"><em>Editing &amp; VFX:</em> Ryan Shuler</p>
          <p className="rt-credits-individual"><em>Original Music:</em> Jordan Balaber</p>
          <p className="rt-credits-individual"><em>Sound Design:</em> Taylor Bradshaw</p>
        </div>
      </div>

      {/* Poster lightbox */}
      {posterLightbox && (
        <div className="lightbox-overlay" onClick={() => setPosterLightbox(false)}>
          <button className="lightbox-close" onClick={() => setPosterLightbox(false)} aria-label="Close">&times;</button>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img
              className="lightbox-img"
              src="/Media/Gallery/Narratives/RT/Narratives_RT_Gallery_01.webp"
              alt="Remember/Tomorrow Official Poster"
            />
          </div>
        </div>
      )}

      {/* Awards lightbox */}
      {awardsLightbox && (
        <div className="lightbox-overlay" onClick={() => setAwardsLightbox(false)}>
          <button className="lightbox-close" onClick={() => setAwardsLightbox(false)} aria-label="Close">&times;</button>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img
              className="lightbox-img"
              src="/Media/Gallery/Narratives/RT/Narratives_RT_Awards_01.webp"
              alt="Remember/Tomorrow Awards"
            />
          </div>
        </div>
      )}

      {/* Lightbox */}
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
    </main>
  )
}

export default RememberTomorrow
