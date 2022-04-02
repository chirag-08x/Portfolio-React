const SocialIcons = ({ externalLinks, classname }) => {
  return (
    <article className={classname}>
      {externalLinks.map((social) => {
        const { id, icon, navigate } = social;
        return (
          <a key={id} href={navigate} target="_blank">
            {icon}
          </a>
        );
      })}
    </article>
  );
};

export default SocialIcons;