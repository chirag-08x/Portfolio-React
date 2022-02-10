import { externalLinks } from "../data.js";
import SocialIcons from "./socialIcons.jsx";

const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <section className="footer">
      <section className="section-footer footer-section">
        <SocialIcons classname="footer-icons" externalLinks={externalLinks} />
        <p className="footer-text">
          &copy; <span className="date">{date}</span> chirag agrawal. all rights
          reserved
        </p>
      </section>
    </section>
  );
};

export default Footer;
