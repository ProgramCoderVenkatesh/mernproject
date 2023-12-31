import React, { useEffect, useState } from 'react';
import emailjs from '@emailjs/browser';
import '../styles/contact.css';

const Contact = () => {

    const [ name, setName ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ message, setMessage ] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const serviceId = 'service_3ey4pyk';
        const templateId = 'template_ubpbt8f';
        const publicKey = 'ZV62UaJ0Y8uMDdh3g';

    const templateParams = {
        from_name: name,
        from_email: email,
        to_name: 'Travels World',
        message: message,
    };

    emailjs.send(serviceId, templateId, templateParams, publicKey)
    .then((response) => {
        console.log('Email sent successfully', response);
        alert("Email send successfully");
        setName('');
        setEmail('');
        setMessage('');
    }).catch((error) => {
        console.error('Error sending email:', error);
    })
    }

    useEffect(() => {
        window.scrollTo(0, 0);
      },[])

  return (
    <>
        <section className='contact-us'>
            <div className="title">
                <h6>Get in touch</h6>
                <h1>Contact</h1>
            </div>

            <div className="contact-form">
                <div className="left">
                    <span><i className="ri-phone-fill"></i>+9833776654</span>
                    <span><i className="ri-mail-fill"></i>venkythevar69@gmail.com</span>
                    <span><i className="ri-map-pin-2-fill"></i>Mumbai, Maharashtra</span>
                </div>
                <hr className='divider-line' />
                <div className="right">
                    <form onSubmit={handleSubmit} className='contactForm'>
                        <label htmlFor="name">Your Name</label><br />
                        <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} /><br />

                        <label htmlFor="email">Your Email</label><br />
                        <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} /><br />

                        <label htmlFor="message">Your Message</label><br />
                            <textarea
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                rows="8" // Set the number of visible rows
                                cols="10" // Set the number of visible columns
                            />
                        <button type='submit' className='sendBtn'>Send</button>
                    </form>
                </div>
            </div>
        </section>
    </>
  )
}

export default Contact