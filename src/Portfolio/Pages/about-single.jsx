import React, { useEffect } from "react";

const AboutSingle = () => {
  useEffect(() => {
    document.title = "Chirag || About";
  }, []);

  return (
    <section className="single-section">
      <section className="section-center about-single-center">
        <h1 className="title single-title">about me</h1>
        <div className="underline"></div>
        <p className="about-text">
          I am a 3rd year computer engineering student. I have been learning and
          practicing frontend from quiet a long time now and got a good hold of
          it. I love building websites and to work on new and interesting
          projects. I am really passionate about my work and love what I'm
          doing.I have a steady source of motivation that drives me to do my
          best. I thrive on challenge and constantly set goals for myself, so I
          have something to strive towards. I am an excellent communicator. I
          pride myself on making sure people have the right information because
          it drives better results.
        </p>
      </section>
    </section>
  );
};

export default AboutSingle;
