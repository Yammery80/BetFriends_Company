// ============================================================
// pages/AboutPage.tsx · Información del proyecto (Nosotros)
// ------------------------------------------------------------
// Cuenta la historia de BetFriends. Diseño editorial con
// tipografía Playfair Display y textura esmeralda sutil.
// ============================================================

import { Link } from 'react-router-dom';
import { Handshake, ShieldCheck, HeartHandshake, Sparkles } from 'lucide-react';

const EMERALD_TEXTURE =
  'https://images.unsplash.com/photo-1557682250-33bd709cbe85?auto=format&fit=crop&w=1200&q=85';

export default function AboutPage() {
  return (
    <div data-testid="about-page">
      <AboutHero />
      <AboutStory />
      <ValuesGrid />
      <AboutTeam />
      <AboutCta />
    </div>
  );
}

/* ---------------- HERO ---------------- */
function AboutHero() {
  return (
    <section
      data-testid="about-hero"
      style={{
        position: 'relative',
        padding: '80px 0 100px',
        overflow: 'hidden',
      }}
    >
      <div
        aria-hidden
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `url(${EMERALD_TEXTURE})`,
          backgroundSize: 'cover',
          opacity: 0.16,
        }}
      />
      <div
        aria-hidden
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(180deg, rgba(10,13,16,0.6) 0%, rgba(10,13,16,0.95) 100%)',
        }}
      />
      <div className="bf-container" style={{ position: 'relative', zIndex: 1 }}>
        <span className="bf-eyebrow bf-anim-fade">El proyecto</span>
        <h1
          className="bf-display bf-anim-up bf-delay-1"
          style={{
            fontSize: 'clamp(44px, 6vw, 84px)',
            maxWidth: 900,
            marginTop: 24,
            marginBottom: 32,
          }}
        >
          Nacimos porque apostar entre amigos <em>merecía</em> algo más emocionante.
        </h1>
        <p
          className="bf-anim-up bf-delay-2"
          style={{
            fontSize: 19,
            color: 'var(--bf-text-dim)',
            maxWidth: 700,
            lineHeight: 1.75,
          }}
        >
          BetFriends es un club social de pronósticos. No es una casa de
          apuestas — es un espacio donde los amigos convierten cada evento en
          una historia compartida, sin dinero real y con toda la sofisticación
          de un salón privado.
        </p>
      </div>
    </section>
  );
}

/* ---------------- STORY ---------------- */
function AboutStory() {
  return (
    <section data-testid="about-story" style={{ padding: '80px 0' }}>
      <div className="bf-container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1.4fr',
            gap: 80,
            alignItems: 'start',
          }}
          className="bf-story-grid"
        >
          <div>
            <span className="bf-eyebrow">Nuestra visión</span>
            <h2
              className="bf-display"
              style={{ fontSize: 'clamp(30px, 4vw, 44px)', marginTop: 20 }}
            >
              La apuesta como <em>ritual social</em>.
            </h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            <p style={{ color: 'var(--bf-text-dim)', fontSize: 17, lineHeight: 1.85, textAlign: 'justify' }}>
              Los mejores momentos con amigos no siempre pasan en el círculo o
              frente a la pantalla — pasan en el debate previo, en la
              apuesta ridícula que nadie olvida, en el ganador que lo
              presumirá durante meses. <span style={{ color: 'var(--bf-text)' }}>Eso es lo que queremos amplificar</span>.
            </p>
            <p style={{ color: 'var(--bf-text-dim)', fontSize: 17, lineHeight: 1.85, textAlign: 'justify' }}>
              Diseñamos BetFriends como un club privado digital: espacio
              curado, estética premium, comunidad selectiva.<span style={{ color: 'var(--bf-text)' }}> Tú no
              apuestas contra la casa; apuestas con tu gente</span>, con sus propias reglas,
              en salas invitadas donde el único trofeo real es la reputación
              dentro del grupo.
            </p>
            <p style={{ color: 'var(--bf-text-dim)', fontSize: 17, lineHeight: 1.85, textAlign: 'justify' }}>
              Deportes, entretenimiento, competencias virales — cualquier
              cosa puede convertirse en un reto. La chispa social está en el
              pronóstico;<span style={{ color: 'var(--bf-text)' }}> la pasión está en cómo lo vives.</span>
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .bf-story-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </section>
  );
}

/* ---------------- VALUES ---------------- */
function ValuesGrid() {
  const values = [
    {
      Icon: Handshake,
      title: 'Comunidad primero',
      desc: 'Nada de bots, nada de casa. Solo tú y los círculos en los que confías.',
      testId: 'value-community',
    },
    {
      Icon: ShieldCheck,
      title: 'Juego responsable',
      desc: 'Sin dinero real. La apuesta es el gesto social, no el riesgo económico.',
      testId: 'value-responsible',
    },
    {
      Icon: Sparkles,
      title: 'Estética curada',
      desc: 'Cada pantalla se siente como un salón exclusivo: un espacio desafiante, estratégico y completamente suyo.',
      testId: 'value-design',
    },
    {
      Icon: HeartHandshake,
      title: 'Rivalidad sana',
      desc: 'Ganar o perder importa menos que la historia que quedará entre amigos.',
      testId: 'value-rivalry',
    },
  ];

  return (
    <section
      data-testid="about-values"
      style={{
        padding: '80px 0',
        borderTop: '1px solid var(--bf-border)',
        background: 'rgba(11,66,40,0.05)',
      }}
    >
      <div className="bf-container">
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <span className="bf-eyebrow" style={{ margin: '0 auto' }}>Nuestros pilares</span>
          <h2
            className="bf-display"
            style={{
              fontSize: 'clamp(30px, 4vw, 46px)',
              marginTop: 20,
              maxWidth: 700,
              marginInline: 'auto',
            }}
          >
            Cuatro principios que <em>no negociamos</em>.
          </h2>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: 20,
          }}
          className="bf-values-grid"
        >
          {values.map((v) => (
            <div
              key={v.testId}
              data-testid={v.testId}
              className="bf-card"
              style={{ padding: 32 }}
            >
              <v.Icon size={26} strokeWidth={1.3} color="var(--bf-gold)" />
              <h3
                className="bf-display"
                style={{ fontSize: 22, marginTop: 22, marginBottom: 12 }}
              >
                {v.title}
              </h3>
              <p style={{ color: 'var(--bf-text-dim)', fontSize: 14, lineHeight: 1.7 }}>
                {v.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .bf-values-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 560px) {
          .bf-values-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}

/* ---------------- TEAM / STATS ---------------- */
function AboutTeam() {
  return (
    <section data-testid="about-team" style={{ padding: '100px 0' }}>
      <div className="bf-container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.2fr 1fr',
            gap: 60,
            alignItems: 'center',
          }}
          className="bf-team-grid"
        >
          <div>
            <span className="bf-eyebrow">El equipo</span>
            <h2
              className="bf-display"
              style={{ fontSize: 'clamp(30px, 4vw, 48px)', marginTop: 20, marginBottom: 24 }}
            >
              Un proyecto académico con <em>ambición de club</em>.
            </h2>
            <p style={{ color: 'var(--bf-text-dim)', fontSize: 17, lineHeight: 1.85 }}>
              BetFriends nace como proyecto universitario, pero está pensado y
              construido con estándares reales: arquitectura modular,
              diseño intencional y una obsesión por los detalles. Un equipo
              selecto, muchas conversaciones a la 1 am y la convicción de que
              apostar entre amigos merece ser llevado a otro nivel.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 16,
            }}
          >
            {[
              { k: '4', v: 'Integrantes' },
              { k: '2026', v: 'Año de lanzamiento' },
              { k: '∞', v: 'Cafés bebidos' },
              { k: '01', v: 'Sueño compartido' },
            ].map((s) => (
              <div
                key={s.v}
                className="bf-card"
                style={{ padding: 24, textAlign: 'left' }}
              >
                <div
                  className="bf-display"
                  style={{ fontSize: 42, color: 'var(--bf-gold)' }}
                >
                  {s.k}
                </div>
                <div
                  style={{
                    marginTop: 4,
                    fontSize: 12,
                    color: 'var(--bf-text-dim)',
                    letterSpacing: '0.16em',
                    textTransform: 'uppercase',
                  }}
                >
                  {s.v}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .bf-team-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </section>
  );
}

/* ---------------- ABOUT CTA ---------------- */
function AboutCta() {
  return (
    <section style={{ padding: '20px 0 100px' }}>
      <div className="bf-container">
        <div
          className="bf-card"
          style={{
            padding: '60px 40px',
            textAlign: 'center',
            border: '1px solid var(--bf-border-hi)',
            background: 'linear-gradient(140deg, rgba(88,28,135,0.15), rgba(88,28,135,0.04))',
          }}
        >
          <h3
            className="bf-display"
            style={{ fontSize: 'clamp(24px, 3.4vw, 36px)', marginBottom: 24 }}
          >
            ¿Quieres que trabajemos contigo?
          </h3>
          <p
            style={{
              color: 'var(--bf-text-dim)',
              maxWidth: 560,
              margin: '0 auto 32px',
              fontSize: 16,
              lineHeight: 1.7,
            }}
          >
            Escríbenos: nos encanta hablar con marcas, ligas amateurs y
            comunidades que quieren llevar su ritual social al siguiente nivel.
          </p>
          <Link to="/contacto" data-testid="about-cta" className="bf-btn bf-btn-outline">
            Contáctanos
          </Link>
        </div>
      </div>
    </section>
  );
}
