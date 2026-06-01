import { useState, useEffect } from 'react'

const galleryImages = [
  "/Media/Gallery/Narratives/KOP/Narratives_KOP_Gallery_01.webp",
  "/Media/Gallery/Narratives/KOP/Narratives_KOP_Gallery_02.webp",
  "/Media/Gallery/Narratives/KOP/Narratives_KOP_Gallery_03.webp",
  "/Media/Gallery/Narratives/KOP/Narratives_KOP_Gallery_04.webp",
  "/Media/Gallery/Narratives/KOP/Narratives_KOP_Gallery_05.webp",
  "/Media/Gallery/Narratives/KOP/Narratives_KOP_Gallery_06.webp",
  "/Media/Gallery/Narratives/KOP/Narratives_KOP_Gallery_07.webp",
  "/Media/Gallery/Narratives/KOP/Narratives_KOP_Gallery_08.webp",
  "/Media/Gallery/Narratives/KOP/Narratives_KOP_Gallery_09.webp",
  "/Media/Gallery/Narratives/KOP/Narratives_KOP_Gallery_10.webp",
  "/Media/Gallery/Narratives/KOP/Narratives_KOP_Gallery_11.webp",
  "/Media/Gallery/Narratives/KOP/Narratives_KOP_Gallery_12.webp",
  "/Media/Gallery/Narratives/KOP/Narratives_KOP_Gallery_13.webp",
  "/Media/Gallery/Narratives/KOP/Narratives_KOP_Gallery_14.webp",
  "/Media/Gallery/Narratives/KOP/Narratives_KOP_Gallery_15.webp",
]

function KissingOtherPeople() {
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
        className="pmb-banner home-banner-fixed banner-kop"
        style={{ backgroundImage: "url('/Media/Gallery/Narratives/KOP/Narratives_KOP_Banner_01.webp')" }}
      >
        <div className="pmb-banner-text">
          <h1 className="pmb-banner-title">KISSING OTHER PEOPLE</h1>
          <p className="pmb-banner-subtitle">(digital series, 2023)</p>
        </div>
      </div>

      {/* Official Teaser */}
      <section className="pmb-section">
        <h2 className="pmb-section-header">OFFICIAL TEASER</h2>
        <div className="pmb-vimeo-wrapper">
          <iframe
            src="https://player.vimeo.com/video/820636384"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            title="Kissing Other People — Official Teaser"
          ></iframe>
        </div>
      </section>

      {/* Synopsis */}
      <div
        className="pmb-synopsis home-banner-fixed synopsis-kop"
        style={{ backgroundImage: "url('/Media/Gallery/Narratives/KOP/Narratives_KOP_Synopsis_01.webp')" }}
      >
        <div className="pmb-synopsis-overlay">
          <h2 className="pmb-synopsis-header">SYNOPSIS</h2>
          <p className="pmb-synopsis-body">
            Maggie and Eli are together forever…just not in that way. Amongst brunches, family
            arguments, and over-priced workout classes, they consistently show up for each other,
            even when they're not exactly #winning. Sure, they're soulmates, but they're totally
            kissing other people.
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
              alt={`Kissing Other People gallery ${i + 1}`}
              className="pmb-gallery-img"
              onClick={() => setLightboxIndex(i)}
              style={{ cursor: 'pointer' }}
            />
          ))}
        </div>
      </section>

      {/* Key Credits */}
      <div
        className="pmb-credits home-banner-fixed credits-kop"
        style={{ backgroundImage: "url('/Media/Gallery/Narratives/KOP/Narratives_KOP_Credits_01.webp')" }}
      >
        <div className="pmb-credits-overlay">
          <h2 className="pmb-credits-header">KEY CREDITS</h2>
          <p className="pmb-credits-individual"><em>Created, Written &amp; Directed by:</em> Karly Seeley</p>
          <p className="pmb-credits-individual"><em>Executive Producers:</em> Siena D'Addario, Cooper Gordon</p>
          <p className="pmb-credits-individual"><em>Producers:</em> Ari Veach, Ryan Shuler</p>
          <p className="pmb-credits-individual"><em>Starring:</em> Karly Seeley &amp; Mark Ashin</p>
          <p className="pmb-credits-individual"><em>Featuring:</em> Adam Navas, Michelle Batista, Stephanie Hinck, Siena D'Addario, Amanda Tarver, Josh Lak Kim</p>
          <p className="pmb-credits-individual"><em>Director of Photography:</em> Nathan Krauss</p>
          <p className="pmb-credits-individual"><em>Editor:</em> Ryan Shuler</p>
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
              alt={`Kissing Other People gallery ${lightboxIndex + 1}`}
            />
          </div>
          <button className="lightbox-arrow lightbox-next" onClick={(e) => { e.stopPropagation(); lightboxNext() }} aria-label="Next">&#8250;</button>
        </div>
      )}

    </main>
  )
}

export default KissingOtherPeople
