import React, { useRef,useState } from 'react';
import emailjs from '@emailjs/browser';
import {MdEmail,MdPhoneInTalk,MdLocationOn} from "react-icons/md"
import {SiLinkedin,SiInstagram,SiGithub} from "react-icons/si"

const Contact = () => {
  const form = useRef();
  const [messageStatus, setMessageStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_4iatt6b', 'template_5qt3w3r', form.current, 'DoAee1_KpcVejh9iR')
    .then((result) => {
      console.log(result.text);
      setMessageStatus('Message sent successfully to the E-mail of Owner!');
    })
    .catch((error) => {
      console.log(error.text);
      setMessageStatus('Failed to send message. Please try again.');
    });
  };
  return (
    <div className='contact' id='contact'>
    <h1 className='heading'>Contact Us</h1>
    <div className='contact_content'>
    <form ref={form} onSubmit={sendEmail} className='contact-from'>
      <input type="text" name='name' className="contact__form-input" placeholder="Name"/>
      <input type="email" name='email' className="contact__form-input" placeholder="Email-Id"/>
      <textarea name="project" className="contact__form-input" placeholder="Project Expalnation"></textarea>
      <button>Send</button>
    </form>
    {messageStatus && <p>{messageStatus}</p>} 
    <div className='socialMedia'>
      <div className='socialMedia_item'>
        <MdEmail/>
        <p>amitkumar29082002@gmail.com</p>
      </div>
      <div className='socialMedia_item'>
        <MdPhoneInTalk/>
        <p>9304234821</p>
      </div>
      <div className='socialMedia_item'>
        <MdLocationOn/>
        <p>Patna, Bihar</p>
      </div>
       
      <div className='socialMedia_personal'>
        <a href='https://www.linkedin.com/in/amit-kumar-74a533215'><SiLinkedin/></a>
        <a href='https://instagram.com/itz.amit.singh?igshid=MzNlNGNkZWQ4Mg=='><SiInstagram/></a>
        <a href='https://github.com/Amit2908kumar'><SiGithub/></a>
      </div>
    </div>
    </div>
  </div>
  )
}

export default Contact