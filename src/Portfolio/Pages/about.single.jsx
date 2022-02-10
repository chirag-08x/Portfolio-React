import { useEffect } from "react";

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
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam
          veritatis officia, ipsa illo unde hic vel aliquam nobis corporis
          dolores pariatur soluta magnam quod voluptates voluptatum placeat
          excepturi quisquam non similique repellat quia sint corrupti. Itaque
          at recusandae possimus perferendis dolorem saepe porro error quasi
          temporibus provident totam magnam, iste vitae!
        </p>
      </section>
    </section>
  );
};

export default AboutSingle;
