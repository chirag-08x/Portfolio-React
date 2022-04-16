import { Link } from "react-router-dom";
import React from "react";

const About = () => {
  return (
    <section className="section-center about">
      <article className="about-img-container">
        <figure className="about-hero-img">
          <img
            src="./images/about-img.jpeg"
            alt="about"
            className="about-img"
          />
        </figure>
      </article>
      <article className="about-info-container">
        <h1 className="title">about</h1>
        <div className="underline"></div>
        <p className="info">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quae,
          eum maiores est enim earum fugiat aspernatur. Fuga qui iste amet
          reiciendis possimus rerum omnis recusandae molestias error
          consequuntur, doloribus inventore reprehenderit officiis. Dolore aut,
          repellendus eius fugiat numquam cumque.
        </p>
        <p className="info">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quae,
          eum maiores est enim earum fugiat aspernatur. Fuga qui iste amet
          reiciendis possimus rerum omnis recusandae molestias error
          consequuntur, doloribus inventore reprehenderit officiis. Dolore aut,
          repellendus eius fugiat numquam cumque.
        </p>
        <Link to={"/about"} className="btn about-btn">
          about me
        </Link>
      </article>
    </section>
  );
};

export default About;
