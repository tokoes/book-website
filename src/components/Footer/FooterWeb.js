const footerWeb = [
  { title: "ShareBookLove", href: "#" },
  { title: "Educator Benefits", href: "#" },
  { title: "Librarian Benefits", href: "#" },
  { title: "e-Gift Cards", href: "#" },
  { title: "Blog", href: "#" },
  { title: "View Mobile Site", href: "#" },
];

const FooterWeb = () => {
  return (
    <ul>
      <h3>Website</h3>
      {footerWeb.map((item) => {
        return <li>{item.title}</li>;
      })}
    </ul>
  );
};

export default FooterWeb;
