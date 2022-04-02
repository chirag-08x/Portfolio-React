import { projects } from "../helper/data.js";

const Projects = () => {
  return (
    <section className="projects">
      <section className="section-center project-center">
        <article className="project-title">
          <h1 className="title project-title">projects</h1>
          <div className="underline project-underline"></div>
          <p className="project-subtitle">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            repudiandae cupiditate ea facilis incidunt, non sapiente! Debitis
            magnam, earum assumenda obcaecati cum quaerat facere ratione
            molestiae dignissimos aliquid blanditiis architecto voluptates
            delectus voluptate animi nulla! Autem explicabo perspiciatis officia
            ea.
          </p>
        </article>

        <article className="project-tiles">
          {projects.map((project, index) => {
            const { id, image, title, path } = project;
            return (
              <div key={id} className={`single-project project-${index + 1}`}>
                <a href={path} className="project-link">
                  <img src={image} alt="" />
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
