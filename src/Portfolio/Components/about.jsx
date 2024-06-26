import { Link } from "react-router-dom";
import React from "react";

const About = () => {
  return (
    <section className="section-center about">
      <article className="about-img-container">
        <figure className="about-hero-img">
          {/* <img src="./images/hero-main.png" alt="about" className="about-img" /> */}
          <img src="./images/about4.jpg" alt="about" className="about-img" />
        </figure>
      </article>
      <article className="about-info-container">
        <h1 className="title">about</h1>
        <div className="underline"></div>
        <p className="info">
          I'm Chirag, a Computer Science graduate from India, passionate about
          tackling complex problems to drive business growth through strategic
          solutions. I have more than 1 year of experience as a Frontend
          Developer.I am committed to staying updated with the latest trends and
          technologies in software development, ensuring that I remain at the
          forefront of the field.
        </p>
        <p className="info">
          I am really passionate about my work and love what I'm doing.I have a
          steady source of motivation that drives me to do my best. I thrive on
          challenge and constantly set goals for myself, so I have something to
          strive towards. I am an excellent communicator. I pride myself on
          making sure people have the right information because it drives better
          results.
        </p>
        <Link to={"/about"} className="btn about-btn">
          about me
        </Link>
      </article>
    </section>
  );
};

export default About;
