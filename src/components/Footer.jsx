import { useState, useEffect } from 'react'

export default function Footer() {
  const [isMobile, setIsMobile] = useState(false)
  const [email, setEmail] = useState('')
  const [subscribed, setSubsubscribed] = useState(false)

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768)
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (email) {
      setSubsubscribed(true)
      setTimeout(() => {
        setEmail('')
        setSubsubscribed(false)
      }, 3000)
    }
  }

  return (
    <footer
      style={{
        background: 'linear-gradient(rgba(17, 17, 16, 0.45), rgba(17, 17, 16, 0.45)), url(/hero-bg.png) center/cover no-repeat', // Same background as Hero
        padding: '80px 0 40px',
        borderTop: '1px solid rgba(255,255,255,0.06)',
        color: '#FFFFFF',
        fontFamily: 'var(--font-body)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative Blur Glow */}
      <div
        style={{
          position: 'absolute',
          bottom: '-100px',
          right: '-100px',
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.03) 0%, transparent 70%)',
          borderRadius: '50%',
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          width: '100%',
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 24px',
          position: 'relative',
          zIndex: 2,
        }}
      >
        {/* Main Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '48px',
            marginBottom: '60px',
          }}
        >
          {/* Column 1: Brand Info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
              }}
            >
              <img
                src="/logo.png"
                alt="NileByte Logo"
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                }}
              />
              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '24px',
                  fontWeight: '800',
                  color: '#FFFFFF',
                  margin: 0,
                  letterSpacing: '-0.02em',
                }}
              >
                NileByte
              </h3>
            </div>
            <p
              style={{
                fontSize: '14px',
                lineHeight: '1.6',
                color: '#94A3B8',
                margin: 0,
                maxWidth: '260px',
              }}
            >
              Redefining luxury architectural spaces and global co-ownership with premium digital platforms.
            </p>
          </div>

          {/* Column 2: Navigation Links */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <h4 style={{ fontSize: '15px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#FFFFFF', margin: 0 }}>
              Navigation
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
                { label: 'Projects', href: '#projects' },
                { label: 'About', href: '#about' },
                { label: 'Contact', href: '#contact' },
              ].map((link, idx) => (
                <a
                  key={idx}
                  href={link.href}
                  style={{
                    fontSize: '14px',
                    color: '#94A3B8',
                    textDecoration: 'none',
                    transition: 'color 0.2s',
                    width: 'fit-content',
                  }}
                  onMouseEnter={(e) => { e.target.style.color = '#3B82F6' }}
                  onMouseLeave={(e) => { e.target.style.color = '#94A3B8' }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Column 3: Legal & Support */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <h4 style={{ fontSize: '15px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#FFFFFF', margin: 0 }}>
              Legal
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {['Terms of Service', 'Privacy Policy', 'Cookie Policy', 'Co-ownership FAQs'].map((label, idx) => (
                <a
                  key={idx}
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  style={{
                    fontSize: '14px',
                    color: '#94A3B8',
                    textDecoration: 'none',
                    transition: 'color 0.2s',
                    width: 'fit-content',
                  }}
                  onMouseEnter={(e) => { e.target.style.color = '#3B82F6' }}
                  onMouseLeave={(e) => { e.target.style.color = '#94A3B8' }}
                >
                  {label}
                </a>
              ))}
            </div>
          </div>

          {/* Column 4: Newsletter */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <h4 style={{ fontSize: '15px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#FFFFFF', margin: 0 }}>
              Newsletter
            </h4>
            <p style={{ fontSize: '14px', lineHeight: '1.5', color: '#94A3B8', margin: 0 }}>
              Subscribe to get notified about our latest co-ownership project openings.
            </p>

            {subscribed ? (
              <div style={{ fontSize: '13px', color: '#10B981', fontWeight: '600', paddingTop: '8px' }}>
                Thank you for subscribing!
              </div>
            ) : (
              <form onSubmit={handleSubscribe} style={{ display: 'flex', position: 'relative', marginTop: '8px' }}>
                <input
                  type="email"
                  placeholder="Your email address"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '12px 48px 12px 16px',
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '12px',
                    color: '#FFFFFF',
                    fontSize: '13px',
                    outline: 'none',
                    transition: 'all 0.25s',
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = '#3B82F6'
                    e.target.style.background = 'rgba(255,255,255,0.06)'
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = 'rgba(255,255,255,0.1)'
                    e.target.style.background = 'rgba(255, 255, 255, 0.03)'
                  }}
                />
                <button
                  type="submit"
                  style={{
                    position: 'absolute',
                    right: '6px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    width: '32px',
                    height: '32px',
                    borderRadius: '8px',
                    background: '#3B82F6',
                    border: 'none',
                    color: '#FFFFFF',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    transition: 'background 0.2s',
                  }}
                  onMouseEnter={(e) => { e.target.style.background = '#2563EB' }}
                  onMouseLeave={(e) => { e.target.style.background = '#3B82F6' }}
                  aria-label="Subscribe"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Divider Line */}
        <div style={{ height: '1px', background: 'rgba(255, 255, 255, 0.06)', marginBottom: '32px' }} />

        {/* Bottom Bar */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '16px',
            color: '#64748B',
          }}
        >
          <span>
            Powered by{' '}
            <a
              href="https://nilebyte.info"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: '#3B82F6', // NileByte in blue
                textDecoration: 'none',
                fontWeight: '600',
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) => { e.target.style.color = '#2563EB' }}
              onMouseLeave={(e) => { e.target.style.color = '#3B82F6' }}
            >
              NileByte
            </a>
          </span>
        </div>
      </div>
    </footer>
  )
}
