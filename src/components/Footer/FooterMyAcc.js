const footerMyAcc = [
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

const FooterMyAcc = () => {
  return (
    <ul>
      <h3>My Account</h3>
      {footerMyAcc.map((item) => {
        return <li>{item.title}</li>;
      })}
    </ul>
  );
};

export default FooterMyAcc;
