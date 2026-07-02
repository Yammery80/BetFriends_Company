// ============================================================
// pages/LoginPage.tsx · Inicio de sesión (solo UI)
// ------------------------------------------------------------
// Split screen premium:
//   - Izquierda: textura esmeralda + branding editorial
//   - Derecha: formulario de login minimalista
// Sin conexión a backend — solo maquetación e interacción UI.
// ============================================================

import { useState, FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { Eye, EyeOff, ArrowRight, Sparkle, Diamond } from 'lucide-react';

const EMERALD_TEXTURE =
  'https://images.unsplash.com/photo-1601370690183-1c7796ecec61?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzMzl8MHwxfHNlYXJjaHwyfHxlbWVyYWxkJTIwZ3JlZW4lMjB2ZWx2ZXQlMjB0ZXh0dXJlfGVufDB8fHx8MTc4Mjg2Nzg1OXww&ixlib=rb-4.1.0&q=85';

export default function LoginPage() {
  const [showPass, setShowPass] = useState(false);
  const [form, setForm] = useState({ email: '', password: '' });
  const [feedback, setFeedback] = useState<string | null>(null);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setFeedback(
      'Autenticación aún no está conectada — la interfaz está lista para el backend.'
    );
    setTimeout(() => setFeedback(null), 4200);
  }

  return (
    <div
      data-testid="login-page"
      style={{
        minHeight: 'calc(100vh - 96px)',
        display: 'grid',
        gridTemplateColumns: '1.05fr 1fr',
      }}
      className="bf-login-grid"
    >
      {/* ---------- Panel izquierdo (branding) ---------- */}
      <aside
        data-testid="login-visual"
        style={{
          position: 'relative',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'flex-end',
          padding: '60px',
          minHeight: 460,
        }}
        className="bf-login-visual"
      >
        <div
          aria-hidden
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `url(${EMERALD_TEXTURE})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div
          aria-hidden
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(160deg, rgba(11,66,40,0.55) 0%, rgba(10,13,16,0.85) 55%, rgba(10,13,16,0.95) 100%)',
          }}
        />

        <div style={{ position: 'relative', zIndex: 1, maxWidth: 460 }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 10,
              padding: '6px 14px',
              border: '1px solid var(--bf-border-hi)',
              color: 'var(--bf-gold)',
              borderRadius: 999,
              fontSize: 11,
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              marginBottom: 28,
              background: 'rgba(212,175,55,0.06)',
            }}
          >
            <Sparkle size={12} strokeWidth={1.5} />
            Acceso al club
          </div>

          <h2
            className="bf-display"
            style={{ fontSize: 'clamp(34px, 4.5vw, 52px)', lineHeight: 1.05 }}
          >
            Tu círculo <em>ya está apostando</em>.
          </h2>

          <p
            style={{
              marginTop: 22,
              color: 'var(--bf-text-dim)',
              fontSize: 16,
              lineHeight: 1.75,
              maxWidth: 380,
            }}
          >
            Entra a BetFriends y encuentra tus salas privadas, retos pendientes
            y el ranking social de tu grupo.
          </p>

          <div className="bf-divider" style={{ margin: '40px 0 24px' }} />

          <p
            style={{
              color: 'var(--bf-text-mute)',
              fontSize: 13,
              letterSpacing: '0.06em',
              fontStyle: 'italic',
            }}
          >
            “Perdimos el partido, pero ganamos el meme.”
            <br />
            <span style={{ color: 'var(--bf-gold)', fontStyle: 'normal' }}>
              — Carlos, temporada 03
            </span>
          </p>
        </div>
      </aside>

      {/* ---------- Panel derecho (form) ---------- */}
      <section
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '60px 32px',
        }}
      >
        <div style={{ width: '100%', maxWidth: 420 }}>
          <Link
            to="/"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 10,
              fontFamily: 'var(--bf-font-display)',
              fontSize: 22,
              fontWeight: 500,
              marginBottom: 40,
            }}
          >
            <Diamond size={18} strokeWidth={1.4} color="var(--bf-gold)" />
            Bet<em style={{ color: 'var(--bf-gold)', fontStyle: 'italic' }}>Friends</em>
          </Link>

          <h1
            className="bf-display"
            style={{ fontSize: 36, marginBottom: 12 }}
          >
            Bienvenido de vuelta.
          </h1>
          <p style={{ color: 'var(--bf-text-dim)', marginBottom: 36, fontSize: 15 }}>
            Ingresa tus credenciales para acceder a tus salas.
          </p>

          <form
            data-testid="login-form"
            onSubmit={handleSubmit}
            style={{ display: 'flex', flexDirection: 'column', gap: 22 }}
          >
            <div>
              <label htmlFor="login-email" className="bf-label">
                Correo electrónico
              </label>
              <input
                id="login-email"
                data-testid="login-input-email"
                type="email"
                required
                placeholder="tu@correo.com"
                className="bf-input"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
            </div>

            <div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: 10,
                }}
              >
                <label htmlFor="login-password" className="bf-label" style={{ margin: 0 }}>
                  Contraseña
                </label>
                <a
                  href="#"
                  data-testid="login-forgot"
                  style={{
                    fontSize: 12,
                    color: 'var(--bf-gold)',
                    letterSpacing: '0.05em',
                  }}
                >
                  ¿Olvidaste?
                </a>
              </div>

              <div style={{ position: 'relative' }}>
                <input
                  id="login-password"
                  data-testid="login-input-password"
                  type={showPass ? 'text' : 'password'}
                  required
                  placeholder="••••••••"
                  className="bf-input"
                  value={form.password}
                  onChange={(e) => setForm({ ...form, password: e.target.value })}
                  style={{ paddingRight: 46 }}
                />
                <button
                  type="button"
                  data-testid="login-toggle-password"
                  aria-label={showPass ? 'Ocultar contraseña' : 'Mostrar contraseña'}
                  onClick={() => setShowPass((v) => !v)}
                  style={{
                    position: 'absolute',
                    right: 12,
                    top: '50%',
                    transform: 'translateY(-50%)',
                    color: 'var(--bf-text-mute)',
                    padding: 6,
                  }}
                >
                  {showPass ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            <label
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 10,
                color: 'var(--bf-text-dim)',
                fontSize: 13,
                userSelect: 'none',
                cursor: 'pointer',
              }}
            >
              <input
                type="checkbox"
                data-testid="login-remember"
                style={{
                  width: 16,
                  height: 16,
                  accentColor: 'var(--bf-gold)',
                }}
              />
              Mantener sesión iniciada en este dispositivo
            </label>

            <button
              type="submit"
              data-testid="login-submit-button"
              className="bf-btn bf-btn-primary"
              style={{ width: '100%', marginTop: 8 }}
            >
              Entrar al club
              <ArrowRight size={16} strokeWidth={1.8} />
            </button>

            {feedback && (
              <p
                data-testid="login-feedback"
                style={{
                  marginTop: 4,
                  fontSize: 13,
                  color: 'var(--bf-gold)',
                  padding: 14,
                  border: '1px solid var(--bf-border-hi)',
                  borderRadius: 8,
                  background: 'rgba(212,175,55,0.05)',
                  lineHeight: 1.5,
                }}
              >
                {feedback}
              </p>
            )}

            {/* Divider social */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 16,
                margin: '12px 0 4px',
                color: 'var(--bf-text-mute)',
                fontSize: 12,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
              }}
            >
              <span style={{ flex: 1, height: 1, background: 'var(--bf-border)' }} />
              o continuar con
              <span style={{ flex: 1, height: 1, background: 'var(--bf-border)' }} />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
              <SocialBtn label="Google" testId="social-google" />
              <SocialBtn label="Apple" testId="social-apple" />
            </div>

            <p
              style={{
                marginTop: 12,
                textAlign: 'center',
                color: 'var(--bf-text-dim)',
                fontSize: 14,
              }}
            >
              ¿Aún no eres del club?{' '}
              <Link
                to="/contacto"
                data-testid="login-signup-link"
                style={{ color: 'var(--bf-gold)' }}
              >
                Solicita acceso
              </Link>
            </p>
          </form>
        </div>
      </section>

      <style>{`
        @media (max-width: 960px) {
          .bf-login-grid {
            grid-template-columns: 1fr !important;
          }
          .bf-login-visual {
            min-height: 320px !important;
            padding: 40px !important;
          }
        }
      `}</style>
    </div>
  );
}

/* ---------- Social button ---------- */
function SocialBtn({ label, testId }: { label: string; testId: string }) {
  return (
    <button
      type="button"
      data-testid={testId}
      onClick={(e) => e.preventDefault()}
      style={{
        padding: '13px 16px',
        border: '1px solid var(--bf-border)',
        borderRadius: 6,
        color: 'var(--bf-text)',
        fontSize: 13,
        letterSpacing: '0.06em',
        background: 'rgba(255,255,255,0.02)',
        transition: 'all 0.25s ease',
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = 'var(--bf-border-hi)';
        (e.currentTarget as HTMLElement).style.color = 'var(--bf-gold)';
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = 'var(--bf-border)';
        (e.currentTarget as HTMLElement).style.color = 'var(--bf-text)';
      }}
    >
      {label}
    </button>
  );
}
