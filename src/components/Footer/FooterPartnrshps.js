const footerPartnrshps = [
  { title: "Library Program", href: "#" },
  { title: "Wholesale", href: "#" },
];

const FooterPartnrshps = () => {
  return (
    <ul>
      <h3>Partnerships</h3>
      {footerPartnrshps.map((item) => {
        return <li>{item.title}</li>;
      })}
    </ul>
  );
};

export default FooterPartnrshps;
