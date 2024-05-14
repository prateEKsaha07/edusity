import './Programs.css'
import prog1 from '../../assets/program-1.png'
import prog2 from '../../assets/program-2.png'
import prog3 from '../../assets/program-3.png'
import progIc1 from '../../assets/program-icon-1.png'
import progIc2 from '../../assets/program-icon-2.png'
import progIc3 from '../../assets/program-icon-3.png'


const Programs = () => {
  return (
    <div className='programs'>
        <div className="program">
            <img src={prog1} alt="program-1" />
            <div className="caption">
                <img src={progIc1} alt="" />
                <p>under graduation</p>
            </div>
        </div>
        <div className="program">
            <img src={prog2} alt="program-2" />
            <div className="caption">
                <img src={progIc2} alt="" />
                <p>post graduation</p>
            </div>
        </div> 
        <div className="program">
        <img src={prog3} alt="program-3" />
            <div className="caption">
                <img src={progIc3} alt="" />
                <p>diploma programs</p>
            </div>
        </div>
    </div>
  )
}

export default Programs