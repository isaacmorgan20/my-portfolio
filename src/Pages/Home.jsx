import NavBar from '../Component/NavBar'
import Hero from '../Component/Hero'
import About from '../Component/About'
import Projects from '../Component/Projects'
import Contact from '../Component/Contact'
import Footer from '../Component/Footer'


const Home = () => {
  return (
    <section>
      <NavBar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </section>
  )
}

export default Home