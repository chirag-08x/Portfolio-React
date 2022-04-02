import { useRef } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import data from "../helper/data.js";
import { externalLinks } from "../helper/data.js";
import SocialIcons from "./socialIcons.jsx";

const Navbar = () => {
  const refContainer = useRef(null);
  const heightContainer = useRef(null);

  // useEffect(() => {
  //   const navHeight = heightContainer.current.getBoundingClientRect().height;
  //   const offset = window.pageYOffset;
  //   if (offset > navHeight) {
  //     heightContainer.current.classList.add("fix-navbar");
  //   }
  // }, []);

  const toggleSidebar = (type) => {
    if (type === "show") {
      refContainer.current.classList.add("show-sidebar");
    } else {
      refContainer.current.classList.remove("show-sidebar");
    }
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <article className="nav-header">
          <div className="logo-container">
            <img src="./images/logo.svg" alt="CHIRAG" />
          </div>
          <button
            type="button"
            className="bars"
            onClick={() => toggleSidebar("show")}
          >
            <FaBars />
          </button>
        </article>

        <aside className="nav-body" ref={refContainer}>
          <div className="close-btn-container">
            <button
              type="button"
              className="close-btn"
              onClick={() => toggleSidebar("hide")}
            >
              <FaTimes />
            </button>
          </div>
          <ul className="nav-links">
            {data.map((item) => {
              const { id, name, path } = item;
              return (
                <li key={id} className="nav-link">
                  <Link to={path}>{name}</Link>
                </li>
              );
            })}
          </ul>
          <SocialIcons externalLinks={externalLinks} classname="nav-icons" />
        </aside>
      </div>
    </nav>
  );
};

export default Navbar;
