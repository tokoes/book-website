const footerPopular = [
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

const FooterPopular = () => {
  return (
    <ul>
      <h3>Popular Categories</h3>

      {footerPopular.map((item) => {
        return <li>{item.title}</li>;
      })}
    </ul>
  );
};

export default FooterPopular;
