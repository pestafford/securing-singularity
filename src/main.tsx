import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import LandingPage from './pages/LandingPage'

// Apply theme before React renders to prevent flash of wrong theme.
// Default to dark (Aqua Anvil); only go light if the visitor explicitly chose it.
const stored = localStorage.getItem('theme');
if (stored === 'light') {
  document.documentElement.classList.remove('dark');
} else {
  document.documentElement.classList.add('dark');
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <LandingPage />
  </React.StrictMode>,
)
