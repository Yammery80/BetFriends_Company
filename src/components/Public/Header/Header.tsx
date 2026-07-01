// ============================================================
// components/public/Header.tsx
// ------------------------------------------------------------
// Encabezado fijo con:
//   - Marca BetFriends (Playfair Display + acento dorado)
//   - Navegación pública: Inicio · Nosotros · Contacto
//   - CTA "Iniciar sesión" (botón dorado)
//   - Menú hamburguesa para móvil
// ============================================================

import { useEffect, useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, Diamond } from 'lucide-react';

const NAV_ITEMS = [
  { to: '/', label: 'Inicio', testId: 'nav-home' },
  { to: '/nosotros', label: 'Nosotros', testId: 'nav-about' },
  { to: '/contacto', label: 'Contacto', testId: 'nav-contact' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const headerStyle: React.CSSProperties = {
    position: 'fixed',
    inset: '0 0 auto 0',
    zIndex: 50,
    borderBottom: `1px solid ${scrolled ? 'rgba(212,175,55,0.15)' : 'rgba(255,255,255,0.05)'}`,
    background: scrolled ? 'rgba(10,13,16,0.85)' : 'rgba(10,13,16,0.55)',
    backdropFilter: 'blur(22px) saturate(140%)',
    WebkitBackdropFilter: 'blur(22px) saturate(140%)',
    transition: 'all 0.35s cubic-bezier(.2,.7,.2,1)',
  };

  return (
    <header data-testid="public-header" style={headerStyle}>
      <div
        className="bf-container"
        style={{
          height: 84,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* -------- Marca -------- */}
        <Link
          to="/"
          data-testid="brand-logo"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 12,
            fontFamily: 'var(--bf-font-display)',
            fontSize: 24,
            fontWeight: 600,
            letterSpacing: '-0.01em',
          }}
        >
          <span
            aria-hidden
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: 34,
              height: 34,
              borderRadius: 6,
              border: '1px solid rgba(212,175,55,0.4)',
              background:
                'linear-gradient(140deg, rgba(212,175,55,0.15), rgba(212,175,55,0.02))',
              color: 'var(--bf-gold)',
            }}
          >
            <Diamond size={16} strokeWidth={1.5} />
          </span>
          <span>
            Bet<em style={{ color: 'var(--bf-gold)', fontStyle: 'italic', fontWeight: 500 }}>Friends</em>
          </span>
        </Link>

        {/* -------- Nav desktop -------- */}
        <nav
          data-testid="nav-desktop"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 44,
          }}
          className="bf-nav-desktop"
        >
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              data-testid={item.testId}
              style={({ isActive }: { isActive: boolean }) => ({
                fontSize: 13,
                fontWeight: 500,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: isActive ? 'var(--bf-gold)' : 'var(--bf-text-dim)',
                transition: 'color 0.25s ease',
                position: 'relative',
                paddingBottom: 6,
              })}
            >
              {({ isActive }: { isActive: boolean }) => (
                <>
                  {item.label}
                  {isActive && (
                    <span
                      style={{
                        position: 'absolute',
                        left: 0,
                        right: 0,
                        bottom: 0,
                        height: 1,
                        background: 'var(--bf-gold)',
                      }}
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* -------- CTA + móvil -------- */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <Link
            to="/login"
            data-testid="header-login-cta"
            className="bf-btn bf-btn-primary"
            style={{ padding: '11px 22px', fontSize: 12 }}
          >
            Iniciar sesión
          </Link>

          <button
            data-testid="mobile-menu-toggle"
            aria-label="Abrir menú"
            onClick={() => setOpen((v) => !v)}
            className="bf-mobile-only"
            style={{
              width: 42,
              height: 42,
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--bf-text)',
              border: '1px solid var(--bf-border)',
              borderRadius: 6,
            }}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* -------- Nav móvil -------- */}
      {open && (
        <div
          data-testid="nav-mobile"
          style={{
            borderTop: '1px solid var(--bf-border)',
            background: 'rgba(10,13,16,0.98)',
            padding: '20px 24px 28px',
          }}
        >
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              data-testid={`${item.testId}-mobile`}
              style={({ isActive }: { isActive: boolean }) => ({
                display: 'block',
                padding: '14px 0',
                fontSize: 15,
                fontWeight: 400,
                letterSpacing: '0.05em',
                color: isActive ? 'var(--bf-gold)' : 'var(--bf-text)',
                borderBottom: '1px solid rgba(255,255,255,0.05)',
              })}
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      )}

      <style>{`
        .bf-nav-desktop { display: flex; }
        .bf-mobile-only { display: none; }
        @media (max-width: 900px) {
          .bf-nav-desktop { display: none !important; }
          .bf-mobile-only { display: inline-flex !important; }
        }
      `}</style>
    </header>
  );
}
