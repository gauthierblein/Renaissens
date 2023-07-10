import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/home'
import Partners from './pages/Partners/partners'
import Prestations from './pages/Prestations/prestations'
import Login from './pages/Login/login'
import Dashboard from './pages/Dashboard/dashboard'
import Error404 from './pages/Error404'
import '../src/utils/main.css'



ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/prestations" element={<Prestations />} />
          <Route path="/partenaires" element={<Partners />} />
          <Route path="/azertyuiop123456789" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
