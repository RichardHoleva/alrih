import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/global.css'
import './styles/navbar.css'
import './styles/hero.css'
import './styles/about.css'
import './styles/featured.css'
import './styles/services.css'
import './styles/process.css'
import './styles/reviews.css'
import './styles/footer.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
