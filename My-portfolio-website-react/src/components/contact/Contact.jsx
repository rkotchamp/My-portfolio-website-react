import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useInView } from "react-intersection-observer";

import "./Contact.css";

function Contact() {
  const { ref: contRef, inView: contState } = useInView();
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_8mh3iti",
        "template_50zxe9g",
        form.current,
        "hgfHmT9565tq6OIWE"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <div className="contactContainer">
      <div className="contactAndLine">
        <div className="contactLine"></div>
        <h2>Contact</h2>
      </div>

      <form ref={form} onSubmit={sendEmail} className="form">
        <div className="inputContainers">
          <input
            type="text"
            name="from_name"
            placeholder="Full Name"
            className="inputs"
          />
        </div>
        <div className="inputContainers">
          <input
            type="email"
            name="email"
            placeholder="E-mail"
            className="inputs"
          />
        </div>
        <div className="inputContainers">
          <textarea name="message" placeholder="Message" className="textarea" />
        </div>
        <div className="inputContainers">
          <input type="submit" value="Send" className="sendButton" />
        </div>
      </form>
    </div>
  );
}

export default Contact;
