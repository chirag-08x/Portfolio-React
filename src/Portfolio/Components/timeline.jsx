import { timeline } from "../helper/data.js";

const Timeline = () => {
  return (
    <section className="section-center timeline-center">
      <h1 className="title timeline-title">timeline</h1>
      <div className="underline timeline-underline"></div>

      <article className="timeline-container">
        {timeline.map((item, index) => {
          const { id, year, text } = item;
          return (
            <div key={id} className="single-timeline">
              <h5 className="year">{year}</h5>
              <p className="year-text">{text}</p>
              <p className="index">{index + 1}</p>
            </div>
          );
        })}
      </article>
    </section>
  );
};

export default Timeline;
