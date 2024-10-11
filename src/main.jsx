import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './App.css'
import './index.css'
import Contextprovider from './context/context.jsx'

createRoot(document.getElementById('root')).render(
  <Contextprovider>
      <App/>
  </Contextprovider>
)
