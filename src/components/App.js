import React from "react";
import Intro from "./Intro";
import Skills from "./Skills";
import Story from "./Story";
import Projects from "./Projects";
import Contact from "./Contact";
import "./App.css";

export default function App() {
  return (
    <main>
      <Intro />
      <Projects />
      <Skills />
      <Story />
      <Contact />
      <div className="social-media is-hidden-mobile">
        <p>
          <a
            href="https://github.com/arcvats"
            aria-label="Link to Github profile"
          >
            <i className="fab fa-github" />
          </a>
        </p>

        <p>
          <a
            href="https://linkedin.com/in/arcvats"
            aria-label="Link to Linkedin profile"
          >
            <i className="fab fa-linkedin" />
          </a>
        </p>
      </div>
    </main>
  );
}
