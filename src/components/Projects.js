import React from "react";
import "./Projects.css";

export default function Projects() {
  return (
    <section className="hero projects is-fullheight" id="projects">
      <div className="hero-body">
        <div className="container">
          <h1>Projects</h1>
          <div className="tile is-ancestor">
            <div className="tile is-parent is-vertical">
              <div className="tile is-child">
                <div className="box">
                  <h2>securebox</h2>
                </div>
              </div>
              <div className="tile is-child">
                <div className="box">
                  <h2>securebox-dashboard</h2>
                </div>
              </div>
            </div>
            <div className="tile is-parent is-vertical">
              <div className="tile is-child">
                <div className="box">
                  <h2>tanzo</h2>
                </div>
              </div>
              <div className="tile is-child">
                <div className="box">
                  <h2>unicon</h2>
                </div>
              </div>
            </div>
            <div className="tile is-parent is-vertical">
              <div className="tile is-child">
                <div className="box">
                  <h2>digecon</h2>
                </div>
              </div>
              <div className="tile is-child">
                <div className="box">
                  <h2>chatterize</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="more">
            <a
              className="button is-link is-outlined is-inverted is-rounded is-medium"
              href="https://github.com/arcvats"
            >
              More on &nbsp;
              <i className="fab fa-github" />
            </a>
          </div>
          <h1>Work History</h1>
          <div className="companies">
            <div className="columns">
              <div className="column is-3">
                <p className="company">JustPlay, CA</p>
                <p className="designation">Node.js Developer</p>
                <p className="tofrom">(May 2018-Dec 2018)</p>
              </div>
              <div className="column is-1">
                <i className="fas fa-chevron-circle-left" />
              </div>
              <div className="column is-3">
                <p className="company">Conestoga College, CA</p>
                <p className="designation">Research Student-Developer</p>
                <p className="tofrom">(Feb 2018-Apr 2018)</p>
              </div>
              <div className="column is-1">
                <i className="fas fa-chevron-circle-left" />
              </div>
              <div className="column is-3">
                <p className="company">PayU Payments, IN</p>
                <p className="designation">Software Engineer</p>
                <p className="tofrom">(Jan 2016-Oct 2016)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
