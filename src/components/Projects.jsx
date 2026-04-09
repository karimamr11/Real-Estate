import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Villa Serenity',
    category: 'Residential',
    year: '2025',
    description: 'A minimalist lakeside retreat blending natural stone with warm timber interiors.',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop',
  },
  {
    title: 'Noir Lounge',
    category: 'Commercial',
    year: '2024',
    description: 'A bold hospitality concept fusing dark aesthetics with gold-leaf accents.',
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=600&fit=crop',
  },
  {
    title: 'The Horizon Office',
    category: 'Workspace',
    year: '2024',
    description: 'An open-plan creative studio designed for collaboration and focus.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop',
  },
  {
    title: 'Casa Lumière',
    category: 'Residential',
    year: '2023',
    description: 'A Parisian-inspired apartment where light dictates every design decision.',
    image: 'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=800&h=600&fit=crop',
  },
]

export default function Projects() {
  return (
    <section
      id="projects"
      style={{
        background: '#111110',
        padding: '120px 0 140px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Subtle grid pattern overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
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
              Selected Work
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
            }}
          >
            Projects that{' '}
            <span style={{ color: 'var(--color-brand-yellow)' }}>define</span>
            <br />
            spaces & stories.
          </h2>
        </motion.div>

        {/* Projects Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
            gap: '32px',
          }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              style={{
                position: 'relative',
                borderRadius: '16px',
                overflow: 'hidden',
                background: '#1A1A18',
                border: '1px solid rgba(255,255,255,0.06)',
                cursor: 'pointer',
                transition: 'transform 0.4s ease, border-color 0.4s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px)'
                e.currentTarget.style.borderColor = 'rgba(226, 255, 0, 0.2)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'
              }}
            >
              {/* Image */}
              <div style={{ position: 'relative', aspectRatio: '4/3', overflow: 'hidden' }}>
                <img
                  src={project.image}
                  alt={project.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.6s ease',
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.05)' }}
                  onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)' }}
                />
                {/* Category pill */}
                <div
                  style={{
                    position: 'absolute',
                    top: '16px',
                    left: '16px',
                    background: 'rgba(26,26,24,0.85)',
                    backdropFilter: 'blur(8px)',
                    borderRadius: '999px',
                    padding: '6px 14px',
                    fontSize: '12px',
                    fontWeight: 600,
                    color: 'var(--color-brand-yellow)',
                    fontFamily: 'var(--font-body)',
                    letterSpacing: '0.05em',
                  }}
                >
                  {project.category}
                </div>
              </div>

              {/* Info */}
              <div style={{ padding: '24px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                  <h3
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '20px',
                      fontWeight: 700,
                      color: '#FFFFFF',
                      margin: 0,
                    }}
                  >
                    {project.title}
                  </h3>
                  <span
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '13px',
                      color: '#6B6B60',
                    }}
                  >
                    {project.year}
                  </span>
                </div>
                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '14px',
                    lineHeight: 1.6,
                    color: '#9A9A97',
                    margin: 0,
                  }}
                >
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
