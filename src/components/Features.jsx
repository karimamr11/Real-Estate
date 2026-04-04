import { motion } from 'framer-motion'
import { useParallax } from 'react-scroll-parallax'
import { useRef } from 'react'

const features = [
  {
    icon: '⚡',
    title: 'Blazing Fast',
    description: 'Built with Vite and React for lightning-fast load times and optimal performance across all devices.',
  },
  {
    icon: '🎨',
    title: 'Modern Design',
    description: 'Glassmorphism, smooth gradients, and micro-animations create a premium, polished user experience.',
  },
  {
    icon: '📱',
    title: 'Fully Responsive',
    description: 'Every component adapts beautifully from mobile to ultra-wide desktop screens.',
  },
  {
    icon: '✨',
    title: 'Parallax Effects',
    description: 'Immersive scroll-driven parallax animations that bring your content to life.',
  },
  {
    icon: '🔧',
    title: 'Easy to Customize',
    description: 'Tailwind CSS design tokens and modular components make customization effortless.',
  },
  {
    icon: '🚀',
    title: 'Production Ready',
    description: 'Optimized build pipeline, SEO-ready, and configured for seamless deployment.',
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: 'easeOut' },
  }),
}

function FeatureCard({ feature, index }) {
  return (
    <motion.div
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      variants={cardVariants}
      className="group relative p-8 rounded-2xl glass hover:bg-surface-light/80 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5"
    >
      <div className="gradient-border absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="relative z-10">
        <div className="text-4xl mb-5">{feature.icon}</div>
        <h3 className="text-xl font-bold font-[var(--font-display)] mb-3 text-text-primary group-hover:text-primary-light transition-colors">
          {feature.title}
        </h3>
        <p className="text-text-secondary leading-relaxed text-sm">
          {feature.description}
        </p>
      </div>
    </motion.div>
  )
}

export default function Features() {
  const target = useRef(null)
  const { ref } = useParallax({ speed: 5, targetElement: target.current })

  return (
    <section id="features" ref={target} className="py-24 sm:py-32 relative">
      {/* Subtle background accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary-light text-sm font-semibold tracking-widest uppercase">
            Features
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold font-[var(--font-display)] mt-3 mb-5">
            Everything You <span className="gradient-text">Need</span>
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto text-lg">
            A complete toolkit for building stunning landing pages with modern web technologies.
          </p>
        </motion.div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <FeatureCard key={feature.title} feature={feature} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
