import { motion } from 'framer-motion'

const services = [
  {
    name: 'Residential Design',
    desc: 'Helping you secure your dream aesthetic with flexible and comprehensive design options.',
  },
  {
    name: 'Custom Furniture',
    desc: 'Let us handle the details of bespoke craftsmanship so you can enjoy the rewards.',
  },
  {
    name: 'Project Management',
    desc: 'Guiding you through the intricacies of building and executing spaces with expert insight and support.',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-40 bg-[#FFFFFF]">
      <div className="max-w-[1400px] mx-auto px-[5vw]">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          
          {/* Header Area */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-[32px] md:text-[48px] font-bold leading-[1.1] tracking-tight text-black mb-6" style={{ fontFamily: 'var(--font-display)' }}>
                Support Beyond Design and Build.
              </h2>
              <p className="text-[18px] text-gray-500 leading-relaxed mb-10" style={{ fontFamily: 'var(--font-body)' }}>
                The design world never stands still — and neither do we. Our experts offer continued support beyond the execution, helping you maximize your space.
              </p>
              <a
                href="#services-detail"
                className="inline-flex items-center text-black font-semibold text-[15px] border-b border-black pb-1 hover:text-gray-500 hover:border-gray-500 transition-colors"
              >
                Discover Our Services
              </a>
            </motion.div>
          </div>

          {/* Grid Area */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="pt-6 border-t border-gray-200"
                >
                  <h3 className="text-[20px] font-bold text-black mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                    {service.name}
                  </h3>
                  <p className="text-[15px] text-gray-500 leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>
                    {service.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
