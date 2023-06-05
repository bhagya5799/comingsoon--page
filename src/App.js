import { IoMdCall } from 'react-icons/io'
import {AiTwotoneMail} from 'react-icons/ai'
import React, { useRef } from "react";
import emailjs from '@emailjs/browser';
import './App.css';

function App() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_u49izbp', 'template_plunrlm', form.current, 'tOqE1oaj71OKynl75')
      .then((result) => {
        console.log(result.text);
        console.log('message send')
      }, (error) => {
        console.log(error.text);
      });
  };
  return (
    <div className="App">
      <div className='container'>
        <h1>COMING SOON</h1>
        <span>We are working on our website. Will be launching soon.</span>
        <div className="form-container">
          <form ref={form} onSubmit={sendEmail} className="form">
            <input type="text" name="from_name" placeholder="Name" />
            <input type="email" name="user_email" placeholder="Email" />
            <textarea name="message" placeholder="Message" />
            <button type="submit" className="send-btn" >Send</button>
          </form>
        </div>
        <div className="contact-us">
          <h3><AiTwotoneMail className='icon' /> : &nbsp;viresh@gmail.com,viresh@gmail.com</h3>
          <h3><IoMdCall className='icon' />: &nbsp;+971552116675, &nbsp; +971552116675</h3>
        </div>
      </div>
    </div>
  );
}

export default App;
