// 768px hide sidebar
import styled from "styled-components";
import { FaBars, FaTimes } from "react-icons/fa";
import data from "../helper/data.js";
import { Link } from "react-router-dom";
import SocialIcons from "./socialIcons.jsx";
import { externalLinks } from "../helper/data.js";
import React, { useRef } from "react";

const Sidebar = () => {
  const refContainer = useRef(null);

  const toggleSidebar = (type) => {
    if (type === "show") {
      refContainer.current.classList.add("show-sidebar");
    } else {
      refContainer.current.classList.remove("show-sidebar");
    }
  };

  return (
    <Wrapper>
      <article className="sidebar-header">
        <img src="./images/logo.svg" alt="CHIRAG" />
        <button onClick={() => toggleSidebar("show")}>
          <FaBars />
        </button>
      </article>

      <article className="sidebar-info" ref={refContainer}>
        <button onClick={() => toggleSidebar("hide")}>
          <FaTimes />
        </button>

        <ul className="nav-links">
          {data.map((item) => {
            const { id, name, path } = item;
            return (
              <li
                key={id}
                className="nav-link"
                onClick={() => toggleSidebar("hide")}
              >
                <Link to={path}>{name}</Link>
              </li>
            );
          })}
        </ul>

        <SocialIcons externalLinks={externalLinks} />
      </article>
    </Wrapper>
  );
};

const Wrapper = styled.aside`
  @media (min-width: 768px) {
    display: none;
  }

  .sidebar-header {
    img {
      width: 10rem;
      margin-left: -0.25rem;
    }

    button {
      background: transparent;
      border: none;
      font-size: 2rem;
    }

    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem 1rem;
  }

  .sidebar-info {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    background-color: var(--clr-lightgrey2);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transform: translateX(-100%);
    transition: var(--main-transition);
    z-index: 5;

    button {
      background: transparent;
      border: none;
      position: absolute;
      right: 1rem;
      top: 1rem;
      font-size: 2.5rem;
      color: #eb3434;

      &:hover {
        opacity: 0.5;
        transition: var(--main-transition);
      }
    }

    .nav-links {
      display: grid;
      place-items: center;
      gap: 2rem 0;
      margin-bottom: 4rem;

      li {
        font-size: 2rem;
        letter-spacing: 0.3rem;
        font-family: var(--font-secondary);
        font-weight: 400;
      }
      li > * {
        color: var(--clr-lightgrey);

        &:hover {
          transition: var(--main-transition);
          color: var(--clr-primary5);
        }
      }
    }

    .social-icons {
      justify-content: center;
    }
  }

  .show-sidebar {
    transform: translateX(0);
  }
`;

export default Sidebar;
