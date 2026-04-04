import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="py-32 md:py-48 bg-[#FFFFFF]">
      <div className="max-w-[1400px] mx-auto px-[5vw]">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-[1100px]"
        >
          <h2 className="text-[36px] sm:text-[48px] md:text-[64px] lg:text-[72px] font-extrabold leading-[1.05] tracking-tight text-black mb-16" style={{ fontFamily: 'var(--font-display)' }}>
            <span className="text-[#A1A1AA]">This isn’t just about interior design.</span> It’s about identity. Progress. Getting unstuck. You’re not just looking for a space. You’re looking for alignment. That’s what we help you build.
          </h2>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mt-12 md:mt-24">
            <h3 className="text-[20px] md:text-[24px] font-bold text-black m-0" style={{ fontFamily: 'var(--font-display)' }}>
              Interior Design, Rewired.
            </h3>
            <div className="hidden sm:block w-[1px] h-[30px] bg-gray-300"></div>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-black text-white rounded-full font-semibold text-[15px] hover:opacity-80 transition-opacity no-underline"
            >
              Start Your Project
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
