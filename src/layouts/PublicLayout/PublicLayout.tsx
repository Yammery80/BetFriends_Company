// ============================================================
// layouts/PublicLayout.tsx
// ------------------------------------------------------------
// Layout base del módulo público. Compone:
//   - <Header /> fijo en la parte superior
//   - <Outlet />   contenido principal (página activa)
//   - <Footer />   pie con enlaces e información
// Todas las páginas listadas en App.tsx renderizan aquí.
// ============================================================

import { Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from '../../components/Public/Header/Header';


export default function PublicLayout() {
  const { pathname } = useLocation();

  // Vuelve al inicio de la página en cada cambio de ruta
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, [pathname]);

  return (
    <div
      data-testid="public-layout"
      style={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        position: 'relative',
        zIndex: 2,
      }}
    >
      <Header />
      <main
        data-testid="public-main"
        style={{ flex: 1  }}
      >
        <Outlet />
      </main>
    </div>
  );
}
