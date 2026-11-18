import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { initAuth } from './utils/authStore.js'

initAuth()

createRoot(document.getElementById('root')).render(<App />)
