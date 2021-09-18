import React from 'react';
import { useState } from 'react';
import { send, init } from 'emailjs-com';
init("user_3xlFXTaDJ18AUeIMpjzhY")

function ContactForm() {
  const [toSend, setToSend] = useState({
    from_name: '',
    message: '',
    reply_to: '',
  });

  const handleChange = ({ target: { name, value }}) => {
    setToSend({ ...toSend, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    send(
      'alexandremhm_id',
      'template_w4im8q4',
      toSend,
      'user_3xlFXTaDJ18AUeIMpjzhY'
    )
      .then((response) => {
        alert('Your message has been sent!');
      })
      .catch((err) => {
        alert('Something went wrong, please try again.');
      });
  };

    return(
      <div className="text-inputs">
      <div>
        <form id="contact-form" onSubmit={onSubmit} method="POST">          
          <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Name:</label>
          <input
            type='text'
            name='from_name'
            placeholder='Your name'
            value={toSend.from_name}
            onChange={handleChange}
            class="form-control" 
            id="exampleFormControlInput1"
          />
          <label for="exampleFormControlInput1" class="form-label">Email address:</label>
          <input
            type='text'
            name='reply_to'
            placeholder='Your email'
            value={toSend.reply_to}
            onChange={handleChange}
            class="form-control" 
            id="exampleFormControlInput1"
          />       
        </div>
        <label for="floatingTextarea" className="form-label">Write your message here:</label>
          <textarea
            type='text-area'
            name='message'
            placeholder='Your message'
            value={toSend.message}
            onChange={handleChange}
            class="form-control form-control-md"
            rows="3"                      
          />
          <div id="btn-div">
            <button type="submit" className="btn col-12 btn-primary" id="btn-submit-contact">Submit</button>
            </div>       
        </form>
      </div>
      </div>
    );
  } 

export default ContactForm;