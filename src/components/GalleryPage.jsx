import { useState, useEffect } from 'react'

/* 
  Add Gallery header to top of this page
  Add banner wipes from left to right, header and descriptor fade in at same time after, and have gallery sections fade in
  Get rid of photo of Nate in R/T grid
  Paint Me Blue
  Mac N Beth (NEW)
  KOP
  Elder Sisters Apothecary
  Zeeta Body
  Sunflowers and Twists
  Remember/Tomorrow
*/

const sections = [
    {
    title: 'PAINT ME BLUE (SHORT FILM)',
    titleDisplay: <><em>PAINT ME BLUE</em> (SHORT FILM)</>,
    credit: 'BTS Stills by Erin Lamar',
    banner: '/Media/Gallery/Gallery_Banner_PMB.webp',
    images: [
      '/Media/Gallery/Grids/Paint Me Blue/PMB_Grid_01.webp',
      '/Media/Gallery/Grids/Paint Me Blue/PMB_Grid_02.webp',
      '/Media/Gallery/Grids/Paint Me Blue/PMB_Grid_03.webp',
      '/Media/Gallery/Grids/Paint Me Blue/PMB_Grid_04.webp',
      '/Media/Gallery/Grids/Paint Me Blue/PMB_Grid_05.webp',
      '/Media/Gallery/Grids/Paint Me Blue/PMB_Grid_06.webp',
      '/Media/Gallery/Grids/Paint Me Blue/PMB_Grid_07.webp',
      '/Media/Gallery/Grids/Paint Me Blue/PMB_Grid_08.webp',
      '/Media/Gallery/Grids/Paint Me Blue/PMB_Grid_09.webp',
      '/Media/Gallery/Grids/Paint Me Blue/PMB_Grid_10.webp',
      '/Media/Gallery/Grids/Paint Me Blue/PMB_Grid_11.webp',
      '/Media/Gallery/Grids/Paint Me Blue/PMB_Grid_12.webp',
      '/Media/Gallery/Grids/Paint Me Blue/PMB_Grid_13.webp',
      '/Media/Gallery/Grids/Paint Me Blue/PMB_Grid_14.webp',
      '/Media/Gallery/Grids/Paint Me Blue/PMB_Grid_15.webp',
    ],
  },
  {
      title: 'MAC N BETH (SHORT FILM)',
      titleDisplay: <><em>MAC N BETH</em> (SHORT FILM)</>,
      credit: 'BTS Stills by Cooper Gordon',
      banner: '/Media/Gallery/Narratives/MNB/Narratives_MNB_BTS_03.webp',
      images: [
        '/Media/Gallery/Narratives/MNB/Narratives_MNB_BTS_01.webp',
        '/Media/Gallery/Narratives/MNB/Narratives_MNB_BTS_02.webp',
        '/Media/Gallery/Narratives/MNB/Narratives_MNB_BTS_03.webp',
        '/Media/Gallery/Narratives/MNB/Narratives_MNB_BTS_04.webp',
        '/Media/Gallery/Narratives/MNB/Narratives_MNB_BTS_05.webp',
        '/Media/Gallery/Narratives/MNB/Narratives_MNB_BTS_06.webp',
        '/Media/Gallery/Narratives/MNB/Narratives_MNB_BTS_07.webp',
        '/Media/Gallery/Narratives/MNB/Narratives_MNB_BTS_08.webp',
        '/Media/Gallery/Narratives/MNB/Narratives_MNB_BTS_09.jpg',
      ],
  },
  {
    title: 'KISSING OTHER PEOPLE (DIGITAL SERIES)',
    credit: 'BTS Stills by Cooper Gordon',
    banner: '/Media/Gallery/Gallery_Banner_KOP.webp',
    images: [
      '/Media/Gallery/Grids/Kissing Other People/KOP_Grid_01.webp',
      '/Media/Gallery/Grids/Kissing Other People/KOP_Grid_02.webp',
      '/Media/Gallery/Grids/Kissing Other People/KOP_Grid_03.webp',
      '/Media/Gallery/Grids/Kissing Other People/KOP_Grid_04.webp',
      '/Media/Gallery/Grids/Kissing Other People/KOP_Grid_05.webp',
      '/Media/Gallery/Grids/Kissing Other People/KOP_Grid_06.webp',
      '/Media/Gallery/Grids/Kissing Other People/KOP_Grid_07.webp',
      '/Media/Gallery/Grids/Kissing Other People/KOP_Grid_08.webp',
      '/Media/Gallery/Grids/Kissing Other People/KOP_Grid_09.webp',
      '/Media/Gallery/Grids/Kissing Other People/KOP_Grid_10.webp',
      '/Media/Gallery/Grids/Kissing Other People/KOP_Grid_11.webp',
      '/Media/Gallery/Grids/Kissing Other People/KOP_Grid_12.webp',
      '/Media/Gallery/Grids/Kissing Other People/KOP_Grid_13.webp',
      '/Media/Gallery/Grids/Kissing Other People/KOP_Grid_14.webp',
      '/Media/Gallery/Grids/Kissing Other People/KOP_Grid_15.webp',
      '/Media/Gallery/Grids/Kissing Other People/KOP_Grid_16.webp',
      '/Media/Gallery/Grids/Kissing Other People/KOP_Grid_17.webp',
      '/Media/Gallery/Grids/Kissing Other People/KOP_Grid_18.webp',
    ],
  },
  {
    title: 'ELDER SISTERS APOTHECARY (COMMERCIAL)',
    credit: 'BTS Stills by Lloyd Hembrador',
    banner: '/Media/Gallery/Gallery_Banner_ESA.webp',
    images: [
      '/Media/Gallery/Grids/Elder Sisters Apothecary/ESA_Grid_01.webp',
      '/Media/Gallery/Grids/Elder Sisters Apothecary/ESA_Grid_02.webp',
      '/Media/Gallery/Grids/Elder Sisters Apothecary/ESA_Grid_03.webp',
      '/Media/Gallery/Grids/Elder Sisters Apothecary/ESA_Grid_04.webp',
      '/Media/Gallery/Grids/Elder Sisters Apothecary/ESA_Grid_05.webp',
      '/Media/Gallery/Grids/Elder Sisters Apothecary/ESA_Grid_06.webp',
      '/Media/Gallery/Grids/Elder Sisters Apothecary/ESA_Grid_07.webp',
      '/Media/Gallery/Grids/Elder Sisters Apothecary/ESA_Grid_08.webp',
      '/Media/Gallery/Grids/Elder Sisters Apothecary/ESA_Grid_09.webp',
    ],
  },
  {
    title: 'ZEETA BODY\nPRODUCT VIDEOS',
    credit: 'BTS Stills by Lloyd Hembrador',
    banner: '/Media/Gallery/DSC01876.webp',
    images: [
      '/Media/Gallery/Grids/Zeeta Body/Zeeta_Grid_01.webp',
      '/Media/Gallery/Grids/Zeeta Body/Zeeta_Grid_02.webp',
      '/Media/Gallery/Grids/Zeeta Body/Zeeta_Grid_03.webp',
      '/Media/Gallery/Grids/Zeeta Body/Zeeta_Grid_04.webp',
      '/Media/Gallery/Grids/Zeeta Body/Zeeta_Grid_05.webp',
      '/Media/Gallery/Grids/Zeeta Body/Zeeta_Grid_06.webp',
      '/Media/Gallery/Grids/Zeeta Body/Zeeta_Grid_07.webp',
      '/Media/Gallery/Grids/Zeeta Body/Zeeta_Grid_08.webp',
      '/Media/Gallery/Grids/Zeeta Body/Zeeta_Grid_09.webp',
    ],
  },
  {
    title: 'SUNFLOWERS & TWISTS (PROMO VIDEO)',
    credit: 'BTS Stills by Lloyd Hembrador',
    banner: '/Media/Gallery/Gallery_Banner_SunflowersTwists.webp',
    images: [
      '/Media/Gallery/Grids/Sunflowers and Twists/SunflowersTwists_Grid_01.webp',
      '/Media/Gallery/Grids/Sunflowers and Twists/SunflowersTwists_Grid_02.webp',
      '/Media/Gallery/Grids/Sunflowers and Twists/SunflowersTwists_Grid_03.webp',
      '/Media/Gallery/Grids/Sunflowers and Twists/SunflowersTwists_Grid_04.webp',
      '/Media/Gallery/Grids/Sunflowers and Twists/SunflowersTwists_Grid_05.webp',
      '/Media/Gallery/Grids/Sunflowers and Twists/SunflowersTwists_Grid_06.webp',
      '/Media/Gallery/Grids/Sunflowers and Twists/SunflowersTwists_Grid_07.webp',
      '/Media/Gallery/Grids/Sunflowers and Twists/SunflowersTwists_Grid_08.webp',
      '/Media/Gallery/Grids/Sunflowers and Twists/SunflowersTwists_Grid_09.webp',
    ],
  },
  {
    title: 'REMEMBER/TOMORROW (SHORT FILM)',
    credit: 'BTS Stills by Mecca MeDina',
    banner: '/Media/Gallery/Gallery_Banner_RememberTomorrow.webp',
    images: [
      '/Media/Gallery/Grids/Remember Tomorrow/RT_Grid_01.webp',
      '/Media/Gallery/Grids/Remember Tomorrow/RT_Grid_02.webp',
      '/Media/Gallery/Grids/Remember Tomorrow/RT_Grid_03.webp',
      '/Media/Gallery/Grids/Remember Tomorrow/RT_Grid_04.webp',
      '/Media/Gallery/Grids/Remember Tomorrow/RT_Grid_05.webp',
      '/Media/Gallery/Grids/Remember Tomorrow/RT_Grid_06.webp',
      '/Media/Gallery/Grids/Remember Tomorrow/RT_Grid_07.webp',
      '/Media/Gallery/Grids/Remember Tomorrow/RT_Grid_08.webp',
      '/Media/Gallery/Grids/Remember Tomorrow/RT_Grid_09.webp',
    ],
  },
]

function GalleryPage() {
  // lightbox: { images: [...], idx: n } | null
  const [lightbox, setLightbox] = useState(null)

  const openLightbox = (images, idx) => setLightbox({ images, idx })
  const closeLightbox = () => setLightbox(null)
  const lightboxPrev = () => setLightbox(l => ({ ...l, idx: (l.idx - 1 + l.images.length) % l.images.length }))
  const lightboxNext = () => setLightbox(l => ({ ...l, idx: (l.idx + 1) % l.images.length }))

  useEffect(() => {
    const makeObserver = (threshold) => {
      const obs = new IntersectionObserver(
        (entries) => entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            obs.unobserve(entry.target)
          }
        }),
        { threshold }
      )
      return obs
    }
    const sectionObs = makeObserver(0.1)
    const gridObs = makeObserver(0.1)
    document.querySelectorAll('.pg-section').forEach(el => sectionObs.observe(el))
    document.querySelectorAll('.pg-photo-grid').forEach(el => gridObs.observe(el))
    return () => { sectionObs.disconnect(); gridObs.disconnect() }
  }, [])

  useEffect(() => {
    if (!lightbox) return
    const onKey = (e) => {
      if (e.key === 'Escape') closeLightbox()
      if (e.key === 'ArrowLeft') lightboxPrev()
      if (e.key === 'ArrowRight') lightboxNext()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [lightbox])

  return (
    <main className="pg-page">
      <div className="ow-header"><p><strong>GALLERY</strong></p></div>
      {sections.map((section) => (
        <div key={section.title} className="pg-section">
          {/* Banner */}
          <div className="pg-banner-wrap">
            <div
              className="pg-banner home-banner-fixed"
              style={{ backgroundImage: `url('${section.banner}')` }}
            >
              <div className="pg-banner-overlay">
                <p className="pg-banner-title">{section.titleDisplay ?? section.title}</p>
                <p className="pg-banner-credit">{section.credit}</p>
              </div>
            </div>
          </div>

          {/* Photo grid */}
          <div className="pg-photo-grid">
            {section.images.map((src, idx) => (
              <div
                key={src}
                className="pg-photo-grid-item"
                onClick={() => openLightbox(section.images, idx)}
                style={{ cursor: 'pointer' }}
              >
                <img src={src} alt={`${section.title} photo ${idx + 1}`} />
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* Lightbox */}
      {lightbox && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <button className="lightbox-close" onClick={closeLightbox} aria-label="Close">&times;</button>
          <button className="lightbox-arrow lightbox-prev" onClick={(e) => { e.stopPropagation(); lightboxPrev() }} aria-label="Previous image">&#8249;</button>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img
              className="lightbox-img"
              src={lightbox.images[lightbox.idx]}
              alt={`Photo ${lightbox.idx + 1}`}
            />
          </div>
          <button className="lightbox-arrow lightbox-next" onClick={(e) => { e.stopPropagation(); lightboxNext() }} aria-label="Next image">&#8250;</button>
        </div>
      )}
    </main>
  )
}

export default GalleryPage
