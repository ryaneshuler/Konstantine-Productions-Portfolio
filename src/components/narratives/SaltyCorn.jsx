import { useState, useEffect, useRef } from 'react'

const galleryImages = [
  "/Media/Gallery/Narratives/Salty%20Corn/Narratives_SaltyCorn_Poster_01.webp",
  "/Media/Gallery/Narratives/Salty%20Corn/Narratives_SaltyCorn_Gallery_01.webp",
  "/Media/Gallery/Narratives/Salty%20Corn/Narratives_SaltyCorn_Gallery_02.webp",
  "/Media/Gallery/Narratives/Salty%20Corn/Narratives_SaltyCorn_Gallery_03.webp",
  "/Media/Gallery/Narratives/Salty%20Corn/Narratives_SaltyCorn_Gallery_04.webp",
  "/Media/Gallery/Narratives/Salty%20Corn/Narratives_SaltyCorn_Gallery_05.webp",
  "/Media/Gallery/Narratives/Salty%20Corn/Narratives_SaltyCorn_Gallery_06.webp",
  "/Media/Gallery/Narratives/Salty%20Corn/Narratives_SaltyCorn_Gallery_07.webp",
  "/Media/Gallery/Narratives/Salty%20Corn/Narratives_SaltyCorn_Gallery_08.webp",
  "/Media/Gallery/Narratives/Salty%20Corn/Narratives_SaltyCorn_Gallery_09.webp",
  "/Media/Gallery/Narratives/Salty%20Corn/Narratives_SaltyCorn_Gallery_10.webp",
  "/Media/Gallery/Narratives/Salty%20Corn/Narratives_SaltyCorn_Gallery_11.webp",
]

function SaltyCorn() {
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

  return (
    <main className="pmb-page">

      {/* Banner */}
      <div
        className="pmb-banner home-banner-fixed banner-sc"
        style={{ backgroundImage: "url('/Media/Gallery/Narratives/Salty%20Corn/Narratives_SaltyCorn_Banner_01.webp')" }}
      >
        <div className="pmb-banner-text">
          <h1 className="pmb-banner-title">SALTY CORN</h1>
          <p className="pmb-banner-subtitle">(Short Film, 2016)</p>
        </div>
      </div>

      {/* Official Trailer */}
      <section className="pmb-section">
        <h2 className="pmb-section-header">OFFICIAL TRAILER</h2>
        <div className="pmb-vimeo-wrapper">
          <iframe
            src="https://player.vimeo.com/video/568953185"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            title="Salty Corn — Official Trailer"
          ></iframe>
        </div>
      </section>

      {/* Synopsis */}
      <div
        className="pmb-synopsis home-banner-fixed synopsis-sc"
        style={{ backgroundImage: "url('/Media/Gallery/Narratives/Salty%20Corn/Narratives_SaltyCorn_Synopsis_01.webp')" }}
      >
        <div className="pmb-synopsis-overlay">
          <h2 className="pmb-synopsis-header">SYNOPSIS</h2>
          <p className="pmb-synopsis-body">
            After his daughter becomes a hipster, Bob sets out first to solve the mysteries of
            hipster culture and then to pull his daughter out of it.
          </p>
        </div>
      </div>

      {/* Gallery */}
      <section className="pmb-section">
        <h2 className="pmb-section-header">GALLERY</h2>
        <div className="pmb-gallery-grid">
          {galleryImages.map((src, i) => (
            i === 0 ? (
              <div
                key={src}
                className="pmb-gallery-poster-wrap"
                onClick={() => setLightboxIndex(i)}
                style={{ cursor: 'pointer' }}
              >
                <img src={src} alt="Salty Corn official poster" />
              </div>
            ) : (
              <img
                key={src}
                src={src}
                alt={`Salty Corn gallery ${i}`}
                className="pmb-gallery-img"
                onClick={() => setLightboxIndex(i)}
                style={{ cursor: 'pointer' }}
              />
            )
          ))}
        </div>
      </section>

      {/* Awards */}
      <section className="pmb-section">
        <h2 className="pmb-section-header">AWARDS</h2>
        <img
          ref={awardsImgRef}
          src="/Media/Gallery/Narratives/Salty%20Corn/Narratives_SaltyCorn_Awards_01.webp"
          alt="Salty Corn Awards"
          className={`pmb-awards-img${awardsVisible ? ' pmb-awards-reveal' : ''}`}
          onClick={() => setAwardsLightbox(true)}
          style={{ cursor: 'pointer' }}
        />
      </section>

      {/* Key Credits */}
      <div
        className="pmb-credits home-banner-fixed credits-sc"
        style={{ backgroundImage: "url('/Media/Gallery/Narratives/Salty%20Corn/Narratives_SaltyCorn_Credits_01.webp')" }}
      >
        <div className="pmb-credits-overlay">
          <h2 className="pmb-credits-header">KEY CREDITS</h2>
          <p className="pmb-credits-individual"><em>Directed, Written &amp; Edited by:</em> Ryan Shuler</p>
          <p className="pmb-credits-individual"><em>Produced by:</em> Mars Chasolen</p>
          <p className="pmb-credits-individual"><em>Starring:</em> Mike Tranvaag, Mira Jayne</p>
          <p className="pmb-credits-individual"><em>Director of Photography:</em> Garrett Nicholson</p>
          <p className="pmb-credits-individual"><em>Production Design:</em> Carly Davidson</p>
          <p className="pmb-credits-individual"><em>Original Music:</em> Jake Minter</p>
          <p className="pmb-credits-individual"><em>Sound Design:</em> Steph Choriatis</p>
        </div>
      </div>

      {/* Awards lightbox */}
      {awardsLightbox && (
        <div className="lightbox-overlay" onClick={() => setAwardsLightbox(false)}>
          <button className="lightbox-close" onClick={() => setAwardsLightbox(false)} aria-label="Close">&times;</button>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img
              className="lightbox-img"
              src="/Media/Gallery/Narratives/Salty%20Corn/Narratives_SaltyCorn_Awards_01.webp"
              alt="Salty Corn Awards"
            />
          </div>
        </div>
      )}

      {/* Gallery lightbox */}
      {lightboxIndex !== null && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <button className="lightbox-close" onClick={closeLightbox} aria-label="Close">&times;</button>
          <button className="lightbox-arrow lightbox-prev" onClick={(e) => { e.stopPropagation(); lightboxPrev() }} aria-label="Previous">&#8249;</button>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img
              className="lightbox-img"
              src={galleryImages[lightboxIndex]}
              alt={`Salty Corn gallery ${lightboxIndex + 1}`}
            />
          </div>
          <button className="lightbox-arrow lightbox-next" onClick={(e) => { e.stopPropagation(); lightboxNext() }} aria-label="Next">&#8250;</button>
        </div>
      )}

    </main>
  )
}

export default SaltyCorn
