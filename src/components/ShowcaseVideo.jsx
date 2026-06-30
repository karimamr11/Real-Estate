export default function ShowcaseVideo() {
  return (
    <section
      id="featured-showcase"
      style={{
        background: '#F8FAFC', // Light theme background matching Projects section
        padding: '100px 0 120px',
        color: '#000000',
        fontFamily: 'var(--font-body)',
        position: 'relative',
        overflow: 'hidden',
        borderTop: '1px solid #E2E8F0',
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 24px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          position: 'relative',
          zIndex: 2,
        }}
      >
        {/* Slogan Text Header */}
        <div style={{ marginBottom: '48px', maxWidth: '700px' }}>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(28px, 4vw, 44px)',
              fontWeight: 800,
              color: '#000000',
              margin: '0 0 16px 0',
              letterSpacing: '-0.02em',
              lineHeight: 1.2,
            }}
          >
            Crafting Legacies. Redefining Modern Luxury.
          </h2>
          <p
            style={{
              fontSize: 'clamp(14px, 1.5vw, 16px)',
              lineHeight: 1.6,
              color: '#666666',
              margin: 0,
            }}
          >
            Experience our premium architectural developments through this cinematic virtual tour.
          </p>
        </div>

        {/* Widescreen Video Container */}
        <div style={{ width: '100%', maxWidth: '1000px' }}>
          <div
            style={{
              position: 'relative',
              borderRadius: '24px',
              overflow: 'hidden',
              background: '#000000',
              boxShadow: '0 30px 60px -15px rgba(0, 0, 0, 0.15)',
              border: '1px solid rgba(0, 0, 0, 0.05)',
              aspectRatio: '16/9',
            }}
          >
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/PpeE86P9TnA?autoplay=1&mute=1&loop=1&playlist=PpeE86P9TnA&controls=1&showinfo=0&rel=0"
              title="Real Estate Showcase Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              style={{
                border: 'none',
                width: '100%',
                height: '100%',
                display: 'block',
              }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
