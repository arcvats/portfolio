import React, { useState } from "react";
import "./Projects.css";
import Modal from "./Modal";

export default function Projects() {
  const [isModalActive, setIsModalActive] = useState(null);
  const [type, setType] = useState(null);
  const handleModal = type => {
    if (isModalActive) {
      setIsModalActive(null);
    } else {
      setType(type);
      setIsModalActive("is-active");
    }
  };
  return (
    <section className="hero projects is-fullheight" id="projects">
      <div className="hero-body">
        <div className="container">
          <h1>Projects</h1>
          <div className="tile is-ancestor">
            <div className="tile is-parent is-vertical">
              <div className="tile is-child">
                <div className="box first">
                  <h2>securebox</h2>
                  <p>
                    Node application monitoring, stack tracing, benchmarking,
                    anomaly detection and auditing toolkit.
                  </p>
                  <div className="project-foot">
                    <div className="columns is-flex-mobile">
                      <div className="column git">
                        <a
                          href="https://github.com/arcvats/securebox"
                          aria-label="securebox github link"
                        >
                          <i className="fab fa-github" />
                        </a>
                      </div>
                      <div className="column other is-offset-1" />
                      <div className="column detail is-offset-1" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="tile is-child">
                <div className="box second">
                  <h2>securebox-dashboard</h2>
                  <p>
                    Dashboard for securebox toolkit. Displays graphs for
                    different parameters, shows audit information, traces,
                    anomalies and function benchmarks.
                  </p>
                  <div className="project-foot">
                    <div className="columns is-flex-mobile">
                      <div className="column git">
                        <a
                          href="https://github.com/arcvats/securebox-dashboard"
                          aria-label="securebox dashboard github link"
                        >
                          <i className="fab fa-github" />
                        </a>
                      </div>
                      <div className="column other is-offset-1" />
                      <div className="column detail">
                        <span
                          onClick={() => {
                            handleModal("secureboxDashboard");
                          }}
                        >
                          <i className="fas fa-info-circle" />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="tile is-parent is-vertical">
              <div className="tile is-child">
                <div className="box third">
                  <h2>tanzo</h2>
                  <p>
                    A minimal express-node based scaffolding library to create a
                    web application in a breeze.
                  </p>
                  <div className="project-foot">
                    <div className="columns is-flex-mobile">
                      <div className="column git">
                        <a
                          href="https://github.com/arcvats/tanzo"
                          aria-label="tanzo github link"
                        >
                          <i className="fab fa-github" />
                        </a>
                      </div>
                      <div className="column other">
                        <a
                          href="https://npmjs.com/package/tanzo"
                          aria-label="tanzo npm link"
                          className="npm"
                        >
                          <i className="fab fa-npm" />
                        </a>
                      </div>
                      <div className="column detail">
                        <span
                          onClick={() => {
                            handleModal("tanzo");
                          }}
                        >
                          <i className="fas fa-info-circle" />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tile is-child">
                <div className="box fourth">
                  <h2>unicon</h2>
                  <p>
                    A simple way to connect, create ideas and meetups, and
                    collaborate between different departments in a college.
                  </p>
                  <div className="project-foot">
                    <div className="columns is-flex-mobile">
                      <div className="column git">
                        <a
                          href="https://github.com/arcvats/unicon"
                          aria-label="tanzo github link"
                        >
                          <i className="fab fa-github" />
                        </a>
                      </div>
                      <div className="column other">
                        <a
                          href="http://uniconrides.herokuapp.com/"
                          aria-label="unicon website"
                          className="web"
                        >
                          <i className="fas fa-link" />
                        </a>
                      </div>
                      <div className="column detail">
                        <span
                          onClick={() => {
                            handleModal("unicon");
                          }}
                        >
                          <i className="fas fa-info-circle" />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="tile is-parent is-vertical">
              <div className="tile is-child">
                <div className="box fifth">
                  <h2>digecon</h2>
                  <p>
                    An IOT application to monitor devices, create a budget,
                    track electricity usage and get suggestions.
                  </p>
                  <div className="project-foot">
                    <div className="columns is-flex-mobile">
                      <div className="column git">
                        <a
                          href="https://github.com/arcvats/digecon"
                          aria-label="digecon github link"
                        >
                          <i className="fab fa-github" />
                        </a>
                      </div>
                      <div className="column is-offset-1" />
                      <div className="column detail">
                        <span
                          onClick={() => {
                            handleModal("digecon");
                          }}
                        >
                          <i className="fas fa-info-circle" />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tile is-child">
                <div className="box sixth">
                  <h2>chatterize</h2>
                  <p>
                    A simple chatting application/experiment to create channels,
                    chat rooms and private chats.
                  </p>
                  <div className="project-foot">
                    <div className="columns is-flex-mobile">
                      <div className="column git">
                        <a
                          href="https://github.com/arcvats/chatterize"
                          aria-label="chatterize github link"
                        >
                          <i className="fab fa-github" />
                        </a>
                      </div>
                      <div className="column is-offset-1" />
                      <div className="column is-offset-1" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="more">
            <a
              className="button is-outlined is-inverted is-rounded is-medium"
              href="https://github.com/arcvats"
            >
              More on &nbsp;
              <i className="fab fa-github" />
            </a>
          </div>
        </div>
      </div>
      <Modal
        isBox={false}
        heading={null}
        description={null}
        handleModal={handleModal}
        isActive={isModalActive}
        type={type}
      />
    </section>
  );
}
