import React, { useState} from 'react'
import "../styles/Contact.css";

import GitHubIcon from '@material-ui/icons/GitHub';
import MailIcon from '@material-ui/icons/Mail';     
import PhoneIcon from '@material-ui/icons/Phone';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Phone from '@material-ui/icons/Phone';

import { db } from '../firebase';

function Contact() {
  
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    
    setName("");
    setEmail("");
    setMessage("");

    alert("message delivered");
  }

  return (
    <div className='contact__container'>
      <div className='contact__left'> 
          <h4 className='reach'>
            You can reach me here
          </h4>
          <div className='contact__contacts'>
            <h3><PhoneIcon /> <span>+2349058286910</span></h3>
            <h3><MailIcon /> <span>iameneandre@gmail.com</span></h3>
            <h4><LocationOnIcon /> <span>101A okota road, Lagos Nigeria</span></h4>
            <a href='https://github.com/dev-eneandre/'><GitHubIcon /> <span>https://github.com/dev-eneandre/</span> </a> 
          </div>
      </div>
      <div className='contact__right'>
        <div className='contact__desc'>
          <strong>Get in touch. </strong>
         I am always available for freelance jobs or even full time jobs😉.
        </div>

        <form>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
          <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email"/>
          <textarea name="message" rows="4" placeholder="Message" value={message} onChange={(e) => setMessage(e.target.value)}>
          </textarea>
          <button className='submitbtn' type="submit" onClick={handleSubmit}>Submit</button>
    
        </form>
      </div>
    </div>
  )
}

export default Contact