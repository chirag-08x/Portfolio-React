import { Link } from "react-router-dom";
import React from "react";

const Connect = () => {
  return (
    <section className="connect-center">
      <video
        className="connect-video"
        src="./videos/connect.mp4"
        autoPlay
        loop
        muted
      ></video>

      <article className="connect-info">
        <h1 className="title">let's get in touch</h1>
        <div className="underline connect-underline"></div>
        <p className="subtitle connect-subtitle">
          If you are trying to get a hold of me you can click on the button
          given below which will redirect you to a form which you can fill to
          contact me. Also I am currently open to work, if you have something
          for me, feel free to connect with me. You can also connect with me on
          social media apps, links of those apps are given in footer.
        </p>
        <Link to={"/contact"} className="btn connect-btn">
          contact me
        </Link>
      </article>
    </section>
  );
};

export default Connect;
