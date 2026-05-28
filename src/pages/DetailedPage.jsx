import { useParams, Link }   from 'react-router-dom'
import { useTranslation }    from 'react-i18next'
import Navbar                from '../components/Navbar'
import Footer                from '../components/Footer'
import Reveal                from '../components/Reveal'
import { useSanityProject }  from '../hooks/useSanityProject'
import { useSanityProjects } from '../hooks/useSanityProjects'
import { urlFor }            from '../lib/sanityClient'
import NotFoundPage          from './404page'

export default function DetailedPage() {
  const { id: slug }  = useParams()
  const { t, i18n }   = useTranslation('detailed')
  const sk            = i18n.language === 'sk'

  const { project, loading }    = useSanityProject(slug)
  const { projects: allProjects } = useSanityProjects()

  if (loading) {
    return (
      <>
        <Navbar />
        <div style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <p style={{ opacity: 0.4, letterSpacing: '0.1em', fontSize: '0.85rem' }}>LOADING…</p>
        </div>
        <Footer />
      </>
    )
  }

  if (!project) return <NotFoundPage />

  const title           = sk ? (project.titleSk || project.titleEn) : project.titleEn
  const description     = sk ? (project.descriptionSk || project.descriptionEn) : project.descriptionEn
  const aboutHeadingPre = sk ? (project.aboutHeadingPreSk || project.aboutHeadingPreEn || '') : (project.aboutHeadingPreEn || '')
  const aboutHeadingEm  = sk ? (project.aboutHeadingEmSk  || project.aboutHeadingEmEn  || title) : (project.aboutHeadingEmEn || title)

  const heroUrl = project.coverImage ? urlFor(project.coverImage).width(1600).url() : null
  const gallery = (project.gallery ?? []).map(img => ({
    url: urlFor(img).width(1200).url(),
    alt: img.alt || '',
  }))

  const currentIndex = allProjects.findIndex(p => p.slug === slug)
  const nextData     = allProjects.length > 0 ? allProjects[(currentIndex + 1) % allProjects.length] : null
  const nextTitle    = nextData ? (sk ? (nextData.titleSk || nextData.titleEn) : nextData.titleEn) : null
  const nextImageUrl = nextData?.coverImage ? urlFor(nextData.coverImage).width(800).url() : null

  return (
    <>
      <Navbar />

      {/* ── Hero ── */}
      {heroUrl && (
        <section className="detail-hero">
          <img src={heroUrl} alt={title} className="detail-hero__img" />
          <div className="detail-hero__bar">
            <span className="detail-hero__label">{title.toUpperCase()}</span>
            <span className="detail-hero__scroll">{t('scroll')}</span>
          </div>
        </section>
      )}

      {/* ── Intro ── */}
      <section className="detail-intro">
        <div className="detail-intro__inner">
          <div className="detail-intro__left">
            <span className="detail-intro__back">
              <span className="detail-intro__back-line" />{t('back')}
            </span>
            <h1 className="detail-intro__title">
              {title.split(' ').map((word, i, arr) =>
                i === arr.length - 1
                  ? <em key={i}>{word}</em>
                  : <span key={i}>{word} </span>
              )}
            </h1>
            <span className="detail-intro__tag">{project.category}</span>
          </div>
          <div className="detail-intro__meta">
            {project.year && (
              <div className="detail-intro__meta-item">
                <p className="detail-intro__meta-label">{t('meta.year')}</p>
                <p className="detail-intro__meta-value">{project.year}</p>
              </div>
            )}
            {project.location && (
              <div className="detail-intro__meta-item">
                <p className="detail-intro__meta-label">{t('meta.location')}</p>
                <p className="detail-intro__meta-value">{project.location}</p>
              </div>
            )}
            {project.area && (
              <div className="detail-intro__meta-item">
                <p className="detail-intro__meta-label">{t('meta.area')}</p>
                <p className="detail-intro__meta-value">{project.area} m²</p>
              </div>
            )}
            {project.client && (
              <div className="detail-intro__meta-item">
                <p className="detail-intro__meta-label">{t('meta.client')}</p>
                <p className="detail-intro__meta-value">{project.client}</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── Gallery ── */}
      {gallery.length > 0 && (
        <section className="detail-gallery">
          <div className="detail-gallery__inner">
            <Reveal>
              <p className="detail-gallery__label">{t('gallery.label')}</p>
              <h2 className="detail-gallery__heading">
                {t('gallery.headingPre')} <em>{t('gallery.headingEm')}</em> {t('gallery.headingSuf')}
              </h2>
            </Reveal>
            <Reveal delay={80}>
              <div className="detail-gallery__top-row">
                {gallery.slice(0, 2).map((item, i) => (
                  <div key={i} className="detail-gallery__item">
                    <img src={item.url} alt={item.alt} className="detail-gallery__img" />
                    {item.alt && (
                      <p className="detail-gallery__caption">
                        <span className="detail-gallery__caption-num">{String(i + 1).padStart(2, '0')}</span>
                        {item.alt}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </Reveal>
            {gallery[2] && (
              <Reveal delay={160}>
                <div className="detail-gallery__bottom-row">
                  <div className="detail-gallery__item">
                    <img src={gallery[2].url} alt={gallery[2].alt} className="detail-gallery__img" />
                    {gallery[2].alt && (
                      <p className="detail-gallery__caption">
                        <span className="detail-gallery__caption-num">03</span>
                        {gallery[2].alt}
                      </p>
                    )}
                  </div>
                </div>
              </Reveal>
            )}
          </div>
        </section>
      )}

      {/* ── About ── */}
      {description && (
        <section className="detail-about">
          <div className="detail-about__inner">
            <Reveal>
              <div className="detail-about__left">
                <p className="detail-about__label">{t('about.label')}</p>
                <h2 className="detail-about__heading">
                  {aboutHeadingPre.trim()}{' '}<em>{aboutHeadingEm}</em>
                </h2>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="detail-about__right">
                {description.split('\n\n').map((para, i) => (
                  <p key={i} className={`detail-about__body${i === 0 ? ' detail-about__body--dropcap' : ''}`}>
                    {para}
                  </p>
                ))}
              </div>
            </Reveal>
          </div>
        </section>
      )}

      {/* ── Next Project ── */}
      {nextData && (
        <section className="detail-next">
          <div className="detail-next__inner">
            <Reveal>
              <div className="detail-next__left">
                <p className="detail-next__label">{t('next.label')}</p>
                <h2 className="detail-next__title">
                  {nextTitle.split(' ').map((word, i, arr) =>
                    i === arr.length - 1
                      ? <em key={i}>{word.toUpperCase()}</em>
                      : <span key={i}>{word.toUpperCase()} </span>
                  )}
                </h2>
                <p className="detail-next__meta">
                  {nextData.category} · {nextData.year} · {nextData.location}
                </p>
                <div className="detail-next__actions">
                  <Link to={`/projects/${nextData.slug}`} className="detail-next__btn btn btn--outline">
                    {t('next.viewBtn')}
                  </Link>
                  <Link to="/projects" className="detail-next__all">{t('next.allBtn')}</Link>
                </div>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="detail-next__right">
                {nextImageUrl && (
                  <img src={nextImageUrl} alt={nextTitle} className="detail-next__img" />
                )}
              </div>
            </Reveal>
          </div>
        </section>
      )}

      {/* ── CTA ── */}
      <section className="detail-cta">
        <Reveal>
          <div className="detail-cta__inner">
            <p className="detail-cta__label">{t('cta.label')}</p>
            <h2 className="detail-cta__heading">
              {t('cta.headingPre')} <em>{t('cta.headingEm')}</em> {t('cta.headingSuf')}
            </h2>
            <p className="detail-cta__body">{t('cta.body')}</p>
            <Link to="/contact" className="detail-cta__btn btn btn--primary">{t('cta.btn')}</Link>
          </div>
        </Reveal>
      </section>

      <Footer />
    </>
  )
}
