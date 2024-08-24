import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Inicio from "./Pages/inicio.jsx"
import Products from "./Pages/Products.jsx"
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio/>} />
        <Route path="productos" element={<Products/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
