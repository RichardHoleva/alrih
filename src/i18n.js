import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import enCommon from './languages/en/common.json'
import skCommon from './languages/sk/common.json'
import enHome from './languages/en/home.json'
import skHome from './languages/sk/home.json'
import enAbout from './languages/en/about.json'
import skAbout from './languages/sk/about.json'
import enContact from './languages/en/contact.json'
import skContact from './languages/sk/contact.json'
import enProjects from './languages/en/projects.json'
import skProjects from './languages/sk/projects.json'
import enDetailed from './languages/en/detailed.json'
import skDetailed from './languages/sk/detailed.json'

i18n.use(initReactI18next).init({
  resources: {
    en: {
      common: enCommon,
      home: enHome,
      about: enAbout,
      contact: enContact,
      projects: enProjects,
      detailed: enDetailed,
    },
    sk: {
      common: skCommon,
      home: skHome,
      about: skAbout,
      contact: skContact,
      projects: skProjects,
      detailed: skDetailed,
    },
  },
  lng: 'en',
  fallbackLng: 'en',
  interpolation: { escapeValue: false },
})

export default i18n
