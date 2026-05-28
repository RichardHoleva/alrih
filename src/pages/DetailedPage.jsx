// DetailedPage.jsx
// Renders the full project detail view.
//
// Routing:  /projects/:id
//
// Data source logic:
//   • If :id looks like a slug (non-numeric, e.g. "family-cottage") → fetch from Sanity.
//   • If :id is a number (e.g. "1") or matches a hardcoded id      → use hardcoded data.
//   • The hardcoded projects.js file stays as the fallback so
//     existing pages keep working while data moves to Sanity.

import { useParams, Link }    from 'react-router-dom'
import { useTranslation }     from 'react-i18next'
import Navbar                 from '../components/Navbar'
import Footer                 from '../components/Footer'
import Reveal                 from '../components/Reveal'
import { PROJECTS }           from '../data/projects'
import { useSanityProject }   from '../hooks/useSanityProject'
import { urlFor }             from '../lib/sanityClient'
import NotFoundPage           from './404page'

export default function DetailedPage() {
  const { id }       = useParams()
  const { t, i18n }  = useTranslation('detailed')
  const sk           = i18n.language === 'sk'
  const loc          = (en, skVal) => sk && skVal != null ? skVal : en

  // ── Step 1: try to find a hardcoded project first ──────────────────────────
  // Matches both numeric ids ("1", "2") and the string id ("minimalistic").
  const hardcoded = PROJECTS.find(p => String(p.id) === id)

  // ── Step 2: if no hardcoded match, fetch from Sanity by slug ───────────────
  // Passing null tells the hook to skip the network request entirely.
  const { project: sanityProject, loading } = useSanityProject(hardcoded ? null : id)

  // ── Step 3: decide what to render ──────────────────────────────────────────
  if (!hardcoded && loading) {
    // Show a minimal loading state while Sanity responds
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

  // No match in either source → 404
  if (!hardcoded && !sanityProject) return <NotFoundPage />

  // ── If this is a Sanity project, render its dedicated layout ───────────────
  if (!hardcoded && sanityProject) {
    return <SanityDetailView project={sanityProject} sk={sk} t={t} loc={loc} />
  }

  // ── Otherwise render the existing hardcoded layout (unchanged) ─────────────
  const project      = hardcoded
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
            <span className="detail-intro__back"><span className="detail-intro__back-line" />{t('back')}</span>
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
                    {loc(item.caption, item.caption_sk)}
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
                    {loc(project.gallery[2].caption, project.gallery[2].caption_sk)}
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
              <h2 className="detail-about__heading">
                {loc(project.aboutHeadingPre, project.aboutHeadingPre_sk)}<em>{loc(project.aboutHeadingEm, project.aboutHeadingEm_sk)}</em>
              </h2>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="detail-about__right">
              {loc(project.aboutBody, project.aboutBody_sk).map((para, i) => (
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
            <blockquote className="detail-quote__text">{loc(project.quote.text, project.quote_sk?.text)}</blockquote>
            <div className="detail-quote__author">
              <div className="detail-quote__avatar">{project.quote.initials}</div>
              <div>
                <p className="detail-quote__name">{project.quote.author}</p>
                <p className="detail-quote__project">{loc(project.quote.project, project.quote_sk?.project)}</p>
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
                <Link to={`/projects/${nextProject.id}`} className="detail-next__btn btn btn--outline">{t('next.viewBtn')}</Link>
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
            <Link to="/contact" className="detail-cta__btn btn btn--primary">{t('cta.btn')}</Link>
          </div>
        </Reveal>
      </section>

      <Footer />
    </>
  )
}

// ─── Sanity project detail layout ────────────────────────────────────────────
// Separate component so the main function stays readable.
// Renders all fields that exist in the Sanity schema.
// Sections that need data not yet in the schema (quote, area) are omitted.

function SanityDetailView({ project, sk, t, loc }) {
  const title       = sk ? (project.titleSk || project.titleEn) : project.titleEn
  const description = sk ? (project.descriptionSk || project.descriptionEn) : project.descriptionEn

  // About heading — pick the right language, fall back to English, then to the title
  const aboutHeadingPre = sk
    ? (project.aboutHeadingPreSk || project.aboutHeadingPreEn || '')
    : (project.aboutHeadingPreEn || '')
  const aboutHeadingEm  = sk
    ? (project.aboutHeadingEmSk  || project.aboutHeadingEmEn  || title)
    : (project.aboutHeadingEmEn  || title)

  // Convert the cover image reference to a full URL
  const heroUrl = project.coverImage
    ? urlFor(project.coverImage).width(1600).url()
    : null

  // Convert each gallery image reference to a URL
  const gallery = (project.gallery ?? []).map(img => ({
    url: urlFor(img).width(1200).url(),
    alt: img.alt || '',
  }))

  // Use the first hardcoded project as the "Next" teaser
  // (until all projects live in Sanity and next/prev is wired up there too)
  const nextProject = PROJECTS[0]

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

      {/* ── Gallery — only shown if the project has gallery images ── */}
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

      {/* ── About / Description — only shown if the project has a description ── */}
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
                {/* Split on double newline so editors can write paragraphs in Studio */}
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

      {/* ── Next Project — uses first hardcoded project as placeholder ── */}
      <section className="detail-next">
        <div className="detail-next__inner">
          <Reveal>
            <div className="detail-next__left">
              <p className="detail-next__label">{t('next.label')}</p>
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
                <Link to={`/projects/${nextProject.id}`} className="detail-next__btn btn btn--outline">
                  {t('next.viewBtn')}
                </Link>
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
