import heroImg from "/ALRICH/images/Main_hero_image.png"

export default function Hero() {
  return (
    <section className="hero">
      <img src={heroImg} alt="ALRICH architecture project" className="hero__image" />
      <div className="hero__overlay">
        <h1 className="hero__heading">
          Spaces designed <em>to live</em> well in
        </h1>
      </div>
    </section>
  )
}
