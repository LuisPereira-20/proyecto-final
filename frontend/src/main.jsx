import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import * as Pages from './pages/Pages'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Pages.Inicio></Pages.Inicio>} />
        <Route path="/login" element={<Pages.Login></Pages.Login>} />
        <Route path='/registro'element={<Pages.Registro></Pages.Registro>} />
        <Route path="/producto" element={<Pages.Producto></Pages.Producto>} />
        <Route path= "/carrito" element={<Pages.Carrito></Pages.Carrito>} />
        <Route path="/compras" element={<Pages.Compras></Pages.Compras>} />
        <Route path='/recuperar_contraseña'element={<Pages.Recuperar></Pages.Recuperar>} />
        <Route path='/perfil' element={<Pages.Perfil></Pages.Perfil>} />
        <Route path='/productos' element={<Pages.Productos></Pages.Productos>} />
        <Route path='/administrador_log' element={<Pages.Administrador_log></Pages.Administrador_log>} />
        <Route path="/admin" element={<Pages.Admin></Pages.Admin>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
