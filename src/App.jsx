import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero/'
import Programs from './components/Programs/Programs'
import Title from './components/Title/Title'
import About from './components/About/About'
import Campus from './components/Campus/Campus'
import Testimonials from './components/Testimonials/Testimonials'
import Contact from './components/Contact/Contact'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
      <Title subTitle = 'OUR PROGRAMS' title = 'what we offer' />
      <Programs />
      <About />
      <Title subTitle = 'Gallery' title = 'campus photos' />
      <Campus />
      <Title subTitle = 'testimonials' title = 'what our students says' />
      <Testimonials />
      <Title subTitle = 'contact us' title = 'get in touch' />
      <Contact />
      </div>
    </div>
  )
}

export default App
