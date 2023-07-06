import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/home'
import Partners from './pages/Partners/partners'
import Prestations from './pages/Prestations/prestations'
import Error404 from './pages/Error404'
import '../src/utils/main.css'



ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/prestations" element={<Prestations />} />
          <Route path="/partenaires" element={<Partners />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
