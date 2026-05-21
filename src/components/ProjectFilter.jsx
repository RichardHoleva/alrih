import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import ProjectCard from './ProjectCard'
import Reveal from './Reveal'
import { PROJECTS } from '../data/projects'

const TABS = [
  { value: 'All',         key: 'all' },
  { value: 'Residential', key: 'residential' },
  { value: 'Interior',    key: 'interior' },
  { value: 'Public',      key: 'public' },
]

export default function ProjectFilter() {
  const { t } = useTranslation('projects')
  const [active, setActive] = useState('All')

  const visible = active === 'All'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === active)

  return (
    <section className="projects">

      <div className="projects__tabs">
        {TABS.map(tab => {
          const count = tab.value === 'All'
            ? PROJECTS.length
            : PROJECTS.filter(p => p.category === tab.value).length

          return (
            <button
              key={tab.value}
              className={`projects__tab btn ${active === tab.value ? 'projects__tab--active' : ''}`}
              onClick={() => setActive(tab.value)}
            >
              {t(`tabs.${tab.key}`).toUpperCase()} <span className="projects__tab-count">{count}</span>
            </button>
          )
        })}
      </div>

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
