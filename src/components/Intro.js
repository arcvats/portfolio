import React, { useState } from "react";
import { Link } from "react-scroll";
import "./Intro.css";

export default function Intro() {
  const [active, setActive] = useState(false);
  const toggleActive = () => {
    setActive(!active);
  };
  return (
    <section className="hero intro is-fullheight">
      <div className="hero-head">
        <nav className="navbar" role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
            <a className="navbar-item" href="/#">
              <img
                src="/images/logo.svg"
                alt="logo for arcvats"
                width="50"
                height="20"
              />
            </a>

            <a
              role="button"
              className={`navbar-burger ${active ? "is-active" : ""}`}
              aria-label="menu"
              aria-expanded="false"
              href="/#"
              onClick={toggleActive}
            >
              <span aria-hidden="true" />
              <span aria-hidden="true" />
              <span aria-hidden="true" />
            </a>
          </div>
          <div className={`navbar-menu ${active ? "is-active" : ""}`}>
            <div className="navbar-end">
              <Link className="navbar-item" to="projects" smooth={true}>
                Projects
              </Link>
              <Link className="navbar-item" to="skills" smooth={true}>
                Skills
              </Link>
              <Link className="navbar-item" to="story" smooth={true}>
                My Story
              </Link>
              <a href="/#" className="navbar-item">
                Contact
              </a>
              <a
                href="https://github.com/arcvats"
                className="navbar-item is-hidden-desktop"
              >
                <i className="fab fa-github" />
              </a>
              <a
                href="https://linkedin.com/in/arcvats"
                className="navbar-item is-hidden-desktop"
              >
                <i className="fab fa-linkedin" />
              </a>
            </div>
          </div>
        </nav>
      </div>
      <div className="hero-body">
        <div className="container">
          <div className="icons">
            <i className="fas fa-utensils" />
            <i className="fas fa-bed" />
            <i className="fas fa-laptop-code" />
            <i className="fas fa-redo-alt" />
          </div>
          <h1 className="title">Hello,</h1>
          <h2 className="subtitle">
            I'm Archit, a Full Stack Web Developer based in Waterloo, Canada.
            <br />
            That was an Ice Breaker! Cool, You are still reading. I can tell you
            more about me then. <br />
            I'm an{" "}
            <Link to="story" smooth={true}>
              INTJ (you can click if you want)
            </Link>
            , loves reading, travelling, playing guitar and ... I forgot.
            <br />
            Did you just ask about my passion? I can define it in two words,
            <b>"Web Development"</b>. <br />
            Still curious, check out{" "}
            <Link to="story" smooth={true}>
              My Story
            </Link>{" "}
            to know more.
            <br />
          </h2>
          <div className="scroll">
            <Link to="projects" smooth={true}>
              <i className="fas fa-chevron-circle-down" />
            </Link>
          </div>
        </div>
      </div>
      <div className="hero-foot">
        <p>
          I know everyone hates scrolling. But, you might find something
          interesting.
        </p>
      </div>
    </section>
  );
}
