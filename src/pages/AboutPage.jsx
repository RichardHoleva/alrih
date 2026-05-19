import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import heroImg from '/ALRICH/images/Main_hero_image.png'

export default function AboutPage() {
  return (
    <>
      <Navbar />

      {/* ── Intro ── */}
      <section className="about-intro">
        <div className="about-intro__inner">
          <p className="about-intro__label">About the studio</p>
          <h1 className="about-intro__heading">
            A small <em>team</em> with <em>careful</em> eye.
          </h1>
          <p className="about-intro__body">
            Alrich is a small architectural and interior design studio based in Slovakia.
            We work closely with our clients from the first sketch to the final handover,
            combining technical precision with a genuine care for how spaces feel to live in.
          </p>
        </div>
      </section>

      {/* ── Team ── */}
      <section className="about-team">
        <div className="about-team__inner">
          <div className="about-team__header">
            <p className="about-team__label">The team</p>
            <h2 className="about-team__heading">
              A <em>father</em> and <em>daughter</em> studio
            </h2>
            <p className="about-team__sub">
              Behind Alrich are two people who bring different but complementary
              skills to every project. One with a background in architecture and
              construction, the other in interior design and 3D visualisation.
              Together they cover the full process.
            </p>
          </div>
          <div className="about-team__grid">
            <div className="team-card">
              <div className="team-card__photo-wrap">
                <img src={heroImg} alt="Miroslav Cavo" className="team-card__photo" />
              </div>
              <p className="team-card__role">Founder · Architect</p>
              <h3 className="team-card__name">Miroslav Cavo</h3>
              <p className="team-card__bio">
                Miroslav is the founding architect of Alrich with years of experience
                in residential and public building design. He manages the technical side
                of every project, from planning and permits to construction oversight,
                making sure every design is not just beautiful but buildable.
              </p>
            </div>
            <div className="team-card">
              <div className="team-card__photo-wrap">
                <img src={heroImg} alt="Nina Cavo" className="team-card__photo" />
              </div>
              <p className="team-card__role">Partner · Interior Designer</p>
              <h3 className="team-card__name">Nina Cavo</h3>
              <p className="team-card__bio">
                Nina leads the interior design and 3D visualisation work at Alrich.
                She transforms spaces through thoughtful material choices, light and
                detail, and gives clients a clear picture of their future home before
                a single wall is built.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Story ── */}
      <section className="about-story">
        <div className="about-story__inner">
          <div className="about-story__left">
            <p className="about-story__label">Our story</p>
            <h2 className="about-story__heading">
              Founded in <em>2018</em> on the simple idea that good design
              makes everyday <em>life better.</em>
            </h2>
          </div>
          <div className="about-story__right">
            <p className="about-story__body">
              Alrich was founded on the belief that good design should be
              accessible, honest and built to last.
            </p>
            <p className="about-story__body">
              We are not a large agency. We take on a small number of projects
              each year so we can give every client the attention their home deserves.
            </p>
            <p className="about-story__body">
              Every project starts with listening and ends with a space that feels
              exactly right.
            </p>
          </div>
        </div>
      </section>

      {/* ── Process ── */}
      <section className="about-process">
        <div className="about-process__inner">
          <div className="about-process__header">
            <p className="about-process__label">How we work</p>
            <h2 className="about-process__heading"><em>Our</em> process</h2>
          </div>
          <div className="about-process__list">
            {[
              { n: '01', step: 'Step one',   title: 'Brief & listening',     body: 'We meet on site and talk through your vision, budget and timeline. No assumptions, just questions.' },
              { n: '02', step: 'Step two',   title: 'Concept & sketching',   body: 'We develop two or three directions based on what we heard and come back for honest feedback.' },
              { n: '03', step: 'Step three', title: 'Design development',    body: 'The chosen direction is developed in full detail. Materials, light and layout are finalised together.' },
              { n: '04', step: 'Step four',  title: 'Build & oversight',     body: 'We work alongside trusted contractors and visit the site regularly to make sure everything is built as designed.' },
              { n: '05', step: 'Step five',  title: 'Handover & care',       body: 'We do a final walkthrough, document everything and make sure you feel confident in your new space.' },
            ].map((s) => (
              <div className="about-process__row" key={s.n}>
                <span className="about-process__num">{s.n}</span>
                <div className="about-process__meta">
                  <p className="about-process__step">{s.step}</p>
                  <h3 className="about-process__title">{s.title}</h3>
                </div>
                <p className="about-process__body">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
