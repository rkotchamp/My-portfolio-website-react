import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

import "./Contact.css";

function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        form.current,
        "YOUR_PUBLIC_KEY"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="contactContainer">
      <div className="contactAndLine">
        <div className="contactLine"></div>
        <h2>Contact</h2>
      </div>

      <form ref={form} onSubmit={sendEmail} className="form">
        <div className="inputContainers">
          <input type="text" name="user_name" placeholder="Name" />
        </div>
        <div className="inputContainers">
          <input type="email" name="user_email" placeholder="E-mail" />
        </div>
        <div className="inputContainers">
          <textarea name="message" placeholder="Message" />
        </div>
        <div className="inputContainers">
          <input type="submit" value="Send" />
        </div>
      </form>
    </div>
  );
}

export default Contact;
