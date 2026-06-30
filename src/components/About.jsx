import { useEffect, useState } from 'react'

export default function About() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024)
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const avatars = [
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=faces',
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=faces',
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=faces',
    'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=faces'
  ]



  return (
    <section
      id="about"
      style={{
        background: '#F5F7FA',
        padding: isMobile ? '60px 0 80px' : '100px 0 120px',
        color: '#111111',
        fontFamily: 'var(--font-body)',
        display: 'flex',
        flexDirection: 'column',
        gap: isMobile ? '80px' : '120px',
      }}
    >
      {/* ----------------- BLOCK 1: Trusted by 100 Million ----------------- */}
      <div
        style={{
          width: '100%',
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 24px',
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          alignItems: 'stretch',
          gap: isMobile ? '60px' : '80px',
        }}
      >
        {/* Left Side: Stats & Intro */}
        <div style={{ flex: 1.1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(32px, 4.5vw, 56px)',
              fontWeight: 800,
              lineHeight: 1.1,
              color: '#000000',
              margin: '0 0 20px 0',
              letterSpacing: '-0.03em',
            }}
          >
            Trusted by <br />
            <span style={{ fontWeight: 300, color: '#888888' }}>100 Million</span> buyers
          </h2>

          <p
            style={{
              fontSize: '15px',
              lineHeight: 1.6,
              color: '#666666',
              margin: '0 0 32px 0',
              maxWidth: '440px',
            }}
          >
            Only we connects you directly to the person that knows the most about a property for sale, the listing agent.
          </p>

          {/* Overlapping Agent Avatars */}
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '32px' }}>
            {avatars.map((url, index) => (
              <img
                key={index}
                src={url}
                alt="Agent"
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '50%',
                  border: '3px solid #FFFFFF',
                  boxShadow: '0 4px 10px rgba(0,0,0,0.08)',
                  marginLeft: index === 0 ? '0' : '-12px',
                  objectFit: 'cover',
                }}
              />
            ))}
          </div>

          {/* Stat Numbers */}
          <div style={{ display: 'flex', gap: '40px', marginTop: 'auto' }}>
            <div>
              <div style={{ fontSize: '24px', fontWeight: '800', color: '#000000' }}>100M</div>
              <div style={{ fontSize: '13px', color: '#888888', marginTop: '4px' }}>Happy buyers</div>
            </div>
            <div>
              <div style={{ fontSize: '24px', fontWeight: '800', color: '#000000' }}>40M</div>
              <div style={{ fontSize: '13px', color: '#888888', marginTop: '4px' }}>Client review</div>
            </div>
            <div>
              <div style={{ fontSize: '24px', fontWeight: '800', color: '#000000' }}>4.6</div>
              <div style={{ fontSize: '13px', color: '#888888', marginTop: '4px' }}>Positive Rating</div>
            </div>
          </div>
        </div>

        {/* Middle Column: Vertical Divider Line */}
        {!isMobile && (
          <div
            style={{
              width: '1px',
              alignSelf: 'stretch',
              background: '#000000',
              opacity: 0.15,
              margin: '0 10px',
            }}
          />
        )}

        {/* Right Side: Features/Cards List */}
        <div style={{ flex: 1.2, display: 'flex', flexDirection: 'column', gap: '24px', justifyContent: 'center' }}>
          {/* Card 1 */}
          <div
            style={{
              background: '#FFFFFF',
              border: '1px solid rgba(0,0,0,0.06)',
              borderRadius: '24px',
              padding: '24px 30px',
              display: 'flex',
              gap: '20px',
              position: 'relative',
              boxShadow: '0 4px 20px rgba(0,0,0,0.01)',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = '0 12px 30px rgba(0,0,0,0.04)'
              e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.2)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.01)'
              e.currentTarget.style.borderColor = 'rgba(0,0,0,0.06)'
            }}
          >
            {/* Blue Icon Circle */}
            <div
              style={{
                width: '46px',
                height: '46px',
                borderRadius: '50%',
                background: '#3B82F6',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              {/* Compass Icon */}
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
              </svg>
            </div>

            {/* Text details */}
            <div style={{ flex: 1, paddingRight: '40px' }}>
              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '18px',
                  fontWeight: '700',
                  color: '#000000',
                  margin: '0 0 8px 0',
                  lineHeight: 1.2,
                }}
              >
                Explore <br />
                <span style={{ fontWeight: '400', color: '#444444' }}>great neighborhoods</span>
              </h3>
              <p style={{ fontSize: '13px', lineHeight: 1.5, color: '#666666', margin: 0 }}>
                Explore video tours, in-depth research, and articles on 20,000 neighborhoods.
              </p>
            </div>

            {/* Bottom Right Arrow Button */}
            <div
              style={{
                position: 'absolute',
                bottom: '20px',
                right: '20px',
                width: '42px',
                height: '28px',
                borderRadius: '99px',
                border: '1px solid rgba(0,0,0,0.06)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: '#FFFFFF',
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#666666" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </div>
          </div>

          {/* Card 2 */}
          <div
            style={{
              background: '#FFFFFF',
              border: '1px solid rgba(0,0,0,0.06)',
              borderRadius: '24px',
              padding: '24px 30px',
              display: 'flex',
              gap: '20px',
              position: 'relative',
              boxShadow: '0 4px 20px rgba(0,0,0,0.01)',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = '0 12px 30px rgba(0,0,0,0.04)'
              e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.2)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.01)'
              e.currentTarget.style.borderColor = 'rgba(0,0,0,0.06)'
            }}
          >
            {/* Blue Icon Circle */}
            <div
              style={{
                width: '46px',
                height: '46px',
                borderRadius: '50%',
                background: '#3B82F6',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              {/* Star Icon */}
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
            </div>

            {/* Text details */}
            <div style={{ flex: 1, paddingRight: '40px' }}>
              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '18px',
                  fontWeight: '700',
                  color: '#000000',
                  margin: '0 0 8px 0',
                  lineHeight: 1.2,
                }}
              >
                Find highly <br />
                <span style={{ fontWeight: '400', color: '#444444' }}>rated best property</span>
              </h3>
              <p style={{ fontSize: '13px', lineHeight: 1.5, color: '#666666', margin: 0 }}>
                Find the very best schools with in-depth reviews and ratings from multiple experts.
              </p>
            </div>

            {/* Bottom Right Arrow Button */}
            <div
              style={{
                position: 'absolute',
                bottom: '20px',
                right: '20px',
                width: '42px',
                height: '28px',
                borderRadius: '99px',
                border: '1px solid rgba(0,0,0,0.06)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: '#FFFFFF',
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#666666" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </div>
          </div>

          {/* Card 3 */}
          <div
            style={{
              background: '#FFFFFF',
              border: '1px solid rgba(0,0,0,0.06)',
              borderRadius: '24px',
              padding: '24px 30px',
              display: 'flex',
              gap: '20px',
              position: 'relative',
              boxShadow: '0 4px 20px rgba(0,0,0,0.01)',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = '0 12px 30px rgba(0,0,0,0.04)'
              e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.2)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.01)'
              e.currentTarget.style.borderColor = 'rgba(0,0,0,0.06)'
            }}
          >
            {/* Blue Icon Circle */}
            <div
              style={{
                width: '46px',
                height: '46px',
                borderRadius: '50%',
                background: '#3B82F6',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              {/* Apartment Building Icon */}
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
                <line x1="9" y1="22" x2="9" y2="16" />
                <line x1="15" y1="22" x2="15" y2="16" />
                <line x1="9" y1="16" x2="15" y2="16" />
                <path d="M9 6h.01" />
                <path d="M15 6h.01" />
                <path d="M9 11h.01" />
                <path d="M15 11h.01" />
              </svg>
            </div>

            {/* Text details */}
            <div style={{ flex: 1, paddingRight: '40px' }}>
              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '18px',
                  fontWeight: '700',
                  color: '#000000',
                  margin: '0 0 8px 0',
                  lineHeight: 1.2,
                }}
              >
                Discover <br />
                <span style={{ fontWeight: '400', color: '#444444' }}>condo quality buildings</span>
              </h3>
              <p style={{ fontSize: '13px', lineHeight: 1.5, color: '#666666', margin: 0 }}>
                Explore video tours, in-depth research, and articles on 20,000 neighborhoods.
              </p>
            </div>

            {/* Bottom Right Arrow Button */}
            <div
              style={{
                position: 'absolute',
                bottom: '20px',
                right: '20px',
                width: '42px',
                height: '28px',
                borderRadius: '99px',
                border: '1px solid rgba(0,0,0,0.06)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: '#FFFFFF',
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#666666" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* ----------------- BLOCK 2: Developed Landmark Projects ----------------- */}
      <div
        style={{
          width: '100%',
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 24px',
          display: 'flex',
          flexDirection: 'column',
          gap: '40px',
        }}
      >
        {/* Header Section */}
        <div
          style={{
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            alignItems: isMobile ? 'flex-start' : 'center',
            gap: isMobile ? '16px' : '40px',
          }}
        >
          {/* Tag Pill on Left */}
          <div
            style={{
              padding: '6px 14px',
              background: '#EAEAEA',
              borderRadius: '99px',
              fontSize: '11px',
              fontWeight: '700',
              color: '#333333',
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
              whiteSpace: 'nowrap',
            }}
          >
            Who We Are -
          </div>

          {/* Heading */}
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(28px, 3.5vw, 44px)',
              fontWeight: 800,
              lineHeight: 1.15,
              color: '#000000',
              margin: 0,
              letterSpacing: '-0.03em',
            }}
          >
            We developed landmark <br />
            real estate projects
          </h2>
        </div>

        {/* 3-Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
            gap: '24px',
          }}
        >
          {/* Card 01: What We Do (Olive Green Dark Card) */}
          <div
            style={{
              background: '#1F2421',
              borderRadius: '32px',
              padding: '40px',
              position: 'relative',
              overflow: 'hidden',
              minHeight: '400px',
              display: 'flex',
              flexDirection: 'column',
              boxShadow: '0 8px 30px rgba(0,0,0,0.05)',
              transition: 'transform 0.3s ease',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-6px)' }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)' }}
          >
            <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.4)', fontWeight: '600' }}>01.</div>
            <div style={{ height: '1px', background: 'rgba(255,255,255,0.1)', margin: '12px 0 32px' }} />
            
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '26px', fontWeight: '800', color: '#FFFFFF', margin: '0 0 16px 0' }}>
              What we do
            </h3>
            <p style={{ fontSize: '14px', lineHeight: 1.6, color: 'rgba(255,255,255,0.7)', margin: 0 }}>
              We maintain this by ensuring transparency and professional conduct in every aspect.
            </p>

            <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center' }}>
              <span
                style={{
                  fontSize: '14px',
                  fontWeight: '600',
                  color: '#FFFFFF',
                  textDecoration: 'underline',
                  cursor: 'pointer',
                }}
              >
                Our Solutions
              </span>
            </div>

            {/* Corner Icon Button */}
            <div
              style={{
                position: 'absolute',
                bottom: '20px',
                right: '20px',
                width: '42px',
                height: '42px',
                borderRadius: '50%',
                background: '#3B82F6',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="7" y1="17" x2="17" y2="7" />
                <polyline points="7 7 17 7 17 17" />
              </svg>
            </div>
          </div>

          {/* Card 02: Our Impact (Lime Green Card with embedded architectural render at bottom) */}
          <div
            style={{
              background: '#D4E755',
              borderRadius: '32px',
              padding: '40px 40px 180px 40px', // Extra bottom padding for overlap image
              position: 'relative',
              overflow: 'hidden',
              minHeight: '400px',
              display: 'flex',
              flexDirection: 'column',
              boxShadow: '0 8px 30px rgba(0,0,0,0.05)',
              transition: 'transform 0.3s ease',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-6px)' }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)' }}
          >
            <div style={{ fontSize: '13px', color: 'rgba(31,36,33,0.4)', fontWeight: '600' }}>02.</div>
            <div style={{ height: '1px', background: 'rgba(31,36,33,0.1)', margin: '12px 0 32px' }} />

            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '26px', fontWeight: '800', color: '#1F2421', margin: '0 0 16px 0' }}>
              Our impact
            </h3>
            <p style={{ fontSize: '14px', lineHeight: 1.6, color: 'rgba(31,36,33,0.8)', margin: '0 0 20px 0' }}>
              We work with both investors and developers to create landmarks that make an impact.
            </p>

            <span
              style={{
                fontSize: '14px',
                fontWeight: '600',
                color: '#1F2421',
                textDecoration: 'underline',
                cursor: 'pointer',
              }}
            >
              See Projects
            </span>

            {/* Skyscraper Image Layer at Bottom */}
            <img
              src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=500&h=350&fit=crop"
              alt="Skyscraper Building"
              style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                width: '100%',
                height: '160px',
                objectFit: 'cover',
              }}
            />

            {/* Corner Icon Button */}
            <div
              style={{
                position: 'absolute',
                bottom: '20px',
                right: '20px',
                width: '42px',
                height: '42px',
                borderRadius: '50%',
                background: '#FFFFFF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
                zIndex: 2,
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1F2421" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="7" y1="17" x2="17" y2="7" />
                <polyline points="7 7 17 7 17 17" />
              </svg>
            </div>
          </div>

          {/* Card 03: Core Values (Full Image Card with Dark Overlay) */}
          <div
            style={{
              borderRadius: '32px',
              padding: '40px',
              position: 'relative',
              overflow: 'hidden',
              minHeight: '400px',
              display: 'flex',
              flexDirection: 'column',
              boxShadow: '0 8px 30px rgba(0,0,0,0.05)',
              transition: 'transform 0.3s ease',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-6px)' }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)' }}
          >
            {/* Background Image */}
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=600&fit=crop"
              alt="Luxury House rendering"
              style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                zIndex: 0,
              }}
            />

            {/* Dark overlay */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'rgba(31,36,33,0.72)',
                zIndex: 1,
              }}
            />

            {/* Content Container (sitting above images/overlay) */}
            <div style={{ position: 'relative', zIndex: 2, height: '100%', display: 'flex', flexDirection: 'column', flex: 1 }}>
              <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.4)', fontWeight: '600' }}>03.</div>
              <div style={{ height: '1px', background: 'rgba(255,255,255,0.1)', margin: '12px 0 32px' }} />

              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '26px', fontWeight: '800', color: '#FFFFFF', margin: '0 0 16px 0' }}>
                Core values
              </h3>
              <p style={{ fontSize: '14px', lineHeight: 1.6, color: 'rgba(255,255,255,0.7)', margin: 0 }}>
                To empower clients with cutting-edge architectural designs and sustainable build quality that enhances their living experience.
              </p>

              <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center' }}>
                <span
                  style={{
                    fontSize: '14px',
                    fontWeight: '600',
                    color: '#FFFFFF',
                    textDecoration: 'underline',
                    cursor: 'pointer',
                  }}
                >
                  Discover More
                </span>
              </div>
            </div>

            {/* Corner Icon Button */}
            <div
              style={{
                position: 'absolute',
                bottom: '20px',
                right: '20px',
                width: '42px',
                height: '42px',
                borderRadius: '50%',
                background: '#3B82F6',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 2,
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="7" y1="17" x2="17" y2="7" />
                <polyline points="7 7 17 7 17 17" />
              </svg>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
