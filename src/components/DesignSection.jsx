import useFadeIn from '../hooks/useFadeIn'

export default function DesignSection() {
  const ref = useFadeIn(0.15)

  return (
    <section
      id="projects"
      ref={ref}
      className="fade-in-section"
      style={{
        background: '#FAFBF7',
        padding: '120px 10vw',
      }}
    >
      <h2
        className="mb-6"
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(3rem, 6vw, 5rem)',
          fontWeight: 400,
          color: 'var(--color-text)',
          lineHeight: 1.1,
        }}
      >
        Design What<br />Defines You
      </h2>

      <p
        className="mb-8"
        style={{
          fontFamily: 'var(--font-body)',
          fontSize: '18px',
          fontWeight: 400,
          color: 'var(--color-text-muted)',
          maxWidth: '520px',
          lineHeight: 1.7,
        }}
      >
        Bespoke spaces. Largest vision. Your story, beautifully told.
      </p>

      <a
        href="#services"
        className="inline-block no-underline text-[13px] font-medium transition-all duration-200 hover:brightness-110"
        style={{
          fontFamily: 'var(--font-body)',
          background: 'var(--color-bg-dark)',
          color: 'var(--color-text-inv)',
          padding: '10px 28px',
          borderRadius: '999px',
          marginTop: '30px',
        }}
      >
        Explore Projects →
      </a>
    </section>
  )
}
