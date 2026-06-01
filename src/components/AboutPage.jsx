import { useEffect } from 'react'
import { Link } from 'react-router-dom'

function AboutPage() {
  useEffect(() => {
    const fadeObserver = new IntersectionObserver(
      (entries) => entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
          fadeObserver.unobserve(entry.target)
        }
      }),
      { threshold: 0.12 }
    )
    document.querySelectorAll('.about-fade-img').forEach(el => fadeObserver.observe(el))

    const wipeObserver = new IntersectionObserver(
      (entries) => entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll('.wipe-top-down, .wipe-bottom-up')
            .forEach(el => el.classList.add('visible'))
          wipeObserver.unobserve(entry.target)
        }
      }),
      { threshold: 0.15 }
    )
    document.querySelectorAll('.about-team-row').forEach(el => wipeObserver.observe(el))

    return () => {
      fadeObserver.disconnect()
      wipeObserver.disconnect()
    }
  }, [])

  return (
    <main className="about-page">

      {/* Our Vision */}
      <div className="about-section">
        <h1 className="about-section-header">OUR VISION</h1>
        <div className="about-section-img-wrap about-section-img-wrap--natural about-fade-img">
          <div className="about-img-caption-wrap">
            <img className="about-section-img" src="/Media/Gallery/James+and+Donkey!!.webp" alt="Our Vision" />
            <p className="about-img-caption">James Legris (2nd AD) on set for Elder Sisters Apothecary Commercial</p>
          </div>
        </div>
        <div className="about-section-body">
          <p className="about-first-p">Konstantine Productions aims to cultivate a Green Revolution within the film and video industry.</p>
          <p>Through the evocative power of storytelling, we are committed to shaping a more sustainable, innovative, and compassionate future for generations to come.</p>
        </div>
      </div>

      {/* Our Mission */}
      <div className="about-section">
        <h1 className="about-section-header">OUR MISSION</h1>
        <div className="about-section-img-wrap about-section-img-wrap--natural about-fade-img">
          <div className="about-img-caption-wrap">
            <img className="about-section-img" src="/Media/Gallery/RoseEye1.webp" alt="Our Mission" />
            <p className="about-img-caption">Marielle Renée Rousseau in Remember/Tomorrow (short film) | Photo by Mecca MeDina</p>
          </div>
        </div>
        <div className="about-section-body">
          <p className="about-first-p">At Konstantine Productions, we pledge to craft striking and imaginative films and videos while maintaining eco-conscious practices.</p>
          <p>Sustainability and Creativity are the cornerstones of our company — no matter the style, genre, or scope of any given project, we will work closely with all clients and collaborators to achieve a shared, unique vision. Our sets, workplaces, and culture will promote and encourage eco-friendly philosophies in order to contribute towards a more sustainable world.</p>
          <p>All in all, we promise to create thoughtful work, thoughtfully.</p>
          <Link to="/sustainability"><button className="about-btn sustainable-btn">View Sustainable Practices</button></Link>
        </div>
      </div>

      {/* Our Team */}
      <div className="about-team">
        <div className="about-team-row">
          <img className="about-headshot wipe-top-down" src="/Media/Gallery/Ryan_Headshot.webp" alt="Ryan Shuler" />
          <div className="about-team-bio wipe-bottom-up">
            <h2 className="about-name-tag">RYAN SHULER (Founder, Co-Owner &amp; Producer)</h2>
            <p>Ryan Shuler is a Director, Producer, and Editor based in Brooklyn, NY. Ryan graduated from Ithaca College ('15) with a Bachelor of Science in Cinema &amp; Photography (Cinema Production Concentration). As the founder of Konstantine Productions, Ryan has worked on many projects with the company, most recently as Producer for the short film, Paint Me Blue, and Director of the upcoming short documentary, ColorMind. Ryan also works as a Freelance Film &amp; Video Editor with clients such as The Wild/Factory for brands including T-Mobile, Yahoo!, and more. In 2022, Ryan garnered "Best Editor" awards from Beyond the Curve International Film Festival and Vegas Shorts for his editing work on K2 TOG (short film). Ryan holds a strong passion for filmmaking which stems from his upbringing and is thrilled to combine that with his love for environmentalism, bringing them together into a single focus. He is excited for what lies ahead for Konstantine Productions current projects and beyond.</p>
          </div>
        </div>
        <div className="about-team-row about-team-row--bio-first">
          <div className="about-team-bio wipe-top-down">
            <h2 className="about-name-tag">ARI VEACH (Co-Owner &amp; Producer)</h2>
            <p>Ari Veach is a Director, Producer, and Film/Video Production Freelancer based in Brooklyn, NY. Ari's first project with Konstantine Productions was as the Writer, Co-Director &amp; Producer of the award-nominated short film, Remember/Tomorrow — after which, he went on to join Ryan Shuler as Co-Owner of the company with a revamped, eco-conscious mission. Ari has developed multiple promotional videos and branded content as Co-Director &amp; Producer for a range of small businesses and nonprofit organizations, in addition to a variety of other projects including music videos, narratives, and more. Ari's most recent projects with Konstantine Productions include short film Paint Me Blue (Writer, Director, Producer), which will soon enter the festival circuit, and short documentary ColorMind (Producer), currently in post-production. His freelance work includes Director of short film K2 TOG, which garnered multiple awards including "Best Director" from Beyond The Curve International Film Festival. Above all, Ari has a passion for collaborative, sustainably-driven storytelling, and he is excited for the future of Konstantine Productions.</p>
          </div>
          <img className="about-headshot wipe-bottom-up" src="/Media/Gallery/Ari_Headshot.webp" alt="Ari Veach" />
        </div>
      </div>

      {/* Our Story */}
      <div className="about-section about-section--story">
        <h1 className="about-section-header">OUR STORY</h1>
        <div className="about-section-img-wrap about-section-img-wrap--story about-fade-img">
          <img className="about-section-img" src="/Media/Gallery/AriRyan3.jpg" alt="Ari and Ryan" />
          <p className="about-img-caption">Ari Veach and Ryan Shuler (Co-Owners &amp; Producers) at Yonkers Film Festival in Yonkers, NY</p>
        </div>
        <div className="about-section-body">
          <p><strong>Ryan and Ari met at Ithaca College, where they quickly became close friends and trusty collaborators. After graduating and moving to NYC, they continued to work together on various projects throughout the years — including the award-nominated short film, Remember/Tomorrow.</strong></p>
          <p><strong>At the start of 2021, Ari and Ryan became official business partners. Combining their passions for filmmaking and sustainability, they conceived a new vision for Konstantine Productions and set off into a new chapter. Since then, they have Co-Directed &amp; Produced multiple productions including promotional videos and branded content for small businesses and non-profit organizations, short films and digital series, music videos, and more.</strong></p>
          <p><strong>The collaborative duo are currently working on two short films in post-production which will soon enter the festival circuit — Paint Me Blue (narrative, written and directed by Ari) and ColorMind (documentary, directed by Ryan). They look forward to the future of these two personal films, as well as continuing to craft unique stories through film and video with eco-conscious practices.</strong></p>
        </div>
      </div>

    </main>
  )
}

export default AboutPage
