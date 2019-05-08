import React, { useState, useEffect } from "react";
import axios from "axios";
import Placeholder from "./Placeholder";
import "./Contact.css";

export default function Contact() {
  const [isFormValid, setIsFormValid] = useState(false);
  const [status, setStatus] = useState(0);
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
    setStatus(1);
    axios
      .post("/.netlify/functions/mailer", formData)
      .then(data => {
        if (data.status === 200) {
          setStatus(2);
        }
        if (data.status === 400) {
          setStatus(3);
        }
      })
      .catch(err => {
        setStatus(3);
      });
  };

  useEffect(() => {
    const isValidEmail = email.match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
    if (isValidEmail && message.length) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  }, [email, message.length]);

  const form = (
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
            title="Enter name"
          />
        </div>
      </div>
      <div className="field">
        <div className="control">
          <input
            className="input is-large"
            type="email"
            name="email"
            placeholder="Email (abc@example.com)"
            value={email}
            onChange={handleInputs}
            title="Enter email"
          />
        </div>
      </div>
      <div className="field">
        <div className="control">
          <textarea
            className="textarea is-large"
            placeholder="Message (Required)"
            name="message"
            value={message}
            onChange={handleInputs}
            title="Enter message"
          />
        </div>
      </div>
      <div className="field">
        <div className="control">
          <button
            className={`button is-link is-outlined is-fullwidth is-medium ${
              isFormValid ? "" : "is-disabled"
            }`}
            disabled={isFormValid ? "" : "disabled"}
            onClick={handleSubmit}
            title="Send message"
          >
            SEND MESSAGE <i className="fas fa-paper-plane" />
          </button>
        </div>
      </div>
    </form>
  );

  const success = (
    <h1 class="successful">Thankyou! Your message was sent successfully.</h1>
  );

  const fail = (
    <h1 className="wentwrong">
      Sorry, something went wrong. <br />
      Please refresh the page and try again or you can contact me via linkedIn.
    </h1>
  );

  const getField = () => {
    if (status === 0) {
      return form;
    } else if (status === 1) {
      return (
        <div className="placeholder-loading">
          <Placeholder />
        </div>
      );
    } else if (status === 2) {
      return success;
    } else {
      return fail;
    }
  };

  return (
    <section className="hero is-fullheight contact" id="contact">
      <div className="hero-body">
        <div className="container">
          <h1>Say Hi!</h1>
          <div className="columns is-centered">
            <div className="column is-half">
              <p>
                Thank you for visiting. I hope you liked my portfolio. If you
                have any suggestions or want to say "Hello", please send me a
                message by filling the contact form.{" "}
              </p>
              {getField()}
            </div>
          </div>
        </div>
      </div>
      <div className="hero-foot">
        <p className="is-centered">
          Built with React <i className="fab fa-react" />, Node{" "}
          <i className="fab fa-node-js" />, Bulma{" "}
          <i className="fab fa-css3-alt" />, AWS Lambda{" "}
          <i className="fab fa-aws" /> and Netlify.{" "}
          <span className="contact-mobile is-hidden-desktop">
            <a href="https://linkedin.com/in/arcvats" aria-label="linked in">
              <i className="fab fa-linkedin" />
            </a>{" "}
            <a href="https://github.com/arcvats" aria-label="github">
              <i className="fab fa-github" />
            </a>
          </span>
        </p>
      </div>
    </section>
  );
}
