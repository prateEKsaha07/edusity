import './Testimonials.css'
import next_btn from '../../assets/next-icon.png' 
import back_btn from '../../assets/back-icon.png' 
import user_1 from '../../assets/user-1.png' 
import user_2 from '../../assets/user-2.png' 
import user_3 from '../../assets/user-3.png' 
import user_4 from '../../assets/user-4.png' 
import { useRef } from 'react'

const Testimonials = () => {

  const slider = useRef();
  let tx = 0;


  const slideForward = () => {
    if(tx > -50){
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  }
  const slideBackward = () => {
      if(tx < 0){
        tx += 25;
      }
    slider.current.style.transform = `translateX(${tx}%)`;
  }

  return (
      <div className="testimonials">
        <img src={next_btn} alt="" className="nxt-btn" onClick={slideForward}/>
        <img src={back_btn} alt="" className="bck-btn" onClick={slideBackward}/>
        <div className="slider">
          <ul ref={slider}>
            <li>
              <div className="slide">
                 <div className="userinfo">
                    <img src={user_1} alt="" />
                      <div>
                        <h3>morgan hausel</h3>
                        <span>Edusity,USA</span>
                      </div>
                  </div>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae consequatur necessitatibus ut doloribus debitis ab explicabo consequuntur eveniet cum aliquid? Consequatur doloremque asperiores deserunt hic officia dolor, facere totam expedita!</p>
                </div>
            </li>
            <li>
              <div className="slide">
                 <div className="userinfo">
                    <img src={user_2} alt="" />
                      <div>
                        <h3>charles darwin</h3>
                        <span>Edusity,USA</span>
                      </div>
                  </div>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae consequatur necessitatibus ut doloribus debitis ab explicabo consequuntur eveniet cum aliquid? Consequatur doloremque asperiores deserunt hic officia dolor, facere totam expedita!</p>
                </div>
            </li>
            <li>
              <div className="slide">
                 <div className="userinfo">
                    <img src={user_3} alt="" />
                      <div>
                        <h3>james clear</h3>
                        <span>Edusity,USA</span>
                      </div>
                  </div>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae consequatur necessitatibus ut doloribus debitis ab explicabo consequuntur eveniet cum aliquid? Consequatur doloremque asperiores deserunt hic officia dolor, facere totam expedita!</p>
                </div>
            </li>
            <li>
              <div className="slide">
                 <div className="userinfo">
                    <img src={user_4} alt="" />
                      <div>
                        <h3>yashavant kanetkar</h3>
                        <span>Edusity,USA</span>
                      </div>
                  </div>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae consequatur necessitatibus ut doloribus debitis ab explicabo consequuntur eveniet cum aliquid? Consequatur doloremque asperiores deserunt hic officia dolor, facere totam expedita!</p>
                </div>
            </li>
          </ul>
        </div>
      </div>
  )
}

export default Testimonials