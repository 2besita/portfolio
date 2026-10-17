import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Ellen from './2besita.tsx'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
    <Ellen />
    </StrictMode>,
)
