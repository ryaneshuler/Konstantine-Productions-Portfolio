import { useState, useEffect } from 'react'

const galleryImages = [
  "/Media/Gallery/Narratives/IWYB/Narratives_IWYB_Gallery_01.webp",
  "/Media/Gallery/Narratives/IWYB/Narratives_IWYB_Gallery_02.webp",
  "/Media/Gallery/Narratives/IWYB/Narratives_IWYB_Gallery_03.webp",
  "/Media/Gallery/Narratives/IWYB/Narratives_IWYB_Gallery_04.webp",
  "/Media/Gallery/Narratives/IWYB/Narratives_IWYB_Gallery_05.webp",
  "/Media/Gallery/Narratives/IWYB/Narratives_IWYB_Gallery_06.webp",
  "/Media/Gallery/Narratives/IWYB/Narratives_IWYB_Gallery_07.webp",
  "/Media/Gallery/Narratives/IWYB/Narratives_IWYB_Gallery_08.webp",
  "/Media/Gallery/Narratives/IWYB/Narratives_IWYB_Gallery_09.webp",
  "/Media/Gallery/Narratives/IWYB/Narratives_IWYB_Gallery_10.webp",
  "/Media/Gallery/Narratives/IWYB/Narratives_IWYB_Gallery_11.webp",
  "/Media/Gallery/Narratives/IWYB/Narratives_IWYB_Gallery_12.webp",
]

function IWantYouBaby() {
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
        className="pmb-banner home-banner-fixed banner-iwyb"
        style={{ backgroundImage: "url('/Media/Gallery/Narratives/IWYB/Narratives_IWYB_Banner_01.webp')" }}
      >
        <div className="pmb-banner-text">
          <h1 className="pmb-banner-title">I WANT YOU BABY</h1>
          <p className="pmb-banner-subtitle">(Short Film, 2020)</p>
        </div>
      </div>

      {/* Official Trailer */}
      <section className="pmb-section">
        <h2 className="pmb-section-header">OFFICIAL TRAILER</h2>
        <div className="pmb-vimeo-wrapper">
          <iframe
            src="https://player.vimeo.com/video/568948511"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            title="I Want You Baby — Official Trailer"
          ></iframe>
        </div>
      </section>

      {/* Synopsis */}
      <div
        className="pmb-synopsis home-banner-fixed synopsis-iwyb"
        style={{ backgroundImage: "url('/Media/Gallery/Narratives/IWYB/Narratives_IWYB_Synopsis_01.webp')" }}
      >
        <div className="pmb-synopsis-overlay">
          <h2 className="pmb-synopsis-header">SYNOPSIS</h2>
          <p className="pmb-synopsis-body">
            Longing for a baby, an unhinged young woman concocts a plan to use a dating app to find
            the perfect man to impregnate her. However, when she chooses a heartbroken Casanova, she
            soon finds out that a baby might not be the only thing he's leaving her with.
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
              alt={`I Want You Baby gallery ${i + 1}`}
              className="pmb-gallery-img"
              onClick={() => setLightboxIndex(i)}
              style={{ cursor: 'pointer' }}
            />
          ))}
        </div>
      </section>

      {/* Key Credits */}
      <div
        className="pmb-credits home-banner-fixed credits-iwyb"
        style={{ backgroundImage: "url('/Media/Gallery/Narratives/IWYB/Narratives_IWYB_Credits_01.webp')" }}
      >
        <div className="pmb-credits-overlay">
          <h2 className="pmb-credits-header">KEY CREDITS</h2>
          <p className="pmb-credits-individual"><em>Written &amp; Directed by:</em> James Legris</p>
          <p className="pmb-credits-individual"><em>Producers:</em> Ryan Shuler, Roland Smith</p>
          <p className="pmb-credits-individual"><em>Starring:</em> Noelle Autumn, James Legris</p>
          <p className="pmb-credits-individual"><em>Director of Photography:</em> Sheldon Walker</p>
          <p className="pmb-credits-individual"><em>Production Design:</em> Giselle Neng</p>
          <p className="pmb-credits-individual"><em>Editing &amp; VFX:</em> Ryan Shuler</p>
          <p className="pmb-credits-individual"><em>Original Music:</em> Kasiemba Okeyo</p>
          <p className="pmb-credits-individual"><em>Sound Design:</em> Eric Romary</p>
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
              alt={`I Want You Baby gallery ${lightboxIndex + 1}`}
            />
          </div>
          <button className="lightbox-arrow lightbox-next" onClick={(e) => { e.stopPropagation(); lightboxNext() }} aria-label="Next">&#8250;</button>
        </div>
      )}

    </main>
  )
}

export default IWantYouBaby
