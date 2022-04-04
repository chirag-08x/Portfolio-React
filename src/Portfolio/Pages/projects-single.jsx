import projects from "../helper/projects-data.js";
import { v4 as uuidv4 } from "uuid";
import { FaGithub, FaHome } from "react-icons/fa";
import { useEffect } from "react";

const ProjectSingle = () => {
  useEffect(() => {
    document.title = "Chirag || Projects";
  }, []);
  return (
    <section className="single-project-section">
      <article className="single-project-title">
        <h1 className="title single-title">my projects</h1>
        <div className="underline single-project-underline"></div>
      </article>
      <section className="section-center projects-single-center">
        <article className="all-projects">
          {projects.map((project) => {
            if (Array.isArray(project)) {
              return (
                <h2 key={uuidv4()} className="project-single-title">
                  {project[0]}
                </h2>
              );
            } else {
              const { name, path, text, github, image } = project;
              return (
                <div key={uuidv4()} className="project-single">
                  <figure className="single-project-img">
                    <img src={image} alt={name} />
                  </figure>
                  <FaHome className="home-icon" />
                  <div className="project-info">
                    <a
                      href={path}
                      className="name"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {name}
                    </a>
                    <p className="project-text">{text}</p>
                    <div className="github-link">
                      <a href={github} target="_blank" rel="noreferrer">
                        <FaGithub />
                      </a>
                      <p>source code</p>
                    </div>
                  </div>
                </div>
              );
            }
          })}
        </article>
      </section>
    </section>
  );
};
export default ProjectSingle;
