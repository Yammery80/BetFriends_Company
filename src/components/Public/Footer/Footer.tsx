// ============================================================
// components/public/Footer.tsx
// ------------------------------------------------------------
// Pie global — tipografía grande "BetFriends", tres columnas
// de enlaces y línea inferior con copyright + redes sociales.
// ============================================================

import { Link } from 'react-router-dom';
import { Instagram, Twitter, Youtube, Diamond } from 'lucide-react';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      data-testid="public-footer"
      style={{
        marginTop: 120,
        borderTop: '1px solid var(--bf-border)',
        background: 'linear-gradient(180deg, transparent, rgba(0,0,0,0.55))',
        paddingTop: 80,
        paddingBottom: 40,
      }}
    >
      <div className="bf-container">
        {/* -------- Bloque superior -------- */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.6fr 1fr 1fr 1fr',
            gap: 60,
          }}
          className="bf-footer-grid"
        >
          {/* Marca */}
          <div>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 12,
                fontFamily: 'var(--bf-font-display)',
                fontSize: 42,
                fontWeight: 500,
                letterSpacing: '-0.02em',
                lineHeight: 1,
              }}
            >
              <Diamond size={22} strokeWidth={1.4} color="var(--bf-gold)" />
              Bet<em style={{ color: 'var(--bf-gold)', fontStyle: 'italic' }}>Friends</em>
            </div>
            <p
              style={{
                marginTop: 22,
                maxWidth: 360,
                color: 'var(--bf-text-dim)',
                fontSize: 15,
                lineHeight: 1.7,
              }}
            >
              Un club social donde los pronósticos se convierten en momentos
              compartidos. Elegancia deportiva, energía de casino, comunidad.
            </p>
          </div>

          <FooterColumn
            title="Explorar"
            links={[
              { to: '/', label: 'Inicio' },
              { to: '/nosotros', label: 'El proyecto' },
              { to: '/contacto', label: 'Contacto' },
              { to: '/login', label: 'Iniciar sesión' },
            ]}
          />

          <FooterColumn
            title="Comunidad"
            links={[
              { to: '/nosotros', label: 'Cómo funciona' },
              { to: '/nosotros', label: 'Retos entre amigos' },
              { to: '/nosotros', label: 'Ranking social' },
              { to: '/contacto', label: 'Soporte' },
            ]}
          />

          <FooterColumn
            title="Legal"
            links={[
              { to: '/nosotros', label: 'Términos' },
              { to: '/nosotros', label: 'Privacidad' },
              { to: '/nosotros', label: 'Juego responsable' },
              { to: '/contacto', label: 'Reportar' },
            ]}
          />
        </div>

        {/* Divider */}
        <div className="bf-divider" style={{ margin: '56px 0 28px' }} />

        {/* -------- Bloque inferior -------- */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: 16,
          }}
        >
          <p
            data-testid="footer-copyright"
            style={{ color: 'var(--bf-text-mute)', fontSize: 13 }}
          >
            © {year} BetFriends · Un proyecto académico. Todos los derechos reservados.
          </p>

          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            {[
              { Icon: Instagram, label: 'Instagram', testId: 'social-instagram' },
              { Icon: Twitter, label: 'Twitter', testId: 'social-twitter' },
              { Icon: Youtube, label: 'YouTube', testId: 'social-youtube' },
            ].map(({ Icon, label, testId }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                data-testid={testId}
                style={{
                  width: 38,
                  height: 38,
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '1px solid var(--bf-border)',
                  borderRadius: '50%',
                  color: 'var(--bf-text-dim)',
                  transition: 'all 0.3s var(--bf-ease)',
                }}
                onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => {
                  (e.currentTarget as HTMLElement).style.color = 'var(--bf-gold)';
                  (e.currentTarget as HTMLElement).style.borderColor = 'var(--bf-border-hi)';
                }}
                onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => {
                  (e.currentTarget as HTMLElement).style.color = 'var(--bf-text-dim)';
                  (e.currentTarget as HTMLElement).style.borderColor = 'var(--bf-border)';
                }}
              >
                <Icon size={15} strokeWidth={1.5} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .bf-footer-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 40px !important;
          }
        }
        @media (max-width: 560px) {
          .bf-footer-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}

/* ---------- Sub-componente: columna de links ---------- */
type FooterLink = { to: string; label: string };

function FooterColumn({ title, links }: { title: string; links: FooterLink[] }) {
  return (
    <div>
      <h4
        style={{
          fontFamily: 'var(--bf-font-body)',
          fontSize: 12,
          letterSpacing: '0.24em',
          textTransform: 'uppercase',
          color: 'var(--bf-gold)',
          marginBottom: 20,
          fontWeight: 500,
        }}
      >
        {title}
      </h4>
      <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 12 }}>
        {links.map((l) => (
          <li key={l.label}>
            <Link
              to={l.to}
              style={{
                color: 'var(--bf-text-dim)',
                fontSize: 14,
                transition: 'color 0.25s ease',
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.color = 'var(--bf-text)')
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.color = 'var(--bf-text-dim)')
              }
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
