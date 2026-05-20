import { useTranslation } from 'react-i18next'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ProjectFilter from '../components/ProjectFilter'
import Reveal from '../components/Reveal'

export default function ProjectsPage() {
  const { t } = useTranslation('projects')

  return (
    <>
      <Navbar />
      <div className='project'>
        <Reveal>
          <div className="projects-header">
            <p className="projects-header__label">{t('header.label')}</p>
            <h1 className="projects-header__heading">
              {t('header.headingPre')} <em>{t('header.headingEm')}</em>
            </h1>
            <p className="projects-header__body">{t('header.body')}</p>
          </div>
        </Reveal>
      </div>

      <ProjectFilter />

      <Footer />
    </>
  )
}
