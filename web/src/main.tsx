import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './app.tsx'
import { Toaster } from './components/ui/toaster.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Toaster />
    <App />
  </React.StrictMode>,
)
