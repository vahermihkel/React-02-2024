import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Button, TextField } from '@mui/material';

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_fum24bj', 'template_ld2lsyd', form.current, {
        publicKey: 'Xbn0xj_4LjNugxYGl',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      {/* <label>Name</label>
      <input type="text" name="from_name" /> */}
      <br />
      <TextField label="Name" variant="outlined" name="from_name" /> <br /><br />
      <TextField label="Email" variant="outlined" name="from_email" /> <br /><br />
      <TextField label="Message" variant="outlined" name="message" /> <br /><br />
      <Button variant="outlined" type="submit">Send</Button>
    </form>
  );
};