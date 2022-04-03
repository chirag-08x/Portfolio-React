import { externalLinks } from "../helper/data.js";
import SocialIcons from "./socialIcons.jsx";
import styled from "styled-components";

const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <Wrapper className="footer">
      <section>
        <SocialIcons externalLinks={externalLinks} />
        <p className="footer-text">
          &copy; <span className="date">{date}</span> chirag agrawal. all rights
          reserved
        </p>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .social-icons {
    justify-content: center;
    margin: 0 auto;
    margin-bottom: 2rem;

    a {
      color: var(--clr-primary2);

      &:hover {
        color: #fff;
      }
    }
  }
`;

export default Footer;
