import { useState, useEffect } from 'react'

const projects = [
  {
    id: 1,
    location: 'Lakeside Lodge, Canada',
    flag: '🇨🇦',
    images: [
      'https://images.unsplash.com/photo-1508333706533-1ab43ecb1606?w=1000&h=800&fit=crop',
      'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1000&h=800&fit=crop',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1000&h=800&fit=crop',
      'https://images.unsplash.com/photo-1600585153490-76fb20a32601?w=1000&h=800&fit=crop'
    ]
  },
  {
    id: 2,
    location: 'Lumina Penthouse, Japan',
    flag: '🇯🇵',
    images: [
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1000&h=800&fit=crop',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1000&h=800&fit=crop',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1000&h=800&fit=crop',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1000&h=800&fit=crop'
    ]
  },
  {
    id: 3,
    location: 'Villa Serenity, Spain',
    flag: '🇪🇸',
    images: [
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1000&h=800&fit=crop',
      'https://images.unsplash.com/photo-1613977257363-707ba4b5e5c6?w=1000&h=800&fit=crop',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1000&h=800&fit=crop',
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1000&h=800&fit=crop'
    ]
  },
  {
    id: 4,
    location: 'Heritage Estate, Italy',
    flag: '🇮🇹',
    images: [
      'https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=1000&h=800&fit=crop',
      'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=1000&h=800&fit=crop',
      'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=1000&h=800&fit=crop',
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1000&h=800&fit=crop'
    ]
  },
  {
    id: 5,
    location: 'Skyline Oasis, UAE',
    flag: '🇦🇪',
    images: [
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1000&h=800&fit=crop',
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1000&h=800&fit=crop',
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1000&h=800&fit=crop',
      'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=1000&h=800&fit=crop'
    ]
  }
]

function GalleryModal({ project, onClose, isMobile }) {
  const [activePhotoIdx, setActivePhotoIdx] = useState(0)

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [])

  const nextPhoto = () => {
    setActivePhotoIdx((prev) => (prev < project.images.length - 1 ? prev + 1 : 0))
  }

  const prevPhoto = () => {
    setActivePhotoIdx((prev) => (prev > 0 ? prev - 1 : project.images.length - 1))
  }

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        background: 'rgba(10, 14, 26, 0.95)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: isMobile ? '12px' : '24px',
      }}
      onClick={onClose}
    >
      <div
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '1000px',
          background: '#FFFFFF',
          borderRadius: '24px',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
          animation: 'fadeIn 0.3s ease',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Bar */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '20px 24px',
            borderBottom: '1px solid rgba(0,0,0,0.06)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <h3
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '20px',
                fontWeight: 700,
                color: '#1A1D24',
                margin: 0,
              }}
            >
              {project.location}
            </h3>
          </div>

          <button
            onClick={onClose}
            style={{
              background: 'rgba(0,0,0,0.04)',
              border: 'none',
              borderRadius: '50%',
              width: '36px',
              height: '36px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              color: '#1A1D24',
              fontWeight: '700',
              fontSize: '16px',
              transition: 'all 0.2s',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(0,0,0,0.08)' }}
            onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(0,0,0,0.04)' }}
          >
            ✕
          </button>
        </div>

        {/* Content Body */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            padding: isMobile ? '16px' : '24px',
            gap: '20px',
          }}
        >
          {/* Main Photo Slider */}
          <div
            style={{
              position: 'relative',
              width: '100%',
              height: isMobile ? '240px' : '480px',
              borderRadius: '16px',
              overflow: 'hidden',
              background: '#000000',
            }}
          >
            <img
              src={project.images[activePhotoIdx]}
              alt={`${project.location} detail`}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />

            {/* Slider arrows */}
            <button
              onClick={prevPhoto}
              style={{
                position: 'absolute',
                left: '16px',
                top: '50%',
                transform: 'translateY(-50%)',
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                background: 'rgba(255, 255, 255, 0.9)',
                border: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
                transition: 'transform 0.2s',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-50%) scale(1.05)' }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(-50%) scale(1)' }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1A1D24" strokeWidth="2.5">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>

            <button
              onClick={nextPhoto}
              style={{
                position: 'absolute',
                right: '16px',
                top: '50%',
                transform: 'translateY(-50%)',
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                background: 'rgba(255, 255, 255, 0.9)',
                border: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
                transition: 'transform 0.2s',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-50%) scale(1.05)' }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(-50%) scale(1)' }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1A1D24" strokeWidth="2.5">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>

          {/* Thumbnail strip */}
          <div
            style={{
              display: 'flex',
              gap: '12px',
              overflowX: 'auto',
              paddingBottom: '4px',
            }}
          >
            {project.images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setActivePhotoIdx(idx)}
                style={{
                  width: '80px',
                  height: '60px',
                  borderRadius: '8px',
                  overflow: 'hidden',
                  border: idx === activePhotoIdx ? '3px solid #1A1D24' : '3px solid transparent',
                  padding: 0,
                  cursor: 'pointer',
                  flexShrink: 0,
                  transition: 'border-color 0.2s',
                }}
              >
                <img
                  src={img}
                  alt="thumbnail"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(2)
  const [openProject, setOpenProject] = useState(null)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768)
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const next = () => {
    setActiveIndex((prev) => (prev < projects.length - 1 ? prev + 1 : 0))
  }

  const prev = () => {
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : projects.length - 1))
  }

  const spacing = isMobile ? 210 : 350
  const cardWidth = isMobile ? 200 : 320
  const cardHeight = isMobile ? 290 : 480

  return (
    <section
      id="projects"
      style={{
        background: '#F8FAFC',
        padding: '80px 0 100px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '1400px',
          margin: '0 auto',
          position: 'relative',
          padding: '0 20px',
        }}
      >
        {/* Centered Vertical Rectangle Container */}
        <div
          style={{
            width: isMobile ? '100%' : '760px',
            background: '#ECF2F7',
            borderRadius: '32px',
            boxShadow: '0 8px 30px rgba(0, 0, 0, 0.02)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: isMobile ? '40px 16px 30px' : '50px 30px 40px',
            margin: '0 auto',
            position: 'relative',
            zIndex: 1,
          }}
        >
          {/* Header pill */}
          <div
            style={{
              display: 'flex',
              background: '#FFFFFF',
              border: '1px solid rgba(0,0,0,0.06)',
              color: '#5E6B7E',
              padding: '4px 12px',
              fontSize: '11px',
              fontWeight: '600',
              borderRadius: '99px',
              letterSpacing: '0.05em',
              textTransform: 'capitalize',
              fontFamily: 'var(--font-body)',
              width: 'fit-content',
              boxShadow: '0 2px 6px rgba(0,0,0,0.02)',
            }}
          >
            Featured
          </div>

          {/* Title */}
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(24px, 3vw, 34px)',
              fontWeight: 800,
              color: '#0D111A',
              marginTop: '16px',
              textAlign: 'center',
              letterSpacing: '-0.02em',
              lineHeight: 1.15,
            }}
          >
            Feature your Projects Here
          </h2>

          {/* Subtitle */}
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'clamp(12px, 1.3vw, 14px)',
              color: '#677487',
              marginTop: '8px',
              textAlign: 'center',
              maxWidth: '360px',
              lineHeight: 1.4,
            }}
          >
            Check out some of the most in-demand spaces
          </p>

          {/* Cards slider viewport in flow (between subtitle and arrows) */}
          <div
            style={{
              position: 'relative',
              width: '100%',
              height: isMobile ? '310px' : '520px',
              margin: isMobile ? '24px 0' : '40px 0',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              zIndex: 10,
            }}
          >
            {projects.map((project, index) => {
              let offset = index - activeIndex
              if (offset > 2) {
                offset -= 5
              } else if (offset < -2) {
                offset += 5
              }
              const isActive = index === activeIndex
              const absOffset = Math.abs(offset)

              return (
                <div
                  key={project.id}
                  onClick={() => {
                    if (isActive) {
                      setOpenProject(project)
                    } else {
                      setActiveIndex(index)
                    }
                  }}
                  style={{
                    position: 'absolute',
                    width: `${cardWidth}px`,
                    height: `${cardHeight}px`,
                    left: `calc(50% - ${cardWidth / 2}px)`,
                    top: `calc(50% - ${cardHeight / 2}px)`,
                    transform: `translateX(${offset * spacing}px) scale(${isActive ? 1.05 : 0.85})`,
                    zIndex: 10 - absOffset,
                    opacity: absOffset === 0 ? 1 : absOffset === 1 ? 0.85 : 0.4,
                    filter: absOffset >= 2 ? 'blur(2.5px) brightness(0.7)' : 'none',
                    transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
                    cursor: 'pointer',
                    borderRadius: '16px',
                    border: isActive ? '3px solid #FFFFFF' : 'none',
                    boxShadow: isActive
                      ? '0 20px 40px rgba(13, 17, 26, 0.12)'
                      : '0 8px 16px rgba(13, 17, 26, 0.04)',
                    overflow: 'hidden',
                  }}
                >
                  {/* Background Image (First Photo) */}
                  <img
                    src={project.images[0]}
                    alt={project.location}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      pointerEvents: 'none',
                    }}
                  />

                  {/* Location Badge (Top Left) */}
                  <div
                    style={{
                      position: 'absolute',
                      top: '12px',
                      left: '12px',
                      background: 'rgba(255, 255, 255, 0.92)',
                      backdropFilter: 'blur(4px)',
                      borderRadius: '99px',
                      padding: '4px 10px',
                      display: 'flex',
                      alignItems: 'center',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
                    }}
                  >
                    <span
                      style={{
                        fontSize: '11px',
                        fontWeight: '600',
                        color: '#1A1D24',
                        fontFamily: 'var(--font-body)',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {project.location}
                    </span>
                  </div>

                  {/* Explore Overlay when hovered (only for active card) */}
                  {isActive && (
                    <div
                      style={{
                        position: 'absolute',
                        inset: 0,
                        background: 'linear-gradient(180deg, transparent 50%, rgba(0,0,0,0.4) 100%)',
                        display: 'flex',
                        alignItems: 'flex-end',
                        justifyContent: 'center',
                        paddingBottom: '20px',
                        transition: 'opacity 0.3s',
                      }}
                    >
                      <span
                        style={{
                          fontSize: '11px',
                          color: '#FFFFFF',
                          fontWeight: '600',
                          letterSpacing: '0.05em',
                          textTransform: 'uppercase',
                          background: 'rgba(26,26,24,0.65)',
                          padding: '6px 12px',
                          borderRadius: '99px',
                          backdropFilter: 'blur(4px)',
                          boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                        }}
                      >
                        Click to view photos
                      </span>
                    </div>
                  )}
                </div>
              )
            })}
          </div>

          {/* Arrow Buttons (At the bottom of the vertical rectangle) */}
          <div style={{ display: 'flex', gap: '12px', zIndex: 30 }}>
            <button
              onClick={prev}
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '50%',
                background: '#FFFFFF',
                border: '1px solid rgba(0,0,0,0.05)',
                boxShadow: '0 4px 10px rgba(0,0,0,0.04)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.08)' }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)' }}
              aria-label="Previous Space"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4B5563" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <button
              onClick={next}
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '50%',
                background: '#FFFFFF',
                border: '1px solid rgba(0,0,0,0.05)',
                boxShadow: '0 4px 10px rgba(0,0,0,0.04)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.08)' }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)' }}
              aria-label="Next Space"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4B5563" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Gallery Modal */}
      {openProject && (
        <GalleryModal
          project={openProject}
          onClose={() => setOpenProject(null)}
          isMobile={isMobile}
        />
      )}
    </section>
  )
}
