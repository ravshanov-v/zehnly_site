import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ErrorBoundary from './Components/ErrorBoundary/ErrorBoundary.jsx'
import { initAuth } from './utils/authStore.js'
import { initProfileStore } from './utils/profileStore.js'

try {
  initAuth()
  initProfileStore()
} catch (error) {
  console.error('Kredorium auth initialization failed:', error)
}

createRoot(document.getElementById('root')).render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>
)
