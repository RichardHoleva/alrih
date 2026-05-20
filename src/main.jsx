import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './i18n'
import './styles/global.css'
import './styles/navbar.css'
import './styles/hero.css'
import './styles/homepage.css'
import './styles/cards.css'
import './styles/about.css'
import './styles/footer.css'
import './styles/contact.css'
import './styles/projects.css'
import './styles/detailed.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
