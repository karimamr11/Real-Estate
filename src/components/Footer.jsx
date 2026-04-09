export default function Footer() {
  return (
    <footer style={{
      background: '#111110',
      padding: '30px 0',
      borderTop: '1px solid rgba(255,255,255,0.05)'
    }}>
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '0 5vw',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '40px',
          fontFamily: 'var(--font-body)',
          fontSize: '18px',
          color: '#FFFFFF',
          fontWeight: 300,
          letterSpacing: '0.04em',
          textAlign: 'center'
        }}>
          <span>
            Powered by <span style={{ color: '#60A5FA', fontWeight: 600 }}>Nilebyte</span>
          </span>
          
          <span style={{ 
            width: '1px', 
            height: '14px', 
            background: 'rgba(255,255,255,0.15)',
            display: 'inline-block'
          }} className="hidden sm:block" />

          <span>All rights reserved ©</span>
        </div>
      </div>
    </footer>
  )
}
