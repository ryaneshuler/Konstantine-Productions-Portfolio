import { useEffect } from 'react'

function DocumentariesPage() {
  useEffect(() => {
    const projects = document.querySelectorAll('.ow-project')
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
          observer.unobserve(entry.target)
        }
      }),
      { threshold: 0.1 }
    )
    projects.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <main className="ow-page">
      <div className="ow-header"><p><strong>BRANDED DOCS</strong></p></div>

      {/* MAP x Flying Cloud Institute */}
      <div className="ow-project">
        <div className="ow-banner-wrap">
          <div className="ow-banner-text">
            <p>MAP X FLYING CLOUD INSTITUTE</p>
          </div>
          <img className="ow-banner-img ow-banner-img--tall" src="/Media/Gallery/Our Works/Documentaries/OurWorks_Banner_MAP_01.webp" alt="MAP x Flying Cloud Institute" />
        </div>
        <div className="ow-video-wrap">
          <iframe
            src="https://player.vimeo.com/video/840495112"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            title="MAP x Flying Cloud Institute - Girls Science Club"
          />
        </div>
        <div className="ow-video-wrap">
          <iframe
            src="https://player.vimeo.com/video/840496727"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            title="MAP x Flying Cloud Institute - Maker Space"
          />
        </div>
        <div className="ow-ext-btn-wrap">
          <a target="_blank" rel="noopener noreferrer" href="https://vimeo.com/842507064?share=copy&fl=cl&fe=ci">
            <button className="ow-ext-btn"><strong>VIEW FULL MAP X FLYING CLOUD INSTITUTE VIDEO</strong></button>
          </a>
        </div>
        <div className="doc-credits">
          <p className="ow-credits-header"><strong>Key Credits</strong></p>
          <p><strong>Directed, Produced, and Filmed by:</strong> Ari Veach, Ryan Shuler</p>
          <p><strong>Featuring:</strong> Angel Heffernan, Lili Atanacio &amp; the Students of Flying Cloud Institute</p>
          <p><strong>Editing &amp; VFX:</strong> Ryan Shuler</p>
        </div>
      </div>
    </main>
  )
}

export default DocumentariesPage
