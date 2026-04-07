import { useState, useEffect, useRef } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const navLinks = [
  { label: 'Projects', href: '#projects' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
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
          background: 'transparent',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          borderBottom: scrolled ? '0.5px solid rgba(0,0,0,0.08)' : 'none',
          transform: hidden && !mobileOpen ? 'translateY(-100%)' : 'translateY(0)',
        }}
      >
        <div className="relative max-w-[1400px] mx-auto px-[10vw] flex items-center justify-between h-[60px]">
          {/* Logo */}
          <a
            href="#hero"
            className="no-underline text-[24px] font-bold tracking-tight pt-[2px]"
            style={{ fontFamily: 'var(--font-display)', color: '#000000' }}
          >
            THD
          </a>

          {/* Center links — desktop (absolutely centered) */}
          <ul
            className="hidden md:flex items-center gap-20 list-none"
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              margin: 0,
              padding: 0,
            }}
          >
            {navLinks.map((link) => (
              <li key={link.label} className="list-none">
                <a
                  href={link.href}
                  className="no-underline text-[17px] font-medium tracking-wide transition-colors duration-200 hover:text-black"
                  style={{ fontFamily: 'var(--font-body)', color: '#4A4A4A' }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

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
                background: '#000000',
                transform: mobileOpen ? 'rotate(45deg) translateY(6.5px)' : 'none',
              }}
            />
            <span
              className="block w-5 h-[1.5px] transition-all duration-300"
              style={{
                background: '#000000',
                opacity: mobileOpen ? 0 : 1,
              }}
            />
            <span
              className="block w-5 h-[1.5px] transition-all duration-300"
              style={{
                background: '#000000',
                transform: mobileOpen ? 'rotate(-45deg) translateY(-6.5px)' : 'none',
              }}
            />
          </button>
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
            <ul className="flex flex-col items-center gap-8 list-none">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="no-underline text-[28px] font-light tracking-wide transition-colors duration-200"
                    style={{ fontFamily: 'var(--font-display)', color: 'var(--color-text-inv)' }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
