import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    space: '',
    date: '',
    share: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (form.name && form.email && form.phone && form.message) {
      setSubmitted(true)
      setTimeout(() => {
        setForm({
          name: '',
          email: '',
          phone: '',
          space: '',
          date: '',
          share: '',
          message: ''
        })
        setSubmitted(false)
      }, 3000)
    }
  }

  return (
    <section
      id="contact"
      style={{
        background: '#FFFFFF',
        padding: '100px 0 120px',
        color: '#000000',
        fontFamily: 'var(--font-body)',
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 24px',
        }}
      >
        {/* Header Block */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            flexWrap: 'wrap',
            gap: '24px',
            marginBottom: '60px',
          }}
        >
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(36px, 5vw, 56px)',
              fontWeight: 800,
              color: '#000000',
              margin: 0,
              letterSpacing: '-0.03em',
            }}
          >
            Contact Us
          </h2>
          <p
            style={{
              fontSize: '15px',
              lineHeight: 1.6,
              color: '#666666',
              maxWidth: '360px',
              margin: 0,
            }}
          >
            Tell us when and where you'd like to go and we'll confirm availability within 24 hours.
          </p>
        </div>

        {/* Content Block */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '40px',
            marginBottom: '80px',
          }}
        >
          {/* Left Column: Form */}
          <div style={{ flex: '1 1 600px' }}>
            {submitted ? (
              <div
                style={{
                  background: '#F4F4F5',
                  borderRadius: '24px',
                  padding: '60px 40px',
                  textAlign: 'center',
                }}
              >
                <div
                  style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: '50%',
                    background: 'rgba(59, 130, 246, 0.1)',
                    color: '#3B82F6',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 24px',
                  }}
                >
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '24px', fontWeight: '700', marginBottom: '12px' }}>
                  Request Received!
                </h3>
                <p style={{ color: '#666666', fontSize: '15px', lineHeight: 1.5, maxWidth: '340px', margin: '0 auto' }}>
                  Thank you for submitting your request. We will review your tour preference and contact you in 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                    gap: '24px',
                  }}
                >
                  {/* Name */}
                  <div>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: '#666666', marginBottom: '8px' }}>
                      Name
                    </label>
                    <input
                      type="text"
                      placeholder="Your full name"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '14px 16px',
                        background: '#F4F4F5',
                        border: '1px solid transparent',
                        borderRadius: '12px',
                        color: '#000000',
                        fontSize: '14px',
                        outline: 'none',
                        transition: 'all 0.2s',
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = '#3B82F6'
                        e.target.style.background = '#FFFFFF'
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = 'transparent'
                        e.target.style.background = '#F4F4F5'
                      }}
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: '#666666', marginBottom: '8px' }}>
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="you@example.com"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '14px 16px',
                        background: '#F4F4F5',
                        border: '1px solid transparent',
                        borderRadius: '12px',
                        color: '#000000',
                        fontSize: '14px',
                        outline: 'none',
                        transition: 'all 0.2s',
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = '#3B82F6'
                        e.target.style.background = '#FFFFFF'
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = 'transparent'
                        e.target.style.background = '#F4F4F5'
                      }}
                    />
                  </div>

                  {/* Phone Number */}
                  <div>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: '#666666', marginBottom: '8px' }}>
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      placeholder="+966 55 123 4567"
                      required
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '14px 16px',
                        background: '#F4F4F5',
                        border: '1px solid transparent',
                        borderRadius: '12px',
                        color: '#000000',
                        fontSize: '14px',
                        outline: 'none',
                        transition: 'all 0.2s',
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = '#3B82F6'
                        e.target.style.background = '#FFFFFF'
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = 'transparent'
                        e.target.style.background = '#F4F4F5'
                      }}
                    />
                  </div>

                  {/* Select Your Tour */}
                  <div>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: '#666666', marginBottom: '8px' }}>
                      Select Your Tour
                    </label>
                    <select
                      value={form.space}
                      onChange={(e) => setForm({ ...form, space: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '14px 16px',
                        background: '#F4F4F5',
                        border: '1px solid transparent',
                        borderRadius: '12px',
                        color: '#000000',
                        fontSize: '14px',
                        outline: 'none',
                        appearance: 'none',
                        backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23666666' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><polyline points='6 9 12 15 18 9'></polyline></svg>")`,
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'right 16px center',
                        backgroundSize: '16px',
                        transition: 'all 0.2s',
                        cursor: 'pointer',
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = '#3B82F6'
                        e.target.style.background = '#FFFFFF'
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = 'transparent'
                        e.target.style.background = '#F4F4F5'
                      }}
                    >
                      <option value="">Choose your tour...</option>
                      <option value="Lakeside Lodge">Lakeside Lodge (Switzerland)</option>
                      <option value="Lumina Penthouse">Lumina Penthouse (New York)</option>
                      <option value="Alpine Retreat">Alpine Retreat (Austria)</option>
                      <option value="Sands Villa">Sands Villa (Dubai)</option>
                    </select>
                  </div>

                  {/* Preferred Date */}
                  <div>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: '#666666', marginBottom: '8px' }}>
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      value={form.date}
                      onChange={(e) => setForm({ ...form, date: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '14px 16px',
                        background: '#F4F4F5',
                        border: '1px solid transparent',
                        borderRadius: '12px',
                        color: '#000000',
                        fontSize: '14px',
                        outline: 'none',
                        transition: 'all 0.2s',
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = '#3B82F6'
                        e.target.style.background = '#FFFFFF'
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = 'transparent'
                        e.target.style.background = '#F4F4F5'
                      }}
                    />
                  </div>

                  {/* Number of Travelers */}
                  <div>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: '#666666', marginBottom: '8px' }}>
                      Number of Travelers
                    </label>
                    <input
                      type="text"
                      placeholder="2 adults, 1 child"
                      value={form.share}
                      onChange={(e) => setForm({ ...form, share: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '14px 16px',
                        background: '#F4F4F5',
                        border: '1px solid transparent',
                        borderRadius: '12px',
                        color: '#000000',
                        fontSize: '14px',
                        outline: 'none',
                        transition: 'all 0.2s',
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = '#3B82F6'
                        e.target.style.background = '#FFFFFF'
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = 'transparent'
                        e.target.style.background = '#F4F4F5'
                      }}
                    />
                  </div>
                </div>

                {/* Message / Special Requests */}
                <div>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: '#666666', marginBottom: '8px' }}>
                    Message / Special Requests
                  </label>
                  <textarea
                    rows="4"
                    placeholder="Anything else we should know?"
                    required
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '14px 16px',
                      background: '#F4F4F5',
                      border: '1px solid transparent',
                      borderRadius: '12px',
                      color: '#000000',
                      fontSize: '14px',
                      outline: 'none',
                      resize: 'none',
                      transition: 'all 0.2s',
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = '#3B82F6'
                      e.target.style.background = '#FFFFFF'
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = 'transparent'
                      e.target.style.background = '#F4F4F5'
                    }}
                  />
                </div>

                {/* Submit Row: Oval button + Arrow Button */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <button
                    type="submit"
                    style={{
                      background: '#111111',
                      color: '#FFFFFF',
                      border: 'none',
                      borderRadius: '99px',
                      padding: '14px 28px',
                      fontSize: '14px',
                      fontWeight: '600',
                      cursor: 'pointer',
                      transition: 'all 0.25s',
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.background = '#3B82F6'
                      e.target.style.transform = 'scale(1.02)'
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.background = '#111111'
                      e.target.style.transform = 'scale(1)'
                    }}
                  >
                    Reserve Your Spot
                  </button>

                  <button
                    type="submit"
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '50%',
                      background: '#111111',
                      border: 'none',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#FFFFFF',
                      cursor: 'pointer',
                      transition: 'all 0.25s',
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.background = '#3B82F6'
                      e.target.style.transform = 'scale(1.06)'
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.background = '#111111'
                      e.target.style.transform = 'scale(1)'
                    }}
                    aria-label="Submit Form"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="7" y1="17" x2="17" y2="7" />
                      <polyline points="7 7 17 7 17 17" />
                    </svg>
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Right Column: Scenic Journey Card */}
          <div style={{ flex: '1 1 380px', display: 'flex', flexDirection: 'column' }}>
            <div
              style={{
                position: 'relative',
                width: '100%',
                height: '100%',
                minHeight: '480px',
                borderRadius: '24px',
                overflow: 'hidden',
                boxShadow: '0 12px 30px rgba(0,0,0,0.06)',
              }}
            >
              {/* Image */}
              <img
                src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=600&h=800&fit=crop"
                alt="Scenic Desert Road Journey"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />

              {/* Badge Overlay */}
              <div
                style={{
                  position: 'absolute',
                  top: '24px',
                  right: '24px',
                  background: 'rgba(255,255,255,0.12)',
                  backdropFilter: 'blur(8px)',
                  border: '1px solid rgba(255,255,255,0.3)',
                  padding: '8px 18px',
                  borderRadius: '99px',
                  fontSize: '12px',
                  fontWeight: '600',
                  color: '#FFFFFF',
                  letterSpacing: '0.02em',
                }}
              >
                Your Journey
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Info Details Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '40px',
            borderTop: '1px solid #E4E4E7',
            paddingTop: '60px',
          }}
        >
          {/* Call & WhatsApp */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
            <div
              style={{
                width: '48px',
                height: '48px',
                borderRadius: '50%',
                background: '#F4F4F5',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#111111',
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </div>
            <h4
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '16px',
                fontWeight: '700',
                color: '#000000',
                margin: '16px 0 8px',
              }}
            >
              Call & WhatsApp
            </h4>
            <p style={{ margin: 0, fontSize: '14px', color: '#666666', lineHeight: 1.5 }}>
              +966 55 123 4567 <br />
              +966 53 987 6543
            </p>
          </div>

          {/* Working Hours */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
            <div
              style={{
                width: '48px',
                height: '48px',
                borderRadius: '50%',
                background: '#F4F4F5',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#111111',
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
            </div>
            <h4
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '16px',
                fontWeight: '700',
                color: '#000000',
                margin: '16px 0 8px',
              }}
            >
              Working Hours
            </h4>
            <p style={{ margin: 0, fontSize: '14px', color: '#666666', lineHeight: 1.5 }}>
              Daily: 8am-5pm <br />
              Friday: Closed
            </p>
          </div>

          {/* Write to Us */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
            <div
              style={{
                width: '48px',
                height: '48px',
                borderRadius: '50%',
                background: '#F4F4F5',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#111111',
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </div>
            <h4
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '16px',
                fontWeight: '700',
                color: '#000000',
                margin: '16px 0 8px',
              }}
            >
              Write to Us
            </h4>
            <p style={{ margin: 0, fontSize: '14px', color: '#666666', lineHeight: 1.5 }}>
              info@marwa.com <br />
              booking@marwa.com
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
