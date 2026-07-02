// ============================================================
// App.tsx · Configuración de rutas de BetFriends
// ------------------------------------------------------------
// Rutas públicas (envueltas en PublicLayout):
//   /            -> Inicio (Home)
//   /nosotros    -> Información del proyecto (About)
//   /contacto    -> Contacto
//   /login       -> Inicio de sesión (solo UI)
//
// Nota: en esta primera iteración únicamente existe el
// módulo público. Cualquier ruta desconocida redirige al Home.
// ============================================================

import PublicLayout from './layouts/PublicLayout/PublicLayout';
import HomePage from './pages/public/Home/HomePage';
import AboutPage from './pages/public/About/AboutPage';
import ContactPage from './pages/public/Contact/ContactPage';
import LoginPage from './pages/public/Login/LoginPage';
import { Routes, Route, Navigate } from 'react-router-dom';

export default function App() {
  return (
    <Routes>
      <Route element={<PublicLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/nosotros" element={<AboutPage />} />
        <Route path="/contacto" element={<ContactPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
