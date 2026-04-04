import { useRef, useState, useEffect, useCallback } from 'react'

/* ---- Easing helpers ---- */
function easeOutCubic(t) {
  return 1 - Math.pow(1 - t, 3)
}

function easeInOutCubic(t) {
  return t < 0.5
    ? 4 * t * t * t
    : 1 - Math.pow(-2 * t + 2, 3) / 2
}

const BUILDING_IMAGE = '/building.png'

export default function Hero() {
  const sectionRef = useRef(null)
  const [progress, setProgress] = useState(0)

  /* ---- Scroll listener → local progress 0‑1 ---- */
  const onScroll = useCallback(() => {
    if (!sectionRef.current) return
    const rect = sectionRef.current.getBoundingClientRect()
    const sectionH = sectionRef.current.offsetHeight
    const vh = window.innerHeight
    const scrolled = Math.max(0, -rect.top)
    setProgress(Math.min(scrolled / (sectionH - vh), 1))
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [onScroll])

  /* ==========================================================
     PHASE 1  (progress 0 → 0.45)
     - Building rises from bottom & scales up
     - Initial "Design What Defines You" text is visible,
       then fades out (0 → 0.3)
     ========================================================== */
  const buildingT = Math.min(progress / 0.45, 1)
  const buildingE = easeOutCubic(buildingT)
  // translateY: 35% → -20% (shifted higher overall)
  const buildingY = 35 - buildingE * 55
  // scale: 1 → 1.45
  const buildingScale = 1 + buildingE * 0.45

  // Initial headline opacity (fades 0 → 0.25)
  const headlineT = Math.min(progress / 0.25, 1)
  const headlineOpacity = 1 - headlineT
  const headlineY = -50 * headlineT // drifts up as it fades

  /* ==========================================================
     PHASE 2  (progress 0.5 → 0.85)
     - "THD" slides up from below into centre
     - "Interior Design" follows with slight delay
     ========================================================== */
  const thdT = Math.min(Math.max((progress - 0.50) / 0.30, 0), 1)
  const thdE = easeOutCubic(thdT)
  const thdY = 140 * (1 - thdE)   // 140px → 0
  const thdOpacity = thdE

  const subT = Math.min(Math.max((progress - 0.60) / 0.25, 0), 1)
  const subE = easeOutCubic(subT)
  const subY = 90 * (1 - subE)
  const subOpacity = subE

  /* ==========================================================
     PHASE 3  (progress 0.80 → 1.0)
     - THD text transitions from outlined → solid gold
     ========================================================== */
  const solidT = Math.min(Math.max((progress - 0.80) / 0.20, 0), 1)
  const solidE = easeInOutCubic(solidT)

  /* ---- Cloud parallax: slight upward drift ---- */
  const cloudDrift = -progress * 30 // clouds drift up slightly

  return (
    <section
      ref={sectionRef}
      id="hero"
      style={{ height: '300vh', position: 'relative' }}
    >
      {/* ===== STICKY VIEWPORT ===== */}
      <div
        style={{
          position: 'sticky',
          top: 0,
          height: '100vh',
          width: '100%',
          overflow: 'hidden',
          /* Sky gradient — color-matched to the building photo's sky */
          background:
            'linear-gradient(180deg, #9CBDD6 0%, #B8CCDA 20%, #D4B8A4 40%, #DBBFA8 55%, #E4CCBA 70%, #F0DDD0 85%, #FAF9F7 100%)',
        }}
      >
        {/* ---- BUILDING IMAGE (Faded edges) ---- */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: '50%',
            width: 'min(90vw, 1000px)',
            transform: `translateX(-50%) translateY(${buildingY}%) scale(${buildingScale})`,
            transformOrigin: 'bottom center',
            zIndex: 2,
            transition: 'transform 0.06s linear',
            willChange: 'transform',
            /* Mask to completely remove top, left, and right square photo borders */
            WebkitMaskImage: 'radial-gradient(ellipse 48% 95% at 50% 100%, black 50%, transparent 100%)',
            maskImage: 'radial-gradient(ellipse 48% 95% at 50% 100%, black 50%, transparent 100%)',
          }}
        >
          <img
            src={BUILDING_IMAGE}
            alt="Luxury architectural building rising through clouds"
            style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }}
            draggable={false}
          />
        </div>

        {/* ---- MOVING BACKGROUND CLOUDS ---- */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 1, /* Behind the building */
            pointerEvents: 'none',
          }}
        >
          {/* Cloud 1 (Moves Right) */}
          <div
            style={{
              position: 'absolute',
              top: '10%',
              left: '-10%',
              width: '50vw',
              height: '30vh',
              background: 'radial-gradient(ellipse at center, rgba(255, 255, 255, 0.4) 0%, transparent 70%)',
              filter: 'blur(40px)',
              transform: `translateX(${progress * 300}px)`,
              transition: 'transform 0.1s linear',
            }}
          />
          {/* Cloud 2 (Moves Left) */}
          <div
            style={{
              position: 'absolute',
              top: '25%',
              right: '-15%',
              width: '60vw',
              height: '40vh',
              background: 'radial-gradient(ellipse at center, rgba(255, 255, 255, 0.5) 0%, transparent 70%)',
              filter: 'blur(50px)',
              transform: `translateX(${progress * -400}px)`,
              transition: 'transform 0.1s linear',
            }}
          />
          {/* Cloud 3 (Fast Moves Right) */}
          <div
            style={{
              position: 'absolute',
              top: '40%',
              left: '10%',
              width: '40vw',
              height: '25vh',
              background: 'radial-gradient(ellipse at center, rgba(230, 240, 250, 0.6) 0%, transparent 70%)',
              filter: 'blur(35px)',
              transform: `translateX(${progress * 500}px)`,
              transition: 'transform 0.1s linear',
            }}
          />
        </div>

        {/* ---- FOREGROUND REALISTIC CLOUDS ---- */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '100%',
            height: '60%',
            zIndex: 3,
            pointerEvents: 'none',
            /* Stays hidden (100% down) until progress 0.45, then rises up to 0% */
            transform: `translateY(${100 - Math.max((progress - 0.45) / 0.55, 0) * 100}%)`,
            transition: 'transform 0.1s linear',
            willChange: 'transform',
          }}
        >
          <img
            src="/horizontal_fog.png"
            alt="Foreground horizontal moving clouds"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'bottom center',
              /* Smoothly fades the top of the white bounding box into the building */
              WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 25%, black 100%)',
              maskImage: 'linear-gradient(to bottom, transparent 0%, black 25%, black 100%)',
            }}
          />
        </div>

        {/* ---- PHASE 1: INITIAL HEADLINE ---- */}
        <div
          style={{
            position: 'absolute',
            top: '10%',
            left: '50%',
            transform: `translateX(-50%) translateY(${headlineY}px)`,
            textAlign: 'center',
            zIndex: 5,
            opacity: headlineOpacity,
            width: '90%',
            maxWidth: '900px',
            pointerEvents: headlineOpacity < 0.05 ? 'none' : 'auto',
            transition: 'opacity 0.08s linear',
          }}
        >
          <h1
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(3rem, 7.5vw, 7rem)',
              fontWeight: 800,
              color: '#000000',
              letterSpacing: '-0.04em',
              lineHeight: 1.05,
              marginBottom: '24px',
            }}
          >
            Design What <br />
            Moves You
          </h1>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'clamp(14px, 1.8vw, 18px)',
              color: '#6B6B60',
              lineHeight: 1.7,
              maxWidth: '520px',
              margin: '0 auto 32px',
            }}
          >
            Expert spaces.{' '}
            <strong style={{ fontWeight: 600, color: '#1A1A18' }}>
              Real craftsmanship.
            </strong>{' '}
            A clear path to find what defines you.
          </p>
          <a
            href="#projects"
            id="hero-cta"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '14px 32px',
              borderRadius: '999px',
              background: '#000000',
              color: '#FFFFFF',
              fontFamily: 'var(--font-body)',
              fontSize: '15px',
              fontWeight: 600,
              textDecoration: 'none',
              boxShadow: '0 4px 14px rgba(0,0,0,0.1)',
            }}
          >
            Find Properties <span>→</span>
          </a>
        </div>

        {/* ---- PHASE 2 & 3: "THD" + "Interior Design" ---- */}
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -55%)',
            textAlign: 'center',
            zIndex: 4,
            pointerEvents: 'none',
          }}
        >
          {/* THD — two overlapping layers for outlined→solid transition */}
          <div style={{ position: 'relative', lineHeight: 0.85 }}>
            {/* Outlined / stroked version (always visible once faded in) */}
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(7rem, 22vw, 22rem)',
                fontWeight: 900,
                color: 'transparent',
                WebkitTextStroke: '2px rgba(255, 255, 255, 0.9)',
                letterSpacing: '-0.04em',
                lineHeight: 'inherit',
                margin: 0,
                opacity: thdOpacity * (1 - solidE),
                transform: `translateY(${thdY}px)`,
                transition: 'transform 0.06s linear',
                willChange: 'transform, opacity',
              }}
            >
              THD
            </h2>

            {/* Solid gold version (fades in over outlined) */}
            <h2
              aria-hidden="true"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(7rem, 22vw, 22rem)',
                fontWeight: 900,
                color: '#FFFFFF',
                letterSpacing: '-0.04em',
                lineHeight: 'inherit',
                margin: 0,
                position: 'absolute',
                inset: 0,
                opacity: thdOpacity * solidE,
                transform: `translateY(${thdY}px)`,
                transition: 'transform 0.06s linear',
                willChange: 'transform, opacity',
              }}
            >
              THD
            </h2>
          </div>

          {/* "Interior Design" subtitle — same overlay pattern as THD */}
          <div style={{ position: 'relative', marginTop: '4px' }}>
            <p
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1rem, 3.5vw, 2.5rem)',
                fontWeight: 600,
                letterSpacing: '0.2em',
                margin: 0,
                opacity: subOpacity * (1 - solidE),
                color: 'transparent',
                WebkitTextStroke: '1px rgba(255, 255, 255, 0.8)',
                transform: `translateY(${subY}px)`,
                transition: 'transform 0.06s linear',
                willChange: 'transform, opacity',
              }}
            >
              Interior Design
            </p>
            <p
              aria-hidden="true"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1rem, 3.5vw, 2.5rem)',
                fontWeight: 600,
                letterSpacing: '0.2em',
                margin: 0,
                position: 'absolute',
                inset: 0,
                color: '#FFFFFF',
                opacity: subOpacity * solidE,
                transform: `translateY(${subY}px)`,
                transition: 'transform 0.06s linear',
                willChange: 'transform, opacity',
              }}
            >
              Interior Design
            </p>
          </div>
        </div>

        {/* ---- Scroll indicator (visible only at start) ---- */}
        <div
          style={{
            position: 'absolute',
            bottom: '6%',
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 10,
            opacity: Math.max(0, 1 - progress * 5),
            transition: 'opacity 0.2s ease',
            pointerEvents: 'none',
          }}
        >
          <div
            style={{
              width: '24px',
              height: '40px',
              borderRadius: '12px',
              border: '2px solid rgba(26, 26, 24, 0.3)',
              display: 'flex',
              alignItems: 'flex-start',
              justifyContent: 'center',
              padding: '6px',
            }}
          >
            <div
              style={{
                width: '4px',
                height: '8px',
                borderRadius: '2px',
                background: 'rgba(26, 26, 24, 0.4)',
                animation: 'scrollBounce 1.8s ease-in-out infinite',
              }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
