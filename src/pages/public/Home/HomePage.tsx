// ============================================================
// pages/HomePage.tsx · Inicio
// ------------------------------------------------------------
// Landing principal de BetFriends. Contiene:
//   1. Hero con imagen de amigos + CTAs
//   2. Barra de "stats" del club
//   3. Sección de propuesta de valor (bento grid)
//   4. Cómo funciona (3 pasos)
//   5. Testimonios / prueba social
//   6. CTA final
// ============================================================

import { Link } from 'react-router-dom';
import {
  Users,
  Trophy,
  Sparkles,
  Flame,
  ArrowUpRight,
  ArrowRight,
  Target,
  Coins,
} from 'lucide-react';

const HERO_IMG =
  'https://images.unsplash.com/photo-1775642679594-89bb4b78e26e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODF8MHwxfHNlYXJjaHwxfHxmcmllbmRzJTIwY2VsZWJyYXRpbmclMjBzcG9ydHN8ZW58MHx8fHwxNzgyODY3ODM4fDA&ixlib=rb-4.1.0&q=85';

const CARDS_IMG =
  'https://images.unsplash.com/photo-1636583133884-fbefc7ac3fb3?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1OTN8MHwxfHNlYXJjaHwyfHxjYXNpbm8lMjBjYXJkcyUyMGVsZWdhbnR8ZW58MHx8fHwxNzgyODY3ODM5fDA&ixlib=rb-4.1.0&q=85';

const EMERALD_TEXTURE =
  'https://images.unsplash.com/photo-1601370690183-1c7796ecec61?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzMzl8MHwxfHNlYXJjaHwyfHxlbWVyYWxkJTIwZ3JlZW4lMjB2ZWx2ZXQlMjB0ZXh0dXJlfGVufDB8fHx8MTc4Mjg2Nzg1OXww&ixlib=rb-4.1.0&q=85';

export default function HomePage() {
  return (
    <div data-testid="home-page">
      <HeroSection />
      <StatsBar />
      <ValueBento />
      <HowItWorks />
      <CtaFinal />
    </div>
  );
}

/* ---------------- HERO ---------------- */
function HeroSection() {
  return (
    <section
      data-testid="hero-section"
      style={{
        position: 'relative',
        minHeight: 'calc(100vh - 96px)',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
      }}
    >
      {/* Imagen de fondo */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `url(${HERO_IMG})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center right',
          filter: 'saturate(0.9)',
        }}
      />
      {/* Overlay */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(90deg, #0a0d10 0%, rgba(10,13,16,0.92) 40%, rgba(10,13,16,0.55) 70%, rgba(10,13,16,0.25) 100%),' +
            'linear-gradient(180deg, transparent 60%, #0a0d10 100%)',
        }}
      />

      <div
        className="bf-container"
        style={{ position: 'relative', zIndex: 2, paddingTop: 40, paddingBottom: 80 }}
      >
        <div style={{ maxWidth: 720 }}>
          <span className="bf-eyebrow bf-anim-fade">Club social · Apuestas premium</span>

          <h1
            className="bf-display bf-anim-up bf-delay-1"
            style={{
              fontSize: 'clamp(48px, 7vw, 96px)',
              marginTop: 22,
              marginBottom: 22,
            }}
          >
            Apuesta con tus amigos.
            <br />
            <em>Gana el respeto</em> del grupo.
          </h1>

          <p
            className="bf-anim-up bf-delay-2"
            style={{
              maxWidth: 560,
              fontSize: 18,
              color: 'var(--bf-text-dim)',
              lineHeight: 1.7,
              marginBottom: 40,
            }}
          >
            BetFriends convierte cada partido, cada trivia y cada evento en una
            competencia entre amigos. Sin bancos, sin dinero real —{' '}
            <span style={{ color: 'var(--bf-text)' }}>solo orgullo, retos y una comunidad elegante</span>.
          </p>

          <div
            className="bf-anim-up bf-delay-3"
            style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}
          >
            <Link
              to="/login"
              data-testid="hero-cta-primary"
              className="bf-btn bf-btn-primary"
            >
              Unirme al club
              <ArrowUpRight size={16} strokeWidth={1.8} />
            </Link>
            <Link
              to="/nosotros"
              data-testid="hero-cta-secondary"
              className="bf-btn bf-btn-outline"
            >
              Descubrir cómo funciona
            </Link>
          </div>

          {/* Mini info */}
          <div
            className="bf-anim-fade bf-delay-4"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 14,
              marginTop: 56,
              color: 'var(--bf-text-mute)',
              fontSize: 13,
              letterSpacing: '0.06em',
            }}
          >
            <div style={{ display: 'flex' }}>
              {['#0B4228', '#D4AF37', '#800020', '#12603a'].map((c, i) => (
                <span
                  key={i}
                  style={{
                    width: 28,
                    height: 28,
                    borderRadius: '50%',
                    background: c,
                    border: '2px solid #0a0d10',
                    marginLeft: i === 0 ? 0 : -10,
                    boxShadow: '0 4px 12px rgba(0,0,0,0.35)',
                  }}
                />
              ))}
            </div>
            <span>+2.400 amigos ya están apostando en sus círculos</span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- STATS BAR ---------------- */
function StatsBar() {
  const stats = [
    { value: '2.4K+', label: 'Miembros activos', testId: 'stat-members' },
    { value: '18K', label: 'Retos jugados', testId: 'stat-bets' },
    { value: '97%', label: 'Satisfacción social', testId: 'stat-satisfaction' },
    { value: '24/7', label: 'Comunidad en vivo', testId: 'stat-live' },
  ];

  return (
    <section
      data-testid="stats-bar"
      style={{
        borderTop: '1px solid var(--bf-border)',
        borderBottom: '1px solid var(--bf-border)',
        background: 'rgba(11,66,40,0.08)',
      }}
    >
      <div
        className="bf-container"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: 0,
          padding: '36px 24px',
        }}
      >
        {stats.map((s, i) => (
          <div
            key={s.testId}
            data-testid={s.testId}
            style={{
              textAlign: 'center',
              borderRight:
                i < stats.length - 1 ? '1px solid var(--bf-border)' : 'none',
            }}
          >
            <div
              className="bf-display"
              style={{
                fontSize: 'clamp(28px, 4vw, 44px)',
                color: 'var(--bf-gold)',
                fontWeight: 500,
              }}
            >
              {s.value}
            </div>
            <div
              style={{
                marginTop: 6,
                color: 'var(--bf-text-dim)',
                fontSize: 12,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
              }}
            >
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------------- BENTO VALUE ---------------- */
function ValueBento() {
  return (
    <section
      data-testid="value-section"
      style={{ padding: '120px 0 40px' }}
    >
      <div className="bf-container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 60,
            marginBottom: 64,
            alignItems: 'end',
          }}
          className="bf-value-header"
        >
          <div>
            <span className="bf-eyebrow">La experiencia</span>
            <h2
              className="bf-display"
              style={{
                fontSize: 'clamp(36px, 5vw, 60px)',
                marginTop: 20,
              }}
            >
              No es apostar.
              <br />
              Es <em>vivirlo</em> con tu gente.
            </h2>
          </div>
          <p style={{ color: 'var(--bf-text-dim)', fontSize: 17, lineHeight: 1.8 }}>
            BetFriends transforma cada evento en un ritual compartido. Aquí no
            se pierde dinero — se ganan historias, apodos y el derecho a
            recordárselo a tus amigos por el resto del año.
          </p>
        </div>

        {/* Bento grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(6, 1fr)',
            gridAutoRows: 'minmax(200px, auto)',
            gap: 20,
          }}
          className="bf-bento"
        >
          <BentoCard
            testId="feature-social"
            span="span 4 / span 4"
            rowSpan="span 2 / span 2"
            title="Retos entre amigos, no contra la casa"
            desc="Crea salas privadas, invita a tu círculo y compite en pronósticos únicos. Cada grupo tiene su propia liga, su propia narrativa."
            Icon={Users}
            highlight
          />
          <BentoCard
            testId="feature-community"
            span="span 2 / span 2"
            title="Ranking social"
            desc="Tu reputación en el club crece con cada pronóstico acertado."
            Icon={Trophy}
          />
          <BentoCard
            testId="feature-events"
            span="span 2 / span 2"
            title="Eventos en vivo"
            desc="Deportes, entretenimiento, política, cultura pop."
            Icon={Flame}
          />
          <BentoCard
            testId="feature-cards"
            span="span 4 / span 4"
            title="Todo tipo de retos"
            desc="Desde el clásico ganador del partido hasta apuestas de trivia, predicciones alocadas y retos personalizados."
            Icon={Sparkles}
            image={CARDS_IMG}
          />
        </div>
      </div>

      <style>{`
        @media (max-width: 960px) {
          .bf-value-header {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
          .bf-bento {
            grid-template-columns: 1fr !important;
          }
          .bf-bento > * {
            grid-column: auto !important;
            grid-row: auto !important;
          }
        }
      `}</style>
    </section>
  );
}

function BentoCard({
  testId,
  title,
  desc,
  Icon,
  span,
  rowSpan,
  image,
  highlight,
}: {
  testId: string;
  title: string;
  desc: string;
  Icon: any;
  span: string;
  rowSpan?: string;
  image?: string;
  highlight?: boolean;
}) {
  return (
    <article
      data-testid={testId}
      className="bf-card"
      style={{
        gridColumn: span,
        gridRow: rowSpan,
        padding: 32,
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        minHeight: 200,
        background: highlight
          ? 'linear-gradient(140deg, rgba(11,66,40,0.35), rgba(11,66,40,0.05))'
          : 'var(--bf-elev)',
      }}
    >
      {image && (
        <div
          aria-hidden
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `url(${image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.25,
            filter: 'saturate(0.7)',
          }}
        />
      )}
      {image && (
        <div
          aria-hidden
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(180deg, rgba(10,13,16,0.6) 0%, rgba(10,13,16,0.95) 100%)',
          }}
        />
      )}
      <div style={{ position: 'relative', zIndex: 1 }}>
        <div
          style={{
            width: 44,
            height: 44,
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: '1px solid var(--bf-border-hi)',
            borderRadius: 8,
            color: 'var(--bf-gold)',
            marginBottom: 24,
          }}
        >
          <Icon size={18} strokeWidth={1.4} />
        </div>
        <h3
          className="bf-display"
          style={{
            fontSize: highlight ? 32 : 22,
            lineHeight: 1.15,
            marginBottom: 12,
          }}
        >
          {title}
        </h3>
        <p style={{ color: 'var(--bf-text-dim)', fontSize: 15, lineHeight: 1.7 }}>{desc}</p>
      </div>
    </article>
  );
}

/* ---------------- HOW IT WORKS ---------------- */
function HowItWorks() {
  const steps = [
    {
      Icon: Users,
      title: 'Reúne tu círculo',
      desc: 'Crea una sala privada e invita a los amigos con quienes quieres competir esta temporada.',
      testId: 'step-1',
    },
    {
      Icon: Target,
      title: 'Lanzan un reto',
      desc: 'Elijan un evento —un partido, un concierto, un Óscar— y definan las reglas del pronóstico.',
      testId: 'step-2',
    },
    {
      Icon: Coins,
      title: 'Compiten y presumen',
      desc: 'El ganador se lleva puntos de reputación, badges de temporada y — sobre todo — el derecho a burlarse.',
      testId: 'step-3',
    },
  ];

  return (
    <section
      data-testid="how-it-works"
      style={{
        padding: '120px 0',
        position: 'relative',
      }}
    >
      {/* Textura esmeralda sutil */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `url(${EMERALD_TEXTURE})`,
          backgroundSize: 'cover',
          opacity: 0.12,
        }}
      />
      <div
        aria-hidden
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(180deg, #0a0d10 0%, rgba(10,13,16,0.7) 50%, #0a0d10 100%)',
        }}
      />

      <div className="bf-container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ textAlign: 'center', marginBottom: 80 }}>
          <span className="bf-eyebrow" style={{ margin: '0 auto' }}>Cómo funciona</span>
          <h2
            className="bf-display"
            style={{
              fontSize: 'clamp(34px, 4.5vw, 52px)',
              marginTop: 20,
              maxWidth: 640,
              marginInline: 'auto',
            }}
          >
            Tres pasos, <em>una comunidad</em> que crece.
          </h2>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 32,
          }}
          className="bf-steps"
        >
          {steps.map((s, i) => (
            <div
              key={s.testId}
              data-testid={s.testId}
              style={{
                padding: 36,
                border: '1px solid var(--bf-border)',
                background: 'rgba(255,255,255,0.02)',
                borderRadius: 14,
                position: 'relative',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  top: -18,
                  left: 32,
                  padding: '4px 12px',
                  background: 'var(--bf-bg)',
                  border: '1px solid var(--bf-border-hi)',
                  color: 'var(--bf-gold)',
                  fontSize: 11,
                  letterSpacing: '0.2em',
                  borderRadius: 999,
                }}
              >
                PASO {String(i + 1).padStart(2, '0')}
              </div>
              <s.Icon size={30} strokeWidth={1.3} color="var(--bf-gold)" />
              <h3
                className="bf-display"
                style={{ fontSize: 24, marginTop: 24, marginBottom: 12 }}
              >
                {s.title}
              </h3>
              <p style={{ color: 'var(--bf-text-dim)', fontSize: 15, lineHeight: 1.7 }}>
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .bf-steps {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}

/* ---------------- FINAL CTA ---------------- */
function CtaFinal() {
  return (
    <section
      data-testid="cta-final"
      style={{ padding: '40px 0 100px' }}
    >
      <div className="bf-container">
        <div
          className="bf-card"
          style={{
            padding: '80px 60px',
            textAlign: 'center',
            background:
              'linear-gradient(140deg, rgba(11,66,40,0.5), rgba(10,13,16,0.9))',
            border: '1px solid var(--bf-border-hi)',
          }}
        >
          <h2
            className="bf-display"
            style={{
              fontSize: 'clamp(32px, 5vw, 58px)',
              maxWidth: 780,
              margin: '0 auto 24px',
            }}
          >
            El primer round <em>lo pagas tú</em>.<br />
            El resto lo decide el grupo.
          </h2>
          <p
            style={{
              color: 'var(--bf-text-dim)',
              fontSize: 17,
              maxWidth: 560,
              margin: '0 auto 40px',
            }}
          >
            Registra tu cuenta y abre tu primera sala en menos de un minuto.
          </p>
          <Link
            to="/login"
            data-testid="final-cta-button"
            className="bf-btn bf-btn-primary"
          >
            Empezar ahora
            <ArrowRight size={16} strokeWidth={1.8} />
          </Link>
        </div>
      </div>
    </section>
  );
}
