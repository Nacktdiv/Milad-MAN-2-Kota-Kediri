import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import './index.css'
import App from './App.jsx'
import { AuthProvider } from './AuthContext.jsx'
// import { AuthProvider } from './AuthContext.jsx'

createRoot(document.getElementById('root')).render(
  <HelmetProvider>
    <StrictMode>
      <AuthProvider>
        <App />
      </AuthProvider>
    </StrictMode>
  </HelmetProvider>
)
