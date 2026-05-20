import { useParams, Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Reveal from '../components/Reveal'
import { PROJECTS } from '../data/projects'

export default function DetailedPage() {
  const { id } = useParams()
  const { t } = useTranslation('detailed')
  const project = PROJECTS.find(p => p.id === Number(id))

  if (!project) {
    return (
      <>
        <Navbar />
        <div className="detail-notfound">
          <h2>{t('notFound.heading')}</h2>
          <Link to="/projects">{t('notFound.back')}</Link>
        </div>
        <Footer />
      </>
    )
  }

  const currentIndex = PROJECTS.findIndex(p => p.id === Number(id))
  const nextProject  = PROJECTS[(currentIndex + 1) % PROJECTS.length]
  const totalStr     = String(PROJECTS.length).padStart(2, '0')
  const nextNumStr   = String(currentIndex + 2 > PROJECTS.length ? 1 : currentIndex + 2).padStart(2, '0')

  return (
    <>
      <Navbar />

      {/* ── Hero ── */}
      <section className="detail-hero">
        <img src={project.heroImage} alt={project.title} className="detail-hero__img" />
        <div className="detail-hero__bar">
          <span className="detail-hero__label">N°{project.number} — {project.title.toUpperCase()}</span>
          <span className="detail-hero__scroll">{t('scroll')}</span>
        </div>
      </section>

      {/* ── Intro ── */}
      <section className="detail-intro">
        <div className="detail-intro__inner">
          <div className="detail-intro__left">
            <Link to="/projects" className="detail-intro__back">{t('back')}</Link>
            <h1 className="detail-intro__title">
              {project.title.split(' ').map((word, i, arr) =>
                i === arr.length - 1
                  ? <em key={i}>{word}</em>
                  : <span key={i}>{word} </span>
              )}
            </h1>
            <span className="detail-intro__tag">{project.category}</span>
          </div>
          <div className="detail-intro__meta">
            <div className="detail-intro__meta-item">
              <p className="detail-intro__meta-label">{t('meta.year')}</p>
              <p className="detail-intro__meta-value">{project.year}</p>
            </div>
            <div className="detail-intro__meta-item">
              <p className="detail-intro__meta-label">{t('meta.location')}</p>
              <p className="detail-intro__meta-value">{project.location}</p>
            </div>
            <div className="detail-intro__meta-item">
              <p className="detail-intro__meta-label">{t('meta.area')}</p>
              <p className="detail-intro__meta-value">{project.area}</p>
            </div>
            <div className="detail-intro__meta-item">
              <p className="detail-intro__meta-label">{t('meta.client')}</p>
              <p className="detail-intro__meta-value">{project.client}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Gallery ── */}
      <section className="detail-gallery">
        <div className="detail-gallery__inner">
          <Reveal>
            <p className="detail-gallery__label">{t('gallery.label')}</p>
            <h2 className="detail-gallery__heading">{t('gallery.headingPre')} <em>{t('gallery.headingEm')}</em> {t('gallery.headingSuf')}</h2>
          </Reveal>
          <Reveal delay={80}>
            <div className="detail-gallery__top-row">
              {project.gallery.slice(0, 2).map((item, i) => (
                <div key={i} className="detail-gallery__item">
                  <img src={item.image} alt={item.caption} className="detail-gallery__img" />
                  <p className="detail-gallery__caption">
                    <span className="detail-gallery__caption-num">{String(i + 1).padStart(2, '0')}</span>
                    {item.caption}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
          {project.gallery[2] && (
            <Reveal delay={160}>
              <div className="detail-gallery__bottom-row">
                <div className="detail-gallery__item">
                  <img src={project.gallery[2].image} alt={project.gallery[2].caption} className="detail-gallery__img" />
                  <p className="detail-gallery__caption">
                    <span className="detail-gallery__caption-num">03</span>
                    {project.gallery[2].caption}
                  </p>
                </div>
              </div>
            </Reveal>
          )}
        </div>
      </section>

      {/* ── About ── */}
      <section className="detail-about">
        <div className="detail-about__inner">
          <Reveal>
            <div className="detail-about__left">
              <p className="detail-about__label">{t('about.label')}</p>
              <h2 className="detail-about__heading">{project.aboutHeading}</h2>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="detail-about__right">
              {project.aboutBody.map((para, i) => (
                <p key={i} className={`detail-about__body${i === 0 ? ' detail-about__body--dropcap' : ''}`}>
                  {para}
                </p>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Quote ── */}
      <Reveal>
        <section className="detail-quote">
          <div className="detail-quote__inner">
            <span className="detail-quote__marks">"</span>
            <blockquote className="detail-quote__text">{project.quote.text}</blockquote>
            <div className="detail-quote__author">
              <div className="detail-quote__avatar">{project.quote.initials}</div>
              <div>
                <p className="detail-quote__name">{project.quote.author}</p>
                <p className="detail-quote__project">{project.quote.project}</p>
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      {/* ── Next Project ── */}
      <section className="detail-next">
        <div className="detail-next__inner">
          <Reveal>
            <div className="detail-next__left">
              <p className="detail-next__label">{t('next.label')} · {nextNumStr}/{totalStr}</p>
              <h2 className="detail-next__title">
                {nextProject.title.split(' ').map((word, i, arr) =>
                  i === arr.length - 1
                    ? <em key={i}>{word.toUpperCase()}</em>
                    : <span key={i}>{word.toUpperCase()} </span>
                )}
              </h2>
              <p className="detail-next__meta">
                {nextProject.category} · {nextProject.year} · {nextProject.location}
              </p>
              <div className="detail-next__actions">
                <Link to={`/projects/${nextProject.id}`} className="detail-next__btn">{t('next.viewBtn')}</Link>
                <Link to="/projects" className="detail-next__all">{t('next.allBtn')}</Link>
              </div>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="detail-next__right">
              <img src={nextProject.image} alt={nextProject.title} className="detail-next__img" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="detail-cta">
        <Reveal>
          <div className="detail-cta__inner">
            <p className="detail-cta__label">{t('cta.label')}</p>
            <h2 className="detail-cta__heading">{t('cta.headingPre')} <em>{t('cta.headingEm')}</em> {t('cta.headingSuf')}</h2>
            <p className="detail-cta__body">{t('cta.body')}</p>
            <Link to="/contact" className="detail-cta__btn">{t('cta.btn')}</Link>
          </div>
        </Reveal>
      </section>

      <Footer />
    </>
  )
}
