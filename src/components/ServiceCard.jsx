export default function ServiceCard({ number, icon, title, description }) {
  return (
    <div className="service-card">
      <span className="service-card__number">{number}</span>
      <div className="service-card__icon-wrap">
        {icon && <img src={icon} alt="" className="service-card__icon" />}
      </div>
      <h3 className="service-card__title">{title}</h3>
      <p className="service-card__body">{description}</p>
    </div>
  )
}
