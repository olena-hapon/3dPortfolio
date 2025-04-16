import Contact from "./components/contacct/Contact"
import Hero from "./components/hero/Hero"
import Portfolio from "./components/portfolio/Portfolio"
import Servises from "./components/services/Servises"

const App = () => {
  return (
    <>
      <section id="#home">
        <Hero />
      </section>

      <div className='container'>
        <section id="services">
          <Servises />
        </section>
      </div>

      <div className="container">
        <section id="portfolio" className="no-vh">
          <Portfolio />
        </section>
      </div>

      <div className="container">
        <section id="contact" className="no-vh">
          <Contact />
        </section>
      </div>
    </>
  )
}

export default App