import { useEffect } from 'react'

function MusicVideosPage() {
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

    const bannerObs = makeObserver(0.1)
    const fadeObs = makeObserver(0.15)

    document.querySelectorAll('.ow-project').forEach(el => bannerObs.observe(el))
    document.querySelectorAll('.ow-video-wrap, .ow-credits').forEach(el => fadeObs.observe(el))

    return () => { bannerObs.disconnect(); fadeObs.disconnect() }
  }, [])

  return (
    <main className="ow-page">
      <div className="ow-header"><p><strong>MUSIC VIDEOS</strong></p></div>

      {/* Boundary */}
      <div className="ow-project">
        <div className="ow-banner-wrap">
          <div className="ow-banner-text">
            <a target="_blank" rel="noopener noreferrer" href="https://vimeo.com/761181919">
              <p>BOUNDARY</p>
            </a>
          </div>
          <a target="_blank" rel="noopener noreferrer" href="https://vimeo.com/761181919">
            <img className="ow-banner-img" src="/Media/Gallery/Our Works/Music Videos/OurWorks_Banner_Boundary_01.webp" alt="Boundary" />
          </a>
        </div>
        <div className="ow-video-wrap ow-video-wrap-boundary">
          <iframe
            src="https://player.vimeo.com/video/761181919"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            title="Boundary"
          ></iframe>
        </div>
        <div className="ow-credits ow-credits-boundary">
          <p className="ow-credits-header"><strong>Key Credits</strong></p>
          <p><strong><em>BOUNDARY Written and Performed by:</em></strong> Chloe Anne McElligot</p>
          <p><strong><em>Directed and Produced by:</em></strong> Ryan Shuler, Ari Veach</p>
          <p><strong><em>Starring:</em></strong> Chloe Anne McElligot</p>
          <p><strong><em>Director of Photography:</em></strong> Ari Veach</p>
          <p><strong><em>Choreographer &amp; Editor:</em></strong> Ryan Shuler</p>
          <p><strong><em>Production Assistant:</em></strong> Kayleigh Shuler</p>
        </div>
      </div>

      {/* Villain 2.0 */}
      <div className="ow-project">
        <div className="ow-banner-wrap">
          <div className="ow-banner-text">
            <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/watch?v=9dgUGASeGPk">
              <p>VILLAIN 2.0</p>
            </a>
          </div>
          <a className="ow-banner-link" target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/watch?v=9dgUGASeGPk">
            <img className="ow-banner-img ow-banner-img--tall" src="/Media/Gallery/Our Works/Music Videos/OurWorks_Banner_Villain_01.png" alt="Villain 2.0" />
          </a>
        </div>
        <div className="ow-video-wrap">
          <iframe
            src="https://www.youtube.com/embed/9dgUGASeGPk"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Villain 2.0"
          ></iframe>
        </div>
        <div className="ow-credits">
          <p className="ow-credits-header"><strong>Key Credits</strong></p>
          <p><strong><em>VILLAIN 2.0 Written and Performed by:</em></strong> Leanne Gallati</p>
          <p><strong><em>Directed by:</em></strong> Megan Roe</p>
          <p><strong><em>Produced by:</em></strong> Ryan Shuler, Ari Veach</p>
          <p><strong><em>Starring:</em></strong> Leanne Gallati, Andrei Dolezal</p>
          <p><strong><em>Director of Photography:</em></strong> Ryan Shuler</p>
          <p><strong><em>1st Assistant Director:</em></strong> Ari Veach</p>
          <p><strong><em>Editing &amp; VFX:</em></strong> Ryan Shuler</p>
          <p><strong><em>Gaffer:</em></strong> Taylor Weinberg</p>
        </div>
      </div>
      
      {/* Am Yisrael Chai */}
      {/* <div className="ow-project">
        <div className="ow-banner-wrap">
          <div className="ow-banner-text">
            <a target="_blank" rel="noopener noreferrer" href="https://vimeo.com/944088162">
              <p>AM YISRAEL CHAI</p>
            </a>
          </div>
          <a target="_blank" rel="noopener noreferrer" href="https://vimeo.com/944088162">
            <img className="ow-banner-img" src="/Media/Gallery/Our Works/Music Videos/JBHA_Banner_01.webp" alt="Am Yisrael Chai" />
          </a>
        </div>
        <div className="ow-video-wrap">
          <iframe
            src="https://player.vimeo.com/video/944088162"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            title="Am Yisrael Chai"
          ></iframe>
        </div>
        <div className="ow-credits">
          <p className="ow-credits-header"><strong>Key Credits</strong></p>
          <p><strong>Featuring the Students and Faculty of Jack M. Barrack Hebrew Academy</strong></p>
          <p><strong><em>Directed, Produced &amp; Filmed by:</em></strong> Ari Veach, Ryan Shuler</p>
          <p><strong><em>Edited by:</em></strong> Ryan Shuler</p>
        </div>
      </div> */}
    </main>
  )
}

export default MusicVideosPage
