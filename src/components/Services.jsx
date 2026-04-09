import { motion } from 'framer-motion'

const services = [
  {
    number: '01',
    title: 'Interior Design',
    description: 'Full-scope residential and commercial interior design — from concept to completion. We craft spaces that reflect your identity.',
    features: ['Space Planning', 'Material Selection', '3D Visualization', 'Mood Boards'],
  },
  {
    number: '02',
    title: 'Architecture',
    description: 'Architectural design that pushes boundaries. Structures that stand as statements of innovation and precision.',
    features: ['Conceptual Design', 'Technical Drawings', 'Building Permits', 'Site Supervision'],
  },
  {
    number: '03',
    title: 'Project Management',
    description: "End-to-end coordination of your build. We manage timelines, budgets, and contractors — so you don't have to.",
    features: ['Budget Control', 'Timeline Management', 'Vendor Coordination', 'Quality Assurance'],
  },
  {
    number: '04',
    title: 'Custom Furniture',
    description: 'Bespoke furniture tailored to your space. Every piece is designed, prototyped, and crafted with precision.',
    features: ['Custom Pieces', 'Material Sourcing', 'Prototyping', 'Installation'],
  },
]

export default function Services() {
  return (
    <section
      id="services"
      style={{
        background: '#0A0A09',
        padding: '120px 0 140px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative glow */}
      <div
        style={{
          position: 'absolute',
          top: '-200px',
          right: '-200px',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(226,255,0,0.04) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 5vw', position: 'relative' }}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          style={{ marginBottom: '80px' }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
            <div
              style={{
                width: '40px',
                height: '2px',
                background: 'var(--color-brand-yellow)',
              }}
            />
            <span
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '14px',
                fontWeight: 600,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: 'var(--color-brand-yellow)',
              }}
            >
              What We Do
            </span>
          </div>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(36px, 5vw, 72px)',
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: '-0.03em',
              color: '#FFFFFF',
              margin: 0,
              maxWidth: '700px',
            }}
          >
            Services built for{' '}
            <span style={{ color: 'var(--color-brand-yellow)' }}>vision</span>.
          </h2>
        </motion.div>

        {/* Services List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
          {services.map((service, index) => (
            <motion.div
              key={service.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
              style={{
                borderTop: '1px solid rgba(255,255,255,0.08)',
                padding: '48px 0',
                display: 'grid',
                gridTemplateColumns: '1fr',
                gap: '24px',
                cursor: 'pointer',
                transition: 'background 0.3s ease',
              }}
              className="services-row"
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(226,255,0,0.03)'
                const num = e.currentTarget.querySelector('.service-num')
                if (num) num.style.color = 'var(--color-brand-yellow)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent'
                const num = e.currentTarget.querySelector('.service-num')
                if (num) num.style.color = '#3A3A35'
              }}
            >
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'auto 1fr',
                  gap: '32px',
                  alignItems: 'start',
                }}
              >
                {/* Number */}
                <span
                  className="service-num"
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '48px',
                    fontWeight: 800,
                    color: '#3A3A35',
                    lineHeight: 1,
                    transition: 'color 0.3s ease',
                    minWidth: '80px',
                  }}
                >
                  {service.number}
                </span>

                {/* Content */}
                <div>
                  <h3
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: 'clamp(24px, 3vw, 36px)',
                      fontWeight: 700,
                      color: '#FFFFFF',
                      margin: '0 0 12px 0',
                      letterSpacing: '-0.02em',
                    }}
                  >
                    {service.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '16px',
                      lineHeight: 1.7,
                      color: '#9A9A97',
                      margin: '0 0 24px 0',
                      maxWidth: '600px',
                    }}
                  >
                    {service.description}
                  </p>

                  {/* Feature tags */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {service.features.map((feature) => (
                      <span
                        key={feature}
                        style={{
                          fontFamily: 'var(--font-body)',
                          fontSize: '12px',
                          fontWeight: 500,
                          color: '#6B6B60',
                          background: 'rgba(255,255,255,0.05)',
                          border: '1px solid rgba(255,255,255,0.06)',
                          borderRadius: '999px',
                          padding: '6px 14px',
                          letterSpacing: '0.03em',
                        }}
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
          {/* Bottom border */}
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }} />
        </div>
      </div>
    </section>
  )
}
