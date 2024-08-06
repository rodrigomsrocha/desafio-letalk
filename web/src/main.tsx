import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './app.tsx'
import { ThemeProvider } from './components/theme-provider/index.tsx'
import { Toaster } from './components/ui/toaster.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <Toaster />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
