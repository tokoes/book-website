const footerAboutUs = [
  { title: "Children's", href: "#" },
  { title: "Teen and Young Adult", href: "#" },
  { title: "Self-Help", href: "#" },
  { title: "Literature & Fiction", href: "#" },
  { title: "Mystery & Thriller", href: "#" },
  { title: "Sci-fi & Fantasy", href: "#" },
  { title: "Romance", href: "#" },
  { title: "Large Print Books", href: "#" },
  { title: "Rare & Collectible Books", href: "#" },
];

const FooterAboutUs = () => {
  return (
    <ul>
      <h3>About Us</h3>
      {footerAboutUs.map((item) => {
        return <li className="words">{item.title}</li>;
      })}
    </ul>
  );
};

export default FooterAboutUs;
