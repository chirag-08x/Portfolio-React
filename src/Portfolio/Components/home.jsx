import { externalLinks } from "../data.js";
import { Link } from "react-router-dom";
import SocialIcons from "./socialIcons.jsx";

import About from "./about";
import Services from "./services";
import Projects from "./projects.jsx";
import Connect from "./connect.jsx";
import Skills from "./skills.jsx";
import Timeline from "./timeline.jsx";

import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    document.title = "Chirag";
  }, []);

  return (
    <>
      <section className="home-page">
        <article className="section-center hero-home">
          <article className="user-info">
            <div className="overline"></div>
            <h1 className="user-name">I'm chirag</h1>
            <h5 className="subtitle">
              frontend developer and database designer
            </h5>
            <Link to={"/contact"} className="btn about-btn">
              hire me
            </Link>
            {/* <SocialIcons
              externalLinks={externalLinks}
              classname="social-icons"
            /> */}
            <SocialIcons
              externalLinks={externalLinks}
              classname="social-icons"
            />
          </article>
          <article className="user-img">
            <figure className="user-img-container">
              <img src="./images/hero-img.jpeg" alt="" className="user-image" />
            </figure>
          </article>
        </article>
      </section>

      <About />
      <Services />
      <Projects />
      <Connect />
      <Skills />
      <Timeline />
      {/* <Footer /> */}
    </>
  );
};

export default Home;

// export const SocialIcons = ({ externalLinks }) => {
//   return (
//     <article className="social-icons">
//       {externalLinks.map((social) => {
//         const { id, icon, navigate } = social;
//         return (
//           <a key={id} href={navigate} target="_blank">
//             {icon}
//           </a>
//         );
//       })}
//     </article>
//   );
// };
