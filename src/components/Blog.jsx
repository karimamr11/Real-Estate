import { motion } from 'framer-motion'

const articles = [
  {
    title: '5 Cozy Ways to Style Your Home for Winter',
    desc: 'When the city slows down, lean in. Five cozy ways to make the most of a snow day inside your newly designed space.',
    date: 'Dec 12, 2025'
  },
  {
    title: 'January 2026 Design Trends Update',
    desc: 'Minimalism is evolving. See how Manhattan, Brooklyn, and Queens are shaping their interiors leading into spring.',
    date: 'Jan 05, 2026'
  },
  {
    title: 'The New Year\'s Key: Why January is a Smart Time to Remodel',
    desc: 'Forget the spring rush. The holidays clear the way for serious projects. Discover the unique advantages of starting your redesign in January.',
    date: 'Jan 18, 2026'
  }
]

export default function Blog() {
  return (
    <section className="py-24 md:py-32 bg-[#F9F9F9]">
      <div className="max-w-[1400px] mx-auto px-[5vw]">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="max-w-2xl"
          >
            <h2 className="text-[32px] md:text-[48px] font-bold text-black mb-4" style={{ fontFamily: 'var(--font-display)' }}>
              Blog & Resources
            </h2>
            <p className="text-[16px] text-gray-500" style={{ fontFamily: 'var(--font-body)' }}>
              See how we’ve helped clients achieve their design dreams, one successful project at a time.
            </p>
          </motion.div>
          <a
            href="#blog"
            className="inline-flex items-center text-black font-semibold text-[15px] border-b border-black pb-1 hover:text-gray-500 hover:border-gray-500 transition-colors"
          >
            Visit Our Blog
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group cursor-pointer"
            >
              <div className="w-full aspect-[4/3] bg-gray-200 mb-6 overflow-hidden">
                 {/* Placeholder for blog image so it matches real estate layouts */}
                 <div className="w-full h-full bg-[#EAEAEA] group-hover:scale-105 transition-transform duration-500 ease-out" />
              </div>
              <p className="text-[13px] text-gray-400 font-semibold uppercase tracking-wider mb-3" style={{ fontFamily: 'var(--font-body)' }}>
                {article.date}
              </p>
              <h3 className="text-[22px] font-bold text-black mb-3 group-hover:text-gray-600 transition-colors" style={{ fontFamily: 'var(--font-display)', lineHeight: 1.3 }}>
                {article.title}
              </h3>
              <p className="text-[15px] text-gray-500 leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>
                {article.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
