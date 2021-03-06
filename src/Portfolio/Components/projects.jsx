import { projects } from "../helper/data.js";
import React from "react";

const Projects = () => {
  return (
    <section className="projects">
      <section className="section-center project-center">
        <article className="project-title">
          <h1 className="title project-title">projects</h1>
          <div className="underline project-underline"></div>
          <p className="project-subtitle">
            Projects are the best way to test out your skills and how much you
            have learned so far. Here are some of the projects that I have
            build. You can find my other projects under Projects section.
          </p>
        </article>

        <article className="project-tiles">
          {projects.map((project, index) => {
            const { id, image, title, path } = project;
            return (
              <div key={id} className={`single-project project-${index + 1}`}>
                <a
                  href={path}
                  className="project-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={image} alt="project" className="home-project" />
                </a>
                <p className="project-name">{title}</p>
              </div>
            );
          })}
        </article>
      </section>
    </section>
  );
};

export default Projects;
