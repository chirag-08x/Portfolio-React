import React, { useEffect } from "react";

const AboutSingle = () => {
  useEffect(() => {
    document.title = "Chirag || About";
  }, []);

  return (
    <section className="about-single-section">
      <section className="section-center about-single-center">
        <h1 className="title single-title">about me</h1>
        <div className="underline"></div>
        <p className="about-text">
          I'm Chirag, a Computer Science graduate from India, passionate about
          tackling complex problems to drive business growth through strategic
          solutions. My experience as a Frontend Developer at AZODHA and MICRO
          has equipped me with a strong foundation in crafting intuitive user
          interfaces and enhancing user experiences. Currently, I am channeling
          my expertise as a full-time Frontend Developer at a startup called
          Evivve, where I am actively involved in shaping the digital presence
          and user interaction strategies. As I aspire to transition into a
          Software Engineer role, I aim to leverage my skills and collaborate
          with diverse teams to deliver innovative solutions that make a
          significant impact.
        </p>
        <p className="about-text">
          Beyond my professional endeavors, I find relaxation and inspiration in
          activities such as swimming, snooker, and cricket. These hobbies not
          only provide me with a break from work but also contribute to
          maintaining a balanced lifestyle, essential for sustained productivity
          and creativity. With a focus on continuous learning and upskilling, I
          am committed to staying updated with the latest trends and
          technologies in software development, ensuring that I remain at the
          forefront of the field.
        </p>
      </section>
    </section>
  );
};

export default AboutSingle;
