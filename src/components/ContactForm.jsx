import React, { useRef } from "react";
import { ReactComponent as RightArrowIcon } from "../assets/icons/reshot-icon-right-arrow-UCA8NGYZDJ.svg";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_gycy5d5", "template_vrll5jd", form.current, {
        publicKey: "RqD6enRNg6G5Of1vw",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <div className="contact-form-section-container d-flex flex-column">
      <h1>
        <span>¿Quieres hablar?</span>
        <br></br>
        Contáctame.
      </h1>
      <form ref={form} onSubmit={sendEmail}>
        <div className="email-input d-flex">
          <input
            type="email"
            name="email"
            placeholder="Tu email"
            className="form-control"
            required
          ></input>
          <button type="submit">
            {" "}
            <RightArrowIcon height={20} />
          </button>
        </div>
      </form>
      <p>
        Contáctame para cualquier consulta, duda o propuesta de colaboración.
      </p>
    </div>
  );
};

export default ContactForm;
