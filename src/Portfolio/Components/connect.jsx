import { Link } from "react-router-dom";

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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ratione
          perferendis exercitationem sit. Beatae eius commodi officiis rem
          soluta ratione dignissimos quisquam tempore laudantium, porro vitae
          cupiditate dicta magni quas corrupti aperiam, rerum minus odio totam
          repellendus delectus nostrum veniam!
        </p>
        <Link to={"/contact"} className="btn connect-btn">
          contact me
        </Link>
      </article>
    </section>
  );
};

export default Connect;
