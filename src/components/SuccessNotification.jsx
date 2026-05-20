import { useTranslation } from 'react-i18next'

export default function SuccessNotification() {
  const { t } = useTranslation('common')
  return (
    <div className="success-notification">
      <div className="success-notification__icon">
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
          <path d="M4 11.5L9 16.5L18 7" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <div>
        <p className="success-notification__title">{t('success.title')}</p>
        <p className="success-notification__body">{t('success.body')}</p>
      </div>
    </div>
  )
}
