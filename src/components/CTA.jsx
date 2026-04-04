import { motion } from 'framer-motion'
import { Parallax } from 'react-scroll-parallax'

export default function CTA() {
  return (
    <section id="cta" className="py-24 sm:py-32 relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/10 rounded-full blur-[150px]" />
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center">
        <Parallax speed={-5}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-primary-light text-sm font-semibold tracking-widest uppercase">
              Get Started
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-[var(--font-display)] mt-3 mb-6">
              Ready to Build <span className="gradient-text">Something Amazing</span>?
            </h2>
            <p className="text-text-secondary text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
              Start customizing this template with your own content and design. The foundation is
              ready — all you need is your vision.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.a
                href="#"
                id="cta-primary-button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="px-10 py-4 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-bold text-lg shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/40 transition-shadow duration-300"
              >
                Start Now — It&apos;s Free
              </motion.a>
              <motion.a
                href="#"
                id="cta-secondary-button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="px-10 py-4 rounded-full border border-surface-lighter text-text-secondary hover:text-text-primary hover:border-primary/50 font-semibold text-lg transition-all duration-300"
              >
                View Documentation
              </motion.a>
            </div>
          </motion.div>
        </Parallax>
      </div>
    </section>
  )
}
