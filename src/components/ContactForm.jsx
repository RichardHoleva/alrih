import { useState, useRef, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import SuccessNotification from './SuccessNotification'

export default function ContactForm() {
  const { t } = useTranslation('contact')
  const budgetOptions = t('form.budgets', { returnObjects: true })

  const [budget, setBudget] = useState('')
  const [agreed, setAgreed] = useState(false)
  const [sent, setSent] = useState(false)
  const formRef = useRef(null)

  useEffect(() => {
    if (!sent) return
    const timer = setTimeout(() => setSent(false), 3000)
    return () => clearTimeout(timer)
  }, [sent])

  function handleSubmit(e) {
    e.preventDefault()
    setSent(true)
    formRef.current.reset()
    setBudget('')
    setAgreed(false)
  }

  return (
    <div className="contact">
      {sent && <SuccessNotification />}
      <div className="contact__form-col">
        <form className="contact__form" onSubmit={handleSubmit} ref={formRef}>

          <div className="contact__row">
            <div className="contact__field">
              <label className="contact__label">{t('form.nameLbl')}</label>
              <input className="contact__input" type="text" placeholder={t('form.namePlh')} required />
            </div>
            <div className="contact__field">
              <label className="contact__label">{t('form.emailLbl')}</label>
              <input className="contact__input" type="email" placeholder={t('form.emailPlh')} required />
            </div>
          </div>

          <div className="contact__field">
            <label className="contact__label">{t('form.serviceLbl')}</label>
            <select className="contact__select" required>
              <option value="">{t('form.servicePlh')}</option>
              <option>{t('form.serviceArch')}</option>
              <option>{t('form.serviceInterior')}</option>
              <option>{t('form.serviceConsult')}</option>
            </select>
          </div>

          <div className="contact__field">
            <label className="contact__label">{t('form.budgetLbl')}</label>
            <div className="contact__budget-grid">
              {budgetOptions.map(option => (
                <label key={option} className={`contact__budget-option ${budget === option ? 'contact__budget-option--active' : ''}`}>
                  <input
                    type="radio"
                    name="budget"
                    value={option}
                    checked={budget === option}
                    onChange={() => setBudget(option)}
                  />
                  {option}
                </label>
              ))}
            </div>
          </div>

          <div className="contact__field">
            <label className="contact__label">{t('form.msgLbl')}</label>
            <textarea className="contact__textarea" placeholder={t('form.msgPlh')} required />
          </div>

          <label className="contact__checkbox">
            <input type="checkbox" checked={agreed} onChange={e => setAgreed(e.target.checked)} />
            {t('form.privacyPre')} <a href="#">{t('form.privacyLink')}</a> {t('form.privacySuf')}
          </label>

          <div className="contact__submit-row">
            <button type="submit" className="contact__btn btn btn--primary">{t('form.submit')}</button>
            <span className="contact__alt">{t('form.altPre')} <a href="mailto:alrih@alrih.studio">alrih@alrih.studio</a></span>
          </div>

        </form>
      </div>

      <aside className="contact__sidebar">
        <div className="contact__info-block">
          <p className="contact__info-label">{t('sidebar.studioLbl')}</p>
          <p className="contact__info-text">
            <strong>{t('sidebar.studioName')}</strong><br />
            Štúrova 14<br />
            811 02 Bratislava<br />
            {t('sidebar.studioCountry')}
          </p>
        </div>

        <div className="contact__info-block">
          <p className="contact__info-label">{t('sidebar.emailLbl')}</p>
          <a href="mailto:alrih@alrih.studio" className="contact__info-text">alrih@alrih.studio</a>
        </div>

        <div className="contact__info-block">
          <p className="contact__info-label">{t('sidebar.phoneLbl')}</p>
          <p className="contact__info-text">+421 902 132 789<br />+45 90 12 89</p>
        </div>

        <div className="contact__info-block">
          <p className="contact__info-label">{t('sidebar.hoursLbl')}</p>
          <p className="contact__info-text">{t('sidebar.hoursLine1')}<br />{t('sidebar.hoursLine2')}</p>
        </div>

        <div className="contact__info-block">
          <p className="contact__info-label">{t('sidebar.findLbl')}</p>
          <iframe
            className="contact__map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2662.0!2d17.1077!3d48.1441!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476c894f0e0e0e0f%3A0x0!2zU3TDunJvdmEgMTQsIEJyYXRpc2xhdmE!5e0!3m2!1sen!2ssk!4v1"
            allowFullScreen
            loading="lazy"
            title="Studio location"
          />
        </div>
      </aside>
    </div>
  )
}
