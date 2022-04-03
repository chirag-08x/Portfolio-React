import { Link } from "react-router-dom";
import data from "../helper/data.js";
import styled from "styled-components";
import { useEffect, useRef } from "react";

const Navbar = () => {
  const heightContainer = useRef(null);

  const styles = {
    position: "fixed",
    top: 0,
    left: 0,
    backgroundColor: "white",
    zIndex: 10,
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const navHeight = heightContainer.current.getBoundingClientRect().height;
      const offset = window.pageYOffset;
      if (offset > navHeight) {
        heightContainer.current.style = styles;
      }
    });
  }, []);

  return (
    <Wrapper className="navbar" ref={heightContainer}>
      <section className="section-center">
        <article className="nav-header">
          <img src="./images/logo.svg" alt="CHIRAG" />
        </article>

        <article className="nav-info">
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
        </article>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  display: none;

  @media (min-width: 768px) {
    display: block;
    background-color: var(--clr-primary6);

    .section-center {
      display: grid;
      grid-template-columns: auto 1fr;
      place-items: center;

      .nav-header {
        width: 10rem;
        img {
          width: 100%;
        }
      }

      .nav-info {
        justify-self: end;
        .nav-links {
          display: flex;
          gap: 0 3rem;

          li {
            letter-spacing: 0.2rem;
          }

          li > * {
            font-family: var(--font-secondary) !important;
            font-weight: 600;
            color: var(--clr-darkgrey);

            &:hover {
              color: var(--clr-primary5);
              transition: var(--main-transition);
            }
          }
        }
      }
    }
  }
`;

export default Navbar;
