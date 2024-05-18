import React from 'react'
import './Contact.css'
import envelope from '../assets/images/envelope-solid.svg'
import phone from '../assets/images/phone-solid.svg'
import location from '../assets/images/location-dot-solid.svg'

const Contact = () => {
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "09904032-e454-4880-b568-de6346c1a50d");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          alert(res.message)
        }
      };
    
  return (
    <div id='contact' className='contact'>
        <div className="contact-title">
            <h1>Get in Touch</h1>
        </div>
        <div className="contact-section">
            <div className="contact-left">
                <h1>Let's talk</h1>
                <p>I'm currently available to take on new projects,so feel free about anything that you want me to work on. You acn contact anytime.</p>
                <div className="contact-details">
                    <div className="contact-detail">
                        <img src={envelope}alt=""/>
                       <p>anjalisen8193@gmail.com</p>
                    </div>
                    <div className="contact-detail">
                        <img src={phone} alt=""/>
                        81******5
                    </div>
                    <div className="contact-detail">
                        <img src={location} alt=""/>
                        city-Meerut
                    </div>
                </div>
            </div>
            <form onSubmit={onSubmit}className='contact-right'>
               <label >Your Name</label>
               <input type="text"placeholder="Enter your name"name="name"/>
               <label htmlfor="">Your email</label>
               <input type="email"placeholder="Enter your email"name="email"/>
               <label >Write your message here</label>
               <textarea name="message"rows="8"placeholder="Enter your message"></textarea>
               <button type="submit"className="contact-submit">Submit Now</button>
            </form>
        </div>
      
    </div>
  )
}

export default Contact
