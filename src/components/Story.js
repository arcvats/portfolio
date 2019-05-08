import React from "react";
import "./Story.css";

export default function Story() {
  return (
    <section className="hero is-fullheight story" id="story">
      <div className="hero-head">
        <p>CAUTION: A lot of technical jargon ahead!</p>
      </div>
      <div className="hero-body">
        <div className="container">
          <h1>My Story</h1>
          <div className="timeline is-centered">
            <header className="timeline-header">
              <span className="tag is-primary">Begin</span>
            </header>
            <div className="timeline-item is-warning">
              <div className="timeline-marker is-warning is-icon">
                <i className="fas fa-code" />
              </div>
              <div className="timeline-content">
                <p className="heading">2005</p>
                <p>
                  Saw a C program running first time. Struggled with the syntax.
                </p>
              </div>
            </div>
            <header className="timeline-header">
              <span className="tag is-primary">Certification</span>
            </header>
            <div className="timeline-item is-warning">
              <div className="timeline-marker is-warning is-icon">
                <i className="fas fa-code" />
              </div>
              <div className="timeline-content">
                <p className="heading">2008</p>
                <p>
                  Got my first C language certification. Printed stars, found
                  leap years.
                </p>
              </div>
            </div>
            <header className="timeline-header">
              <span className="tag is-primary">Intermediate</span>
            </header>
            <div className="timeline-item is-warning">
              <div className="timeline-marker is-warning is-icon">
                <i className="fas fa-code" />
              </div>
              <div className="timeline-content">
                <p className="heading">2010-2011</p>
                <p>
                  Took C++ as an optional subject in intermediate grade. My
                  first OOP experience.
                </p>
              </div>
            </div>
            <header className="timeline-header">
              <span className="tag is-primary">Undergraduation</span>
            </header>
            <div className="timeline-item is-warning">
              <div className="timeline-marker is-warning is-icon">
                <i className="fas fa-code" />
              </div>
              <div className="timeline-content">
                <p className="heading">2012-2016</p>
                <p>
                  Learned fundamentals of Computer Science. My first encounter
                  with MVC and design patterns. PHP, Ruby, JS, Rails happened.
                </p>
              </div>
            </div>
            <header className="timeline-header">
              <span className="tag is-primary">Software Engineer</span>
            </header>
            <div className="timeline-item is-warning">
              <div className="timeline-marker is-warning is-icon">
                <i className="fas fa-code" />
              </div>
              <div className="timeline-content">
                <p className="heading">2016</p>
                <p>
                  Worked on PHP, Node, JS, Python, C. A lot of context
                  switching, optimizations, frameworks and tools.
                </p>
              </div>
            </div>
            <header className="timeline-header">
              <span className="tag is-primary">Consultant</span>
            </header>
            <div className="timeline-item is-warning">
              <div className="timeline-marker is-warning is-icon">
                <i className="fas fa-code" />
              </div>
              <div className="timeline-content">
                <p className="heading">2017</p>
                <p>
                  Highly performant and end-to-end web application for a budding
                  startup. Worked hugely on concurrency and IO.
                </p>
              </div>
            </div>
            <header className="timeline-header">
              <span className="tag is-primary">Post Graduation</span>
            </header>
            <div className="timeline-item is-warning">
              <div className="timeline-marker is-warning is-icon">
                <i className="fas fa-code" />
              </div>
              <div className="timeline-content">
                <p className="heading">2017-2019</p>
                <p>
                  Advanced application development principles. Spoke at Cyber
                  Security Workshop. Received scholarship and awards for
                  academics.
                </p>
              </div>
            </div>
            <header className="timeline-header">
              <span className="tag is-primary">Full Stack Developer</span>
            </header>
            <div className="timeline-item is-warning">
              <div className="timeline-marker is-warning is-icon">
                <i className="fas fa-code" />
              </div>
              <div className="timeline-content">
                <p className="heading">During Postgraduation</p>
                <p>
                  Created guidelines for code structure and commenting,
                  refactored services for performance and designed system
                  architecture for APIs.
                </p>
              </div>
            </div>
            <header className="timeline-header">
              <span className="tag is-primary">Node.js Developer</span>
            </header>
            <div className="timeline-item is-warning">
              <div className="timeline-marker is-warning is-icon">
                <i className="fas fa-code" />
              </div>
              <div className="timeline-content">
                <p className="heading">During Postgraduation</p>
                <p>
                  Worked on Canvas for touch based devices(Did a lot of matrix
                  transformations). Monkey patched touring library, optimized
                  back-end and implemented microservices.
                </p>
              </div>
            </div>
            <header className="timeline-header">
              <span className="tag is-primary">Present</span>
            </header>
          </div>
        </div>
      </div>
    </section>
  );
}
