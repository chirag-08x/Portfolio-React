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
        I’m Chirag, a Computer Science graduate from India with over 2 years of experience as a Frontend Developer. I specialize in building intuitive, high-performance user interfaces using modern frameworks and technologies. My passion lies in solving complex problems and delivering strategic solutions that contribute to meaningful business growth. I’m dedicated to staying current with the latest trends in software development to ensure my skills remain sharp and relevant in a fast-evolving industry.

        </p>
        <p className="info">
        I approach my work with enthusiasm and a strong sense of purpose. Challenges motivate me, and I constantly set new goals to push my abilities further. As an effective communicator, I prioritize clarity and collaboration, ensuring that everyone involved has the information they need to make informed decisions and achieve better results. I take pride in my work and strive to bring both technical excellence and a user-focused mindset to every project I take on.
        </p>
        <Link to={"/about"} className="btn about-btn">
          about me
        </Link>
      </article>
    </section>
  );
};

export default About;
