import React from "react";

const SocialIcons = ({ externalLinks }) => {
  return (
    <article className="social-icons">
      {externalLinks.map((social) => {
        const { id, icon, navigate } = social;
        return (
          <a key={id} href={navigate} target="_blank" rel="noopener noreferrer">
            {icon}
          </a>
        );
      })}
    </article>
  );
};

export default SocialIcons;
