export default function ReviewCard({ quote, name, project, initials }) {
  return (
    <div className="review-card">
      <div className="review-card__stars">
        {[...Array(5)].map((_, i) => (
          <span key={i} className="review-card__star">★</span>
        ))}
      </div>
      <p className="review-card__quote">{quote}</p>
      <div className="review-card__author">
        <div className="review-card__avatar">{initials}</div>
        <div>
          <p className="review-card__name">{name}</p>
          <p className="review-card__project">{project}</p>
        </div>
      </div>
    </div>
  )
}
