// ============================================================
// main.tsx · Punto de entrada de la aplicación
// ------------------------------------------------------------
// Inicializa React 19 y monta <App /> dentro del div #root.
// Aquí se importan los estilos globales (index.css) que
// definen la paleta y tipografía de BetFriends.
// ============================================================

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
