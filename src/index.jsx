import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './views/Home/index';
import Lucas from './views/Lucas/index';
import './constants/reset.css';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/lucas" element={<Lucas />} />
      <Route path="*" element={<main><h1>Página não encontrada</h1><a href="/">Voltar ao início</a></main>} />
    </Routes>
  </BrowserRouter>,
);
