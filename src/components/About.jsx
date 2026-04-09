import { motion } from 'framer-motion'

const stats = [
  { number: '200+', label: 'Projects Completed' },
  { number: '15+', label: 'Years Experience' },
  { number: '50+', label: 'Team Members' },
  { number: '12', label: 'Awards Won' },
]

const values = [
  {
    title: 'Design with Intent',
    description: 'Every line we draw, every material we select, is driven by purpose. We design spaces that function as beautifully as they look.',
  },
  {
    title: 'Collaborate Deeply',
    description: 'We believe the best designs emerge from close partnership. Your vision is our starting point — we refine it together.',
  },
  {
    title: 'Execute Relentlessly',
    description: 'From concept through construction, we maintain an uncompromising standard. Details matter. Timelines matter. Your trust matters.',
  },
]

export default function About() {
  return (
    <section
      id="about"
      style={{
        background: '#111110',
        padding: '120px 0 140px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative glow */}
      <div
        style={{
          position: 'absolute',
          bottom: '-300px',
          left: '-200px',
          width: '700px',
          height: '700px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(226,255,0,0.03) 0%, transparent 70%)',
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
          style={{
            marginBottom: '100px',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '60px'
          }}
        >
          {/* Left Side: Text */}
          <div style={{ flex: '1', minWidth: 'min(100%, 650px)', maxWidth: '850px' }}>
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
                About Us
              </span>
            </div>
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(38px, 5.5vw, 76px)',
                fontWeight: 800,
                lineHeight: 1.02,
                letterSpacing: '-0.04em',
                color: '#FFFFFF',
                margin: '0 0 32px 0',
              }}
            >
              We don't just design spaces.
              <br />
              We craft{' '}
              <span style={{ color: 'var(--color-brand-yellow)' }}>experiences</span>.
            </h2>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 'clamp(17px, 1.4vw, 22px)',
                lineHeight: 1.6,
                color: '#9A9A97',
                margin: 0,
                fontWeight: 400
              }}
            >
              THD Studio is a full-service interior design and architecture firm.
              We transform environments into stories — spaces that move people,
              inspire action, and stand the test of time.
            </p>
          </div>

          {/* Right Side: Logo */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{
              flex: '0 0 auto',
              width: 'clamp(280px, 28vw, 440px)',
              margin: '0 auto lg:0'
            }}
          >
            <div style={{
              padding: '24px',
              background: 'rgba(255,255,255,0.01)',
              borderRadius: '28px',
              border: '1px solid rgba(255,255,255,0.05)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 20px 40px rgba(0,0,0,0.2)'
            }}>
              <img
                src="/THD Studio LOGO-Light.jpg"
                alt="THD Studio Logo"
                style={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: '16px',
                  filter: 'drop-shadow(0 0 30px rgba(226, 255, 0, 0.1))'
                }}
              />
            </div>
          </motion.div>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
            gap: '24px',
            marginBottom: '100px',
            padding: '48px 40px',
            background: 'rgba(255,255,255,0.02)',
            border: '1px solid rgba(255,255,255,0.06)',
            borderRadius: '20px',
          }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 + index * 0.1 }}
              style={{ textAlign: 'center' }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(32px, 4vw, 52px)',
                  fontWeight: 800,
                  color: 'var(--color-brand-yellow)',
                  lineHeight: 1,
                  marginBottom: '8px',
                  letterSpacing: '-0.03em',
                }}
              >
                {stat.number}
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '14px',
                  fontWeight: 500,
                  color: '#6B6B60',
                  letterSpacing: '0.05em',
                }}
              >
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <h3
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(24px, 3vw, 36px)',
              fontWeight: 700,
              color: '#FFFFFF',
              marginBottom: '48px',
              letterSpacing: '-0.02em',
            }}
          >
            Our Principles
          </h3>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
              gap: '32px',
            }}
          >
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  padding: '36px',
                  background: 'rgba(255,255,255,0.02)',
                  border: '1px solid rgba(255,255,255,0.06)',
                  borderRadius: '16px',
                  transition: 'border-color 0.3s ease, background 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(226,255,0,0.15)'
                  e.currentTarget.style.background = 'rgba(226,255,0,0.03)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'
                  e.currentTarget.style.background = 'rgba(255,255,255,0.02)'
                }}
              >
                <div
                  style={{
                    width: '32px',
                    height: '3px',
                    background: 'var(--color-brand-yellow)',
                    marginBottom: '24px',
                    borderRadius: '2px',
                  }}
                />
                <h4
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '20px',
                    fontWeight: 700,
                    color: '#FFFFFF',
                    marginBottom: '12px',
                  }}
                >
                  {value.title}
                </h4>
                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '15px',
                    lineHeight: 1.7,
                    color: '#9A9A97',
                    margin: 0,
                  }}
                >
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
