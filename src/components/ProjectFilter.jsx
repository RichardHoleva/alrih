// ProjectFilter.jsx
// Displays the filterable project grid.
// Data source priority:
//   1. Sanity CMS — shown once loaded and at least one project exists there.
//   2. Hardcoded fallback (src/data/projects.js) — shown while loading or if
//      Sanity has no published projects yet.

import { useState }             from 'react'
import { useTranslation }       from 'react-i18next'
import ProjectCard               from './ProjectCard'
import Reveal                    from './Reveal'
import { PROJECTS }              from '../data/projects'
import { useSanityProjects }     from '../hooks/useSanityProjects'
import { urlFor }                from '../lib/sanityClient'

const TABS = [
  { value: 'All',         key: 'all'         },
  { value: 'Residential', key: 'residential' },
  { value: 'Interior',    key: 'interior'    },
  { value: 'Public',      key: 'public'      },
]

export default function ProjectFilter() {
  const { t, i18n }                      = useTranslation('projects')
  const [active, setActive]              = useState('All')
  const { projects: sanityProjects }     = useSanityProjects()
  const sk                               = i18n.language === 'sk'

  // ── Normalise both data sources to the same shape ──────────────────────────
  // Sanity projects use `slug` as the URL id; hardcoded projects use their
  // numeric `id`. ProjectCard uses whatever is passed as `id` in the link href.

  const displayProjects = sanityProjects.length > 0
    // ── Sanity is the source of truth ──
    ? sanityProjects.map(p => ({
        id:       p.slug,
        title:    sk ? (p.titleSk || p.titleEn) : p.titleEn,
        category: p.category,
        year:     p.year,
        // Convert the Sanity image reference to a real URL (800 px wide)
        image:    p.coverImage ? urlFor(p.coverImage).width(800).url() : null,
      }))
    // ── Fallback to hardcoded data ──
    : PROJECTS.map(p => ({
        id:       p.id,
        title:    p.title,
        category: p.category,
        year:     p.year,
        image:    p.image,
      }))

  const visible = active === 'All'
    ? displayProjects
    : displayProjects.filter(p => p.category === active)

  return (
    <section className="projects">

      {/* ── Filter tabs ── */}
      <div className="projects__tabs">
        {TABS.map(tab => {
          const count = tab.value === 'All'
            ? displayProjects.length
            : displayProjects.filter(p => p.category === tab.value).length

          return (
            <button
              key={tab.value}
              className={`projects__tab btn ${active === tab.value ? 'projects__tab--active' : ''}`}
              onClick={() => setActive(tab.value)}
            >
              {t(`tabs.${tab.key}`).toUpperCase()}{' '}
              <span className="projects__tab-count">{count}</span>
            </button>
          )
        })}
      </div>

      {/* ── Project grid ── */}
      <div className="projects__grid">
        {visible.map((project, i) => (
          <Reveal key={project.id} delay={i * 80}>
            <ProjectCard
              id={project.id}
              category={project.category}
              year={project.year}
              title={project.title}
              image={project.image}
            />
          </Reveal>
        ))}
      </div>

    </section>
  )
}
