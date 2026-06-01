import { useState, useEffect } from 'react'

const galleryImages = [
  "/Media/Gallery/Narratives/Awakening/Narratives_Awakening_Gallery_01.webp",
  "/Media/Gallery/Narratives/Awakening/Narratives_Awakening_Gallery_02.webp",
  "/Media/Gallery/Narratives/Awakening/Narratives_Awakening_Gallery_03.webp",
  "/Media/Gallery/Narratives/Awakening/Narratives_Awakening_Gallery_04.webp",
  "/Media/Gallery/Narratives/Awakening/Narratives_Awakening_Gallery_05.webp",
  "/Media/Gallery/Narratives/Awakening/Narratives_Awakening_Gallery_06.webp",
  "/Media/Gallery/Narratives/Awakening/Narratives_Awakening_Gallery_07.webp",
  "/Media/Gallery/Narratives/Awakening/Narratives_Awakening_Gallery_08.webp",
  "/Media/Gallery/Narratives/Awakening/Narratives_Awakening_Gallery_09.webp",
]

function Awakening() {
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

  return (
    <main className="pmb-page">

      {/* Banner */}
      <div
        className="pmb-banner home-banner-fixed banner-awk"
        style={{ backgroundImage: "url('/Media/Gallery/Narratives/Awakening/Narratives_Awakening_Banner_01.webp')" }}
      >
        <div className="pmb-banner-text">
          <h1 className="pmb-banner-title">AWAKENING</h1>
          <p className="pmb-banner-subtitle">(short film, 2023)</p>
        </div>
      </div>

      {/* Official Teaser */}
      <section className="pmb-section">
        <h2 className="pmb-section-header">OFFICIAL TEASER</h2>
        <div className="pmb-vimeo-wrapper">
          <iframe
            src="https://player.vimeo.com/video/821022348"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            title="Awakening — Official Teaser"
          ></iframe>
        </div>
      </section>

      {/* Synopsis */}
      <div
        className="pmb-synopsis home-banner-fixed synopsis-awk"
        style={{ backgroundImage: "url('/Media/Gallery/Narratives/Awakening/Narratives_Awakening_Synopsis_01.webp')" }}
      >
        <div className="pmb-synopsis-overlay">
          <h2 className="pmb-synopsis-header">SYNOPSIS</h2>
          <p className="pmb-synopsis-body">
            Suffering from sleep paralysis, a lonely young woman fights to overcome her sexual trauma
            after meeting a kindred spirit and potential lover online. But she soon finds out it's
            impossible to move forward without confronting her past.
          </p>
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
              alt={`Awakening gallery ${i + 1}`}
              className="pmb-gallery-img"
              onClick={() => setLightboxIndex(i)}
              style={{ cursor: 'pointer' }}
            />
          ))}
        </div>
      </section>

      {/* Key Credits */}
      <div
        className="pmb-credits home-banner-fixed credits-awk"
        style={{ backgroundImage: "url('/Media/Gallery/Narratives/Awakening/Narratives_Awakening_Credits_01.webp')" }}
      >
        <div className="pmb-credits-overlay">
          <h2 className="pmb-credits-header">KEY CREDITS</h2>
          <p className="pmb-credits-individual"><em>Written &amp; Directed by:</em> James Legris</p>
          <p className="pmb-credits-individual"><em>Produced by:</em> Ryan Shuler, Ari Veach</p>
          <p className="pmb-credits-individual"><em>Starring:</em> Nora Abayomi Papke, James Legris</p>
          <p className="pmb-credits-individual"><em>Featuring:</em> Ari Veach, Jackie Schram, Stephen Martinez</p>
          <p className="pmb-credits-individual"><em>Story by:</em> Nora Abayomi Papke</p>
          <p className="pmb-credits-individual"><em>Director of Photography:</em> Sheldon Walker</p>
          <p className="pmb-credits-individual"><em>Production Designer:</em> Sally SangHee Bae</p>
          <p className="pmb-credits-individual"><em>Edited by:</em> Ryan Shuler</p>
          <p className="pmb-credits-individual"><em>Original Score:</em> Ian Hayes, Dan Barracuda</p>
          <p className="pmb-credits-individual"><em>Sound Design:</em> Taylor Bradshaw</p>
        </div>
      </div>

      {/* Gallery lightbox */}
      {lightboxIndex !== null && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <button className="lightbox-close" onClick={closeLightbox} aria-label="Close">&times;</button>
          <button className="lightbox-arrow lightbox-prev" onClick={(e) => { e.stopPropagation(); lightboxPrev() }} aria-label="Previous">&#8249;</button>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img
              className="lightbox-img"
              src={galleryImages[lightboxIndex]}
              alt={`Awakening gallery ${lightboxIndex + 1}`}
            />
          </div>
          <button className="lightbox-arrow lightbox-next" onClick={(e) => { e.stopPropagation(); lightboxNext() }} aria-label="Next">&#8250;</button>
        </div>
      )}

    </main>
  )
}

export default Awakening
