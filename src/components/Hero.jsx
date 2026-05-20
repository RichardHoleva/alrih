import { useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import heroImg from "/ALRICH/images/Main_hero_image.png"

export default function Hero() {
  const { t } = useTranslation('common')
  const imageRef = useRef(null)
  const textRef = useRef(null)

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      if (imageRef.current) imageRef.current.style.transform = `translateY(${y * 0.25}px)`
      if (textRef.current) textRef.current.style.transform = `translateY(${y * 0.55}px)`
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section className="hero">
      <div className="hero__overlay" ref={textRef}>
        <h1 className="hero__heading">
          {t('hero.headingPre')} <em>{t('hero.headingEm')}</em> {t('hero.headingSuf')}
        </h1>
      </div>
      <div className="hero__image-wrap" ref={imageRef}>
        <img src={heroImg} alt="ALRIH architecture project" className="hero__image" />
      </div>
    </section>
  )
}
