import { FaCode, FaDatabase, FaGem } from "react-icons/fa";

const Services = () => {
  return (
    <section className="services">
      <section className="section-center">
        <article className="title-container">
          <h1 className="title service-title">services</h1>
          <div className="underline service-underline"></div>
        </article>

        <article className="service-tiles">
          <div className="tile">
            <FaCode className="service-icon" />
            <h4>web development</h4>
            <div className="underline service-underline tile-underline"></div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates corrupti animi saepe quasi excepturi cupiditate
              voluptate dolor sed obcaecati vero.
            </p>
          </div>

          <div className="tile">
            <FaGem className="service-icon" />
            <h4>UI Designer</h4>
            <div className="underline service-underline tile-underline"></div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates corrupti animi saepe quasi excepturi cupiditate
              voluptate dolor sed obcaecati vero.
            </p>
          </div>

          <div className="tile">
            <FaDatabase className="service-icon" />
            <h4>Database Developer</h4>
            <div className="underline service-underline tile-underline"></div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates corrupti animi saepe quasi excepturi cupiditate
              voluptate dolor sed obcaecati vero.
            </p>
          </div>
        </article>
      </section>
    </section>
  );
};

export default Services;
