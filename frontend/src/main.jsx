import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Inicio from './pages/inicio.jsx'
import Productos from './pages/Productos.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="productos" element={<Productos />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
