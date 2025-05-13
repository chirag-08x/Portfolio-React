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
        I’m Chirag Agrawal, a Frontend Developer with over 2 years of hands-on experience building scalable, high-performance web applications using modern technologies like React.js, Next.js, TypeScript, Redux, and Tailwind CSS. I’ve contributed to impactful projects across diverse domains, from financial services to educational platforms, and have worked in both fast-paced startups and structured remote teams. My professional journey includes designing reusable UI components, optimizing web performance using techniques like lazy loading and memoization, integrating ML-powered tools, and collaborating cross-functionally to deliver robust, user-centered solutions. I’m also skilled in state management with Redux and Zustand, API integration, and test automation with Cypress.
        </p>
        
        <p className="about-text">
        I bring a strong foundation in Computer Science, with a B.Tech degree from Ajeenkya DY Patil University and certifications in Data Structures, JavaScript, and React-based development. Outside of work, I actively engage in sports and recreational activities that help me stay balanced and focused. I enjoy swimming, playing snooker, and have recently developed a keen interest in Pickleball. These activities keep me mentally sharp and physically active, reinforcing the discipline and strategic thinking I bring to my professional life. I’m passionate about continuous learning and thrive in environments that challenge me to grow and innovate.
        </p>
      </section>
    </section>
  );
};

export default AboutSingle;
