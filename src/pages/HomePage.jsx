import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import ProjectCard from '../components/ProjectCard'
import ServiceCard from '../components/ServiceCard'
import ReviewCard from '../components/ReviewCard'
import Footer from '../components/Footer'
import heroImg from '/ALRICH/images/Main_hero_image.png'
import interiorImg from '/ALRICH/images/interier.png'
import backImg from '/ALRICH/images/back.png'
import SideImg from '/ALRICH/images/side_photo.png'

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />

      <section className="about">
        <div className="about__inner">
          <div className="about__left">
            <p className="about__label">Who we are</p>
            <h2 className="about__heading">
              A small <em>studio</em> with a careful eye for proportion,
              light and <em>material</em>
            </h2>
          </div>
          <div className="about__right">
            <p className="about__body">
              Alrich is an independent architecture practice based in Bratislava,
              working across residential, cultural and small commercial projects.
              Each commission begins with a long conversation about how a place is
              used, where the light falls, and what stays once the noise has settled.
            </p>
            <p className="about__body">
              We build slowly, with a small team and a short list of trusted
              craftspeople. The result is quiet, durable architecture made to be
              lived in for decades, not photographed once.
            </p>
          </div>
        </div>
      </section>

      <section className="featured">
        <div className="featured__inner">
          <div className="featured__header">
            <div>
              <p className="featured__label">Selected work</p>
              <h2 className="featured__heading">Featured <em>Projects</em></h2>
            </div>
            <button className="featured__view-all">View all &rarr;</button>
          </div>
          <div className="featured__grid">
            <ProjectCard category="Cottage" year="2024" title="Family Cottage" image={SideImg} />
            <ProjectCard category="Interior" year="2024" title="Family House" image={interiorImg} />
            <ProjectCard category="Exterior" year="2024" title="Family House" image={backImg} />
          </div>
        </div>
      </section>

      <section className="services">
        <div className="services__inner">
          <div className="services__header">
            <p className="services__label">What we do</p>
            <h2 className="services__heading">Services</h2>
            <p className="services__sub">
              Three areas of practice, each handled in-house from first sketch
              to final detail. We take on a small number of projects each year
              so attention does not get diluted.
            </p>
          </div>
          <div className="services__grid">
            <ServiceCard
              number="01"
              icon={null}
              title="Architecture"
              description="New-build houses, additions and renovations. Concept through construction administration, with measured drawings and a clear, buildable detail set."
            />
            <ServiceCard
              number="02"
              icon={null}
              title="Interior Design"
              description="Spatial planning, joinery, fixtures and material palettes coordinated with the architecture so the inside and outside agree on the same project."
            />
            <ServiceCard
              number="03"
              icon={null}
              title="3D Visualizations"
              description="Photoreal renders and walkthroughs produced from our working models useful for early client decisions and planning submissions alike."
            />
          </div>
        </div>
      </section>

      <section className="process">
        <div className="process__inner">
          <p className="process__label">How we work</p>
          <h2 className="process__heading"><em>Our</em> Process</h2>
          <div className="process__timeline">
            {[
              { n: '01', title: 'Brief',    body: 'A long first meeting on site or over coffee. Programme, budget, constraints.' },
              { n: '02', title: 'Concept',  body: 'Two or three directions, in plan and section, presented for honest feedback.' },
              { n: '03', title: 'Design',   body: 'Chosen direction is developed in detail, materials and light are committed.' },
              { n: '04', title: 'Build',    body: 'Permit drawings, tendering, and on-site supervision with our trusted trades.' },
              { n: '05', title: 'Handover', body: "Snagging, final photography and a short manual for the building's life." },
            ].map((step) => (
              <div className="process__step" key={step.n}>
                <div className="process__circle">{step.n}</div>
                <h3 className="process__step-title">{step.title}</h3>
                <p className="process__step-body">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="reviews">
        <div className="reviews__inner">
          <p className="reviews__label">Clients reviews</p>
          <h2 className="reviews__heading"><strong>What</strong> <em>clients</em> <strong>say</strong></h2>
          <div className="reviews__grid">
            <ReviewCard
              initials="JG"
              name="Jančo Gadžo"
              project="Private home · Bratislava"
              quote="They listened more than they drew, which is rare. The house we ended up with feels like ours, not a portfolio piece dropped on our plot."
            />
            <ReviewCard
              initials="MN"
              name="Mária Nováková"
              project="Private cabin · Horná Stubňa"
              quote="We wanted something that felt like it had always been there. They understood that immediately."
            />
            <ReviewCard
              initials="JG"
              name="Jančo Gadžo"
              project="Private home · Bratislava"
              quote="They listened more than they drew, which is rare. The house we ended up with feels like ours, not a portfolio piece dropped on our plot."
            />
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
