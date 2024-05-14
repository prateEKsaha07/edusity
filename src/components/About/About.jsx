import './About.css'
import abt_img from '../../assets/about.png'
import play_ic from '../../assets/play-icon.png'

const About = () => {
  return (
    <div className="about">
        <div className="about-left">
            <img src={abt_img} alt="about img" className='about-img' />
            <img src={play_ic} alt="about img" className='play-icon'/>
        </div>
        <div className="about-right">
            <h3>ABOUT UNIVERSITY</h3>
            <h2>Nurturing tomorrows Leaders Now</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui reiciendis laudantium corrupti, quibusdam illum iste eius corporis, dolore placeat modi, omnis animi accusantium enim at aliquam quidem? Hic, obcaecati fugiat.</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia exercitationem placeat qui maiores quisquam alias, quia recusandae. Delectus facere nesciunt commodi perspiciatis velit, iste earum, neque nisi ratione fugit impedit.
            </p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo aliquam quaerat recusandae, sequi aliquid cum minus aperiam nostrum! Quibusdam consequuntur iste magnam recusandae reiciendis. Corrupti sunt eum eveniet iure molestiae?
            </p>
        </div>
    </div>
  )
}

export default About