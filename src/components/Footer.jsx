export default function Footer() {
  return (
    <footer className="bg-black text-white pt-24 pb-12">
      <div className="max-w-[1400px] mx-auto px-[5vw]">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">
          {/* Left Large Section */}
          <div className="lg:col-span-6">
            <h2 className="text-[36px] sm:text-[48px] md:text-[64px] font-bold leading-[1.05] tracking-tight mb-8" style={{ fontFamily: 'var(--font-display)' }}>
              Find your space.<br/>We’ll help you<br/>build it.
            </h2>
            <div className="text-[15px] text-gray-400 space-y-2 mt-12 font-medium" style={{ fontFamily: 'var(--font-body)' }}>
              <p>5 West 37th Street, 12th Floor</p>
              <p>New York, NY 10018</p>
              <p className="pt-4 hover:text-white transition-colors cursor-pointer">hello@thdstudios.com</p>
              <p className="hover:text-white transition-colors cursor-pointer">+1 212 994 9965</p>
            </div>
          </div>

          {/* Right Links Grid */}
          <div className="lg:col-span-6 grid grid-cols-2 sm:grid-cols-4 gap-8 text-[14px]" style={{ fontFamily: 'var(--font-body)' }}>
            
            {/* Nav Column */}
            <div className="flex flex-col gap-4">
              <h4 className="font-semibold text-white mb-2">Explore</h4>
              <a href="#search" className="text-gray-400 hover:text-white transition-colors">Search</a>
              <a href="#agents" className="text-gray-400 hover:text-white transition-colors">Designers</a>
              <a href="#join" className="text-gray-400 hover:text-white transition-colors">Join</a>
              <a href="#about" className="text-gray-400 hover:text-white transition-colors">About Us</a>
              <a href="#portal" className="text-gray-400 hover:text-white transition-colors">Client Portal</a>
            </div>

            {/* Socials Column */}
            <div className="flex flex-col gap-4">
              <h4 className="font-semibold text-white mb-2">Social</h4>
              <a href="#social" className="text-gray-400 hover:text-white transition-colors">Facebook</a>
              <a href="#social" className="text-gray-400 hover:text-white transition-colors">Instagram</a>
              <a href="#social" className="text-gray-400 hover:text-white transition-colors">Youtube</a>
              <a href="#social" className="text-gray-400 hover:text-white transition-colors">Linkedin</a>
            </div>

            {/* Legal Column */}
            <div className="flex flex-col gap-4 sm:col-span-2">
              <h4 className="font-semibold text-white mb-2">Legal</h4>
              <div className="grid grid-cols-1 gap-4">
                <a href="#legal" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
                <a href="#legal" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
                <a href="#legal" className="text-gray-400 hover:text-white transition-colors">Fair Housing Notice</a>
                <a href="#legal" className="text-gray-400 hover:text-white transition-colors">Operating Procedure</a>
                <a href="#legal" className="text-gray-400 hover:text-white transition-colors">Press and Media</a>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Logo & Copyright */}
        <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-[32px] font-bold tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>
            THD
          </div>
          <p className="text-[13px] text-gray-500" style={{ fontFamily: 'var(--font-body)' }}>
            © {new Date().getFullYear()} THD Studios. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  )
}
