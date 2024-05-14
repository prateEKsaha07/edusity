import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'
const Hero = () => {
  return (
    <div className='hero container'>
        <div className="hero-text">
            <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae est possimus hic illum reprehenderit, quaerat beatae nisi cumque unde eveniet recusandae ab nulla laborum accusantium quibusdam illo alias quo dolorum veritatis aut, veniam nesciunt sint.</p>
            <button className="btn">explore-more <img src={dark_arrow} alt="arrow img" /></button>
        </div>
    </div>
  )
}

export default Hero