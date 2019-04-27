import React from "react";
import "./Skills.css";
import Carousel from "./Carousel";
import { languages, databases, frameworks, others } from "./SkillsHelper";

export default function Skills() {
  return (
    <section className="hero skills is-fullheight" id="skills">
      <div className="hero-head">
        <p>
          Legend(for the image caption): G(Good), C(Comfortable), F(Familiar)
        </p>
      </div>
      <div className="hero-body">
        <div className="container">
          <h1>Technologies I Know.</h1>
          <div className="tile is-ancestor">
            <div className="tile is-4 is-vertical is-parent">
              <div className="tile is-child box">
                <h2>Languages</h2>
                <Carousel
                  fields={languages}
                  options={{ isAuto: true, time: 2000, columns: 4 }}
                />
              </div>
              <div className="tile is-child box">
                <h2>DB, Cache & Queue</h2>
                <Carousel fields={databases} options={{ columns: 4 }} />
              </div>
            </div>
            <div className="tile is-parent is-5 is-vertical">
              <div className="tile is-child box">
                <h2>Frameworks & Tools</h2>
                <Carousel
                  fields={frameworks}
                  options={{ isAuto: true, time: 2000, columns: 4 }}
                />
              </div>
              <div className="tile is-child box">
                <h2>Others</h2>
                <Carousel fields={others} options={{ columns: 5 }} />
              </div>
            </div>
            <div className="tile is-parent is-vertical">
              <div className="tile is-child box">
                <h2>Other Skills</h2>
                <table>
                  <tbody>
                    <tr>
                      <td>
                        <i className="fas fa-sitemap" />
                      </td>
                      <td>Data Structures & Algorithms</td>
                    </tr>
                    <tr>
                      <td>
                        <i className="fas fa-layer-group" />
                      </td>
                      <td>System Design</td>
                    </tr>
                    <tr>
                      <td>
                        <i className="fas fa-cogs" />
                      </td>
                      <td>Operating Systems</td>
                    </tr>
                    <tr>
                      <td>
                        <i className="fas fa-language" />
                      </td>
                      <td>Compilers & Interpreters</td>
                    </tr>
                    <tr>
                      <td>
                        <i className="fas fa-puzzle-piece" />
                      </td>
                      <td>Design Patterns</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <h1>Organizations</h1>
          <div className="tile is-ancestor organizations">
            <div className="tile is-parent is-vertical">
              <div className="is-child box">
                <div className="columns is-flex-mobile">
                  <figure className="column is-half">
                    <img src="/images/isoc.png" alt="Internet Society" />
                  </figure>
                  <figure className="column is-half">
                    <img src="/images/osi.png" alt="Open Source Initiative" />
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
