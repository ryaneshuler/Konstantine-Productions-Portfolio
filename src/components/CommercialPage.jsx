import { useEffect } from 'react'

function CommercialPage() {
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
      <div className="ow-header"><p><strong>COMMERCIALS</strong></p></div>

      {/* Elder Sisters Apothecary */}
      <div className="ow-project">
        <div className="ow-banner-wrap">
          <div className="ow-banner-text">
            <a target="_blank" rel="noopener noreferrer" href="https://vimeo.com/568939232">
              <p><strong>ELDER SISTERS APOTHECARY</strong></p>
            </a>
          </div>
          <a target="_blank" rel="noopener noreferrer" href="https://vimeo.com/568939232">
            <img className="ow-banner-img" src="/Media/Gallery/Our Works/Commercials/Images/OurWorks_Banner_ESA_01.webp" alt="Elder Sisters Apothecary" />
          </a>
        </div>
        <div className="ow-video-wrap ow-video-wrap-esa">
          <iframe
            src="https://player.vimeo.com/video/568939232"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            title="Elder Sisters Apothecary"
          ></iframe>
        </div>
        <div className="ow-credits ow-credits-esa">
          <p className="ow-credits-header"><strong>Key Credits</strong></p>
          <p><strong>Directed and Produced by:</strong> Ari Veach, Ryan Shuler</p>
          <p><strong>Featuring:</strong> Melannie Vásquez Lara, Lisa Brenner, Jackie Foley</p>
          <p><strong>Director of Photography:</strong> Nathan Krauss</p>
          <p><strong>Gaffer:</strong> Joe Albino</p>
          <p><strong>Editing &amp; VFX:</strong> Ryan Shuler</p>
        </div>
      </div>

      {/* Stems Brooklyn */}
      <div className="ow-project">
        <div className="ow-banner-wrap">
          <div className="ow-banner-text">
            <p><strong>STEMS BROOKLYN</strong></p>
          </div>
          <img className="ow-banner-img" src="/Media/Gallery/Our Works/Commercials/Images/OurWorks_Banner_Stems_01.webp" alt="Stems Brooklyn" />
        </div>
        <div className="ow-video-wrap">
          <iframe
            src="https://player.vimeo.com/video/706343461"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            title="Stems Brooklyn"
          ></iframe>
        </div>
        <div className="ow-credits">
          <p className="ow-credits-header"><strong>Key Credits</strong></p>
          <p><strong>Directed, Produced &amp; Shot by:</strong> Ari Veach, Ryan Shuler</p>
          <p><strong>Featuring:</strong> Suzanna Cameron</p>
          <p><strong>Edited by:</strong> Ryan Shuler</p>
        </div>
      </div>

      {/* Sunflowers and Twists */}
      <div className="ow-project">
        <div className="ow-banner-wrap">
          <div className="ow-banner-text">
            <p><strong>SUNFLOWERS AND TWISTS</strong></p>
          </div>
          <img className="ow-banner-img" src="/Media/Gallery/Our Works/Commercials/Images/OurWorks_Banner_SunflowersTwists_01.webp" alt="Sunflowers and Twists" />
        </div>
        <div className="ow-video-wrap">
          <iframe
            src="https://player.vimeo.com/video/568938419"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            title="Sunflowers and Twists"
          ></iframe>
        </div>
        <div className="ow-credits">
          <p className="ow-credits-header"><strong>Key Credits</strong></p>
          <p><strong>Directed and Produced by:</strong> Ari Veach, Ryan Shuler</p>
          <p><strong>Featuring:</strong> Kezia Tyson</p>
          <p><strong>Director of Photography &amp; Editor:</strong> Ryan Shuler</p>
          <p><strong>Gaffer:</strong> Eren Gedikoglu</p>
        </div>
      </div>

      {/* Zeeta Body */}
      <div className="ow-project">
        <div className="ow-banner-wrap">
          <div className="ow-banner-text">
            <p><strong>ZEETA BODY</strong></p>
          </div>
          <img className="ow-banner-img" src="/Media/Gallery/Our Works/Commercials/Images/OurWorks_Banner_ZeetaBody_01.webp" alt="Zeeta Body" />
        </div>
        <div className="ow-video-wrap">
          <iframe
            src="https://player.vimeo.com/video/568935829"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            title="Zeeta Body"
          ></iframe>
        </div>
        <a
          className="ow-showcase-btn"
          href="https://vimeo.com/showcase/8616254"
          target="_blank"
          rel="noopener noreferrer"
        >VIEW ALL "ZEETA BODY" VIDEOS</a>
        <div className="ow-credits">
          <p className="ow-credits-header"><strong>Key Credits</strong></p>
          <p><strong>Directed, Written, and Produced by:</strong> Ryan Shuler, Ari Veach</p>
          <p><strong>Featuring:</strong> Mecca MeDina</p>
          <p><strong>V.O. Artist:</strong> Marielle Renée Rousseau</p>
          <p><strong>Director of Photography, Editor:</strong> Ryan Shuler</p>
          <p><strong>Gaffer:</strong> Eren Gedikoglu</p>
        </div>
      </div>

      {/* Zen Phoenix Yoga */}
      <div className="ow-project">
        <div className="ow-banner-wrap">
          <div className="ow-banner-text">
            <p><strong><em>ZEN PHOENIX YOGA</em></strong></p>
          </div>
          <img className="ow-banner-img" src="/Media/Gallery/Our Works/Commercials/Images/OurWorks_Banner_ZenPhoenix_01.webp" alt="Zen Phoenix Yoga" />
        </div>
        <div className="ow-video-wrap">
          <iframe
            src="https://player.vimeo.com/video/651264628"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            title="Zen Phoenix Yoga"
          ></iframe>
        </div>
        <div className="ow-credits">
          <p className="ow-credits-header"><strong>Key Credits</strong></p>
          <p><strong>Directed, Produced &amp; Shot by:</strong> Ryan Shuler, Ari Veach</p>
          <p><strong>Featuring:</strong> Katrina Kiklowicz</p>
          <p><strong>Edited by:</strong> Ryan Shuler</p>
        </div>
      </div>

      {/* Still Mountain */}
      <div className="ow-project">
        <div className="ow-banner-wrap">
          <div className="ow-banner-text">
            <p><strong><em>STILL MOUNTAIN T'AI CHI &amp; CHI KUNG</em></strong></p>
          </div>
          <img className="ow-banner-img" src="/Media/Gallery/Our Works/Commercials/Images/OurWorks_Banner_StillMountain_01.webp" alt="Still Mountain T'ai Chi" />
        </div>
        <div className="ow-video-wrap">
          <iframe
            src="https://player.vimeo.com/video/646575667"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            title="Still Mountain T'ai Chi"
          ></iframe>
        </div>
        <div className="ow-credits">
          <p className="ow-credits-header"><strong>Key Credits</strong></p>
          <p><strong>Directed, Produced &amp; Shot by:</strong> Ryan Shuler, Ari Veach</p>
          <p><strong>Featuring:</strong> David Clippinger</p>
          <p><strong>Edited by:</strong> Ryan Shuler</p>
        </div>
      </div>
    </main>
  )
}

export default CommercialPage
