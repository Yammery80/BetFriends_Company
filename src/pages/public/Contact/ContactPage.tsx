// ============================================================
// pages/ContactPage.tsx · Contacto
// ------------------------------------------------------------
// Formulario elegante de contacto (solo UI, sin envío real).
// Panel izquierdo: información + canales; panel derecho: form.
// ============================================================

import { useState, FormEvent } from 'react';
import { Mail, MapPin, Phone, Send, Check } from 'lucide-react';

export default function ContactPage() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');
  const [form, setForm] = useState({
    nombre: '',
    email: '',
    asunto: '',
    mensaje: '',
  });

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus('sending');
    // Solo UI: simulamos un pequeño delay para feedback visual
    setTimeout(() => {
      setStatus('sent');
      setForm({ nombre: '', email: '', asunto: '', mensaje: '' });
      setTimeout(() => setStatus('idle'), 3500);
    }, 900);
  }

  return (
    <div data-testid="contact-page">
      {/* -------- Hero -------- */}
      <section style={{ padding: '80px 0 40px' }}>
        <div className="bf-container">
          <span className="bf-eyebrow bf-anim-fade">Contacto</span>
          <h1
            className="bf-display bf-anim-up bf-delay-1"
            style={{
              fontSize: 'clamp(42px, 6vw, 72px)',
              maxWidth: 820,
              marginTop: 22,
              marginBottom: 24,
            }}
          >
            Hablemos. La <em>casa invita</em> el primer café.
          </h1>
          <p
            className="bf-anim-up bf-delay-2"
            style={{
              maxWidth: 620,
              color: 'var(--bf-text-dim)',
              fontSize: 18,
              lineHeight: 1.7,
            }}
          >
            ¿Alianzas, prensa, soporte o una idea disparatada para el próximo
            reto? Escríbenos por el canal que prefieras.
          </p>
        </div>
      </section>

      {/* -------- Grid Info + Form -------- */}
      <section style={{ padding: '40px 0 100px' }}>
        <div className="bf-container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1.4fr',
              gap: 40,
              alignItems: 'start',
            }}
            className="bf-contact-grid"
          >
            {/* -------- Info panel -------- */}
            <aside
              className="bf-card"
              style={{ padding: 40, position: 'relative', overflow: 'hidden' }}
            >
              <div
                aria-hidden
                style={{
                  position: 'absolute',
                  top: -40,
                  right: -40,
                  width: 180,
                  height: 180,
                  borderRadius: '50%',
                  background:
                    'radial-gradient(circle, rgba(212,175,55,0.25), transparent 70%)',
                }}
              />
              <h2
                className="bf-display"
                style={{ fontSize: 28, marginBottom: 24, position: 'relative' }}
              >
                Canales directos
              </h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
                <ContactRow
                  Icon={Mail}
                  label="Escríbenos"
                  value="hola@betfriends.club"
                  testId="contact-email"
                />
                <ContactRow
                  Icon={Phone}
                  label="Llámanos"
                  value="+52 (55) 4482 · 1122"
                  testId="contact-phone"
                />
                <ContactRow
                  Icon={MapPin}
                  label="Estamos en"
                  value="Ciudad de México · Barcelona · Bogotá"
                  testId="contact-location"
                />
              </div>

              <div className="bf-divider" style={{ margin: '32px 0' }} />

              <p
                style={{
                  color: 'var(--bf-text-mute)',
                  fontSize: 13,
                  lineHeight: 1.8,
                  letterSpacing: '0.02em',
                }}
              >
                Respondemos en menos de 24 horas hábiles. Los mensajes urgentes
                pueden marcarse como tal en el asunto.
              </p>
            </aside>

            {/* -------- Form panel -------- */}
            <form
              data-testid="contact-form"
              onSubmit={handleSubmit}
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 22,
                padding: 40,
                border: '1px solid var(--bf-border)',
                borderRadius: 14,
                background: 'rgba(255,255,255,0.02)',
              }}
            >
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: 20,
                }}
                className="bf-form-two"
              >
                <Field
                  id="nombre"
                  label="Nombre"
                  placeholder="María González"
                  value={form.nombre}
                  onChange={(v) => setForm({ ...form, nombre: v })}
                  testId="contact-input-name"
                />
                <Field
                  id="email"
                  label="Correo"
                  type="email"
                  placeholder="tu@correo.com"
                  value={form.email}
                  onChange={(v) => setForm({ ...form, email: v })}
                  testId="contact-input-email"
                />
              </div>

              <Field
                id="asunto"
                label="Asunto"
                placeholder="Alianza · Prensa · Soporte"
                value={form.asunto}
                onChange={(v) => setForm({ ...form, asunto: v })}
                testId="contact-input-subject"
              />

              <div>
                <label htmlFor="mensaje" className="bf-label">
                  Mensaje
                </label>
                <textarea
                  id="mensaje"
                  data-testid="contact-input-message"
                  required
                  rows={6}
                  placeholder="Cuéntanos en qué podemos ayudarte…"
                  className="bf-input"
                  value={form.mensaje}
                  onChange={(e) => setForm({ ...form, mensaje: e.target.value })}
                  style={{ resize: 'vertical', minHeight: 140 }}
                />
              </div>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  gap: 16,
                  marginTop: 8,
                }}
              >
                <span
                  style={{
                    fontSize: 12,
                    color: 'var(--bf-text-mute)',
                    letterSpacing: '0.06em',
                  }}
                >
                  Al enviar aceptas nuestros términos y política de privacidad.
                </span>

                <button
                  type="submit"
                  data-testid="contact-submit"
                  className="bf-btn bf-btn-primary"
                  disabled={status !== 'idle'}
                  style={{
                    opacity: status === 'sending' ? 0.7 : 1,
                    minWidth: 200,
                  }}
                >
                  {status === 'idle' && (
                    <>
                      Enviar mensaje <Send size={15} strokeWidth={1.8} />
                    </>
                  )}
                  {status === 'sending' && <>Enviando…</>}
                  {status === 'sent' && (
                    <>
                      Enviado <Check size={16} strokeWidth={2} />
                    </>
                  )}
                </button>
              </div>

              {status === 'sent' && (
                <p
                  data-testid="contact-success"
                  style={{
                    marginTop: 8,
                    color: 'var(--bf-gold)',
                    fontSize: 14,
                    letterSpacing: '0.04em',
                  }}
                >
                  Recibimos tu mensaje. Te responderemos muy pronto.
                </p>
              )}
            </form>
          </div>
        </div>

        <style>{`
          @media (max-width: 960px) {
            .bf-contact-grid {
              grid-template-columns: 1fr !important;
            }
            .bf-form-two {
              grid-template-columns: 1fr !important;
            }
          }
        `}</style>
      </section>
    </div>
  );
}

/* ---------- Sub-componentes ---------- */
function ContactRow({
  Icon,
  label,
  value,
  testId,
}: {
  Icon: any;
  label: string;
  value: string;
  testId: string;
}) {
  return (
    <div
      data-testid={testId}
      style={{ display: 'flex', alignItems: 'flex-start', gap: 16 }}
    >
      <div
        style={{
          width: 42,
          height: 42,
          flexShrink: 0,
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          border: '1px solid var(--bf-border-hi)',
          borderRadius: 8,
          color: 'var(--bf-gold)',
        }}
      >
        <Icon size={16} strokeWidth={1.5} />
      </div>
      <div>
        <div
          style={{
            fontSize: 11,
            color: 'var(--bf-text-mute)',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            marginBottom: 4,
          }}
        >
          {label}
        </div>
        <div style={{ fontSize: 15, color: 'var(--bf-text)' }}>{value}</div>
      </div>
    </div>
  );
}

function Field({
  id,
  label,
  placeholder,
  value,
  onChange,
  type = 'text',
  testId,
}: {
  id: string;
  label: string;
  placeholder: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  testId: string;
}) {
  return (
    <div>
      <label htmlFor={id} className="bf-label">
        {label}
      </label>
      <input
        id={id}
        data-testid={testId}
        type={type}
        required
        placeholder={placeholder}
        className="bf-input"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
