import './Contact.css'
import contact_image from '../../assets/msg-icon.png'
import contact_mail from '../../assets/mail-icon.png'
import contact_phone from '../../assets/phone-icon.png'
import contact_location from '../../assets/location-icon.png'
import light_arrow from '../../assets/white-arrow.png'
import React from 'react'


const Contact = () => {
    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "79f17008-68af-4e65-868e-e1b537e5d375");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset(); 
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };    
  return (
    <div className="contact">
        <div className="contact-col">
            <h3>send us a massage <img src={contact_image} alt="" /></h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, placeat. Fugiat quae blanditiis quasi maiores sunt ipsa ducimus esse praesentium maxime aut quas repellat mollitia voluptatibus quibusdam corrupti, voluptates suscipit quo. Aliquid sunt, eveniet omnis corrupti facilis, similique in at beatae ipsa labore, accusamus magnam totam fugit! Mollitia, nemo quis.</p>
            <ul>
                <li> <img src={contact_mail} alt="" /> Edusity@gmail.com</li>
                <li> <img src={contact_phone} alt="" /> +91-64739-36483</li>
                <li> <img src={contact_location} alt="" /> address Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Rerum harum mollitia nihil ad, minus magnam amet ipsa quam sapiente animi?</li>
            </ul>
        </div>
        <div className="contact-col">
            <form onSubmit = {onSubmit}>
                <label>your name :</label>
                <input type="text" name='name' placeholder="enter your name" required />
                <label>contact number :</label>
                <input type="tel" name='phone' placeholder='enter your contact number' required />
                <label>write your message here :</label>
                <textarea name="message" id="" cols="30" rows="6"placeholder='enter your message' required></textarea>
                <button type='submit' className="btn dark-btn">submit now <img src={light_arrow} alt="" /> </button>
            </form>
            <span>{result}</span>
        </div>

    </div>
  )
}

export default Contact