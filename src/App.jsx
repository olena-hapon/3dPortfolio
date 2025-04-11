import Contact from "./components/contacct/Contact"
import Hero from "./components/hero/Hero"
import Portfolio from "./components/portfolio/Portfolio"
import Servises from "./components/services/Servises"

const App = () => {
  return (
    <div className='container'>
      <section id="#home">
          <Hero />
      </section>

       <section id="#services">
        <Servises />
      </section> 

       <section id="#portfolio" className="no-vh">
        <Portfolio />
      </section> 

      <section id="#contact" className="no-vh">
        <Contact />
      </section>

    </div>
  )
}

export default App