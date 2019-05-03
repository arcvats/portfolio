import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Contact.css";

export default function Contact() {
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isMessageValid, setIsMessageValid] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const handleInputs = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const { name, email, message } = formData;

  const handleSubmit = e => {
    e.preventDefault();
    axios
      .post("/.netlify/functions/mailer", formData)
      .then(data => {
        console.log(data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  useEffect(() => {
    const isValidEmail = email.match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
    if (isValidEmail) {
      setIsEmailValid(true);
    } else {
      setIsEmailValid(false);
    }
    if (message.length) {
      setIsMessageValid(true);
    } else {
      setIsMessageValid(false);
    }
    if (isValidEmail && message.length) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  }, [email, message.length]);

  return (
    <section className="hero is-fullheight contact" id="contact">
      <div className="hero-body">
        <div className="container">
          <h1>Say Hi!</h1>
          <p>thanks</p>
          <div className="columns is-centered">
            <div className="column is-half">
              <form className="contact-form">
                <div className="field">
                  <div className="control">
                    <input
                      className="input is-large"
                      type="text"
                      placeholder="Name"
                      onChange={handleInputs}
                      name="name"
                      value={name}
                    />
                  </div>
                </div>
                <div className="field">
                  <div className="control">
                    <input
                      className="input is-large"
                      type="email"
                      name="email"
                      placeholder="Email"
                      value={email}
                      onChange={handleInputs}
                    />
                  </div>
                  <p className={isEmailValid ? "is-hidden" : "help is-danger"}>
                    Email should be like "example@example.com".
                  </p>
                </div>
                <div className="field">
                  <div className="control">
                    <textarea
                      className="textarea is-large"
                      placeholder="Message"
                      name="message"
                      value={message}
                      onChange={handleInputs}
                    />
                  </div>
                  <p
                    className={isMessageValid ? "is-hidden" : "help is-danger"}
                  >
                    Message is required.
                  </p>
                </div>
                <div className="field">
                  <div className="control">
                    <button
                      className={`button is-link is-outlined is-fullwidth is-medium ${
                        isFormValid ? "" : "is-disabled"
                      }`}
                      disabled={isFormValid ? "" : "disabled"}
                      onSubmit={handleSubmit}
                    >
                      SEND MESSAGE <i className="fas fa-paper-plane" />
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
