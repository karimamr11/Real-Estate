import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import ShowcaseVideo from './components/ShowcaseVideo'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div style={{ background: '#111110' }}>
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <ShowcaseVideo />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
