import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import GamePage from './GamePage.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/game/:id" element={<GamePage />} />
        <Route path="*" element={<App />} />
      </Routes>


    </BrowserRouter>
  </StrictMode>
)
