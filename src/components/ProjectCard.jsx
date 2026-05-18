export default function ProjectCard({ category, year, title, image, href = '#' }) {
  return (
    <a href={href} className="project-card" aria-label={`View ${title}`}>
      <div className="project-card__image-wrap">
        <img src={image} alt={title} className="project-card__image" />
      </div>
      <div className="project-card__footer">
        <div className="project-card__meta">
          <span className="project-card__label">{category} · {year}</span>
          <h3 className="project-card__title">{title}</h3>
        </div>
        <span className="project-card__arrow" aria-hidden="true">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 13L13 3M13 3H5M13 3V11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
      </div>
    </a>
  )
}
