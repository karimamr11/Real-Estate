import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const navLinks = [
  { label: 'Projects', href: '#projects' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
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
        className="fixed top-0 left-0 w-full z-[100] transition-all duration-300"
        style={{
          background: scrolled ? 'var(--color-nav-bg-scroll)' : 'var(--color-nav-bg)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          borderBottom: scrolled ? '0.5px solid rgba(0,0,0,0.08)' : 'none',
        }}
      >
        <div className="max-w-[1400px] mx-auto px-[10vw] flex items-center justify-between h-[60px]">
          {/* Logo */}
          <a
            href="#hero"
            className="no-underline text-[18px] font-bold tracking-tight pt-[2px]"
            style={{ fontFamily: 'var(--font-display)', color: '#000000' }}
          >
            THD
          </a>

          {/* Center links — desktop */}
          <ul className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <li key={link.label} className="list-none">
                <a
                  href={link.href}
                  className="no-underline text-[14px] font-medium tracking-wide transition-colors duration-200 hover:text-black"
                  style={{ fontFamily: 'var(--font-body)', color: '#4A4A4A' }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Right CTA — desktop */}
          <a
            href="#contact"
            className="hidden md:inline-flex items-center justify-center px-6 py-[10px] text-[14px] font-semibold no-underline transition-all duration-200 hover:opacity-80"
            style={{
              fontFamily: 'var(--font-body)',
              background: '#000000',
              color: '#FFFFFF',
              borderRadius: '999px',
            }}
          >
            Get in Touch
          </a>

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
              <li>
                <a
                  href="#contact"
                  onClick={() => setMobileOpen(false)}
                  className="inline-block mt-4 px-8 py-3 text-[15px] font-medium no-underline"
                  style={{
                    fontFamily: 'var(--font-body)',
                    background: 'var(--color-accent)',
                    color: 'var(--color-bg-dark)',
                    borderRadius: '999px',
                  }}
                >
                  Get in Touch
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
