import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ContextState } from './store/ContextState.jsx'

createRoot(document.getElementById('root')).render(
  <ContextState>
    <App />
  </ContextState>
)
