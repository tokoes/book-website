const footerQuickHelp = [
  { title: "Help & Support", href: "#" },
  { title: "Shipping Costs", href: "#" },
  { title: "Billing", href: "#" },
  { title: "Return Policy", href: "#" },
  { title: "Website Suggestions", href: "#" },
];

const FooterQuickHelp = () => {
  return (
    <ul>
      <h3>Quick Help</h3>
      {footerQuickHelp.map((item) => {
        return <li>{item.title}</li>;
      })}
    </ul>
  );
};

export default FooterQuickHelp;
