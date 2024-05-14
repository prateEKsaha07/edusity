import React from 'react'
import './Campus.css'
import pho1 from '../../assets/gallery-1.png'
import pho2 from '../../assets/gallery-2.png'
import pho3 from '../../assets/gallery-3.png'
import pho4 from '../../assets/gallery-4.png'
import arrowV2 from'../../assets/white-arrow.png'


const Campus = () => {
  return (
    <div className="campus">
        <div className="gallery">
            <img src={pho1} alt="1st photo" />
            <img src={pho2} alt="2nd photo" />
            <img src={pho3} alt="3rd photo" />
            <img src={pho4} alt="4th photo" />
        </div>
        <button className='btn dark-btn'>see more here <img src={arrowV2} alt="#" /></button>
    </div>
  )
}

export default Campus