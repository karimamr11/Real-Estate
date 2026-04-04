import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Testimonials from './components/Testimonials'
import Services from './components/Services'
import Blog from './components/Blog'
import Footer from './components/Footer'

function App() {
  return (
    <div style={{ background: 'var(--color-bg)' }}>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Testimonials />
        <Services />
        <Blog />
      </main>
      <Footer />
    </div>
  )
}

export default App
