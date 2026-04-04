import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const testimonials = [
  {
    quote: "Working with THD was an absolute pleasure. From the start, their design problem-solving skills stood out. Thank you for making this happen—we are truly happy in our new home!",
    author: "Mathew S."
  },
  {
    quote: "Michael was a great designer. Such a hard worker, dedicated to helping us find the perfect aesthetic, price point and styling. Tireless and dedicated. Would recommend him 100%!",
    author: "Sarah J."
  },
  {
    quote: "Shirin was truly a blessing to work with. She helped us design our perfect condo in a great area. She was patient and very understanding. I would recommend working with her.",
    author: "David L."
  }
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)

  return (
    <section className="py-24 md:py-48 bg-[#F9F9F9] overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-[5vw]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
          
          {/* Left Column - Heading */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-[40px] md:text-[64px] font-extrabold leading-[1.1] tracking-tight text-black" style={{ fontFamily: 'var(--font-display)' }}>
              Don’t Take Our<br />Word for It.
            </h2>
            
            {/* Pagination / Controls */}
            <div className="flex items-center gap-4 mt-12">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className="w-10 h-10 rounded-full flex items-center justify-center font-semibold text-[15px] transition-all"
                  style={{
                    backgroundColor: current === i ? '#000000' : 'transparent',
                    color: current === i ? '#FFFFFF' : '#000000',
                    border: current === i ? '1px solid #000000' : '1px solid #E5E7EB',
                    fontFamily: 'var(--font-body)'
                  }}
                >
                  {i + 1}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Quotes */}
          <div className="relative min-h-[300px]">
            {/* Giant decorative quote mark matching FIND */}
            <div className="absolute -top-12 -left-8 text-[120px] leading-none text-black/5 font-serif select-none pointer-events-none">
              "
            </div>
            
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="relative z-10"
              >
                <p className="text-[20px] md:text-[28px] font-medium leading-[1.6] text-black mb-8" style={{ fontFamily: 'var(--font-display)' }}>
                  "{testimonials[current].quote}"
                </p>
                <p className="text-[16px] font-semibold text-gray-500 uppercase tracking-widest" style={{ fontFamily: 'var(--font-body)' }}>
                  — {testimonials[current].author}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  )
}
