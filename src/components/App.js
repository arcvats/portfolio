import React from "react";
import Intro from "./Intro";
import Skills from "./Skills";
import Story from "./Story";
import Projects from "./Projects";
import "./App.css";

export default function App() {
  return (
    <main>
      <Intro />
      <Projects />
      <Skills />
      <Story />
      <div className="social-media is-hidden-mobile">
        <p>
          <a href="https://github.com/arcvats">
            <i className="fab fa-github" />
          </a>
        </p>

        <p>
          <a href="https://linkedin.com/in/arcvats">
            <i className="fab fa-linkedin" />
          </a>
        </p>
      </div>
    </main>
  );
}
