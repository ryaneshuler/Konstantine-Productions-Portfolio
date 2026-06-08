import { useEffect } from 'react'
import { Link } from 'react-router-dom'

function OWNarrativesPage() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12 }
    )

    document.querySelectorAll('.ow-project').forEach(el => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <main className="ow-page">
      <div className="ow-header"><p><strong>NARRATIVES</strong></p></div>

      {/* Paint Me Blue */}
      <div className="ow-project ow-project--fade">
        <Link to="/narratives/paint-me-blue" className="ow-banner-link">
          <div className="ow-banner-wrap">
            <div className="ow-banner-text">
              <p>PAINT ME BLUE</p>
            </div>
            <img className="ow-banner-img" src="/Media/Gallery/Our Works/Narratives/OurWorks_Banner_PaintMeBlue_01.webp" alt="Paint Me Blue" />
          </div>
        </Link>
      </div>

      {/* Mac N Beth */}
      <div className="ow-project ow-project--fade">
        <Link to="/narratives/mac-n-beth" className="ow-banner-link">
          <div className="ow-banner-wrap">
            <div className="ow-banner-text">
              <p>MAC N BETH</p>
            </div>
            <img className="ow-banner-img" src="/Media/Gallery/Our Works/Narratives/OurWorks_Banner_MacNBeth_01.webp" alt="Mac N Beth" />
          </div>
        </Link>
      </div>

      {/* Remember/Tomorrow */}
      <div className="ow-project ow-project--fade">
        <Link to="/narratives/remember-tomorrow" className="ow-banner-link">
          <div className="ow-banner-wrap">
            <div className="ow-banner-text">
              <p>REMEMBER/TOMORROW</p>
            </div>
            <img className="ow-banner-img" src="/Media/Gallery/Our Works/Narratives/OurWorks_Banner_RememberTomorrow_01.webp" alt="Remember/Tomorrow" />
          </div>
        </Link>
      </div>

      {/* Awakening */}
      <div className="ow-project ow-project--fade">
        <Link to="/narratives/awakening" className="ow-banner-link">
          <div className="ow-banner-wrap">
            <div className="ow-banner-text">
              <p>AWAKENING</p>
            </div>
            <img className="ow-banner-img" src="/Media/Gallery/Our Works/Narratives/OurWorks_Banner_Awakening_01.webp" alt="Awakening" />
          </div>
        </Link>
      </div>

      {/* Kissing Other People */}
      <div className="ow-project ow-project--fade">
        <Link to="/narratives/kissing-other-people" className="ow-banner-link">
          <div className="ow-banner-wrap">
            <div className="ow-banner-text">
              <p>KISSING OTHER PEOPLE</p>
            </div>
            <img className="ow-banner-img" src="/Media/Gallery/Our Works/Narratives/OurWorks_Banner_KissingOtherPeople_01.webp" alt="Kissing Other People" />
          </div>
        </Link>
      </div>

      {/* I Want You Baby */}
      <div className="ow-project ow-project--fade">
        <Link to="/narratives/i-want-you-baby" className="ow-banner-link">
          <div className="ow-banner-wrap">
            <div className="ow-banner-text">
              <p>I WANT YOU BABY</p>
            </div>
            <img className="ow-banner-img" src="/Media/Gallery/Our Works/Narratives/OurWorks_Banner_IWantYouBaby_01.webp" alt="I Want You Baby" />
          </div>
        </Link>
      </div>

      {/* Salty Corn */}
      <div className="ow-project ow-project--fade">
        <Link to="/narratives/salty-corn" className="ow-banner-link">
          <div className="ow-banner-wrap">
            <div className="ow-banner-text">
              <p>SALTY CORN</p>
            </div>
            <img className="ow-banner-img" src="/Media/Gallery/Our Works/Narratives/OurWorks_Banner_SaltyCorn_01.webp" alt="Salty Corn" />
          </div>
        </Link>
      </div>
    </main>
  )
}

export default OWNarrativesPage
