import { frontend } from "../helper/data.js";
import { otherskills } from "../helper/data.js";

const Skills = () => {
  return (
    <section className="skills-main">
      <section className="section-center skills-center">
        <h1 className="title skills-title">skills</h1>
        <div className="underline skill-underline"></div>

        <article className="skills">
          <div className="frontend-skills skills-container">
            <h1 className="skill-title">front end</h1>
            <div className="skill-container">
              {frontend.map((skill) => {
                const { id, title, percent } = skill;
                return (
                  <div key={id} className="single-skill">
                    <p className="skill-name">{title}</p>
                    <div className="percent" style={{ left: `${percent}` }}>
                      {percent}
                    </div>
                    <div className="skill">
                      <div style={{ width: `${percent}` }}></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="other-skills skills-container">
            <h1 className="skill-title">other skills</h1>
            <div className="skill-container">
              {otherskills.map((skill) => {
                const { id, title, percent } = skill;
                return (
                  <div key={id} className="single-skill">
                    <p className="skill-name">{title}</p>
                    <div className="percent" style={{ left: `${percent}` }}>
                      {percent}
                    </div>
                    <div className="skill">
                      <div style={{ width: `${percent}` }}></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </article>
      </section>
    </section>
  );
};

export default Skills;
