import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { UiProvider } from './context/UiContext'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UiProvider>
      <App />
    </UiProvider>
  </React.StrictMode>,
)
