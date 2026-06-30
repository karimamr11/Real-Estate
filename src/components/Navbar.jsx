import { useState, useEffect, useRef } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const navLinks = [
  { label: 'Projects', href: '#projects' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

const socials = [
  {
    name: 'Facebook',
    href: 'https://facebook.com',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
      </svg>
    )
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
        <rect x="2" y="9" width="4" height="12"/>
        <circle cx="4" cy="4" r="2"/>
      </svg>
    )
  },
  {
    name: 'Instagram',
    href: 'https://instagram.com',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
      </svg>
    )
  }
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const lastScrollY = useRef(0)

  useEffect(() => {
    const onScroll = () => {
      const currentY = window.scrollY
      setScrolled(currentY > 40)

      // Hide navbar when scrolling down, show when scrolling up
      if (currentY > lastScrollY.current && currentY > 80) {
        setHidden(true)
      } else {
        setHidden(false)
      }
      lastScrollY.current = currentY
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <>
      <nav
        className="fixed top-0 left-0 w-full z-[100] transition-all duration-500"
        style={{
          background: scrolled ? 'rgba(17, 17, 16, 0.3)' : 'transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(12px)' : 'none',
          borderBottom: scrolled ? '0.5px solid rgba(255,255,255,0.08)' : 'none',
          transform: hidden && !mobileOpen ? 'translateY(-100%)' : 'translateY(0)',
        }}
      >
        <div
          className="w-full flex md:grid md:grid-cols-3 items-center justify-between h-[80px]"
          style={{ padding: '0 6vw' }}
        >
          {/* Left Column: Logo */}
          <div className="flex justify-start">
            <a
              href="#hero"
              className="no-underline text-[18px] font-bold tracking-tight pt-[2px]"
              style={{
                fontFamily: 'var(--font-display)',
                color: '#FFFFFF',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
              }}
            >
              <img
                src="/logo.png"
                alt="NileByte Logo"
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                }}
              />
              NileByte
            </a>
          </div>

          {/* Middle Column: Nav Links (centered on desktop) */}
          <div className="hidden md:flex justify-center">
            <ul
              className="flex items-center list-none m-0 p-0"
              style={{ gap: '3.5vw' }}
            >
              {navLinks.map((link) => (
                <li key={link.label} className="list-none">
                  <a
                    href={link.href}
                    className="group relative no-underline text-[14px] font-medium tracking-wide transition-all duration-300"
                    style={{
                      fontFamily: 'var(--font-body)',
                      color: '#FFFFFF',
                      opacity: 0.85
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.opacity = '1' }}
                    onMouseLeave={(e) => { e.currentTarget.style.opacity = '0.85' }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column: Social Links (Desktop) and Menu Toggle (Mobile) */}
          <div className="flex justify-end items-center gap-6">
            {/* Desktop Socials */}
            <div className="hidden md:flex items-center gap-5">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-all duration-300"
                  style={{ color: '#FFFFFF', opacity: 0.85 }}
                  onMouseEnter={(e) => { e.currentTarget.style.opacity = '1' }}
                  onMouseLeave={(e) => { e.currentTarget.style.opacity = '0.85' }}
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>

            {/* Hamburger — mobile */}
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden flex flex-col items-center justify-center gap-[5px] p-2 bg-transparent border-none cursor-pointer"
              aria-label="Toggle menu"
            >
              <span
                className="block w-5 h-[1.5px] transition-all duration-300"
                style={{
                  background: '#FFFFFF',
                  transform: mobileOpen ? 'rotate(45deg) translateY(6.5px)' : 'none',
                }}
              />
              <span
                className="block w-5 h-[1.5px] transition-all duration-300"
                style={{
                  background: '#FFFFFF',
                  opacity: mobileOpen ? 0 : 1,
                }}
              />
              <span
                className="block w-5 h-[1.5px] transition-all duration-300"
                style={{
                  background: '#FFFFFF',
                  transform: mobileOpen ? 'rotate(-45deg) translateY(-6.5px)' : 'none',
                }}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="mobile-overlay"
          >
            <div className="flex flex-col items-center gap-12">
              <ul className="flex flex-col items-center gap-8 list-none">
                {navLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="group relative no-underline text-[20px] font-light tracking-wide transition-colors duration-200"
                      style={{ fontFamily: 'var(--font-display)', color: 'var(--color-text-inv)' }}
                      onMouseEnter={(e) => { e.currentTarget.style.color = '#FFFFFF' }}
                      onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--color-text-inv)' }}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>

              {/* Mobile Socials */}
              <div className="flex items-center gap-6 mt-4">
                {socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-all duration-300"
                    style={{ color: '#FFFFFF', opacity: 0.8 }}
                    onMouseEnter={(e) => { e.currentTarget.style.opacity = '1' }}
                    onMouseLeave={(e) => { e.currentTarget.style.opacity = '0.8' }}
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
